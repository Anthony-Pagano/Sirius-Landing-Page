import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function TrustStrip() {
  return (
    <section className="scroll-mt-24 border-y border-[var(--color-border)] bg-black/20">
      <Container className="grid gap-3 py-4 sm:grid-cols-2 lg:grid-cols-5">
        {landingContent.hero.trustScaffold.map((item) => (
          <div key={item.label} className="rounded-2xl border border-[var(--color-border)] bg-white/[0.025] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-accent)]">{item.label}</p>
            <p className="mt-2 text-sm leading-5 text-[var(--color-text-muted)]">{item.detail}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}
