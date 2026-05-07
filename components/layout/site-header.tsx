import Link from "next/link";

import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/6 bg-[rgba(2,8,22,0.5)] backdrop-blur-xl">
      <Container className="flex items-center justify-between py-5">
        <Link
          href="/"
          className="flex items-center gap-4 text-xs uppercase tracking-[0.45em] text-white/82 outline-none transition focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
          Sirius
        </Link>
        <div className="flex items-center gap-5">
          <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.28em] text-white/56 md:flex">
            {landingContent.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="outline-none transition hover:text-white/88 focus-visible:text-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#cta"
            className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-white/5 px-4 text-[11px] uppercase tracking-[0.22em] text-white outline-none transition hover:border-[var(--color-accent)] hover:bg-white/9 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)] sm:px-5"
          >
            Request access
          </a>
        </div>
      </Container>
    </header>
  );
}
