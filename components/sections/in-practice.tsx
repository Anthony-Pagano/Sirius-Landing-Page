"use client";

import { useEffect, useRef, useState } from "react";

import { landingContent } from "@/content/landing";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type AccentTone = { hex: string; rgb: string };

const ACCENTS: Record<string, AccentTone> = {
  design:      { hex: "#6cd8ff", rgb: "108, 216, 255" },
  engineering: { hex: "#9adcb0", rgb: "154, 220, 176" },
  meeting:     { hex: "#d9b978", rgb: "217, 185, 120" },
  research:    { hex: "#8a9cff", rgb: "138, 156, 255" },
};

// Surface chain — composition, not chrome.
const CHAINS: Record<string, string[]> = {
  design:      ["CHAT", "WORKFLOW"],
  engineering: ["SCHEDULE", "WORKFLOW"],
  meeting:     ["SCHEDULE", "CHAT"],
  research:    ["FEED"],
};

// Sirius's moves — what it does, not what it produces. Honest about operations,
// silent on output specifics.
const VERBS: Record<string, string[]> = {
  design:      ["READ", "SORT", "DRAFT", "FLAG"],
  engineering: ["PULL", "MERGE", "SUMMARISE", "POST"],
  meeting:     ["WATCH", "GATHER", "BRIEF", "LAND"],
  research:    ["SUBSCRIBE", "FILTER", "COMPARE", "DIGEST"],
};

const TITLE_HIGHLIGHTS: Record<string, string> = {
  design: "sorted before you read it.",
  engineering: "ready before you are.",
  meeting: "already briefed.",
  research: "for one.",
};

// Match the site's body font (Geist) — tracking + caps carry the "technical
// readout" tone without the visual jolt of true monospace.
const MONO_STACK = `"Geist", "Inter", ui-sans-serif, system-ui, sans-serif`;

// ─── Voice glyph ─────────────────────────────────────────────────────────────

function VoiceWaveform({ accent, revealed }: { accent: AccentTone; revealed: boolean }) {
  const bars = [0.35, 0.7, 0.5, 0.95, 0.6, 0.38];
  return (
    <span
      aria-hidden="true"
      data-revealed={revealed ? "true" : "false"}
      className="ip-voice inline-flex h-[18px] shrink-0 items-end gap-[3px]"
      style={{ ["--ip-wave-color" as string]: accent.hex }}
    >
      {bars.map((h, i) => (
        <span
          key={i}
          className="ip-voice-bar block w-[2px] rounded-full"
          style={{
            ["--ip-wave-h" as string]: `${Math.round(h * 100)}%`,
            ["--ip-wave-delay" as string]: `${i * 60}ms`,
          }}
        />
      ))}
    </span>
  );
}

// ─── Typographic primitives ──────────────────────────────────────────────────

function ChainHeader({ chain, accent, i = 0 }: { chain: string[]; accent: AccentTone; i?: number }) {
  return (
    <div
      className="ip-type-line"
      style={{
        ["--ip-stagger-i" as string]: i,
        fontFamily: MONO_STACK,
        fontSize: 11.5,
        letterSpacing: "0.24em",
      }}
    >
      {chain.map((surface, idx) => (
        <span key={idx}>
          {idx > 0 && (
            <span className="mx-2.5 text-[var(--color-text-muted)]">→</span>
          )}
          <span style={{ color: accent.hex }}>{surface}</span>
        </span>
      ))}
    </div>
  );
}

function AccentRule({ accent, i = 1 }: { accent: AccentTone; i?: number }) {
  return (
    <div
      aria-hidden="true"
      className="ip-type-line my-4 h-px w-full"
      style={{
        ["--ip-stagger-i" as string]: i,
        background: `linear-gradient(90deg, rgba(${accent.rgb}, 0.55), rgba(${accent.rgb}, 0.10) 80%, transparent)`,
      }}
    />
  );
}

function TypeLine({
  i,
  children,
  className = "",
  style,
}: {
  i: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`ip-type-line ${className}`}
      style={{ ["--ip-stagger-i" as string]: i, fontFamily: MONO_STACK, ...style }}
    >
      {children}
    </div>
  );
}

// ─── Artifact: Sirius's verbs for this use case ──────────────────────────────

function VerbsArtifact({
  id,
  accent,
  revealed,
}: {
  id: string;
  accent: AccentTone;
  revealed: boolean;
}) {
  const chain = CHAINS[id] ?? [];
  const verbs = VERBS[id] ?? [];
  return (
    <div
      data-revealed={revealed ? "true" : "false"}
      className="ip-artifact"
      style={{ ["--ip-accent-rgb" as string]: accent.rgb }}
    >
      <ChainHeader chain={chain} accent={accent} i={0} />
      <AccentRule accent={accent} i={1} />

      <ol className="mt-1 space-y-3">
        {verbs.map((verb, idx) => (
          <TypeLine
            key={idx}
            i={2 + idx}
            className="grid grid-cols-[40px_1fr] items-baseline gap-4"
          >
            <span
              style={{
                fontFamily: MONO_STACK,
                fontSize: 11,
                letterSpacing: "0.20em",
                color: "var(--color-text-disabled)",
              }}
            >
              {String(idx + 1).padStart(2, "0")}
            </span>
            <span
              style={{
                fontFamily: MONO_STACK,
                fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                letterSpacing: "0.13em",
                color: accent.hex,
                fontWeight: 500,
              }}
            >
              {verb}
              <span style={{ color: "rgba(255,255,255,0.35)" }}>.</span>
            </span>
          </TypeLine>
        ))}
      </ol>
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────

type CardData = (typeof landingContent.inPractice.vignettes)[number];

function PracticeCard({ card, total }: { card: CardData; total: number }) {
  const accent = ACCENTS[card.id];
  const highlight = TITLE_HIGHLIGHTS[card.id];
  const highlightIndex = highlight ? card.title.indexOf(highlight) : -1;
  const titleLead = highlightIndex >= 0 ? card.title.slice(0, highlightIndex) : card.title;

  const ref = useRef<HTMLElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting && e.intersectionRatio >= 0.3) {
            setRevealed(true);
            revealIO.disconnect();
            break;
          }
        }
      },
      { threshold: [0.3, 0.5] },
    );
    revealIO.observe(el);

    return () => {
      revealIO.disconnect();
    };
  }, []);

  return (
    <article
      ref={ref}
      data-revealed={revealed ? "true" : "false"}
      className="ip-card relative grid grid-cols-1 items-center gap-12 border-t border-[var(--color-border-strong)] py-20 first:border-t-0 first:pt-4 last:pb-0 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:py-28 md:first:pt-6 md:last:pb-0"
      style={{
        ["--ip-accent" as string]: accent.hex,
        ["--ip-accent-rgb" as string]: accent.rgb,
      }}
    >
      {/* TEXT COLUMN */}
      <div className="relative flex max-w-[58ch] flex-col">
        <p className="flex items-center gap-3 text-[15px] italic leading-[1.5] text-[var(--color-text-secondary)]">
          <VoiceWaveform accent={accent} revealed={revealed} />
          <span>&ldquo;{card.voiceTrigger}&rdquo;</span>
        </p>

        <h3 className="font-display mt-6 max-w-[22ch] text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.05] tracking-[-0.022em] text-[var(--color-text-primary)]">
          {titleLead}
          {highlightIndex >= 0 && (
            <em
              className="font-display-italic not-italic"
              style={{ color: "var(--color-warm)" }}
            >
              {highlight}
            </em>
          )}
        </h3>

        <p className="mt-7 max-w-[54ch] text-[16px] leading-[1.7] text-[var(--color-text-secondary)]">
          {card.body}
        </p>

        <p
          className="mt-8 inline-flex items-baseline gap-3 text-[14px] leading-[1.5] text-[var(--color-text-primary)]"
          style={{ fontFamily: MONO_STACK, letterSpacing: "0.01em" }}
        >
          <span aria-hidden="true" style={{ color: accent.hex }}>—</span>
          <span>{card.punchline}</span>
        </p>

        <div
          className="mt-12"
          style={{
            fontFamily: MONO_STACK,
            fontSize: 10.5,
            letterSpacing: "0.22em",
            color: "var(--color-text-muted)",
          }}
        >
          <span style={{ color: accent.hex, opacity: 0.9 }}>{card.seq}</span>
          <span className="mx-2 opacity-60">/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      {/* ARTIFACT COLUMN — the verbs */}
      <div className="relative flex justify-center md:justify-end">
        <div className="w-full max-w-[420px]">
          <VerbsArtifact id={card.id} accent={accent} revealed={revealed} />
        </div>
      </div>
    </article>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function InPracticeSection() {
  const { sectionLabel, intro, vignettes } = landingContent.inPractice;

  return (
    <section id="in-practice" className="scroll-mt-24 py-24 md:py-32">
      <Container>
        <SectionLabel index="01" tone="cyan">
          {sectionLabel}
        </SectionLabel>

        <h2 className="font-display mt-7 max-w-[26ch] text-[clamp(2.4rem,5.2vw,4rem)] leading-[0.92] tracking-[-0.028em] font-normal text-[var(--color-text-primary)]">
          Stop doing the same work{" "}
          <em className="font-display-italic not-italic" style={{ color: "var(--color-warm)" }}>
            from scratch.
          </em>
        </h2>

        <p className="mt-7 max-w-[52ch] text-[clamp(0.98rem,1.25vw,1.08rem)] leading-[1.68] text-[var(--color-text-secondary)]">
          {intro}
        </p>

        <div className="mt-16 flex flex-col border-t border-[var(--color-border-strong)] pt-6 md:pt-8">
          {vignettes.map((v) => (
            <PracticeCard key={v.id} card={v} total={vignettes.length} />
          ))}
        </div>
      </Container>

      <style>{`
        /* Voice waveform — single slow pulse on reveal */
        .ip-voice-bar {
          height: var(--ip-wave-h);
          background: var(--ip-wave-color, var(--color-accent-strong));
          transform: scaleY(0.32);
          transform-origin: bottom center;
          opacity: 0.55;
          transition: opacity 200ms ease;
        }
        .ip-voice[data-revealed="true"] .ip-voice-bar {
          animation: ip-wave-once 620ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: var(--ip-wave-delay, 0ms);
          opacity: 0.95;
        }
        @keyframes ip-wave-once {
          0%   { transform: scaleY(0.32); }
          45%  { transform: scaleY(1); }
          100% { transform: scaleY(0.55); }
        }

        /* Typewriter line reveal — clip-path inset with stepped timing */
        .ip-type-line {
          clip-path: inset(0 100% 0 0);
          opacity: 0;
          will-change: clip-path;
        }
        .ip-artifact[data-revealed="true"] .ip-type-line {
          opacity: 1;
          animation: ip-type 460ms steps(40, end) forwards;
          animation-delay: calc(140ms + var(--ip-stagger-i, 0) * 110ms);
        }
        @keyframes ip-type {
          from { clip-path: inset(0 100% 0 0); }
          to   { clip-path: inset(0 0 0 0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ip-voice[data-revealed="true"] .ip-voice-bar,
          .ip-artifact[data-revealed="true"] .ip-type-line {
            animation: none !important;
          }
          .ip-type-line {
            opacity: 1 !important;
            clip-path: none !important;
          }
        }
      `}</style>
    </section>
  );
}
