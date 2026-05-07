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
        "inline-flex h-14 items-center justify-center rounded-full px-7 text-sm uppercase tracking-[0.22em] transition outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        variant === "primary"
          ? "bg-[var(--color-accent)] text-slate-950 shadow-[0_0_34px_rgba(103,215,255,0.26)] hover:brightness-110"
          : "border border-[var(--color-border-strong)] bg-white/4 text-white hover:border-[var(--color-accent)] hover:bg-white/8",
      )}
    >
      {children}
    </Link>
  );
}
