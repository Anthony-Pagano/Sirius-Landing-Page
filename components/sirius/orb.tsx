"use client";

import { motion } from "motion/react";
import { useEffect, useRef } from "react";

export function Orb() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const dpr = window.devicePixelRatio || 1;
    let size = 420;
    let radius = size * 0.355;
    let center = size / 2;

    const pointer = {
      x: 0,
      y: 0,
      tx: 0,
      ty: 0,
      force: 0,
      targetForce: 0,
    };

    let frameId = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      size = Math.max(360, Math.round(rect.width || 420));
      radius = size * 0.355;
      center = size / 2;

      canvas.width = size * dpr;
      canvas.height = size * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const dx = x - rect.width / 2;
      const dy = y - rect.height / 2;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const normalizedDistance = Math.min(distance / (rect.width * 0.5), 1);

      if (distance <= rect.width * 0.46) {
        pointer.tx = dx / (rect.width * 0.5);
        pointer.ty = dy / (rect.height * 0.5);
        pointer.targetForce = 1 - normalizedDistance * 0.5;
      } else {
        pointer.targetForce = 0;
      }
    };

    const handlePointerLeave = () => {
      pointer.targetForce = 0;
    };

    const drawRing = (time: number, width: number, alpha: number, offset: number, tint: string) => {
      context.beginPath();

      for (let step = 0; step <= 180; step += 1) {
        const angle = (step / 180) * Math.PI * 2;
        const ripple =
          Math.sin(angle * 5 + time * 1.6 + offset) * 4.2 +
          Math.cos(angle * 8 - time * 1.1 - offset * 0.6) * 2.8 +
          Math.sin(angle * 13 + time * 0.7 + offset * 1.8) * 1.5;
        const sway =
          Math.cos(angle - time * 0.4) * pointer.x * 8 +
          Math.sin(angle + time * 0.5) * pointer.y * 8;
        const currentRadius = radius + ripple + sway * pointer.force;
        const x = center + Math.cos(angle) * currentRadius;
        const y = center + Math.sin(angle) * currentRadius;

        if (step === 0) {
          context.moveTo(x, y);
        } else {
          context.lineTo(x, y);
        }
      }

      context.closePath();
      context.lineWidth = width;
      context.strokeStyle = tint;
      context.shadowBlur = 18;
      context.shadowColor = `rgba(78, 224, 255, ${alpha})`;
      context.stroke();
    };

    const render = (timestamp: number) => {
      const time = timestamp * 0.001;

      pointer.x += (pointer.tx - pointer.x) * 0.08;
      pointer.y += (pointer.ty - pointer.y) * 0.08;
      pointer.force += (pointer.targetForce - pointer.force) * 0.08;

      context.clearRect(0, 0, size, size);

      const halo = context.createRadialGradient(center, center, radius * 0.25, center, center, radius * 1.55);
      halo.addColorStop(0, "rgba(60, 170, 255, 0.16)");
      halo.addColorStop(0.36, "rgba(60, 170, 255, 0.08)");
      halo.addColorStop(1, "rgba(60, 170, 255, 0)");
      context.fillStyle = halo;
      context.beginPath();
      context.arc(center, center, radius * 1.55, 0, Math.PI * 2);
      context.fill();

      const coreShiftX = pointer.x * 10 * pointer.force;
      const coreShiftY = pointer.y * 10 * pointer.force;
      const coreGradient = context.createRadialGradient(
        center - 22 + coreShiftX,
        center - 28 + coreShiftY,
        radius * 0.14,
        center,
        center,
        radius * 0.98,
      );
      coreGradient.addColorStop(0, "rgba(42, 73, 126, 0.46)");
      coreGradient.addColorStop(0.55, "rgba(13, 24, 52, 0.82)");
      coreGradient.addColorStop(1, "rgba(3, 7, 18, 0.98)");
      context.fillStyle = coreGradient;
      context.beginPath();
      context.arc(center, center, radius * 0.95, 0, Math.PI * 2);
      context.fill();

      context.save();
      context.translate(coreShiftX * 0.75, coreShiftY * 0.75);
      context.globalCompositeOperation = "screen";
      context.shadowBlur = 24;

      const highlights = [
        { angle: 0.24, size: 20, alpha: 0.72 },
        { angle: 1.12, size: 26, alpha: 0.42 },
        { angle: 2.38, size: 22, alpha: 0.56 },
        { angle: 3.82, size: 18, alpha: 0.48 },
        { angle: 5.18, size: 24, alpha: 0.68 },
      ];

      for (const highlight of highlights) {
        const drift = Math.sin(time * 0.8 + highlight.angle * 7) * 8;
        const angle = highlight.angle + time * 0.22 + drift * 0.002;
        const x = center + Math.cos(angle) * (radius - 8);
        const y = center + Math.sin(angle) * (radius - 10);
        const glow = context.createRadialGradient(x, y, 0, x, y, highlight.size);
        glow.addColorStop(0, `rgba(235, 248, 255, ${highlight.alpha})`);
        glow.addColorStop(0.38, `rgba(118, 220, 255, ${highlight.alpha * 0.72})`);
        glow.addColorStop(1, "rgba(118, 220, 255, 0)");
        context.fillStyle = glow;
        context.shadowColor = `rgba(78, 224, 255, ${highlight.alpha * 0.6})`;
        context.beginPath();
        context.arc(x, y, highlight.size, 0, Math.PI * 2);
        context.fill();
      }

      context.restore();

      context.globalCompositeOperation = "lighter";
      drawRing(time, 7.5, 0.3, 0, "rgba(124, 222, 255, 0.22)");
      drawRing(time + 0.4, 3.8, 0.42, 2.1, "rgba(173, 235, 255, 0.55)");
      drawRing(time + 0.9, 1.4, 0.56, 4.2, "rgba(255, 255, 255, 0.74)");
      context.globalCompositeOperation = "source-over";
      context.shadowBlur = 0;

      frameId = window.requestAnimationFrame(render);
    };

    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("resize", resize);

    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative flex w-full flex-col items-center gap-8 py-4">
      <motion.div
        animate={{ y: [0, -8, 0], scale: [1, 1.012, 1] }}
        transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative h-[420px] w-[420px] drop-shadow-[0_0_36px_rgba(60,170,255,0.16)] sm:h-[460px] sm:w-[460px]"
      >
        <div className="pointer-events-none absolute inset-[-28%] rounded-full bg-[radial-gradient(circle_at_50%_50%,rgba(60,170,255,0.1)_0%,rgba(60,170,255,0.04)_30%,rgba(60,170,255,0)_62%)] blur-[8px]" />
        <canvas
          ref={canvasRef}
          aria-label="Interactive Sirius orb"
          className="absolute inset-0 z-10 block h-full w-full blur-[0.45px]"
        />
      </motion.div>
    </div>
  );
}
