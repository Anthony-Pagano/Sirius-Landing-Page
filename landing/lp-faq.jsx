// Sirius landing — §08 FAQ

const LPFaq = () => (
  <section style={{ position: 'relative', padding: '120px 56px' }}>
    <div style={{ maxWidth: 880, margin: '0 auto' }}>
      <Eyebrow num="08" label="QUESTIONS" />
      <h2 style={{ marginTop: 22, fontSize: 44, fontWeight: 400, color: LP.ink, letterSpacing: -1.2, lineHeight: 1.15 }}>
        [HEADLINE — e.g. "What people ask first."]
      </h2>
      <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column' }}>
        {[
          { q: '[QUESTION 1 — e.g. "Where does my data live?"]',           a: '[ANSWER — 1–2 sentences.]' },
          { q: '[QUESTION 2 — e.g. "Which models does Sirius use?"]',     a: '' },
          { q: '[QUESTION 3 — e.g. "What can it connect to?"]',           a: '' },
          { q: '[QUESTION 4 — e.g. "How is this different from agents?"]',a: '' },
          { q: '[QUESTION 5 — e.g. "Can my team share Sirius?"]',         a: '' },
        ].map((row, i) => (
          <div key={i} style={{ padding: '24px 4px', borderTop: i === 0 ? '1px solid ' + LP.hairline : 'none', borderBottom: '1px solid ' + LP.hairline }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, cursor: 'pointer' }}>
              <span style={{ fontSize: 18, color: LP.ink, fontWeight: 500, letterSpacing: -0.2, flex: 1 }}>{row.q}</span>
              <span style={{ fontSize: 18, color: LP.cyan }}>+</span>
            </div>
            {i === 0 && row.a && (
              <p style={{ marginTop: 14, fontSize: 14.5, color: LP.ink2, lineHeight: 1.65, paddingRight: 32 }}>{row.a}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { LPFaq });
