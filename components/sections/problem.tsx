import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 md:py-24">
      <Container>
        <SectionLabel>Why this exists</SectionLabel>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {landingContent.problemQuestions.map((question) => (
            <article
              key={question}
              className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-panel)] p-7 backdrop-blur-md"
            >
              <p className="text-xl leading-8 text-white/92">{question}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
