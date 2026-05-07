"use client";

import { motion } from "motion/react";

import { Orb } from "@/components/sirius/orb";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { landingContent } from "@/content/landing";

export function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden py-20 md:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="relative z-10">
          <SectionLabel>Voice-first execution</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-6 max-w-4xl text-5xl leading-[0.95] font-light tracking-[-0.04em] text-balance text-white sm:text-6xl md:text-7xl"
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
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
          className="relative flex items-center justify-center"
        >
          <Orb />
        </motion.div>
      </Container>
    </section>
  );
}
