"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

type SiriusOrbOptions = {
  freq: number;
  threshold: number;
  contrast: number;
  shellPower: number;
  wispGain: number;
  rimGain: number;
  yawSpeed: number;
  flowSpeed: number;
  breatheAmp: number;
  mouseEnabled: boolean;
  mouseTarget: HTMLElement | null;
  seed: number;
};

export function Orb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const orb = new SiriusOrbRenderer(canvas, {
      mouseEnabled: !shouldReduceMotion,
      flowSpeed: shouldReduceMotion ? 0 : 1,
      yawSpeed: shouldReduceMotion ? 0 : 0.13,
      breatheAmp: shouldReduceMotion ? 0 : 0.012,
    });

    if (shouldReduceMotion) {
      orb.stop();
      orb.renderStatic();
    }

    return () => orb.destroy();
  }, [shouldReduceMotion]);

  return (
    <div
      className="relative h-[clamp(280px,70vw,360px)] w-[clamp(280px,70vw,360px)] drop-shadow-[0_0_36px_rgba(60,170,255,0.16)]"
      aria-hidden="true"
    >
      <div className="pointer-events-none absolute inset-[-28%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(60,170,255,0.1)_0%,rgba(60,170,255,0.04)_30%,rgba(60,170,255,0)_62%)] blur-[8px]" />
      <canvas ref={canvasRef} width={320} height={320} className="absolute inset-0 z-10 block h-full w-full blur-[0.45px]" />
    </div>
  );
}

class SiriusOrbRenderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  private opts: SiriusOrbOptions;
  private perm = new Uint8Array(512);
  private img: ImageData;
  private w: number;
  private h: number;
  private cx: number;
  private cy: number;
  private radius: number;
  private running = false;
  private raf: number | null = null;
  private mouseTarget: HTMLElement | null = null;
  private onMouseMove: ((event: MouseEvent) => void) | null = null;
  private onMouseLeave: (() => void) | null = null;
  private mouseInside = false;
  private mouseLocalX = 0;
  private mouseLocalY = 0;
  private mouseLocalSmoothX = 0;
  private mouseLocalSmoothY = 0;
  private mouseVelX = 0;
  private mouseVelY = 0;
  private mouseLastX = 0;
  private mouseLastY = 0;

  constructor(canvas: HTMLCanvasElement, options: Partial<SiriusOrbOptions> = {}) {
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("SiriusOrb: canvas 2D context is unavailable");
    }

    this.canvas = canvas;
    this.ctx = ctx;
    this.opts = {
      freq: 1.6,
      threshold: 0.62,
      contrast: 2.2,
      shellPower: 2.6,
      wispGain: 0.78,
      rimGain: 1.1,
      yawSpeed: 0.13,
      flowSpeed: 1,
      breatheAmp: 0.012,
      mouseEnabled: true,
      mouseTarget: null,
      seed: 1337,
      ...options,
    };

    this.initPerlin();
    this.w = canvas.width;
    this.h = canvas.height;
    this.cx = this.w / 2;
    this.cy = this.h / 2;
    this.radius = Math.min(this.w, this.h) * 0.4;
    this.img = this.ctx.createImageData(this.w, this.h);
    this.initMouse();
    this.start();
  }

  start() {
    if (this.running) {
      return;
    }

    this.running = true;
    const tick = (time: number) => {
      if (!this.running) {
        return;
      }

      this.frame(time);
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  stop() {
    this.running = false;
    if (this.raf) {
      cancelAnimationFrame(this.raf);
    }
    this.raf = null;
  }

  destroy() {
    this.stop();
    this.removeMouse();
  }

  renderStatic() {
    this.frame(0);
  }

  private initPerlin() {
    const p: number[] = [];
    for (let index = 0; index < 256; index += 1) {
      p.push(index);
    }

    let seed = this.opts.seed;
    const rng = () => {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      return seed / 0x7fffffff;
    };

    for (let index = 255; index > 0; index -= 1) {
      const swapIndex = Math.floor(rng() * (index + 1));
      [p[index], p[swapIndex]] = [p[swapIndex], p[index]];
    }

    for (let index = 0; index < 512; index += 1) {
      this.perm[index] = p[index & 255];
    }
  }

  private initMouse() {
    if (!this.opts.mouseEnabled) {
      return;
    }

    const target = this.opts.mouseTarget || this.canvas;
    this.mouseTarget = target;
    this.onMouseMove = (event: MouseEvent) => {
      const rect = target.getBoundingClientRect();
      const localX = (event.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const localY = (event.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      const localRadius = Math.sqrt(localX * localX + localY * localY);

      if (localRadius < 0.95) {
        this.mouseInside = true;
        this.mouseVelX = localX - this.mouseLastX;
        this.mouseVelY = localY - this.mouseLastY;
        this.mouseLastX = localX;
        this.mouseLastY = localY;
        this.mouseLocalX = localX;
        this.mouseLocalY = localY;
      } else {
        this.mouseInside = false;
        this.mouseLocalX = 0;
        this.mouseLocalY = 0;
      }
    };
    this.onMouseLeave = () => {
      this.mouseInside = false;
      this.mouseLocalX = 0;
      this.mouseLocalY = 0;
    };

    target.addEventListener("mousemove", this.onMouseMove);
    target.addEventListener("mouseleave", this.onMouseLeave);
  }

  private removeMouse() {
    if (this.mouseTarget && this.onMouseMove && this.onMouseLeave) {
      this.mouseTarget.removeEventListener("mousemove", this.onMouseMove);
      this.mouseTarget.removeEventListener("mouseleave", this.onMouseLeave);
    }

    this.mouseTarget = null;
    this.onMouseMove = null;
    this.onMouseLeave = null;
  }

  private frame(time: number) {
    const opts = this.opts;
    const tt = (time / 1000) * opts.flowSpeed;

    this.mouseLocalSmoothX += (this.mouseLocalX - this.mouseLocalSmoothX) * 0.1;
    this.mouseLocalSmoothY += (this.mouseLocalY - this.mouseLocalSmoothY) * 0.1;
    this.mouseVelX *= 0.9;
    this.mouseVelY *= 0.9;

    const yaw = tt * opts.yawSpeed + this.mouseLocalSmoothX * 0.4;
    const pitch = this.mouseLocalSmoothY * 0.28 + Math.sin(tt * 0.07) * 0.04;
    const cosYaw = Math.cos(yaw);
    const sinYaw = Math.sin(yaw);
    const cosPitch = Math.cos(pitch);
    const sinPitch = Math.sin(pitch);

    const tx = tt * 0.05;
    const ty = tt * 0.04;
    const tz = tt * 0.07;
    const wt = tt * 0.045;
    const breathe = 1 + Math.sin(tt * 0.55) * opts.breatheAmp;
    const stirX = -this.mouseLocalSmoothX * 0.55 + this.mouseVelX * 1.6;
    const stirY = -this.mouseLocalSmoothY * 0.55 + this.mouseVelY * 1.6;
    const data = this.img.data;

    let dataIndex = 0;
    for (let py = 0; py < this.h; py += 1) {
      const v = (py - this.cy) / this.radius;
      for (let px = 0; px < this.w; px += 1, dataIndex += 4) {
        const u = (px - this.cx) / this.radius;
        const r2 = u * u + v * v;

        if (r2 > 1.06 * 1.06) {
          data[dataIndex] = 0;
          data[dataIndex + 1] = 0;
          data[dataIndex + 2] = 0;
          data[dataIndex + 3] = 0;
          continue;
        }

        const r = Math.sqrt(r2);
        const sz = Math.sqrt(Math.max(0, 1 - Math.min(1, r2)));
        const x3 = u * cosYaw + sz * sinYaw;
        let y3 = v;
        let z3 = -u * sinYaw + sz * cosYaw;
        const y3p = y3 * cosPitch - z3 * sinPitch;
        const z3p = y3 * sinPitch + z3 * cosPitch;
        y3 = y3p;
        z3 = z3p;

        const warpScale = 0.5;
        const warpAmp = 0.55;
        const wx = this.pnoise(x3 * warpScale, y3 * warpScale, z3 * warpScale + wt) * warpAmp + stirX;
        const wy =
          this.pnoise(x3 * warpScale + 11.3, y3 * warpScale + 11.3, z3 * warpScale + wt + 5.1) * warpAmp +
          stirY;

        const ridge = this.ridgedFBM((x3 + wx) * opts.freq + tx, (y3 + wy) * opts.freq + ty, z3 * opts.freq + tz);
        const wisp = Math.pow(Math.max(0, ridge - opts.threshold) * 3, opts.contrast);
        const shell = Math.pow(r, opts.shellPower);
        const edge = Math.max(0, (r - 0.84) / 0.16);
        const rim = Math.pow(edge, 1.55) * opts.rimGain;

        let aa = 1;
        if (r > 0.92) {
          let s = (1.06 - r) / (1.06 - 0.92);
          if (s < 0) {
            s = 0;
          } else if (s > 1) {
            s = 1;
          }
          aa = s * s * (3 - 2 * s);
        }

        const plasma = wisp * shell;
        const intensity = (plasma * opts.wispGain + rim) * breathe;
        const k = Math.min(1.2, intensity);
        let red: number;
        let green: number;
        let blue: number;

        if (k < 0.5) {
          const t = k / 0.5;
          red = 4 + t * 30;
          green = 12 + t * 120;
          blue = 32 + t * 200;
        } else if (k < 0.95) {
          const t = (k - 0.5) / 0.45;
          red = 34 + t * 90;
          green = 132 + t * 80;
          blue = 232 + t * 18;
        } else {
          const t = Math.min(1, (k - 0.95) / 0.3);
          red = 124 + t * 60;
          green = 212 + t * 30;
          blue = 250 + t * 5;
        }

        const alpha = aa * Math.min(1, intensity * 1.05);
        data[dataIndex] = Math.min(255, red) | 0;
        data[dataIndex + 1] = Math.min(255, green) | 0;
        data[dataIndex + 2] = Math.min(255, blue) | 0;
        data[dataIndex + 3] = (alpha * 255) | 0;
      }
    }

    this.ctx.putImageData(this.img, 0, 0);
  }

  private ridgedFBM(x: number, y: number, z: number) {
    let value = 0;
    let amp = 1;
    let freq = 1;
    let total = 0;

    for (let octave = 0; octave < 2; octave += 1) {
      value += (1 - Math.abs(this.pnoise(x * freq, y * freq, z * freq))) * amp;
      total += amp;
      amp *= 0.45;
      freq *= 2;
    }

    return value / total;
  }

  private pnoise(x: number, y: number, z: number) {
    const perm = this.perm;
    const X = Math.floor(x) & 255;
    const Y = Math.floor(y) & 255;
    const Z = Math.floor(z) & 255;
    x -= Math.floor(x);
    y -= Math.floor(y);
    z -= Math.floor(z);
    const u = fade(x);
    const v = fade(y);
    const w = fade(z);
    const A = perm[X] + Y;
    const AA = perm[A] + Z;
    const AB = perm[A + 1] + Z;
    const B = perm[X + 1] + Y;
    const BA = perm[B] + Z;
    const BB = perm[B + 1] + Z;

    return lerp(
      lerp(
        lerp(grad(perm[AA], x, y, z), grad(perm[BA], x - 1, y, z), u),
        lerp(grad(perm[AB], x, y - 1, z), grad(perm[BB], x - 1, y - 1, z), u),
        v,
      ),
      lerp(
        lerp(grad(perm[AA + 1], x, y, z - 1), grad(perm[BA + 1], x - 1, y, z - 1), u),
        lerp(grad(perm[AB + 1], x, y - 1, z - 1), grad(perm[BB + 1], x - 1, y - 1, z - 1), u),
        v,
      ),
      w,
    );
  }
}

function fade(t: number) {
  return t * t * t * (t * (t * 6 - 15) + 10);
}

function lerp(a: number, b: number, t: number) {
  return a + t * (b - a);
}

function grad(hash: number, x: number, y: number, z: number) {
  const h = hash & 15;
  const u = h < 8 ? x : y;
  const v = h < 4 ? y : h === 12 || h === 14 ? x : z;
  return (h & 1 ? -u : u) + (h & 2 ? -v : v);
}
