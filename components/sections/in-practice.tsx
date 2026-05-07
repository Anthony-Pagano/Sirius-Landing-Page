import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type VignetteMeta = { kind: string; time: string; seq: string };

const metaMap: Record<string, VignetteMeta> = {
  design:   { kind: "DESIGN",      time: "ad-hoc",      seq: "01" },
  outreach: { kind: "SALES",       time: "continuous",  seq: "02" },
  standup:  { kind: "ENGINEERING", time: "mon · 09:00", seq: "03" },
  research: { kind: "RESEARCH",    time: "daily · am",  seq: "04" },
};

const compactBody: Record<string, string> = {
  design:   "A client email lands with eight nitpicks. Sirius parses, tags each, makes the trivial Figma edits, drafts replies, and surfaces the call: four done, two need yours, one is scope creep.",
  outreach: `Tell Sirius who you want to talk to — "founders of pre-seed dev-tools companies in Melbourne." It finds them, drafts in your voice, sends, and pings you when someone replies.`,
  standup:  "Every Monday, Sirius pulls last week's commits, the closed Linear tickets, and the #eng-team threads. By 9 a draft is in #standup. You skim, fix the line that's wrong, post.",
  research: "Sirius keeps a feed on the companies you're tracking. Two paragraphs of what's changed since yesterday before your first coffee.",
};

const outcomeLines: Record<string, string> = {
  standup:  "Twenty seconds, not twenty minutes.",
  outreach: "You see the pipeline, never the spreadsheet.",
  design:   "You read the bundle, not the inbox.",
  research: "It already knows what you've read.",
};


function VoiceWave({ size }: { size: "md" | "sm" }) {
  const heights = [0.4, 0.75, 0.55, 0.9, 0.45];
  const delays = [0, 120, 240, 60, 180];
  const wrapperHeight = size === "md" ? "h-4" : "h-3";
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center gap-[2px] shrink-0 ${wrapperHeight}`}
    >
      {heights.map((h, i) => (
        <span
          key={i}
          className="wave-bar"
          style={{ height: `${Math.round(h * 100)}%`, animationDelay: `${delays[i]}ms` }}
        />
      ))}
    </span>
  );
}

function VoiceTrigger({ text, size = "md" }: { text: string; size?: "md" | "sm" }) {
  return (
    <p
      className={
        size === "md"
          ? "mt-3 flex items-center gap-3 text-[14.5px] italic leading-[1.5] text-[var(--color-text-secondary)]"
          : "mt-3 flex items-center gap-2.5 text-[12.5px] italic leading-[1.45] text-[var(--color-text-secondary)]"
      }
    >
      <VoiceWave size={size} />
      &ldquo;{text}&rdquo;
    </p>
  );
}

export function InPracticeSection() {
  const { sectionLabel, vignettes } = landingContent.inPractice;
  const ordered = (["design", "outreach", "standup", "research"] as const).map(
    (id) => vignettes.find((v) => v.id === id)!,
  );

  return (
    <section
      id="in-practice"
      className="scroll-mt-24 py-24 md:py-32"
    >
      <Container>
        <SectionLabel index="04" tone="cyan">{sectionLabel}</SectionLabel>

        <h2 className="font-display mt-7 max-w-[26ch] text-[clamp(2.4rem,5.2vw,4rem)] leading-[0.92] tracking-[-0.028em] font-normal text-[var(--color-text-primary)]">
          Four short{" "}
          <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
            demonstrations.
          </em>
        </h2>

        <div className="mt-16 flex flex-col">
          {ordered.map((v) => {
            const meta = metaMap[v.id];
            return (
              <article
                key={v.id}
                className="grid gap-8 border-t border-[var(--color-border-strong)] py-10 md:grid-cols-[200px_1fr] md:gap-12 md:py-14 last:border-b last:border-[var(--color-border-strong)]"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background: "var(--color-accent-strong)",
                        boxShadow: "0 0 8px rgba(var(--color-accent-strong-rgb), 0.6)",
                      }}
                    />
                    <span
                      className="text-[11.5px] font-medium uppercase tracking-[0.18em]"
                      style={{ color: "var(--color-accent-strong)" }}
                    >
                      {meta.kind}
                    </span>
                  </div>
                  <span className="font-mono text-[11px] tracking-[0.06em] text-[var(--color-text-muted)]">
                    {meta.time}
                  </span>
                  <span className="mt-auto font-mono text-[11px] tracking-[0.06em] text-[var(--color-text-muted)]">
                    {meta.seq} / {String(ordered.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex flex-col">
                  {v.voiceTrigger && <VoiceTrigger text={v.voiceTrigger} size="md" />}
                  <h3 className="font-display mt-3 max-w-[32ch] text-[clamp(1.45rem,2.4vw,1.9rem)] leading-[1.18] tracking-[-0.018em] text-[var(--color-text-primary)]">
                    {v.title}
                  </h3>
                  <p className="mt-5 max-w-[58ch] text-[15.5px] leading-[1.7] text-[var(--color-text-secondary)]">
                    {compactBody[v.id as keyof typeof compactBody]}
                  </p>
                  <p
                    className="mt-7 inline-flex items-baseline gap-3 font-display-italic text-[17px] leading-[1.4]"
                    style={{ color: "var(--color-warm)" }}
                  >
                    <span
                      aria-hidden="true"
                      className="relative top-[-3px] inline-block h-px w-7"
                      style={{ background: "rgba(var(--color-warm-rgb), 0.7)" }}
                    />
                    {outcomeLines[v.id as keyof typeof outcomeLines]}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
