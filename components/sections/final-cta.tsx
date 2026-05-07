import { Orb } from "@/components/sirius/orb";
import { WaitlistForm } from "@/components/ui/waitlist-form";
import { landingContent } from "@/content/landing";

export function FinalCtaSection() {
  return (
    <section
      id="cta"
      className="relative isolate scroll-mt-24 overflow-hidden border-t border-[var(--color-border)] bg-[var(--color-bg-deep)] px-6 py-20 md:px-10 md:py-24 lg:min-h-screen lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_50%_60%,rgba(var(--color-accent-rgb),0.13),rgba(9,18,30,0.46)_34%,transparent_72%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--color-accent-rgb),0.1)_1px,transparent_1.5px)] bg-[size:48px_48px] opacity-35 [mask-image:linear-gradient(180deg,transparent,black_18%,black_82%,transparent)]" />

      <div className="mx-auto flex min-h-[calc(100svh-10rem)] max-w-[1500px] flex-col items-center justify-center text-center">
        <div className="relative mb-6 grid h-[210px] place-items-center md:mb-8 md:h-[260px]">
          <div className="pointer-events-none absolute h-[clamp(250px,28vw,420px)] w-[clamp(250px,28vw,420px)] rounded-full bg-[radial-gradient(circle,rgba(var(--color-accent-rgb),0.17),transparent_62%)] blur-xl" />
          <Orb className="h-[clamp(180px,20vw,260px)] w-[clamp(180px,20vw,260px)]" />
        </div>

        <h2 className="font-display max-w-[1500px] text-[clamp(2.85rem,9.2vw,9.4rem)] leading-[0.96] font-light tracking-normal text-balance text-[var(--color-text-primary)]">
          <span className="block md:inline">[ {landingContent.cta.title} ]</span>
        </h2>
        <p className="mt-7 max-w-3xl text-lg leading-8 text-[var(--color-text-secondary)] md:text-2xl">
          {landingContent.cta.description}
        </p>

        <div className="mt-10 w-full max-w-2xl">
          <WaitlistForm />
        </div>
        <p className="font-mono mt-9 text-xs uppercase tracking-[0.26em] text-[var(--color-text-faint)] md:text-sm">
          [{landingContent.cta.note}]
        </p>
      </div>
    </section>
  );
}
