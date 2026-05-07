import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { DemoSection } from "@/components/sections/demo";
import { FinalCtaSection } from "@/components/sections/final-cta";
import { HeroSection } from "@/components/sections/hero";
import { ProblemSection } from "@/components/sections/problem";
import { ThesisSection } from "@/components/sections/thesis";
import { TrustStrip } from "@/components/sections/trust-strip";
import { UseCasesSection } from "@/components/sections/use-cases";
import { WhyVoiceSection } from "@/components/sections/why-voice";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <SiteHeader />
      <HeroSection />
      <TrustStrip />
      <ProblemSection />
      <ThesisSection />
      <DemoSection />
      <UseCasesSection />
      <WhyVoiceSection />
      <FinalCtaSection />
      <SiteFooter />
    </main>
  );
}
