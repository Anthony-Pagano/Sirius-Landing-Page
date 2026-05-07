import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function ThesisSection() {
  return (
    <section id="thesis" className="py-20 md:py-28">
      <Container>
        <SectionLabel number="02">Product thesis</SectionLabel>
        <div className="mt-6 max-w-3xl">
          <h2 className="text-3xl leading-tight font-light text-white md:text-5xl">
            {landingContent.thesis.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            {landingContent.thesis.description}
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {landingContent.pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-panel)] p-7 transition duration-300 hover:border-[rgba(103,215,255,0.32)] hover:bg-white/[0.045]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{pillar.kicker}</p>
              <h3 className="mt-4 text-2xl font-light text-white">{pillar.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{pillar.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
