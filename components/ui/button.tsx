import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "quiet";
};

const base =
  "group inline-flex items-center justify-center rounded-full text-sm font-medium tracking-tight transition duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]";

const variantClasses = {
  primary:
    "h-16 min-w-48 px-9 bg-[var(--color-primary)] !text-[var(--color-text-inverse)] shadow-[0_0_42px_rgba(var(--color-accent-rgb),0.18),inset_0_0_0_1px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]",
  secondary:
    "h-14 min-w-44 px-7 border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:-translate-y-0.5 hover:border-[rgba(var(--color-accent-rgb),0.38)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-text-primary)]",
  quiet:
    "inline-flex items-center gap-2 px-0 h-auto text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] underline-offset-4 hover:underline decoration-[var(--color-text-faint)]",
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
