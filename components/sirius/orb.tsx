"use client";

import { motion } from "motion/react";

export function Orb() {
  return (
    <div className="relative flex h-[420px] w-full items-center justify-center">
      <div className="absolute h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(80,135,255,0.14),transparent_68%)] blur-3xl" />
      <motion.div
        animate={{ scale: [1, 1.03, 1], opacity: [0.9, 1, 0.92] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="relative h-[280px] w-[280px] rounded-full border border-[rgba(125,208,255,0.42)] bg-[radial-gradient(circle_at_50%_35%,rgba(133,182,255,0.2),rgba(9,18,42,0.68)_65%,rgba(4,9,24,0.94)_100%)] shadow-[var(--shadow-orb)]"
      >
        <div className="absolute inset-[8px] rounded-full border border-white/6" />
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.42),transparent_14%),radial-gradient(circle_at_72%_24%,rgba(125,208,255,0.38),transparent_11%),radial-gradient(circle_at_18%_70%,rgba(125,208,255,0.34),transparent_14%),radial-gradient(circle_at_80%_78%,rgba(255,255,255,0.28),transparent_14%)] blur-sm" />
      </motion.div>
    </div>
  );
}
