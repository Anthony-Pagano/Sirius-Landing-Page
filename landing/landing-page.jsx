// Sirius — landing page (assembly)
// Sections live in their own files: lp-tokens, lp-nav, lp-hero, lp-problem,
// lp-system, lp-demo, lp-usecases, lp-comparison, lp-voices, lp-pricing,
// lp-faq, lp-cta. They each export onto `window`, so this file just composes.

const SiriusLanding = () => (
  <div style={{
    width: '100%', minHeight: '100%', background: LP.bg, color: LP.ink,
    fontFamily: LFONT, position: 'relative', overflow: 'hidden',
  }}>
    {/* dotted texture */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: 'radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)',
      backgroundSize: '24px 24px', pointerEvents: 'none',
    }} />

    <LPNav />
    <LPHero />
    <LPProblem />
    <LPSystem />
    <LPDemo />
    <LPUseCases />
    <LPComparison />
    <LPVoices />
    <LPPricing />
    <LPFaq />
    <LPCta />
    <LPFooter />
  </div>
);

Object.assign(window, { SiriusLanding });
