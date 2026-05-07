import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-[var(--color-border-strong)] py-12">
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 mx-auto h-px max-w-[480px] surface-line"
      />
      <Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background: "var(--color-accent)",
              boxShadow: "0 0 8px rgba(var(--color-accent-rgb), 0.5)",
            }}
          />
          <p className="font-display text-[17px] tracking-tight text-[var(--color-text-primary)]">
            Sirius
          </p>
        </div>
        <p className="font-display-italic text-[14px] text-[var(--color-text-secondary)]">
          An assistant. In the proper sense.
        </p>
        <a
          href="#cta"
          className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-muted)] underline-offset-4 transition hover:text-[var(--color-accent)] hover:underline hover:decoration-[rgba(var(--color-accent-rgb),0.4)]"
        >
          Request access &rarr;
        </a>
      </Container>
    </footer>
  );
}
