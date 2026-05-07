import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
};

export function SectionLabel({ children }: SectionLabelProps) {
  return <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-accent)]">{children}</p>;
}
