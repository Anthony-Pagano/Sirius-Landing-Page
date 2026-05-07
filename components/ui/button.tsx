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
        "inline-flex h-14 items-center justify-center rounded-full px-7 text-sm uppercase tracking-[0.22em] transition",
        variant === "primary"
          ? "bg-[var(--color-accent)] text-slate-950 hover:brightness-110"
          : "border border-[var(--color-border-strong)] bg-white/4 text-white hover:bg-white/8",
      )}
    >
      {children}
    </Link>
  );
}
