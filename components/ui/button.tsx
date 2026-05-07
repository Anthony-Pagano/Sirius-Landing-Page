import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ children, href, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex h-14 min-w-44 items-center justify-center rounded-full px-7 text-sm font-medium uppercase tracking-[0.18em] transition duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        variant === "primary"
          ? "bg-[var(--color-primary)] !text-[var(--color-text-inverse)] shadow-[var(--shadow-primary)] hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)]"
          : "border border-[var(--color-border)] bg-transparent text-[var(--color-text-secondary)] hover:-translate-y-0.5 hover:border-[rgba(var(--color-accent-rgb),0.38)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-text-primary)]",
      )}
    >
      {children}
    </Link>
  );
}
