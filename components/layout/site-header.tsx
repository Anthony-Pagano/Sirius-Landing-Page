"use client";

import Link from "next/link";
import { useState } from "react";

import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)] backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display flex items-center gap-3 text-xs font-medium uppercase tracking-[0.32em] text-[var(--color-text-primary)] outline-none transition focus-visible:text-[var(--color-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
          onClick={() => setOpen(false)}
        >
          <span className="grid h-7 w-7 place-items-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface-raised)]">
            <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
          </span>
          Sirius
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-6 text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] lg:flex xl:gap-7">
            {landingContent.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="outline-none transition hover:text-[var(--color-text-primary)] focus-visible:text-[var(--color-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="hidden h-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-secondary)] px-5 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-primary)] outline-none transition hover:border-[rgba(var(--color-accent-rgb),0.4)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] sm:inline-flex"
          >
            Request access
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-secondary)] px-4 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-primary)] outline-none transition hover:bg-[var(--color-secondary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] lg:hidden"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </Container>
      {open && (
        <div id="mobile-navigation" className="border-t border-[var(--color-border)] bg-[var(--color-bg-primary)] lg:hidden">
          <Container className="grid gap-2 py-4">
            {landingContent.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center justify-between rounded-xl border border-transparent px-3 text-sm uppercase tracking-[0.18em] text-[var(--color-text-secondary)] outline-none transition hover:border-[var(--color-border)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-text-primary)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
              >
                {item.label}
                <span className="font-mono text-xs text-[var(--color-text-faint)]">open</span>
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center rounded-full bg-[var(--color-primary)] px-5 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-text-inverse)] outline-none transition hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]"
            >
              Request access
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}
