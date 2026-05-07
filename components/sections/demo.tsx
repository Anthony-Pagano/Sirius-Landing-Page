import { WorkflowPreview } from "@/components/sirius/workflow-preview";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function DemoSection() {
  return (
    <section id="demo" className="py-20 md:py-24">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-xl">
          <SectionLabel>Operator interface</SectionLabel>
          <h2 className="mt-6 text-3xl font-light tracking-[-0.03em] text-white md:text-5xl">
            {landingContent.demo.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            {landingContent.demo.description}
          </p>
          <ul className="mt-8 space-y-4 text-sm uppercase tracking-[0.22em] text-white/56">
            {landingContent.demo.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <WorkflowPreview />
      </Container>
    </section>
  );
}
