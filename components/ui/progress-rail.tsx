"use client";

import { useEffect, useState } from "react";

export function ProgressRail() {
  const [thumb, setThumb] = useState({ height: 0, top: 0 });

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

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed right-6 top-1/2 z-40 hidden h-[40vh] w-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-[var(--color-border-strong)] lg:block"
    >
      <div
        className="absolute left-0 right-0 rounded-full bg-[var(--color-accent)]"
        style={{
          height: `${thumb.height}%`,
          top: `${thumb.top}%`,
        }}
      />
    </div>
  );
}
