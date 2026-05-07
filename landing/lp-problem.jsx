// Sirius landing — §01 The problem

const LPProblem = () => (
  <section style={{ position: 'relative', padding: '120px 56px', background: LP.bgWarm, borderTop: '1px solid ' + LP.hairline, borderBottom: '1px solid ' + LP.hairline }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Eyebrow num="01" label="THE PROBLEM" />
      <div style={{ marginTop: 22, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'flex-start' }}>
        <div>
          <h2 style={{ fontSize: 56, fontWeight: 400, color: LP.ink, letterSpacing: -1.6, lineHeight: 1.05 }}>
            [PROBLEM HEADLINE — sharp, named.<br />e.g. "You're holding too many loops."]
          </h2>
          <p style={{ marginTop: 28, fontSize: 17, color: LP.ink2, lineHeight: 1.65, maxWidth: 540 }}>
            [PROBLEM PARAGRAPH — 3–4 sentences. Name the pain: scattered tools, AI that forgets, the mental tax of being your own operator. Make the reader feel seen.]
          </p>
        </div>

        <div style={{ paddingTop: 18 }}>
          <div style={{ fontSize: 11, color: LP.ink3, fontFamily: LMONO, letterSpacing: 2, marginBottom: 18 }}>LOOPS IN YOUR HEAD RIGHT NOW</div>
          {[
            '[LOOP 1 — e.g. "the Stripe invoice you keep meaning to pay"]',
            '[LOOP 2 — e.g. "Anya\'s reply waiting in drafts since Tuesday"]',
            '[LOOP 3 — e.g. "that NVDA earnings note you wanted to read"]',
            '[LOOP 4 — e.g. "the standup recap you owe the team"]',
            '[LOOP 5 — e.g. "the weekly review you haven\'t started"]',
            '[LOOP 6 — e.g. "the paper you saved 9 days ago"]',
          ].map((l, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 14, padding: '14px 0', borderBottom: '1px solid ' + LP.hairline }}>
              <span style={{ fontSize: 11, color: LP.ink4, fontFamily: LMONO, width: 18 }}>{String(i+1).padStart(2,'0')}</span>
              <span style={{ fontSize: 14.5, color: LP.ink2, lineHeight: 1.45, flex: 1 }}>{l}</span>
              <span style={{ fontSize: 10.5, color: LP.warm, fontFamily: LMONO, letterSpacing: 1 }}>OPEN</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { LPProblem });
