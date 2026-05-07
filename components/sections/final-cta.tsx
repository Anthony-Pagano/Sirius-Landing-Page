import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { landingContent } from "@/content/landing";

export function FinalCtaSection() {
  return (
    <section id="cta" className="relative overflow-hidden py-20 md:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(155,214,229,0.12),transparent_58%)]" />
      <Container>
        <div className="relative mx-auto grid max-w-5xl gap-8 rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border-strong)] bg-[rgba(7,11,18,0.86)] p-6 shadow-[var(--shadow-panel)] backdrop-blur-xl md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div className="flex flex-col justify-between gap-8">
            <div>
              <SectionLabel number="06">Request early access</SectionLabel>
              <h2 className="font-display mt-6 text-3xl leading-tight font-light text-white md:text-5xl">
                {landingContent.cta.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">{landingContent.cta.description}</p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-black/18 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                Beta intake rule
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                The page must show validation, loading, success, error, and disabled states clearly. This build does not claim a real backend submission.
              </p>
            </div>
          </div>
          <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[#070b12] p-5 md:p-6">
            <div className="mb-6 flex items-center justify-between border-b border-[var(--color-border)] pb-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Private beta form</p>
              <span className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-text-faint)]">
                Client-only
              </span>
            </div>
            <WaitlistForm />
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
              {landingContent.cta.note}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
