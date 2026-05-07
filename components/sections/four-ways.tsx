import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

function VoiceGlyph() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="8"  y1="10" x2="8"  y2="18" />
      <line x1="14" y1="6"  x2="14" y2="22" />
      <line x1="20" y1="9"  x2="20" y2="19" />
    </svg>
  );
}

function ChatGlyph() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="17,7 10,14 17,21" />
    </svg>
  );
}

function FeedGlyph() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="7" cy="9" r="1.2" fill="currentColor" stroke="none" />
      <line x1="11" y1="9"  x2="22" y2="9"  />
      <line x1="9"  y1="14" x2="22" y2="14" />
      <line x1="11" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function SchedulesGlyph() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 28 28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="9" />
      <line x1="14" y1="14" x2="14" y2="9" />
      <line x1="14" y1="14" x2="18" y2="14" />
    </svg>
  );
}

const glyphMap: Record<string, React.FC> = {
  voice: VoiceGlyph,
  chat: ChatGlyph,
  feeds: FeedGlyph,
  schedules: SchedulesGlyph,
};

const accentMap: Record<string, string> = {
  voice:     "var(--color-accent-strong)",
  chat:      "var(--color-success)",
  schedules: "var(--color-warm)",
  feeds:     "var(--color-warning)",
};

const accentRgbMap: Record<string, string> = {
  voice:     "101, 215, 242",
  chat:      "167, 219, 178",
  schedules: "217, 185, 120",
  feeds:     "240, 200, 121",
};

export function FourWaysSection() {
  const { sectionLabel, leadIn, items } = landingContent.fourWays;

  return (
    <section id="four-ways" className="band-deep relative scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionLabel index="02" tone="cyan">{sectionLabel}</SectionLabel>
        <h2 className="font-display text-balance mt-7 max-w-[20ch] text-[clamp(2.4rem,5.2vw,4rem)] leading-[0.92] tracking-[-0.028em] text-[var(--color-text-primary)] font-normal">
          Four surfaces,{" "}
          <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
            one assistant.
          </em>
        </h2>
        <p className="mt-7 max-w-[58ch] text-[clamp(1rem,1.4vw,1.15rem)] leading-[1.65] text-[var(--color-text-secondary)]">
          {leadIn}
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4 lg:gap-6">
          {items.map((item, idx) => {
            const Glyph = glyphMap[item.id];
            const accent = accentMap[item.id];
            const accentRgb = accentRgbMap[item.id];
            const order = String(idx + 1).padStart(2, "0");
            return (
              <article
                key={item.id}
                className="panel-recessed relative flex flex-col rounded-[var(--radius-card)] p-7"
                style={{
                  ["--accent-rgb" as string]: accentRgb,
                }}
              >
                <div className="flex items-start justify-between">
                  <div style={{ color: accent }}>
                    {Glyph && <Glyph />}
                  </div>
                  <span
                    className="font-mono text-[10px] tracking-[0.2em]"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {order}
                  </span>
                </div>

                <h3 className="font-display mt-6 text-[1.4rem] leading-tight font-normal text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-[var(--color-text-secondary)]">
                  {item.body}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-6 block h-px w-10"
                  style={{ background: `rgba(${accentRgb}, 0.5)` }}
                />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
