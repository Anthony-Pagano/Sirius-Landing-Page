import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function WorkflowsSection() {
  const { sectionLabel, intro, coda, notes } = landingContent.workflows;

  return (
    <section id="workflows" className="relative scroll-mt-24 py-24 md:py-36">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-20 md:items-start">
          {/* Left: framing */}
          <div className="md:pt-2">
            <SectionLabel index="02" tone="warm">{sectionLabel}</SectionLabel>

            <h2 className="font-display text-balance mt-7 max-w-[18ch] text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[0.92] tracking-[-0.028em] text-[var(--color-text-primary)] font-normal">
              The work you already do,{" "}
              <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
                saved for next time.
              </em>
            </h2>

            <p className="mt-8 max-w-[50ch] text-[16px] leading-[1.72] text-[var(--color-text-secondary)]">
              {intro}
            </p>

            <p className="mt-5 max-w-[50ch] text-[16px] leading-[1.72] text-[var(--color-text-secondary)]">
              {coda}
            </p>
          </div>

          {/* Right: Sirius's captured moments — two stacked notes */}
          <div className="relative flex flex-col gap-20 md:pt-14">
            <figure className="relative border-l-2 border-[rgba(var(--color-warm-rgb),0.55)] pl-6 md:pl-8">
              <blockquote className="max-w-[30ch] font-display-italic text-[clamp(1.45rem,2.5vw,1.95rem)] leading-[1.4] text-[var(--color-text-primary)]">
                &ldquo;{notes[0]}&rdquo;
              </blockquote>
            </figure>

            <figure className="relative border-l-2 border-[rgba(var(--color-warm-rgb),0.55)] pl-6 md:pl-8">
              <blockquote className="max-w-[30ch] font-display-italic text-[clamp(1.45rem,2.5vw,1.95rem)] leading-[1.4] text-[var(--color-text-primary)]">
                &ldquo;{notes[1]}&rdquo;
              </blockquote>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  );
}
