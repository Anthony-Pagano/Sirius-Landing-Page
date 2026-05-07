import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 md:py-24">
      <Container>
        <SectionLabel>Outcome-driven use cases</SectionLabel>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {landingContent.useCases.map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-panel)] p-7"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">{item.kicker}</p>
              <h3 className="mt-4 text-2xl font-light text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
