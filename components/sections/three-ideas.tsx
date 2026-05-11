import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Orb } from "@/components/sirius/orb";

const NODE_DEFS = [
  { index: "01", accent: "conversation", color: "#7ce0ff" },
  { index: "02", accent: "agent",        color: "#f5c84a" },
  { index: "03", accent: "workflows",    color: "#9adcb0" },
] as const;

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

        <div className="mt-12 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-stretch md:gap-16">
          <div className="relative flex h-full w-full items-center justify-center">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.55) 38%, transparent 76%)",
              }}
            />
            <Orb
              tripartite
              interactive={false}
              className="pointer-events-none relative h-[clamp(220px,26vw,320px)] w-[clamp(220px,26vw,320px)]"
            />
          </div>

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
