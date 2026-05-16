import React from "react";

const EYEBROW_COLORS: Record<"warm" | "cyan" | "dim", string> = {
  warm: "var(--color-accent)",
  cyan: "var(--color-state-listening)",
  dim: "var(--color-ink-3)",
};

export function AppEyebrow({
  children,
  accent = "warm",
}: {
  children: React.ReactNode;
  accent?: "warm" | "cyan" | "dim";
}) {
  return (
    <span
      className="text-[10.5px] font-semibold uppercase"
      style={{
        letterSpacing: "0.16em",
        color: EYEBROW_COLORS[accent],
      }}
    >
      {children}
    </span>
  );
}
