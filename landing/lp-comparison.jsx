// Sirius landing — §05 Comparison (vs. chatbots)

const LPComparison = () => (
  <section style={{ position: 'relative', padding: '120px 56px', background: LP.bgWarm, borderTop: '1px solid ' + LP.hairline, borderBottom: '1px solid ' + LP.hairline }}>
    <div style={{ maxWidth: 1080, margin: '0 auto' }}>
      <Eyebrow num="05" label="WHY NOT JUST A CHATBOT" />
      <h2 style={{ marginTop: 22, fontSize: 48, fontWeight: 400, color: LP.ink, letterSpacing: -1.4, lineHeight: 1.1, maxWidth: 800 }}>
        [HEADLINE — e.g. "Chat is a window. Sirius is a presence."]
      </h2>

      <div style={{ marginTop: 48, border: '1px solid ' + LP.hairline, borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', background: 'rgba(255,255,255,0.025)', padding: '16px 24px', fontSize: 11, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1.5, borderBottom: '1px solid ' + LP.hairline }}>
          <div>DIMENSION</div>
          <div>[CHATBOTS]</div>
          <div style={{ color: LP.cyan }}>SIRIUS</div>
        </div>
        {[
          ['[DIMENSION — Memory]',      '[CHATBOT BEHAVIOR]',  '[SIRIUS BEHAVIOR]'],
          ['[DIMENSION — Initiative]',  '[CHATBOT BEHAVIOR]',  '[SIRIUS BEHAVIOR]'],
          ['[DIMENSION — Tools]',       '[CHATBOT BEHAVIOR]',  '[SIRIUS BEHAVIOR]'],
          ['[DIMENSION — Personality]', '[CHATBOT BEHAVIOR]',  '[SIRIUS BEHAVIOR]'],
        ].map((row, i, arr) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', padding: '20px 24px', borderBottom: i < arr.length - 1 ? '1px solid ' + LP.hairline : 'none', alignItems: 'baseline' }}>
            <div style={{ fontSize: 14, color: LP.ink, fontWeight: 500 }}>{row[0]}</div>
            <div style={{ fontSize: 13.5, color: LP.ink3, lineHeight: 1.5 }}>{row[1]}</div>
            <div style={{ fontSize: 13.5, color: LP.ink, lineHeight: 1.5 }}>{row[2]}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { LPComparison });
