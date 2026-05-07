import { WorkflowPreview } from "@/components/sirius/workflow-preview";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-14 md:py-16 lg:py-20">
      <Container className="grid items-start gap-8 lg:grid-cols-[minmax(280px,0.74fr)_minmax(0,1.26fr)] xl:gap-10">
        <div className="max-w-[560px] lg:sticky lg:top-24">
          <SectionLabel number="03">Operator interface</SectionLabel>
          <h2 className="font-display mt-5 text-3xl leading-[1.08] font-light text-balance text-[var(--color-text-primary)] md:text-[2.35rem] xl:text-[2.7rem]">
            {landingContent.demo.title}
          </h2>
          <p className="mt-5 max-w-[500px] text-base leading-7 text-[var(--color-text-muted)] md:text-[1.05rem]">
            {landingContent.demo.description}
          </p>
          <ul className="mt-6 grid gap-2.5 text-sm text-[var(--color-text-secondary)] sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {landingContent.demo.points.map((point) => (
              <li key={point} className="flex min-h-11 items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2.5">
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
