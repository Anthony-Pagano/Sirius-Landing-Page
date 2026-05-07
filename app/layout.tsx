import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
