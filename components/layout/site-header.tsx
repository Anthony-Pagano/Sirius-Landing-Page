"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[rgba(5,7,11,0.78)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-white/86 outline-none transition focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.035]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
          </span>
          Sirius
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-white/56 lg:flex xl:gap-7">
            {landingContent.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="outline-none transition hover:text-white/90 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden h-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.045] px-5 text-[11px] font-medium uppercase tracking-[0.18em] text-white outline-none transition hover:border-[var(--color-accent)]/40 hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] sm:inline-flex"
          >
            Request access
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/[0.04] px-4 text-[11px] uppercase tracking-[0.18em] text-white outline-none transition hover:bg-white/[0.08] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>
      {open && (
        <div id="mobile-navigation" className="border-t border-[var(--color-border)] bg-[rgba(5,7,11,0.94)] lg:hidden">
          <Container className="grid gap-2 py-4">
            {landingContent.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-xl border border-transparent px-3 text-sm uppercase tracking-[0.18em] text-white/72 outline-none transition hover:border-[var(--color-border)] hover:bg-white/[0.04] hover:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
              >
                {item.label}
                <span className="font-mono text-xs text-[var(--color-text-faint)]">open</span>
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[var(--color-button)] px-5 text-sm font-medium uppercase tracking-[0.18em] text-[#06080d] outline-none transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              Request access
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
