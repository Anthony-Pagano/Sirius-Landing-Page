"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "motion/react";

export type OrbAudioState =
  | "unsupported"
  | "idle"
  | "requesting"
  | "granted"
  | "denied"
  | "reduced-motion";

export type OrbAudioSignal = {
  amplitude: number; // 0..1, smoothed RMS
  centroid: number;  // 0..1, normalised spectral centroid
  active: boolean;   // true only when state === "granted"
};

type OrbAudioContextValue = {
  state: OrbAudioState;
  signalRef: React.MutableRefObject<OrbAudioSignal>;
  requestPermission: () => Promise<void>;
  dismiss: () => void; // user said "Maybe later"
  release: () => void;
};

const defaultSignal: OrbAudioSignal = { amplitude: 0, centroid: 0.5, active: false };

const OrbAudioContext = createContext<OrbAudioContextValue | null>(null);

function detectInitialState(reduce: boolean | null): OrbAudioState {
  if (typeof window === "undefined") return "idle";
  if (reduce) return "reduced-motion";
  if (
    !navigator.mediaDevices ||
    typeof navigator.mediaDevices.getUserMedia !== "function" ||
    typeof window.AudioContext === "undefined"
  ) {
    return "unsupported";
  }
  return "idle";
}

export function OrbAudioProvider({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  const [state, setState] = useState<OrbAudioState>(() => detectInitialState(reduce));
  const signalRef = useRef<OrbAudioSignal>({ ...defaultSignal });
  const audioCtxRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const sourceRef = useRef<MediaStreamAudioSourceNode | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const rafRef = useRef<number | null>(null);
  const timeBufRef = useRef<Uint8Array | null>(null);
  const freqBufRef = useRef<Uint8Array | null>(null);

  // Frame loop reads analyser and updates signalRef.
  const startLoop = useCallback(() => {
    const analyser = analyserRef.current;
    if (!analyser) return;
    const timeBuf = new Uint8Array(analyser.fftSize);
    const freqBuf = new Uint8Array(analyser.frequencyBinCount);
    timeBufRef.current = timeBuf;
    freqBufRef.current = freqBuf;

    let smoothedAmp = 0;
    let smoothedCent = 0.5;

    const tick = () => {
      analyser.getByteTimeDomainData(timeBuf);
      analyser.getByteFrequencyData(freqBuf);

      // RMS amplitude
      let sumSq = 0;
      for (let i = 0; i < timeBuf.length; i++) {
        const v = (timeBuf[i] - 128) / 128;
        sumSq += v * v;
      }
      const rms = Math.sqrt(sumSq / timeBuf.length);
      // Map quiet room ~0.005 .. loud speech ~0.25 to 0..1
      const amp = Math.min(1, Math.max(0, (rms - 0.01) / 0.24));

      // Spectral centroid
      let weighted = 0;
      let total = 0;
      for (let i = 0; i < freqBuf.length; i++) {
        const m = freqBuf[i];
        weighted += i * m;
        total += m;
      }
      const rawCentroid = total > 0 ? weighted / total / freqBuf.length : 0.5; // 0..1
      // Speech centroid usually lives 0.05..0.35 range; remap to 0..1.
      const cent = Math.min(1, Math.max(0, (rawCentroid - 0.04) / 0.3));

      // One-pole lowpass (alpha ~0.18 for amp, ~0.08 for centroid — slower)
      smoothedAmp += (amp - smoothedAmp) * 0.18;
      smoothedCent += (cent - smoothedCent) * 0.08;

      signalRef.current.amplitude = smoothedAmp;
      signalRef.current.centroid = smoothedCent;
      signalRef.current.active = true;

      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  const stopLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    signalRef.current.active = false;
    signalRef.current.amplitude = 0;
  }, []);

  const release = useCallback(() => {
    stopLoop();
    if (sourceRef.current) {
      try { sourceRef.current.disconnect(); } catch {}
      sourceRef.current = null;
    }
    if (analyserRef.current) {
      try { analyserRef.current.disconnect(); } catch {}
      analyserRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    }
    if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
      audioCtxRef.current.close().catch(() => {});
    }
    audioCtxRef.current = null;
  }, [stopLoop]);

  const requestPermission = useCallback(async () => {
    if (state === "requesting" || state === "granted") return;
    if (state === "unsupported" || state === "reduced-motion") return;
    setState("requesting");
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const Ctor: typeof AudioContext =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext!;
      const ctx = new Ctor();
      audioCtxRef.current = ctx;
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      const source = ctx.createMediaStreamSource(stream);
      sourceRef.current = source;
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 2048;
      analyser.smoothingTimeConstant = 0.8;
      source.connect(analyser);
      analyserRef.current = analyser;
      setState("granted");
      startLoop();
    } catch {
      setState("denied");
    }
  }, [state, startLoop]);

  const dismiss = useCallback(() => {
    if (state === "idle") setState("denied");
  }, [state]);

  // Stop tracks on tab hidden, restart on visible if granted.
  useEffect(() => {
    if (state !== "granted") return;
    const onVisibility = () => {
      if (document.visibilityState === "hidden") {
        stopLoop();
      } else {
        if (analyserRef.current) startLoop();
      }
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, [state, startLoop, stopLoop]);

  // Cleanup on unmount.
  useEffect(() => () => release(), [release]);

  const value = useMemo<OrbAudioContextValue>(
    () => ({ state, signalRef, requestPermission, dismiss, release }),
    [state, signalRef, requestPermission, dismiss, release],
  );

  return <OrbAudioContext.Provider value={value}>{children}</OrbAudioContext.Provider>;
}

export function useOrbAudio() {
  const ctx = useContext(OrbAudioContext);
  if (!ctx) throw new Error("useOrbAudio must be used inside OrbAudioProvider");
  return ctx;
}
