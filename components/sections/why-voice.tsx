import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function WhyVoiceSection() {
  return (
    <section id="why-voice" className="scroll-mt-24 border-y border-[var(--color-border)] bg-[rgba(8,11,17,0.46)] py-16 md:py-24 lg:py-28">
      <Container className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr]">
        <div>
          <SectionLabel number="05">Why voice</SectionLabel>
          <h2 className="font-display mt-6 text-3xl leading-tight font-light text-white md:text-5xl">
            {landingContent.whyVoice.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{landingContent.whyVoice.lead}</p>
        </div>
        <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
          {landingContent.whyVoice.points.map((point) => (
            <article
              key={point.title}
              className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-panel)] p-6"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">{point.context}</p>
              <h3 className="font-display mt-4 text-xl font-light text-white">{point.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
