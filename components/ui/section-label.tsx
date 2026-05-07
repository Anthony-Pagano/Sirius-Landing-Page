import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  number?: string;
};

export function SectionLabel({ children, number }: SectionLabelProps) {
  return (
    <p className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.32em] text-[var(--color-text-faint)]">
      {number && <span className="text-[var(--color-accent)]">{number}</span>}
      {number && <span className="h-px w-6 bg-white/18" />}
      <span>{children}</span>
    </p>
  );
}
