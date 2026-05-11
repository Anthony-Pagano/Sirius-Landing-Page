import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import type { ReactNode } from "react";

import { MotionProvider } from "@/components/ui/motion-provider";

import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  axes: ["opsz"],
  style: ["normal", "italic"],
  display: "swap",
  fallback: ["Iowan Old Style", "Georgia", "serif"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["Inter", "system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  title: "Sirius",
  description:
    "Voice-first orchestration for turning outcomes into workflows, automations, and real-world actions.",
  metadataBase: new URL("https://sirius.so"),
  openGraph: {
    title: "Sirius",
    description:
      "Voice-first orchestration for turning outcomes into workflows, automations, and real-world actions.",
    url: "https://sirius.so",
    siteName: "Sirius",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sirius",
    description:
      "Voice-first orchestration for turning outcomes into workflows, automations, and real-world actions.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable}`}>
      <body>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
