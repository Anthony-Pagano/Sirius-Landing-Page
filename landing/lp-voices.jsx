// Sirius landing — §06 Voices (testimonials)

const LPVoices = () => (
  <section style={{ position: 'relative', padding: '120px 56px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Eyebrow num="06" label="VOICES" />
      <h2 style={{ marginTop: 22, fontSize: 44, fontWeight: 400, color: LP.ink, letterSpacing: -1.2, lineHeight: 1.15, maxWidth: 720 }}>
        [HEADLINE — e.g. "Early users on what changed."]
      </h2>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {[1,2,3].map((i) => (
          <div key={i} style={{ border: '1px solid ' + LP.hairline, borderRadius: 14, padding: '28px 28px 24px', background: 'rgba(255,255,255,0.012)', minHeight: 280 }}>
            <div style={{ fontSize: 28, color: LP.cyan, lineHeight: 1, fontWeight: 400, marginBottom: 10 }}>"</div>
            <div style={{ fontSize: 16, color: LP.ink, lineHeight: 1.55, fontWeight: 400, letterSpacing: -0.1 }}>
              [QUOTE {i} — 2–3 sentences. Specific outcome &gt; generic praise.]
            </div>
            <div style={{ marginTop: 24, paddingTop: 18, borderTop: '1px solid ' + LP.hairline, display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 50, border: '1px dashed ' + LP.hairline2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 9, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1 }}>[PIC]</div>
              <div>
                <div style={{ fontSize: 13, color: LP.ink, fontWeight: 500 }}>[NAME {i}]</div>
                <div style={{ fontSize: 11.5, color: LP.ink3, fontFamily: LMONO, letterSpacing: 0.3, marginTop: 2 }}>[TITLE @ COMPANY]</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { LPVoices });
