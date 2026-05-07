import { Container } from "@/components/ui/container";
import { landingContent } from "@/content/landing";

export function FinalCtaSection() {
  return (
    <section id="cta" className="py-20 md:py-28">
      <Container>
        <div className="rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border-strong)] bg-[var(--color-panel-strong)] px-8 py-10 shadow-[0_0_80px_rgba(7,24,74,0.35)] md:px-12 md:py-14">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-accent)]">Request early access</p>
          <div className="mt-6 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-light tracking-[-0.03em] text-white md:text-5xl">
                {landingContent.cta.title}
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-text-muted)]">
                {landingContent.cta.description}
              </p>
            </div>
            <form className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email address"
                className="h-14 flex-1 rounded-full border border-white/12 bg-white/6 px-6 text-white outline-none transition placeholder:text-white/34 focus:border-[var(--color-accent)]"
              />
              <button
                type="submit"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-accent)] px-7 text-sm font-medium uppercase tracking-[0.2em] text-slate-950 transition hover:brightness-110"
              >
                {landingContent.cta.buttonLabel}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
