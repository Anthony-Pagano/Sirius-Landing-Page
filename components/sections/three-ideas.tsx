import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

const NODE_DEFS = [
  { index: "01", accent: "conversation", color: "#7ce0ff" },
  { index: "02", accent: "agent",        color: "#f5c84a" },
  { index: "03", accent: "plumbing",     color: "#9adcb0" },
] as const;

const CONSTELLATION_FRAGMENTS = [
  {
    id: "conversation",
    label: "Conversation",
    kicker: "voice / chat",
    body: "Prep my 14:00 with Daniel.",
    meta: "remembers the thread",
    color: "#7ce0ff",
  },
  {
    id: "agent",
    label: "Agent runtime",
    kicker: "workflow trace",
    body: "Pull context / draft brief / ask only if needed.",
    meta: "shows its work",
    color: "#f5c84a",
  },
  {
    id: "plumbing",
    label: "Background runner",
    kicker: "scheduled",
    body: "09:00 standup · 15 min brief · daily digest.",
    meta: "runs when you do not",
    color: "#9adcb0",
  },
] as const;

function SystemDiagram() {
  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-[560px]"
    >
      <div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{
          background:
            "radial-gradient(circle at 50% 48%, rgba(var(--color-accent-rgb), 0.08), transparent 54%)",
        }}
      />
      <div className="relative mx-auto max-w-[540px]">
        <div
          className="border-y border-[var(--color-border-strong)] py-5 text-center"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(var(--color-accent-rgb),0.055), rgba(var(--color-warm-rgb),0.045), transparent)",
          }}
        >
          <p className="text-[10.5px] uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
            one memory
          </p>
          <p className="font-display-italic mt-2 text-[clamp(1.45rem,2.4vw,1.9rem)] leading-none text-[var(--color-text-primary)]">
            same context
          </p>
        </div>

        <div className="mt-9 grid gap-8 md:grid-cols-2 md:gap-x-12 md:gap-y-10">
          <FragmentNote fragment={CONSTELLATION_FRAGMENTS[0]} />
          <FragmentNote fragment={CONSTELLATION_FRAGMENTS[1]} />
          <FragmentNote fragment={CONSTELLATION_FRAGMENTS[2]} className="md:col-span-2 md:mx-auto" />
        </div>
      </div>
    </div>
  );
}

function FragmentNote({
  fragment,
  className = "",
}: {
  fragment: (typeof CONSTELLATION_FRAGMENTS)[number];
  className?: string;
}) {
  return (
    <figure
      className={`relative max-w-[300px] border-l pl-5 ${className}`}
      style={{ borderColor: fragment.color }}
    >
      <p
        className="text-[10.5px] uppercase tracking-[0.22em]"
        style={{ color: fragment.color }}
      >
        {fragment.kicker}
      </p>
      <blockquote className="mt-3 font-display-italic text-[clamp(1.05rem,1.55vw,1.28rem)] leading-[1.38] text-[var(--color-text-primary)]">
        &ldquo;{fragment.body}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-muted)]">
        <span aria-hidden="true" className="h-px w-7" style={{ backgroundColor: fragment.color }} />
        <span>{fragment.label}</span>
      </figcaption>
      <p className="mt-2 text-[13px] leading-[1.45] text-[var(--color-text-secondary)]">
        {fragment.meta}
      </p>
    </figure>
  );
}

export function ThreeIdeasSection() {
  const { sectionLabel, items, body } = landingContent.threeIdeas;

  return (
    <section
      id="three-ideas"
      className="relative scroll-mt-24 py-24 md:py-32"
    >
      <Container>
        <SectionLabel index="03" tone="warm">{sectionLabel}</SectionLabel>

        <h2 className="font-display text-balance mt-7 max-w-[24ch] text-[clamp(2.6rem,5.6vw,4.4rem)] leading-[0.92] tracking-[-0.028em] text-[var(--color-text-primary)] font-normal">
          Three parts.{" "}
          <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
            One app.
          </em>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
          <SystemDiagram />

          <div>
            <ul className="divide-y divide-[var(--color-border)]">
              {items.map((item, i) => {
                const node = NODE_DEFS[i];
                const accent = node?.accent ?? "";
                const splitAt = accent ? item.role.indexOf(accent) : -1;
                const head = splitAt >= 0 ? item.role.slice(0, splitAt) : item.role;
                const tail = splitAt >= 0 ? item.role.slice(splitAt + accent.length) : "";
                return (
                  <li
                    key={item.index}
                    className="py-5 text-[clamp(1.1rem,1.6vw,1.3rem)] leading-[1.45] text-[var(--color-text-primary)]"
                  >
                    {head}
                    <span
                      className="font-display-italic"
                      style={{ color: node?.color ?? "var(--color-warm)" }}
                    >
                      {accent}
                    </span>
                    {tail}
                  </li>
                );
              })}
            </ul>

            <p className="mt-8 text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
