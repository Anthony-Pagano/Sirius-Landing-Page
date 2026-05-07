import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function ThesisSection() {
  return (
    <section id="thesis" className="scroll-mt-24 py-16 md:py-24 lg:py-28">
      <Container>
        <SectionLabel number="02">The system</SectionLabel>
        <div className="mt-6 max-w-4xl">
          <h2 className="font-display text-3xl leading-tight font-light text-white md:text-6xl">
            {landingContent.thesis.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)]">
            {landingContent.thesis.description}
          </p>
        </div>

        <SystemDiagram />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {landingContent.pillars.map((pillar, index) => (
            <article
              key={pillar.title}
              className="grid h-full content-start rounded-[var(--radius-card)] border border-[var(--color-border)] bg-white/[0.025] p-5"
            >
              <PrimitiveDiagram index={index} />
              <div className="font-mono mt-5 text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {pillar.kicker} · {pillar.title}
              </div>
              <h3 className="font-display mt-3 text-2xl font-light text-white">{pillar.title}</h3>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-muted)]">{pillar.description}</p>
            </article>
          ))}
        </div>

        <MemoryBand />
      </Container>
    </section>
  );
}

function SystemDiagram() {
  const { sequence, endpoints } = landingContent.systemDiagram;

  return (
    <div className="mt-10 overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.014))] p-5 shadow-[var(--shadow-panel)] md:mt-12 md:p-7">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">Execution chain</p>
          <h3 className="font-display mt-3 text-2xl font-light text-white md:text-3xl">
            Capture -&gt; Decompose -&gt; Execute -&gt; Confirm
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {endpoints.map((endpoint) => (
            <span key={endpoint} className="rounded-full border border-[var(--color-border)] bg-black/20 px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              {endpoint}
            </span>
          ))}
        </div>
      </div>

      <div className="relative mt-7 grid gap-4 lg:grid-cols-4">
        <div className="surface-line absolute left-6 right-6 top-9 hidden h-px lg:block" />
        {sequence.map((step, index) => (
          <article key={step.title} className="relative rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[#080d14] p-5">
            <div className="font-mono mb-8 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-accent)]/28 bg-[var(--color-accent-soft)] text-xs text-[var(--color-accent)]">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <h4 className="font-display text-xl font-light text-white">{step.title}</h4>
            <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">{step.detail}</p>
          </article>
        ))}
      </div>

      <div className="mt-5 rounded-[var(--radius-card)] border border-[var(--color-warning)]/24 bg-[var(--color-warm-soft)] p-5">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-warning)]">Human-control rule</p>
        <p className="mt-3 text-base leading-7 text-white/82">
          Human approval required before external send, purchase, print, deploy, or device actuation.
        </p>
      </div>
    </div>
  );
}

function PrimitiveDiagram({ index }: { index: number }) {
  const offset = index * 18;

  return (
    <svg className="h-28 w-full rounded-[12px] border border-white/8 bg-black/10" viewBox="0 0 320 112" fill="none" aria-hidden="true">
      <circle cx={62 + offset} cy="56" r="18" stroke="rgba(159,200,216,0.34)" />
      <circle cx={160} cy="56" r="24" stroke="rgba(255,255,255,0.13)" />
      <circle cx={250 - offset} cy="56" r="18" stroke="rgba(159,200,216,0.22)" />
      <path d={`M${80 + offset} 56H136M184 56H${232 - offset}`} stroke="rgba(255,255,255,0.14)" strokeDasharray="4 8" />
      <circle cx={62 + offset} cy="56" r="3" fill="rgba(159,200,216,0.72)" />
      <circle cx={160} cy="56" r="4" fill="rgba(241,243,238,0.72)" />
      <circle cx={250 - offset} cy="56" r="3" fill="rgba(213,185,140,0.64)" />
    </svg>
  );
}

function MemoryBand() {
  const { memoryTitle, memoryDescription, contexts } = landingContent.systemDiagram;

  return (
    <div className="mt-8 grid gap-6 rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),transparent)] p-6 md:mt-10 md:grid-cols-[0.9fr_1.1fr] md:p-9">
      <div>
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">Context · the difference</div>
        <h3 className="font-display mt-4 text-3xl leading-tight font-light text-white">{memoryTitle}</h3>
        <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{memoryDescription}</p>
      </div>
      <div className="grid min-h-[260px] place-items-center">
        <svg className="h-[260px] w-full max-w-[460px]" viewBox="0 0 460 260" fill="none" aria-hidden="true">
          <circle cx="230" cy="130" r="108" stroke="rgba(255,255,255,0.1)" strokeDasharray="2 8" />
          <circle cx="230" cy="130" r="68" stroke="rgba(255,255,255,0.08)" />
          <circle cx="230" cy="130" r="34" fill="#080b10" stroke="rgba(159,200,216,0.32)" />
          <text x="230" y="134" textAnchor="middle" fill="#f1f3ee" fontSize="10" fontFamily="JetBrains Mono" letterSpacing="1">
            CORE
          </text>
          {contexts.map((context, index) => {
            const angle = (index / contexts.length) * Math.PI * 2 - Math.PI / 2;
            const x = 230 + Math.cos(angle) * 108;
            const y = 130 + Math.sin(angle) * 86;

            return (
              <g key={context}>
                <line x1="230" y1="130" x2={x} y2={y} stroke="rgba(255,255,255,0.08)" />
                <circle cx={x} cy={y} r="20" fill="#080b10" stroke="rgba(255,255,255,0.14)" />
                <text x={x} y={y + 4} textAnchor="middle" fill="#a7aea3" fontSize="10" fontFamily="JetBrains Mono">
                  {context}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
