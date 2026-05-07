import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function WhyVoiceSection() {
  return (
    <section id="why-voice" className="py-20 md:py-28">
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionLabel number="05">Why voice</SectionLabel>
          <h2 className="mt-6 text-3xl leading-tight font-light text-white md:text-5xl">
            {landingContent.whyVoice.title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {landingContent.whyVoice.points.map((point) => (
            <article
              key={point.title}
              className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-panel)] p-7"
            >
              <h3 className="text-xl font-light text-white">{point.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{point.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
