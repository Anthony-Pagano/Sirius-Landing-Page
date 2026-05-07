import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Orb } from "@/components/sirius/orb";

const CENTER = { cx: 240, cy: 170 };
const PERIPHERAL_R = 44;
const CENTRAL_R = 90;
const ORBIT_R = 120;

const RING_DEFS = [
  { angle: -90,  label: "Claude",   src: "/claude-ai-icon.svg" },
  { angle: 30,   label: "OpenClaw", src: "/openclaw-dark.svg" },
  { angle: 150,  label: "n8n",      src: "/n8n.webp" },
] as const;

const RINGS = RING_DEFS.map((r) => {
  const rad = (r.angle * Math.PI) / 180;
  return {
    ...r,
    cx: CENTER.cx + ORBIT_R * Math.cos(rad),
    cy: CENTER.cy + ORBIT_R * Math.sin(rad),
  };
});

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
          Three good ideas.{" "}
          <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
            One app.
          </em>
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-16">
          <div
            className="relative w-full max-w-[520px]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg
              viewBox="0 0 480 340"
              className="w-full h-auto"
              aria-hidden="true"
            >
              <defs>
                {RINGS.map((ring) => (
                  <clipPath
                    key={`clip-${ring.label}`}
                    id={`ring-clip-${ring.label}`}
                  >
                    <circle
                      cx={ring.cx}
                      cy={ring.cy}
                      r={PERIPHERAL_R - 2}
                    />
                  </clipPath>
                ))}
              </defs>

              <circle
                cx={CENTER.cx}
                cy={CENTER.cy}
                r={ORBIT_R}
                fill="none"
                stroke="currentColor"
                strokeWidth="0.6"
                opacity="0.32"
              />

              {RINGS.map((ring) => {
                const size = (PERIPHERAL_R - 2) * 2;
                return (
                  <image
                    key={ring.label}
                    href={ring.src}
                    x={ring.cx - size / 2}
                    y={ring.cy - size / 2}
                    width={size}
                    height={size}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#ring-clip-${ring.label})`}
                  />
                );
              })}

            </svg>
            <div
              className="pointer-events-none absolute"
              style={{
                left: `${(CENTER.cx / 480) * 100}%`,
                top: `${(CENTER.cy / 340) * 100}%`,
                width: `${((CENTRAL_R * 2) / 480) * 100}%`,
                aspectRatio: "1 / 1",
                transform: "translate(-50%, -50%)",
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.45) 32%, transparent 72%)",
                }}
              />
              <Orb className="!h-full !w-full relative" staticRender glowless />
            </div>
          </div>

          <div>
            <dl className="divide-y divide-[var(--color-border)]">
              {items.map((item) => (
                <div key={item.name} className="py-5">
                  <dt className="font-display-italic text-[1.15rem] text-[var(--color-text-primary)]">
                    {item.name}
                  </dt>
                  <dd className="mt-1 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                    {item.gives}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
              {body}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
