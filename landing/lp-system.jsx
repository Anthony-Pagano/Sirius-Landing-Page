// Sirius landing — §02 The system (3 primitives + memory belt)

const LPSystem = () => (
  <section style={{ position: 'relative', padding: '140px 56px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Eyebrow num="02" label="THE SYSTEM" />
      <h2 style={{ marginTop: 22, fontSize: 64, fontWeight: 400, color: LP.ink, letterSpacing: -1.8, lineHeight: 1.05, maxWidth: 900 }}>
        [SYSTEM HEADLINE — e.g. "Three primitives. One Sirius."]
      </h2>
      <p style={{ marginTop: 22, fontSize: 17, color: LP.ink2, lineHeight: 1.6, maxWidth: 620 }}>
        [SYSTEM SUBHEAD — 1–2 sentences. How the pieces fit together.]
      </p>

      <div style={{ marginTop: 56 }}>
        <ImageSlot
          ratio="21/9"
          label="System diagram"
          caption="One wide hero illustration: Sirius's memory (the orb) at the center, with workflows / automations / feeds emanating outward as named branches. Or a stylized screen-mosaic showing all three surfaces together."
        />
      </div>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
        {[
          { num: '01', title: 'Workflows',   desc: '[ONE SENTENCE — what a workflow is. e.g. "On-demand jobs you trigger by talking. Sirius runs research, drafts, releases — and shows its work."]', shotLabel: 'Workflow detail UI', shotCaption: 'Screenshot of a running workflow (e.g. ship-release): pipeline rail + Sirius commentary + diff view.' },
          { num: '02', title: 'Automations', desc: '[ONE SENTENCE — e.g. "Always-on agents that watch your world and act when conditions are met."]', shotLabel: 'Automation card UI',  shotCaption: 'Screenshot of an automation (e.g. NVDA stock-watch): trigger, last fired, recent actions.' },
          { num: '03', title: 'Feeds',       desc: '[ONE SENTENCE — e.g. "Curated streams Sirius assembles from sources you trust, summarised in your voice."]', shotLabel: 'Feed reading UI', shotCaption: 'Screenshot of a feed (e.g. Career): grouped sources, Sirius\'s daily summary, save-for-later.' },
        ].map((f) => (
          <div key={f.num} style={{ border: '1px solid ' + LP.hairline, borderRadius: 16, padding: 20, background: 'rgba(255,255,255,0.012)' }}>
            <ImageSlot ratio="4/3" label={f.shotLabel} caption={f.shotCaption} style={{ borderRadius: 10 }} />
            <div style={{ padding: '20px 6px 4px' }}>
              <div style={{ fontSize: 11, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2, fontWeight: 500 }}>{f.num} · {f.title.toUpperCase()}</div>
              <div style={{ marginTop: 12, fontSize: 26, color: LP.ink, fontWeight: 500, letterSpacing: -0.5 }}>{f.title}</div>
              <p style={{ marginTop: 12, fontSize: 14.5, color: LP.ink2, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 80, padding: '40px 40px', border: '1px solid ' + LP.hairline, borderRadius: 18, background: 'linear-gradient(180deg, rgba(124,197,255,0.04) 0%, transparent 100%)', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 11, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2, fontWeight: 500 }}>MEMORY · THE DIFFERENCE</div>
          <h3 style={{ marginTop: 14, fontSize: 36, fontWeight: 400, color: LP.ink, letterSpacing: -0.8, lineHeight: 1.15 }}>
            [MEMORY HEADLINE — e.g. "Each surface has its own mind. They share one heart."]
          </h3>
          <p style={{ marginTop: 16, fontSize: 15, color: LP.ink2, lineHeight: 1.65, maxWidth: 460 }}>
            [MEMORY COPY — 2–3 sentences. Per-channel context vs. globally shared knowledge. Why it matters: contexts don't bleed, but Sirius still knows you.]
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 360 }}>
          <svg viewBox="0 0 480 360" width="100%" height="360" style={{ maxWidth: 520 }}>
            <circle cx="240" cy="180" r="150" stroke={LP.hairline2} strokeWidth="1" fill="none" strokeDasharray="2 6" />
            <circle cx="240" cy="180" r="100" stroke={LP.hairline2} strokeWidth="1" fill="none" strokeDasharray="2 6" />
            <circle cx="240" cy="180" r="48" fill="url(#core-grad-3)" stroke={LP.cyan} strokeWidth="1.4" />
            <defs>
              <radialGradient id="core-grad-3" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#1c3556" />
                <stop offset="100%" stopColor="#060912" />
              </radialGradient>
            </defs>
            <text x="240" y="184" textAnchor="middle" fill={LP.ink} fontSize="11" fontFamily={LMONO} letterSpacing="1">GLOBAL</text>
            {[
              { x: 240, y: 30,  label: 'work' },
              { x: 410, y: 180, label: 'health' },
              { x: 240, y: 330, label: 'writing' },
              { x: 70,  y: 180, label: 'investing' },
              { x: 360, y: 80,  label: 'family' },
              { x: 120, y: 280, label: 'reading' },
            ].map((s, i) => (
              <g key={i}>
                <circle cx={s.x} cy={s.y} r="20" fill={LP.bg} stroke={LP.hairline2} strokeWidth="1" />
                <text x={s.x} y={s.y + 4} textAnchor="middle" fill={LP.ink2} fontSize="10" fontFamily={LMONO} letterSpacing="0.3">{s.label}</text>
              </g>
            ))}
          </svg>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { LPSystem });
