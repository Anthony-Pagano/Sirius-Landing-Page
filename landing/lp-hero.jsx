// Sirius landing — hero

const LPHero = () => (
  <section style={{ position: 'relative', padding: '40px 56px 100px' }}>
    <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 1200, height: 900, background: 'radial-gradient(ellipse 50% 50% at 50% 40%, rgba(124,197,255,0.16) 0%, rgba(124,197,255,0.04) 30%, transparent 60%)', pointerEvents: 'none' }} />

    <div style={{ position: 'relative', maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center', minHeight: 640 }}>
      <div>
        <div style={{ fontSize: 12, color: LP.cyan, fontFamily: LMONO, letterSpacing: 3, fontWeight: 500 }}>
          [TAGLINE — e.g. YOUR LIFE, 10×]
        </div>
        <h1 style={{
          marginTop: 22, fontSize: 88, fontWeight: 400, color: LP.ink,
          letterSpacing: -2.4, lineHeight: 1.0,
        }}>
          [HEADLINE — 6–10 words, 2 lines.<br />Last words can be in cyan for emphasis.]
        </h1>
        <p style={{ marginTop: 32, fontSize: 19, color: LP.ink2, lineHeight: 1.55, maxWidth: 540, fontWeight: 400 }}>
          [SUBHEAD — 1–2 sentences. The promise: an assistant that knows you, runs your workflows, watches your feeds, remembers what matters.]
        </p>
        <div style={{ marginTop: 40, display: 'flex', gap: 14, alignItems: 'center' }}>
          <button style={{
            padding: '14px 26px', fontSize: 14.5, fontWeight: 500, color: LP.bg,
            background: LP.cyan, border: 'none', borderRadius: 999, cursor: 'pointer',
            fontFamily: LFONT, boxShadow: '0 0 40px rgba(124,197,255,0.35)',
          }}>Request access →</button>
          <button style={{
            padding: '14px 22px', fontSize: 14, fontWeight: 500, color: LP.ink,
            background: 'transparent', border: '1px solid ' + LP.hairline2, borderRadius: 999, cursor: 'pointer',
            fontFamily: LFONT,
          }}>▶  Watch the 90-second tour</button>
        </div>
        <div style={{ marginTop: 44, paddingTop: 24, borderTop: '1px solid ' + LP.hairline, fontSize: 11.5, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1.5 }}>
          [TRUSTED BY — short line of customer types or names]
        </div>
      </div>

      <div style={{ position: 'relative', height: 540, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', width: 540, height: 540, borderRadius: '50%', border: '1px solid ' + LP.hairline }} />
        <div style={{ position: 'absolute', width: 380, height: 380, borderRadius: '50%', border: '1px dashed ' + LP.hairline2 }} />



        <div style={{ position: 'relative', zIndex: 1 }}>
          <LandingOrb size={300} />
        </div>

        {[
          { top: '4%',    left: '-2%',  anchor: { left: '50%', top: '100%' }, kind: 'WORKFLOW',   title: 'Ship the release' },
          { top: '32%',   left: '70%', anchor: { left: '0%',  top: '50%' },  kind: 'AUTOMATION', title: 'Watch NVDA' },
          { bottom: '4%', left: '14%',  anchor: { left: '50%', top: '0%' },   kind: 'FEED',       title: 'Career signals' },
        ].map((c, i) => (
          <div key={i} style={{
            position: 'absolute', top: c.top, bottom: c.bottom, left: c.left, right: c.right,
            padding: '8px 14px 8px 12px',
            border: '1px solid rgba(124,197,255,0.22)',
            borderRadius: 10, background: LP.bg,
            display: 'flex', alignItems: 'center', gap: 10,
            zIndex: 2,
          }}>
            <span style={{
              width: 5, height: 5, borderRadius: 50, background: LP.cyan,
              boxShadow: '0 0 8px ' + LP.cyan, flexShrink: 0,
            }} />
            <span style={{ fontSize: 11.5, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2, fontWeight: 600 }}>{c.kind}</span>
            <span style={{ width: 1, height: 12, background: LP.hairline2 }} />
            <span style={{ fontSize: 12, color: LP.ink2, fontWeight: 400, letterSpacing: 0, whiteSpace: 'nowrap' }}>{c.title}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { LPHero });
