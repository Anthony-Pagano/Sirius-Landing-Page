import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function WorkflowsSection() {
  const { sectionLabel, pulledQuote } = landingContent.workflows;

  const trimmedBody0 =
    "You already have workflows. They live in your head — you re-explain them every time you do them, and reload the context from scratch each round.";

  return (
    <section id="workflows" className="relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-20 md:items-start">
          {/* Left: framing */}
          <div className="md:pt-2">
            <SectionLabel index="01" tone="cyan">{sectionLabel}</SectionLabel>

            <h2 className="font-display text-balance mt-7 max-w-[18ch] text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[0.92] tracking-[-0.028em] text-[var(--color-text-primary)] font-normal">
              The work you already do,{" "}
              <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
                made callable.
              </em>
            </h2>

            <p className="mt-8 max-w-[52ch] text-[17px] leading-[1.7] text-[var(--color-text-secondary)]">
              {trimmedBody0}
            </p>

            <p className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
              <span aria-hidden="true" className="block h-px w-6 bg-[var(--color-border-strong)]" />
              For instance
            </p>
          </div>

          {/* Right: Sirius's captured moment */}
          <div className="relative md:pt-14">
            <div className="relative border-l-2 border-[rgba(var(--color-warm-rgb),0.55)] pl-6 md:pl-8">
              <div className="flex items-center gap-2.5">
                <span className="relative inline-flex h-1.5 w-1.5 shrink-0">
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 animate-ping rounded-full opacity-60"
                    style={{ background: "var(--color-accent)" }}
                  />
                  <span
                    className="relative inline-flex h-full w-full rounded-full"
                    style={{
                      background: "var(--color-accent)",
                      boxShadow: "0 0 10px rgba(var(--color-accent-rgb), 0.65)",
                    }}
                  />
                </span>
                <p className="font-mono text-[10.5px] uppercase tracking-[0.24em] text-[var(--color-text-faint)]">
                  Sirius
                  <span className="mx-2 opacity-50">·</span>
                  Noticed a pattern
                  <span className="mx-2 opacity-50">·</span>
                  2m ago
                </p>
              </div>

              <blockquote className="mt-6 max-w-[30ch] font-display-italic text-[clamp(1.45rem,2.5vw,1.95rem)] leading-[1.4] text-[var(--color-text-primary)]">
                &ldquo;{pulledQuote}&rdquo;
              </blockquote>

              <div className="mt-7 flex items-center gap-6">
                <button
                  type="button"
                  className="text-[11px] font-medium uppercase tracking-[0.18em] pb-0.5 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
                  style={{
                    color: "var(--color-accent-strong)",
                    borderBottom: "1px solid rgba(var(--color-accent-strong-rgb), 0.45)",
                  }}
                >
                  Yes, extract
                </button>
                <button
                  type="button"
                  className="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--color-text-muted)] transition hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--color-bg)]"
                >
                  Not now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
