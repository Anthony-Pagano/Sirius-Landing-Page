import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { landingContent } from "@/content/landing";

export function FinalCtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,197,255,0.14),transparent_58%)]" />
      <Container>
        <div className="relative mx-auto max-w-4xl rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border-strong)] bg-[rgba(5,12,30,0.82)] px-6 py-10 text-center shadow-[0_0_90px_rgba(7,24,74,0.42)] backdrop-blur-xl md:px-12 md:py-14">
          <div className="mx-auto mb-8 h-24 w-24 rounded-full border border-[rgba(124,197,255,0.28)] bg-[radial-gradient(circle,rgba(78,224,255,0.2),rgba(6,9,18,0.9)_68%)] shadow-[0_0_46px_rgba(78,224,255,0.22)]" />
          <SectionLabel number="06">Request early access</SectionLabel>
          <div className="mx-auto mt-6 max-w-2xl">
            <h2 className="text-3xl leading-tight font-light text-white md:text-5xl">
              {landingContent.cta.title}
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{landingContent.cta.description}</p>
          </div>
          <div className="mx-auto mt-9 max-w-2xl text-left">
            <WaitlistForm />
          </div>
          <p className="mt-6 text-xs uppercase tracking-[0.22em] text-[var(--color-text-faint)]">
            {landingContent.cta.note}
          </p>
        </div>
      </Container>
    </section>
  );
}
