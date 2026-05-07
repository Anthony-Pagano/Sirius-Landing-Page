import { WorkflowPreview } from "@/components/sirius/workflow-preview";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function DemoSection() {
  return (
    <section id="demo" className="border-y border-[var(--color-border)] bg-[rgba(8,13,24,0.58)] py-20 md:py-32">
      <Container className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="max-w-xl">
          <SectionLabel number="03">Operator interface</SectionLabel>
          <h2 className="font-display mt-6 text-3xl leading-tight font-light text-white md:text-5xl">
            {landingContent.demo.title}
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            {landingContent.demo.description}
          </p>
          <ul className="mt-8 grid gap-3 text-sm text-white/66">
            {landingContent.demo.points.map((point) => (
              <li key={point} className="flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-white/[0.025] px-4 py-3">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <WorkflowPreview />
      </Container>
    </section>
  );
}
