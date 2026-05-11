import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { Orb } from "@/components/sirius/orb";

const VIEW = { w: 480, h: 360 };
const CENTER = { cx: 240, cy: 180 };
const PERIPHERAL_R = 32;
const CENTRAL_R = 76;

type Glyph = "wave" | "arrow" | "tick";

type NodeDef = {
  angle: number;
  dist: number;
  index: string;
  accent: string;
  color: string;
  glyph: Glyph;
};

const NODE_DEFS: readonly NodeDef[] = [
  { angle: -75, dist: 138, index: "01", accent: "conversation", color: "#7ce0ff", glyph: "wave"  },
  { angle: 40,  dist: 130, index: "02", accent: "agent",        color: "#f5c84a", glyph: "arrow" },
  { angle: 170, dist: 145, index: "03", accent: "plumbing",     color: "#9adcb0", glyph: "tick"  },
];

type Node = NodeDef & { cx: number; cy: number };

const NODES: Node[] = NODE_DEFS.map((n) => {
  const rad = (n.angle * Math.PI) / 180;
  return {
    ...n,
    cx: CENTER.cx + n.dist * Math.cos(rad),
    cy: CENTER.cy + n.dist * Math.sin(rad),
  };
});

function buildFlow(node: Node) {
  const dx = CENTER.cx - node.cx;
  const dy = CENTER.cy - node.cy;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;

  const sx = node.cx + ux * PERIPHERAL_R;
  const sy = node.cy + uy * PERIPHERAL_R;
  const ex = CENTER.cx - ux * CENTRAL_R;
  const ey = CENTER.cy - uy * CENTRAL_R;

  const span = len - PERIPHERAL_R - CENTRAL_R;
  const bow = span * 0.32;

  const c1x = sx + ux * span * 0.42 + px * bow;
  const c1y = sy + uy * span * 0.42 + py * bow;
  const c2x = ex - ux * span * 0.18 + px * bow * 0.55;
  const c2y = ey - uy * span * 0.18 + py * bow * 0.55;

  return {
    d: `M ${sx} ${sy} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${ex} ${ey}`,
    end: { x: ex, y: ey },
  };
}

const FLOWS = NODES.map((n) => ({ node: n, ...buildFlow(n) }));

function Glyph({ kind, cx, cy, color }: { kind: Glyph; cx: number; cy: number; color: string }) {
  const common = {
    stroke: color,
    strokeWidth: 1.25,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    fill: "none" as const,
  };

  if (kind === "wave") {
    // Quick squiggle — three uneven bumps, a sound-doodle drawn in one stroke.
    return (
      <path
        d={`M ${cx - 7.5} ${cy + 1.5}
            C ${cx - 5}   ${cy - 3.5}, ${cx - 3}   ${cy - 3.2}, ${cx - 1.4} ${cy - 0.4}
            C ${cx + 0.2} ${cy + 2.4}, ${cx + 1.6} ${cy + 2.8}, ${cx + 3.6} ${cy + 0.2}
            C ${cx + 5}   ${cy - 1.8}, ${cx + 6.4} ${cy - 0.8}, ${cx + 7.5} ${cy + 1.5}`}
        {...common}
      />
    );
  }

  if (kind === "arrow") {
    // Comet flourish — a sweeping stroke that hooks at the end. Direction without an arrowhead.
    return (
      <path
        d={`M ${cx - 6.5} ${cy + 5}
            C ${cx - 3}   ${cy + 1},   ${cx}     ${cy - 1.5}, ${cx + 2.4} ${cy - 4}
            C ${cx + 4}   ${cy - 5.6}, ${cx + 5.8} ${cy - 4.4}, ${cx + 5.4} ${cy - 1.6}`}
        {...common}
      />
    );
  }

  // Tangle — a single path that loops back through itself; a knot doodle.
  return (
    <path
      d={`M ${cx - 5.6} ${cy - 1}
          C ${cx - 7.2} ${cy + 3},   ${cx - 2}   ${cy + 5.2}, ${cx + 1}   ${cy + 2.8}
          C ${cx + 4}   ${cy + 0.8}, ${cx + 5.6} ${cy - 3.2}, ${cx + 3}   ${cy - 4.6}
          C ${cx + 0.6} ${cy - 5.2}, ${cx - 2.2} ${cy - 2.6}, ${cx - 0.6} ${cy - 0.4}
          C ${cx + 1}   ${cy + 1.4}, ${cx + 3.6} ${cy + 1.2}, ${cx + 4.4} ${cy - 0.6}`}
      {...common}
    />
  );
}

function hexToRgba(hex: string, alpha: number): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
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
          <div
            className="three-ideas-stage relative w-full max-w-[520px]"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 50%, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.45) 32%, transparent 72%)",
              }}
            />
            <svg
              viewBox={`0 0 ${VIEW.w} ${VIEW.h}`}
              className="relative w-full h-auto"
              aria-hidden="true"
            >
              {/* Threads: faint base + animated pulse, in each node's role color */}
              {FLOWS.map((flow, i) => (
                <g key={`flow-${flow.node.index}`} className={`flow flow-${i}`}>
                  <path
                    d={flow.d}
                    fill="none"
                    stroke={flow.node.color}
                    strokeWidth="0.7"
                    opacity="0.34"
                    strokeLinecap="round"
                  />
                  <path
                    d={flow.d}
                    fill="none"
                    stroke={flow.node.color}
                    strokeWidth="1"
                    strokeDasharray="1.4 22"
                    strokeLinecap="round"
                    className="flow-pulse"
                    opacity="0.95"
                  />
                </g>
              ))}

              {/* Entry markers where each thread lands on the orb's perimeter */}
              {FLOWS.map((flow) => (
                <g key={`entry-${flow.node.index}`}>
                  <circle
                    cx={flow.end.x}
                    cy={flow.end.y}
                    r="3.6"
                    fill={hexToRgba(flow.node.color, 0.22)}
                  />
                  <circle
                    cx={flow.end.x}
                    cy={flow.end.y}
                    r="1.6"
                    fill={flow.node.color}
                  />
                </g>
              ))}

              {/* Peripheral reticles: nested hairline rings + ticks + glyph */}
              {NODES.map((n, i) => {
                const tickAngles = [0, 45, 90, 135, 180, 225, 270, 315];
                return (
                  <g key={n.index} className={`reticle reticle-${i}`}>
                    {/* Dark interior — masks any lines passing under, lets bg radial darken read */}
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r={PERIPHERAL_R - 1}
                      fill="var(--color-bg-primary)"
                    />

                    {/* Inner hairline ring */}
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r={PERIPHERAL_R - 14}
                      fill="none"
                      stroke={n.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.22"
                    />

                    {/* Mid hairline ring */}
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r={PERIPHERAL_R - 7}
                      fill="none"
                      stroke={n.color}
                      strokeWidth="0.5"
                      strokeOpacity="0.32"
                    />

                    {/* Tick marks just inside the outer ring — radar dial */}
                    {tickAngles.map((deg) => {
                      const rad = (deg * Math.PI) / 180;
                      const cos = Math.cos(rad);
                      const sin = Math.sin(rad);
                      const r1 = PERIPHERAL_R - 4.5;
                      const r2 = PERIPHERAL_R - 1.5;
                      const isCardinal = deg % 90 === 0;
                      return (
                        <line
                          key={deg}
                          x1={n.cx + r1 * cos}
                          y1={n.cy + r1 * sin}
                          x2={n.cx + r2 * cos}
                          y2={n.cy + r2 * sin}
                          stroke={n.color}
                          strokeWidth={isCardinal ? 0.8 : 0.5}
                          strokeOpacity={isCardinal ? 0.7 : 0.42}
                          strokeLinecap="round"
                        />
                      );
                    })}

                    {/* Outer ring */}
                    <circle
                      cx={n.cx}
                      cy={n.cy}
                      r={PERIPHERAL_R - 1}
                      fill="none"
                      stroke={n.color}
                      strokeWidth="0.9"
                      strokeOpacity="0.85"
                    />

                    {/* Glyph at center */}
                    <Glyph kind={n.glyph} cx={n.cx} cy={n.cy} color={n.color} />
                  </g>
                );
              })}
            </svg>

            <div
              className="pointer-events-none absolute"
              style={{
                left: `${(CENTER.cx / VIEW.w) * 100}%`,
                top: `${(CENTER.cy / VIEW.h) * 100}%`,
                width: `${((CENTRAL_R * 2) / VIEW.w) * 100}%`,
                aspectRatio: "1 / 1",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Orb className="!h-full !w-full" glowless />
            </div>

            <style>{`
              .three-ideas-stage .flow-pulse {
                animation: three-ideas-flow 6.4s linear infinite;
              }
              .three-ideas-stage .flow-0 .flow-pulse { animation-delay: 0s; }
              .three-ideas-stage .flow-1 .flow-pulse { animation-delay: -2.1s; }
              .three-ideas-stage .flow-2 .flow-pulse { animation-delay: -4.2s; }
              @keyframes three-ideas-flow {
                from { stroke-dashoffset: 0; }
                to   { stroke-dashoffset: -160; }
              }

              @media (prefers-reduced-motion: reduce) {
                .three-ideas-stage .flow-pulse { animation: none; }
              }
            `}</style>
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
