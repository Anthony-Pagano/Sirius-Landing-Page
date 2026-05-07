import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";

export function ItNoticesSection() {
  const { sectionLabel, body, noticedQuote } = landingContent.itNotices;

  return (
    <section id="it-notices" className="relative scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <figure className="relative order-2 max-w-[560px] md:order-1">
            <span
              aria-hidden="true"
              className="absolute -left-2 top-[-0.4em] select-none font-display-italic leading-none md:-left-6"
              style={{
                fontSize: "clamp(5rem, 10vw, 9rem)",
                color: "rgba(var(--color-warm-rgb), 0.32)",
              }}
            >
              &ldquo;
            </span>
            <blockquote
              className="font-display-italic text-balance text-[var(--color-text-primary)]"
              style={{
                fontSize: "clamp(1.5rem, 2.6vw, 2.1rem)",
                lineHeight: "1.22",
                letterSpacing: "-0.012em",
              }}
            >
              {noticedQuote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              <span aria-hidden="true" className="inline-block h-px w-8 bg-[var(--color-border-strong)]" />
              <span>Sirius &mdash; an unprompted note</span>
            </figcaption>
          </figure>

          <div className="order-1 ml-auto flex max-w-[52ch] flex-col items-end text-right md:order-2">
            <p className="inline-flex items-center gap-3 text-[11px] font-medium uppercase leading-none tracking-[0.18em] text-[var(--color-text-muted)]">
              <span>{sectionLabel}</span>
              <span aria-hidden="true" className="inline-block h-px w-6 bg-[var(--color-border-strong)]" />
              <span style={{ color: "var(--color-warm)" }}>05</span>
            </p>

            <h2 className="font-display mt-7 max-w-[24ch] text-[clamp(2.2rem,4.8vw,3.6rem)] leading-[0.92] tracking-[-0.028em] font-normal text-[var(--color-text-primary)]">
              Proactive, in a way{" "}
              <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
                that doesn&rsquo;t talk over you.
              </em>
            </h2>

            <p className="mt-7 text-[16.5px] leading-[1.75] text-[var(--color-text-secondary)]">
              {body[0]}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
