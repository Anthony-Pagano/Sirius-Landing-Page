"use client";

import { motion } from "motion/react";

import { Orb } from "@/components/sirius/orb";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function HeroSection() {
  return (
    <section id="hero" className="relative scroll-mt-24 overflow-hidden pt-12 pb-14 md:pt-16 md:pb-20 lg:min-h-[calc(100svh-64px)] lg:py-14">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[820px] w-[min(1240px,124vw)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_38%,rgba(var(--color-accent-strong-rgb),0.08),rgba(var(--color-warm-rgb),0.026)_36%,transparent_66%)]" />
      <Container className="relative grid items-center gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 xl:gap-12">
        <div className="relative z-10 max-w-[560px]">
          <SectionLabel number="00">Voice-first execution layer</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="font-display mt-5 max-w-[560px] text-5xl leading-[0.96] font-light text-balance text-[var(--color-text-primary)] sm:text-6xl md:text-[4.75rem] xl:text-[4.9rem]"
          >
            {landingContent.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-5 max-w-xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl"
          >
            {landingContent.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: "easeOut" }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <ButtonLink href="#cta">{landingContent.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#demo" variant="secondary">
              {landingContent.hero.secondaryCta}
            </ButtonLink>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26, ease: "easeOut" }}
            className="mt-7 grid gap-3 sm:grid-cols-3 lg:max-w-[620px]"
          >
            {landingContent.hero.proofPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-sm leading-5 text-[var(--color-text-secondary)]"
              >
                <span className="mb-2 block h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                {point}
              </div>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
            className="font-mono mt-6 border-t border-[var(--color-border)] pt-4 text-xs uppercase tracking-[0.18em] text-[var(--color-text-faint)]"
          >
            {landingContent.hero.trustLine}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          className="relative w-full max-w-[720px] justify-self-end"
        >
          <HeroExecutionArtifact />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroExecutionArtifact() {
  const { command } = landingContent.hero;

  return (
    <div className="relative rounded-[24px] border border-[var(--color-border-strong)] bg-[var(--color-surface-panel)] p-3 shadow-[var(--shadow-panel)] backdrop-blur-xl md:p-4">
      <div className="absolute -inset-px rounded-[28px] bg-[linear-gradient(135deg,rgba(var(--color-accent-rgb),0.22),transparent_34%,rgba(var(--color-warm-rgb),0.12)_78%,transparent)] opacity-60" />
      <div className="relative overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-error)]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-warning)]/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-success)]/80" />
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
            Operator preview · 14:32
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[220px_1fr]">
          <div className="border-b border-[var(--color-border)] p-4 lg:border-r lg:border-b-0">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Voice request
              </p>
              <p className="mt-3 text-base leading-7 text-[var(--color-text-primary)]">{`"${command.prompt}"`}</p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <ArtifactMetric label="Status" value={command.status} />
              <ArtifactMetric label="Route" value={command.route} />
            </div>
            <div className="mt-4 rounded-2xl border border-[var(--color-warning)]/24 bg-[var(--color-warm-soft)] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-warning)]">
                Confirmation rule
              </p>
              <p className="mt-2 text-sm leading-5 text-[var(--color-text-muted)]">
                External send, purchase, print, deploy, or device actuation requires human approval.
              </p>
            </div>
          </div>
          <div className="relative min-h-[350px] p-4 lg:min-h-[390px]">
            <HeroOrbFrame />
          </div>
        </div>
      </div>
    </div>
  );
}

function ArtifactMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-3">
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">{label}</p>
      <p className="mt-2 text-sm leading-5 text-[var(--color-text-secondary)]">{value}</p>
    </div>
  );
}

function HeroOrbFrame() {
  const labels = landingContent.hero.ringLabels;

  return (
    <div className="relative grid min-h-[330px] w-full place-items-center overflow-visible sm:min-h-[390px] lg:min-h-[390px]">
      <div className="absolute h-[clamp(300px,54vw,420px)] w-[clamp(300px,54vw,420px)] rounded-full border border-[var(--color-border)]" />
      <div className="absolute h-[clamp(230px,42vw,320px)] w-[clamp(230px,42vw,320px)] rounded-full border border-dashed border-[var(--color-border-strong)]" />
      <div className="absolute h-[clamp(170px,32vw,250px)] w-[clamp(170px,32vw,250px)] rounded-full border border-[var(--color-border)]" />
      <div className="absolute h-[clamp(280px,48vw,390px)] w-[clamp(280px,48vw,390px)] rounded-full bg-[radial-gradient(circle,rgba(var(--color-accent-rgb),0.075),transparent_62%)] blur-sm" />

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <LeaderLine side="top" />
        <LeaderLine side="right" />
        <LeaderLine side="bottom" />
        <LeaderLine side="left" />
      </div>

      <div className="relative z-10">
        <Orb />
      </div>

      <div className="pointer-events-none absolute inset-0 hidden lg:block">
        <RingLabel label={labels[0].label} detail={labels[0].detail} position="top" />
        <RingLabel label={labels[1].label} detail={labels[1].detail} position="right" />
        <RingLabel label={labels[2].label} detail={labels[2].detail} position="bottom" />
        <RingLabel label={labels[3].label} detail={labels[3].detail} position="left" />
      </div>

      <div className="absolute inset-x-0 bottom-0 grid grid-cols-2 gap-3 px-4 lg:hidden">
        {labels.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-text)]">{item.label}</span>
            <span className="text-[11px] text-[var(--color-text-faint)]">{item.detail}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaderLine({ side }: { side: "top" | "right" | "bottom" | "left" }) {
  const classes = {
    top: "left-1/2 top-[58px] h-[74px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(var(--color-accent-rgb),0.18)] to-transparent",
    right: "right-[50px] top-1/2 h-px w-[82px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(var(--color-accent-rgb),0.18)] to-transparent",
    bottom: "bottom-[58px] left-1/2 h-[74px] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[rgba(var(--color-accent-rgb),0.18)] to-transparent",
    left: "left-[50px] top-1/2 h-px w-[82px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[rgba(var(--color-accent-rgb),0.18)] to-transparent",
  };

  return <span className={`absolute ${classes[side]}`} />;
}

function RingLabel({
  label,
  detail,
  position,
}: {
  label: string;
  detail: string;
  position: "top" | "right" | "bottom" | "left";
}) {
  const positionClasses = {
    top: "left-1/2 top-4 -translate-x-1/2 text-center",
    right: "right-0 top-1/2 -translate-y-1/2 text-left",
    bottom: "bottom-4 left-1/2 -translate-x-1/2 text-center",
    left: "left-0 top-1/2 -translate-y-1/2 text-right",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: position === "top" ? -8 : 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
      className={`absolute max-w-[120px] ${positionClasses[position]}`}
    >
      <div className="inline-flex items-center gap-2">
        {(position === "right" || position === "bottom") && <NodeDot />}
        <div>
          <div className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-text-primary)]">{label}</div>
          <div className="mt-1 text-[11px] text-[var(--color-text-faint)]">{detail}</div>
        </div>
        {(position === "left" || position === "top") && <NodeDot />}
      </div>
    </motion.div>
  );
}

function NodeDot() {
  return <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_rgba(var(--color-accent-rgb),0.4)]" />;
}
