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
        "inline-flex h-14 min-w-44 items-center justify-center rounded-full px-7 text-sm font-medium uppercase tracking-[0.18em] transition duration-300 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]",
        variant === "primary"
          ? "bg-[var(--color-button)] text-[#06080d] shadow-[0_14px_36px_rgba(239,231,210,0.12)] hover:-translate-y-0.5 hover:bg-white"
          : "border border-[var(--color-border-strong)] bg-white/[0.025] text-[var(--color-text)] hover:-translate-y-0.5 hover:border-[var(--color-accent)]/45 hover:bg-white/[0.06]",
      )}
    >
      {children}
    </Link>
  );
}
