"use client";

import { useEffect, useRef, useState } from "react";

export function ProgressRail() {
  const [thumb, setThumb] = useState({ height: 0, top: 0 });
  const railRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;

      if (docHeight <= viewHeight) {
        setThumb({ height: 100, top: 0 });
        return;
      }

      const heightPct = Math.max(8, (viewHeight / docHeight) * 100);
      const maxScroll = docHeight - viewHeight;
      const scrollPct = scrollTop / maxScroll;
      const topPct = scrollPct * (100 - heightPct);

      setThumb({ height: heightPct, top: topPct });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rail = railRef.current;
    if (!rail) return;

    const rect = rail.getBoundingClientRect();
    const docHeight = document.documentElement.scrollHeight;
    const viewHeight = window.innerHeight;
    const maxScroll = docHeight - viewHeight;
    if (maxScroll <= 0) return;

    const railHeight = rect.height;
    const heightPct = Math.max(8, (viewHeight / docHeight) * 100);
    const thumbHeightPx = (heightPct / 100) * railHeight;
    const trackRange = railHeight - thumbHeightPx;
    if (trackRange <= 0) return;

    // Center the thumb on the click point.
    const desiredThumbTop = e.clientY - rect.top - thumbHeightPx / 2;
    const pct = Math.max(0, Math.min(1, desiredThumbTop / trackRange));
    window.scrollTo({ top: pct * maxScroll, behavior: "smooth" });
  };

  return (
    <div
      ref={railRef}
      role="scrollbar"
      aria-orientation="vertical"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(thumb.top + thumb.height / 2)}
      className="fixed right-2 top-1/2 z-40 hidden h-[40vh] w-4 -translate-y-1/2 cursor-pointer items-center justify-center lg:flex"
      onClick={handleClick}
    >
      <div className="relative h-full w-[2px] overflow-hidden rounded-full bg-[var(--color-border-strong)]">
        <div
          className="absolute left-0 right-0 rounded-full bg-[var(--color-accent)]"
          style={{
            height: `${thumb.height}%`,
            top: `${thumb.top}%`,
          }}
        />
      </div>
    </div>
  );
}
