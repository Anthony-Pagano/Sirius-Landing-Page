// Sirius landing — final CTA

const LPCta = () => (
  <section style={{ position: 'relative', padding: '160px 56px 140px', textAlign: 'center', overflow: 'hidden' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1200, height: 1200, background: 'radial-gradient(circle, rgba(124,197,255,0.16) 0%, transparent 45%)', pointerEvents: 'none' }} />
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <LandingOrb size={180} />
    </div>
    <h2 style={{ marginTop: 28, fontSize: 72, fontWeight: 400, color: LP.ink, letterSpacing: -2, lineHeight: 1.05, maxWidth: 880, margin: '28px auto 0' }}>
      [FINAL CTA HEADLINE — e.g. "Meet Sirius."]
    </h2>
    <p style={{ marginTop: 22, fontSize: 17, color: LP.ink2, maxWidth: 520, margin: '22px auto 0', lineHeight: 1.6 }}>
      [FINAL CTA COPY — 1 sentence. The promise, restated.]
    </p>
    <button style={{
      marginTop: 38, padding: '15px 30px', fontSize: 14.5, fontWeight: 500,
      color: LP.bg, background: LP.cyan, border: 'none', borderRadius: 999, cursor: 'pointer',
      fontFamily: LFONT, boxShadow: '0 0 60px rgba(124,197,255,0.45)',
    }}>Request access →</button>
    <div style={{ marginTop: 18, fontSize: 12, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1 }}>
      [WAITLIST NOTE — e.g. "Currently in private beta. ~2 week wait."]
    </div>
  </section>
);

Object.assign(window, { LPCta });
