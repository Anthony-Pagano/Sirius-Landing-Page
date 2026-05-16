import React from "react";

/**
 * AppEyebrow — matches app Eyebrow.tsx exactly.
 * fontSize 10.5, letterSpacing 2, fontWeight 600, uppercase.
 */
export function AppEyebrow({
  children,
  accent = "warm",
}: {
  children: React.ReactNode;
  accent?: "warm" | "cyan" | "dim";
}) {
  const color =
    accent === "warm"
      ? "var(--color-accent)"
      : accent === "cyan"
      ? "var(--color-state-listening)"
      : "var(--color-ink-3)";

  return (
    <span
      style={{
        fontSize: 10.5,
        fontFamily: "var(--font-sans)",
        letterSpacing: "0.16em",
        fontWeight: 500,
        color,
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}
