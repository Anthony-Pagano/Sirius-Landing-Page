import Link from "next/link";

import { Orb } from "@/components/sirius/orb";
import { Container } from "@/components/ui/container";

// Set to false to replace the live orb with a static cyan dot.
const HEADER_ORB = true;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-bg-soft)] backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
        >
          <span className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-full">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.25) 100%)",
              }}
            />
            {HEADER_ORB ? (
              <Orb className="!h-6 !w-6 relative" glowless />
            ) : (
              <span className="relative h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            )}
          </span>
          <span className="font-mono text-[12.5px] font-medium uppercase tracking-[0.28em] text-[var(--color-text-primary)]">
            Sirius
          </span>
        </Link>

        <div className="flex items-center gap-3 sm:gap-4">
          <span className="hidden text-[10.5px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)] sm:inline">
            Private beta
          </span>
          <span aria-hidden="true" className="hidden h-px w-6 bg-[var(--color-border-strong)] sm:inline-block" />
          <a
            href="#cta"
            className="group inline-flex items-center gap-1.5 text-[13px] text-[var(--color-text-primary)] underline-offset-[6px] transition hover:underline outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
            style={{ textDecorationColor: "rgba(var(--color-accent-rgb), 0.55)" }}
          >
            <span className="transition-colors duration-200 group-hover:text-[var(--color-accent)]">
              Join waitlist
            </span>
            <span
              aria-hidden="true"
              className="text-[var(--color-text-muted)] transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent)]"
            >
              ↗
            </span>
          </a>
        </div>
      </Container>
    </header>
  );
}
