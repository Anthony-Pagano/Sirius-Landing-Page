import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function UseCasesSection() {
  return (
    <section id="use-cases" className="scroll-mt-24 py-16 md:py-24 lg:py-28">
      <Container>
        <SectionLabel number="04">Outcome-driven use cases</SectionLabel>
        <div className="mt-6 max-w-3xl">
          <h2 className="font-display text-3xl font-light leading-tight text-[var(--color-text-primary)] md:text-5xl">
            {landingContent.useCasesHeading}
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {landingContent.useCases.map((item) => (
            <article
              key={item.title}
              className="group grid h-full content-start rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-raised),var(--color-surface))] p-6 transition duration-300 hover:-translate-y-1 hover:border-[rgba(var(--color-accent-rgb),0.35)]"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">{item.kicker}</p>
              <h3 className="font-display mt-4 text-2xl font-light leading-snug text-[var(--color-text-primary)]">{item.title}</h3>
              <dl className="mt-6 grid gap-3">
                <UseCaseRow label="Trigger" value={item.trigger} />
                <UseCaseRow label="Sirius output" value={item.output} />
                <UseCaseRow label="Removed friction" value={item.friction} />
              </dl>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function UseCaseRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4">
      <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">{label}</dt>
      <dd className="mt-2 text-sm leading-6 text-[var(--color-text-secondary)]">{value}</dd>
    </div>
  );
}
