"use client";

import { motion } from "motion/react";
import { useState } from "react";

import { ProblemVisual } from "@/components/sirius/problem-visuals";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";
import { cn } from "@/lib/utils";

export function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="problem" className="scroll-mt-24 overflow-hidden border-y border-[var(--color-border)] bg-[rgba(8,11,17,0.64)] py-16 md:py-24 lg:py-28">
      <Container>
        <SectionLabel number="01">Why this exists</SectionLabel>
        <div className="mt-6 max-w-3xl">
          <h2 className="font-display text-3xl font-light leading-tight text-white md:text-5xl">
            The problem is not intelligence. It is follow-through.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
            Most assistants generate answers and leave the operational handoff to the user. Sirius is designed around the gap between suggestion and completed action.
          </p>
        </div>

        <div className="relative mt-14 hidden lg:block">
          <div className="absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(155,214,229,0.34),transparent)]" />
          <motion.div
            className="absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(155,214,229,0.72),transparent)]"
            animate={{ opacity: [0.16, 0.5, 0.16] }}
            transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />

          <div className="space-y-12">
            {landingContent.problemMap.map((item, index) => {
              const isActive = activeIndex === index;
              const visualFirst = index !== 1;

              return (
                <ProblemMapRow
                  key={item.question}
                  active={isActive}
                  index={index}
                  onEnter={() => setActiveIndex(index)}
                  onLeave={() => setActiveIndex(null)}
                  visualFirst={visualFirst}
                  item={item}
                />
              );
            })}
          </div>
        </div>

        <div className="relative mt-12 lg:hidden">
          <div className="absolute bottom-10 left-4 top-6 w-px bg-[linear-gradient(180deg,rgba(155,214,229,0.08),rgba(155,214,229,0.42),rgba(155,214,229,0.08))]" />
          <motion.div
            className="absolute bottom-10 left-4 top-6 w-px bg-[linear-gradient(180deg,transparent,rgba(155,214,229,0.86),transparent)]"
            animate={{ opacity: [0.12, 0.45, 0.12] }}
            transition={{ duration: 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
          <div className="space-y-8">
            {landingContent.problemMap.map((item, index) => (
              <ProblemMobileNode
                key={item.question}
                active={activeIndex === index}
                index={index}
                item={item}
                onEnter={() => setActiveIndex(index)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

type ProblemMapItem = (typeof landingContent.problemMap)[number];

type ProblemMapRowProps = {
  active: boolean;
  index: number;
  item: ProblemMapItem;
  onEnter: () => void;
  onLeave: () => void;
  visualFirst: boolean;
};

function ProblemMapRow({ active, index, item, onEnter, onLeave, visualFirst }: ProblemMapRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.72, delay: index * 0.12, ease: "easeOut" }}
      className="relative grid min-h-[220px] grid-cols-[1fr_108px_1fr] items-center gap-8"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
        <ConnectorBranch active={active} side="left" />
        <ConnectorBranch active={active} side="right" />
      <SpineNode active={active} label={(index + 1).toString().padStart(2, "0")} />

      <div className={cn("flex", visualFirst ? "justify-end" : "justify-start")}>
        {visualFirst ? (
          <ProblemVisual type={item.visual} active={active} />
        ) : (
          <ProblemGapCard item={item} active={active} />
        )}
      </div>

      <div />

      <div className={cn("flex", visualFirst ? "justify-start" : "justify-end")}>
        {visualFirst ? (
          <ProblemGapCard item={item} active={active} />
        ) : (
          <ProblemVisual type={item.visual} active={active} />
        )}
      </div>
    </motion.div>
  );
}

function ProblemMobileNode({
  active,
  index,
  item,
  onEnter,
  onLeave,
}: {
  active: boolean;
  index: number;
  item: ProblemMapItem;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.64, delay: index * 0.1, ease: "easeOut" }}
      className="relative grid grid-cols-[34px_1fr] gap-5"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <div className="relative pt-7">
        <div
          className={cn(
            "absolute left-4 top-8 h-px w-10 bg-[rgba(155,214,229,0.28)] transition duration-500",
            active && "bg-[rgba(155,214,229,0.82)] shadow-[0_0_16px_rgba(101,215,242,0.58)]",
          )}
        />
        <div
          className={cn(
            "relative z-10 grid h-8 w-8 place-items-center rounded-full border text-[10px] text-white/46 transition duration-500",
            active
              ? "border-[rgba(155,214,229,0.8)] bg-[rgba(155,214,229,0.14)] text-white shadow-[0_0_24px_rgba(101,215,242,0.32)]"
              : "border-[rgba(155,214,229,0.24)] bg-[rgba(5,12,30,0.85)]",
          )}
        >
          {(index + 1).toString().padStart(2, "0")}
        </div>
      </div>

      <div className="space-y-5">
        <ProblemGapCard item={item} active={active} />
        <ProblemVisual type={item.visual} active={active} />
      </div>
    </motion.div>
  );
}

function ProblemGapCard({ item, active }: { item: ProblemMapItem; active: boolean }) {
  return (
    <article
      tabIndex={0}
      className={cn(
        "max-w-[440px] rounded-[var(--radius-panel)] border bg-[rgba(7,12,20,0.78)] p-6 outline-none backdrop-blur-xl transition duration-500 focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]",
        active
          ? "border-[rgba(155,214,229,0.52)] shadow-[0_0_54px_rgba(101,215,242,0.16)]"
          : "border-[var(--color-border)] shadow-[0_0_40px_rgba(5,12,30,0.22)]",
      )}
    >
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-[var(--cyan)]">{item.kicker}</p>
        <h3 className="mt-3 text-lg font-light leading-snug text-white md:text-xl">{item.question}</h3>
      </div>
      <dl className="mt-6 grid gap-3">
        <div className="rounded-2xl border border-[var(--color-border)] bg-black/18 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">Current AI gap</dt>
          <dd className="mt-2 text-sm leading-6 text-white/78">{item.gap}</dd>
        </div>
        <div className="rounded-2xl border border-[var(--color-accent)]/22 bg-[var(--color-accent-soft)] p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
            Sirius follow-through
          </dt>
          <dd className="mt-2 text-sm leading-6 text-white/82">{item.followThrough}</dd>
        </div>
        <div className="rounded-2xl border border-[var(--color-border)] bg-black/18 p-4">
          <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">Surface affected</dt>
          <dd className="mt-2 text-sm leading-6 text-white/78">{item.surface}</dd>
        </div>
      </dl>
    </article>
  );
}

function ConnectorBranch({ active, side }: { active: boolean; side: "left" | "right" }) {
  return (
    <div
      className={cn(
        "absolute top-1/2 h-px w-[calc(50%_-_54px)] -translate-y-1/2 overflow-hidden transition duration-500",
        side === "left" ? "left-0" : "right-0",
        active
          ? "bg-[linear-gradient(90deg,transparent,rgba(155,214,229,0.86),transparent)] shadow-[0_0_18px_rgba(101,215,242,0.56)]"
          : "bg-[linear-gradient(90deg,transparent,rgba(155,214,229,0.24),transparent)]",
      )}
    >
      <motion.span
        className="absolute inset-y-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(241,244,250,0.7),transparent)]"
        animate={{ x: side === "left" ? ["240%", "-40%"] : ["-40%", "240%"], opacity: active ? [0.28, 0.9, 0.28] : [0.08, 0.22, 0.08] }}
        transition={{ duration: active ? 1.9 : 4.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}

function SpineNode({ active, label }: { active: boolean; label: string }) {
  return (
    <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
      <div
        className={cn(
          "grid h-12 w-12 place-items-center rounded-full border bg-[rgba(5,12,30,0.9)] text-[10px] text-white/48 transition duration-500",
          active
            ? "border-[rgba(155,214,229,0.8)] text-white shadow-[0_0_34px_rgba(101,215,242,0.38)]"
            : "border-[rgba(155,214,229,0.26)]",
        )}
      >
        {label}
      </div>
    </div>
  );
}
