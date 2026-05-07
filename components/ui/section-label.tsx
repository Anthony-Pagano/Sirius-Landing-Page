import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  tone?: "cyan" | "warm";
  index?: string;
};

export function SectionLabel({ children, tone = "cyan", index }: SectionLabelProps) {
  const accent = tone === "warm" ? "var(--color-warm)" : "var(--color-accent-strong)";

  return (
    <p className="inline-flex items-center gap-3 text-[11.5px] font-medium uppercase leading-none tracking-[0.18em] text-[var(--color-text-muted)]">
      {index && (
        <span style={{ color: accent }}>{index}</span>
      )}
      <span
        aria-hidden="true"
        className="inline-block h-px w-6"
        style={{ background: "var(--color-border-strong)" }}
      />
      <span>{children}</span>
    </p>
  );
}
