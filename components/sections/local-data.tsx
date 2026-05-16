import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { LocalDataDiagram } from "@/components/sirius/local-data-diagram";

export function LocalDataSection() {
  const { sectionLabel, body, trustPoints, footnote } = landingContent.localData;

  return (
    <section id="local-data" className="band-deep scroll-mt-24 py-24 md:py-32">
      <Container>
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:items-start">
          <div>
            <SectionLabel index="05" tone="warm">{sectionLabel}</SectionLabel>
            <h2 className="font-display mt-7 text-[clamp(2.3rem,5vw,3.8rem)] leading-[0.92] tracking-[-0.028em] font-normal text-[var(--color-ink-1)] max-w-[18ch]">
              Your data,{" "}
              <em className="font-display-italic not-italic" style={{ color: "var(--color-accent)" }}>
                your machine.
              </em>
            </h2>
          </div>

          <div>
            <LocalDataDiagram />
            <p className="mt-8 text-[15.5px] leading-[1.72] text-[var(--color-ink-2)] max-w-[54ch]">
              {body}
            </p>
            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point.title} className="border-y border-[var(--color-border)] py-4">
                  <dt className="text-[12px] font-medium uppercase tracking-[0.18em] text-[var(--color-ink-3)]">
                    {point.title}
                  </dt>
                  <dd className="mt-2 text-[14px] leading-[1.55] text-[var(--color-ink-2)]">
                    {point.body}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-ink-3)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
              {footnote}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
