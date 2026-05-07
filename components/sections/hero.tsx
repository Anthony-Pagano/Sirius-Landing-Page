"use client";

import { motion } from "motion/react";

import { Orb } from "@/components/sirius/orb";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:min-h-[680px] md:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[760px] w-[min(1200px,120vw)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_50%_38%,rgba(124,197,255,0.15),rgba(124,197,255,0.04)_34%,transparent_64%)]" />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
        <div className="relative z-10">
          <SectionLabel number="00">Voice-first execution</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-4xl text-5xl leading-[0.98] font-light text-balance text-white sm:text-6xl md:text-7xl xl:text-8xl"
          >
            {landingContent.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: "easeOut" }}
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-text-muted)] md:text-xl"
          >
            {landingContent.hero.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <ButtonLink href="#cta">{landingContent.hero.primaryCta}</ButtonLink>
            <ButtonLink href="#demo" variant="secondary">
              {landingContent.hero.secondaryCta}
            </ButtonLink>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease: "easeOut" }}
            className="mt-8 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.22em] text-[var(--color-text-faint)]"
          >
            {landingContent.hero.trustLine}
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <HeroOrbFrame />
        </motion.div>
      </Container>
    </section>
  );
}

function HeroOrbFrame() {
  return (
    <div className="relative grid min-h-[460px] w-full place-items-center overflow-visible sm:min-h-[560px]">
      <div className="absolute h-[clamp(320px,78vw,540px)] w-[clamp(320px,78vw,540px)] rounded-full border border-white/10" />
      <div className="absolute h-[clamp(240px,56vw,390px)] w-[clamp(240px,56vw,390px)] rounded-full border border-dashed border-white/18" />
      <div className="absolute h-[clamp(320px,76vw,560px)] w-[clamp(320px,76vw,560px)] rounded-full bg-[radial-gradient(circle,rgba(124,197,255,0.13),transparent_62%)] blur-sm" />
      <div className="relative z-10">
        <Orb />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 grid grid-cols-1 gap-3 px-2 sm:grid-cols-2 lg:block">
        {landingContent.hero.chips.map((chip, index) => (
          <motion.div
            key={`${chip.kind}-${chip.title}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.42 + index * 0.08, ease: "easeOut" }}
            className={[
              "relative flex items-center gap-3 rounded-[10px] border border-[rgba(124,197,255,0.22)] bg-[rgba(6,9,18,0.82)] px-3 py-2 shadow-[0_0_24px_rgba(10,30,70,0.24)] backdrop-blur-md lg:absolute",
              index === 0 ? "lg:-left-2 lg:top-8" : "",
              index === 1 ? "lg:-right-2 lg:top-[32%]" : "",
              index === 2 ? "lg:left-8 lg:bottom-10" : "",
              index === 3 ? "lg:right-8 lg:bottom-24" : "",
            ].join(" ")}
          >
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{chip.kind}</span>
            <span className="h-3 w-px bg-white/16" />
            <span className="whitespace-nowrap text-xs text-[var(--color-text-muted)]">{chip.title}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
