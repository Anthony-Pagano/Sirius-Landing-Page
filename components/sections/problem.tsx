"use client";

import { motion } from "motion/react";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";
import { cn } from "@/lib/utils";

type ProblemMapItem = (typeof landingContent.problemMap)[number];

const generatedItems = ["File", "Model", "Request"];
const missingMileItems = ["Choose", "Approve", "Check", "Confirm"];
const completedItems = ["Printed", "Fabricated", "Coordinated"];

export function ProblemSection() {
  return (
    <section id="problem" className="scroll-mt-24 border-y border-[var(--color-border)] bg-[var(--color-bg-soft)] py-16 md:py-24 lg:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(300px,0.62fr)_minmax(0,1.38fr)] lg:items-start lg:gap-12 xl:gap-16">
          <div className="lg:sticky lg:top-28">
            <SectionLabel number="01">Why this exists</SectionLabel>
            <p className="font-mono mt-7 text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">The missing mile</p>
            <h2 className="font-display mt-4 max-w-[560px] text-4xl leading-[1.02] font-light text-balance text-[var(--color-text-primary)] md:text-5xl xl:text-[3.35rem]">
              Generated is not done.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-text-muted)]">
              AI can create the artifact. Sirius exists for the handoff after that: approvals, devices, status, and completion.
            </p>
            <div className="mt-7 max-w-xl border-l border-[rgba(var(--color-accent-rgb),0.34)] pl-5">
              <p className="text-base leading-7 text-[var(--color-text-secondary)]">
                The value is not another generated answer. It is a visible path from intent to finished work.
              </p>
            </div>
            <div className="mt-8 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-inset)] px-4 py-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)]">
                Output -&gt; handoff -&gt; outcome
              </p>
            </div>
          </div>

          <MissingMilePanel />
        </div>
        <ExampleBand />
      </Container>
    </section>
  );
}

function MissingMilePanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[linear-gradient(180deg,var(--color-surface-raised),var(--color-surface))]"
    >
      <div className="border-b border-[var(--color-border)] p-5 md:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">From output to outcome</p>
        <h3 className="font-display mt-3 max-w-2xl text-2xl leading-tight font-light text-[var(--color-text-primary)] md:text-[2rem]">
          The product lives where assistants usually stop.
        </h3>
      </div>

      <div className="grid gap-4 p-5 md:p-6 lg:grid-cols-3 lg:items-stretch">
        <MileColumn label="Generated" items={generatedItems} />
        <MileColumn label="Missing mile" items={missingMileItems} emphasis />
        <MileColumn label="Completed" items={completedItems} resolved />
      </div>
    </motion.div>
  );
}

function MileColumn({
  label,
  items,
  emphasis = false,
  resolved = false,
}: {
  label: string;
  items: string[];
  emphasis?: boolean;
  resolved?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4 md:p-5",
        emphasis && "border-[rgba(var(--color-warm-rgb),0.24)] bg-[rgba(var(--color-warm-rgb),0.065)]",
        resolved && "border-[rgba(var(--color-accent-rgb),0.24)]",
      )}
    >
      <p
        className={cn(
          "font-mono text-[10px] uppercase tracking-[0.2em]",
          emphasis ? "text-[var(--color-warning)]" : resolved ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]",
        )}
      >
        {label}
      </p>
      <div className="mt-5 flex flex-wrap gap-2 lg:grid">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.035)] px-3 py-1.5 text-sm text-[var(--color-text-secondary)]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExampleBand() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.58, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="mt-8"
    >
      <div className="mb-4 flex flex-col justify-between gap-3 border-t border-[var(--color-border)] pt-5 md:flex-row md:items-end">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-[var(--color-accent)]">Missing mile examples</p>
          <h3 className="font-display mt-2 text-2xl font-light leading-tight text-[var(--color-text-primary)] md:text-3xl">
            The same pattern across software, devices, and environment.
          </h3>
        </div>
        <p className="max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
          Each starts as an AI output. Sirius carries the handoff until there is visible completion.
        </p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {landingContent.problemMap.map((item, index) => (
          <ExampleCard key={item.kicker} item={item} index={index} />
        ))}
      </div>
    </motion.div>
  );
}

function ExampleCard({ item, index }: { item: ProblemMapItem; index: number }) {
  return (
    <article className="rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4 transition-[border-color,box-shadow] duration-[220ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:border-[rgba(var(--color-accent-rgb),0.3)] hover:shadow-[0_0_18px_rgba(var(--color-accent-rgb),0.07)]">
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{item.kicker}</p>
        <CompactMark index={index} visual={item.visual} />
      </div>
      <p className="mt-4 min-h-[72px] text-sm leading-6 text-[var(--color-text-secondary)]">{item.summary}</p>
      <div className="mt-4 grid gap-2">
        <ExampleStep label="AI" value={item.generated} />
        <ExampleStep label="Mile" value={item.missing} emphasis />
        <ExampleStep label="Done" value={item.completed} resolved />
      </div>
    </article>
  );
}

function ExampleStep({
  label,
  value,
  emphasis = false,
  resolved = false,
}: {
  label: string;
  value: string;
  emphasis?: boolean;
  resolved?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-full border border-[var(--color-border)] bg-[rgba(255,255,255,0.025)] px-3 py-1.5">
      <p
        className={cn(
          "font-mono text-[10px] uppercase tracking-[0.18em]",
          emphasis ? "text-[var(--color-warning)]" : resolved ? "text-[var(--color-accent)]" : "text-[var(--color-text-faint)]",
        )}
      >
        {label}
      </p>
      <p className="text-right text-sm text-[var(--color-text-secondary)]">{value}</p>
    </div>
  );
}

function CompactMark({ index, visual }: { index: number; visual: ProblemMapItem["visual"] }) {
  const labels = {
    printer: "doc",
    fabrication: "cad",
    environment: "ctx",
  };

  return (
    <span className="inline-flex h-8 shrink-0 items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-inset)] px-3">
      <span className="font-mono text-[10px] text-[var(--color-text-faint)]">{(index + 1).toString().padStart(2, "0")}</span>
      <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
      <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-secondary)]">{labels[visual]}</span>
    </span>
  );
}
