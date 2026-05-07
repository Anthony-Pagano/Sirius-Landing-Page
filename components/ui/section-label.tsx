import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  number?: string;
};

export function SectionLabel({ children, number }: SectionLabelProps) {
  return (
    <p className="font-display inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
      {number && <span className="font-mono text-[var(--color-accent)]">{number}</span>}
      {number && <span className="h-px w-7 bg-[var(--color-border-strong)]" />}
      <span>{children}</span>
    </p>
  );
}
