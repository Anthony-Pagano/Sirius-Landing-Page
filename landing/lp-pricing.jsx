// Sirius landing — §07 Pricing

const LPPricing = () => (
  <section style={{ position: 'relative', padding: '120px 56px', background: LP.bgCool, borderTop: '1px solid ' + LP.hairline, borderBottom: '1px solid ' + LP.hairline }}>
    <div style={{ maxWidth: 1080, margin: '0 auto', textAlign: 'center' }}>
      <Eyebrow num="07" label="PRICING" />
      <h2 style={{ marginTop: 22, fontSize: 48, fontWeight: 400, color: LP.ink, letterSpacing: -1.4, lineHeight: 1.1 }}>
        [HEADLINE — e.g. "One plan. Designed to be worth it."]
      </h2>
      <p style={{ marginTop: 14, fontSize: 15, color: LP.ink2, maxWidth: 540, margin: '14px auto 0', lineHeight: 1.6 }}>
        [SUBHEAD — 1 sentence on pricing philosophy.]
      </p>

      <div style={{ marginTop: 56, display: 'inline-block', textAlign: 'left', minWidth: 440, padding: '36px 40px', border: '1px solid ' + LP.hairline2, borderRadius: 18, background: 'linear-gradient(180deg, rgba(124,197,255,0.05) 0%, rgba(124,197,255,0.01) 100%)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1.5, background: `linear-gradient(90deg, transparent, ${LP.cyan}, transparent)` }} />
        <div style={{ fontSize: 11, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2, fontWeight: 500 }}>[TIER NAME — e.g. INDIVIDUAL]</div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'baseline', gap: 8 }}>
          <span style={{ fontSize: 60, color: LP.ink, fontWeight: 400, letterSpacing: -2 }}>[$XX]</span>
          <span style={{ fontSize: 14, color: LP.ink3 }}>/ month</span>
        </div>
        <ul style={{ marginTop: 22, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {['[FEATURE 1]', '[FEATURE 2]', '[FEATURE 3]', '[FEATURE 4]', '[FEATURE 5]'].map((f, i) => (
            <li key={i} style={{ display: 'flex', gap: 10, fontSize: 13.5, color: LP.ink2 }}>
              <span style={{ color: LP.cyan }}>+</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
        <button style={{
          marginTop: 28, width: '100%', padding: '13px 18px', fontSize: 13.5, fontWeight: 500,
          color: LP.bg, background: LP.cyan, border: 'none', borderRadius: 999, cursor: 'pointer', fontFamily: LFONT,
        }}>Request access</button>
      </div>
    </div>
  </section>
);

Object.assign(window, { LPPricing });
