// Sirius landing — §04 Use cases (personas + day timeline)

const LPUseCases = () => (
  <section style={{ position: 'relative', padding: '140px 56px' }}>
    <div style={{ maxWidth: 1280, margin: '0 auto' }}>
      <Eyebrow num="04" label="USE CASES" />
      <h2 style={{ marginTop: 22, fontSize: 56, fontWeight: 400, color: LP.ink, letterSpacing: -1.6, lineHeight: 1.05, maxWidth: 800 }}>
        [USE CASES HEADLINE — e.g. "What people use Sirius for."]
      </h2>

      <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
        {[
          { kind: 'The founder',    line: '[ONE LINE — e.g. "Ships releases, drafts standups, watches the cap table."]' },
          { kind: 'The investor',   line: '[ONE LINE — e.g. "Tracks tickers, summarises filings, drafts memos."]' },
          { kind: 'The professor',  line: '[ONE LINE — e.g. "Reads the inbox, drafts replies, queues weekly reviews."]' },
          { kind: 'The engineer',   line: '[ONE LINE — e.g. "Reviews PRs, runs nightly research, writes release notes."]' },
        ].map((p, i) => (
          <div key={i} style={{ border: '1px solid ' + LP.hairline, borderRadius: 14, padding: 20, background: 'rgba(255,255,255,0.012)' }}>
            <ImageSlot ratio="1/1" label={p.kind} caption={`Portrait or workspace shot for ${p.kind.toLowerCase()}.`} style={{ borderRadius: 10 }} />
            <div style={{ padding: '16px 4px 4px' }}>
              <div style={{ fontSize: 17, color: LP.ink, fontWeight: 500, letterSpacing: -0.2 }}>{p.kind}</div>
              <p style={{ marginTop: 8, fontSize: 13.5, color: LP.ink2, lineHeight: 1.5 }}>{p.line}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 80 }}>
        <div style={{ fontSize: 11, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2, fontWeight: 500 }}>A DAY · IN MOTION</div>
        <h3 style={{ marginTop: 14, fontSize: 36, fontWeight: 400, color: LP.ink, letterSpacing: -0.8, lineHeight: 1.15, maxWidth: 720 }}>
          [DAY HEADLINE — e.g. "From wake-up to wind-down, Sirius is the through-line."]
        </h3>

        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column' }}>
          {[
            { time: '06:42', title: '[MOMENT — e.g. "Morning brief"]',         body: '[1 sentence — overnight summary, what Sirius did while you slept.]', kind: 'AUTOMATION' },
            { time: '09:15', title: '[MOMENT — e.g. "Standup recap"]',         body: '[1 sentence — Sirius joins your standup, surfaces blockers.]',       kind: 'WORKFLOW' },
            { time: '12:30', title: '[MOMENT — e.g. "Invoice approval"]',      body: '[1 sentence — automation example, tied to a real loop closing.]',     kind: 'AUTOMATION' },
            { time: '17:00', title: '[MOMENT — e.g. "Ship the release"]',      body: '[1 sentence — workflow example with diff + commentary.]',             kind: 'WORKFLOW' },
            { time: '22:10', title: '[MOMENT — e.g. "Wind-down rollup"]',      body: '[1 sentence — what Sirius learned today, what\'s queued.]',           kind: 'BRIEF' },
          ].map((m, i, arr) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '120px 90px 1fr', gap: 32, padding: '24px 0', borderBottom: i < arr.length - 1 ? '1px solid ' + LP.hairline : 'none', alignItems: 'baseline' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 6, height: 6, borderRadius: 50, background: LP.cyan, boxShadow: '0 0 8px ' + LP.cyan }} />
                <span style={{ fontSize: 14, color: LP.cyan, fontFamily: LMONO, fontWeight: 500 }}>{m.time}</span>
              </div>
              <div style={{ fontSize: 10.5, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1.5 }}>{m.kind}</div>
              <div>
                <div style={{ fontSize: 20, color: LP.ink, fontWeight: 500, letterSpacing: -0.3 }}>{m.title}</div>
                <p style={{ marginTop: 6, fontSize: 14.5, color: LP.ink2, lineHeight: 1.55, maxWidth: 720 }}>{m.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { LPUseCases });
