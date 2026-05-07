"use client";

import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";
import { OrbAudioProvider } from "@/components/sirius/orb-audio-context";
import { MicPermissionModal } from "@/components/sirius/mic-permission-modal";

export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <OrbAudioProvider>
        {children}
        <MicPermissionModal />
      </OrbAudioProvider>
    </MotionConfig>
  );
}
