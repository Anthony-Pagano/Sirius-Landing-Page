import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
};

const base =
  "group inline-flex items-center justify-center font-medium tracking-[0.01em] transition-colors duration-150 outline-none focus-visible:ring-2 focus-visible:ring-[rgba(217,185,120,0.55)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

const variantClasses = {
  primary:
    "h-12 min-w-44 px-7 rounded-[var(--radius-sm)] text-sm bg-[var(--color-accent)] text-[var(--color-bg)] hover:bg-[var(--color-accent-strong)] active:bg-[var(--color-accent-muted)]",
  secondary:
    "h-12 min-w-40 px-6 rounded-[var(--radius-sm)] text-sm border border-[var(--color-border-strong)] bg-transparent text-[var(--color-ink-1)] hover:bg-[var(--color-surface-2)] hover:border-[var(--color-accent)]",
  quiet:
    "inline-flex items-center gap-2 px-0 h-auto text-[var(--color-ink-2)] hover:text-[var(--color-ink-1)] underline-offset-4 hover:underline decoration-[var(--color-ink-3)]",
};

export function ButtonLink({ children, href, variant = "primary" }: ButtonLinkProps) {
  if (variant === "quiet") {
    return (
      <Link href={href} className={cn(base, variantClasses.quiet)}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={cn(base, variantClasses[variant])}>
      {children}
    </Link>
  );
}
