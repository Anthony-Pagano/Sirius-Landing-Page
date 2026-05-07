"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useOrbAudio } from "./orb-audio-context";

const STORAGE_KEY = "sirius:orb-mic:dismissed";

export function MicPermissionModal() {
  const { state, requestPermission, dismiss } = useOrbAudio();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const openedRef = useRef(false);

  useEffect(() => {
    // Portal target needs document; flip mounted only after hydration.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Auto-open once per session: schedule on mount, cancel if not applicable.
  useEffect(() => {
    // Never show for states that bypass the modal.
    if (state !== "idle") return;
    // Already opened this mount cycle.
    if (openedRef.current) return;
    // Already dismissed this session.
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    openedRef.current = true;
    const t = window.setTimeout(() => setOpen(true), 350);
    return () => window.clearTimeout(t);
  // Intentionally run once on mount; state check acts as early-exit guard.
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Record granted state in session storage so we don't re-prompt on reload.
  useEffect(() => {
    if (state === "granted") {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }
  }, [state]);

  const close = useCallback((rememberDismissal = true) => {
    setOpen(false);
    if (rememberDismissal) {
      try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
    }
  }, []);

  const shouldShow = open && (state === "idle" || state === "requesting");

  // As soon as the modal becomes visible, fire the browser permission prompt.
  // The modal stays as the explanatory backdrop while the native dialog is up.
  const requestedRef = useRef(false);
  useEffect(() => {
    if (!shouldShow) return;
    if (requestedRef.current) return;
    if (state !== "idle") return;
    requestedRef.current = true;
    void requestPermission();
  }, [shouldShow, state, requestPermission]);

  useEffect(() => {
    if (!shouldShow) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
        close();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [shouldShow, dismiss, close]);

  if (!shouldShow || !mounted) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="mic-modal-title"
      className="fixed inset-0 z-[100] grid place-items-center px-6"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[var(--color-bg-deep)]/72 backdrop-blur-md"
        onClick={() => { close(); dismiss(); }}
      />
      <div className="relative z-10 w-full max-w-md rounded-2xl border border-[var(--color-border-strong)] bg-[var(--color-bg-secondary)] p-7 shadow-[var(--shadow-panel)]">
        <p className="font-display-italic text-[12px] text-[var(--color-text-faint)]">A small request</p>
        <h2
          id="mic-modal-title"
          className="font-display mt-3 text-2xl leading-tight text-[var(--color-text-primary)]"
        >
          May the orb listen?
        </h2>
        <p className="mt-4 text-[15px] leading-7 text-[var(--color-text-secondary)]">
          The orb above is the page&apos;s one interactive flourish. With your permission, it will react to your voice — its size to volume, its hue to pitch — entirely in your browser. No audio leaves the page; nothing is recorded.
        </p>
        <p className="mt-3 text-[13px] leading-6 text-[var(--color-text-faint)]">
          You can decline; the orb will simply carry on without you.
        </p>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            autoFocus
            onClick={() => { dismiss(); close(); }}
            className="text-sm text-[var(--color-text-secondary)] underline-offset-4 hover:text-[var(--color-text-primary)] hover:underline"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
