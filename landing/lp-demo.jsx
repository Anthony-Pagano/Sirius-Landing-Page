// Sirius landing — §03 Demo (video + frame grabs)

const LPDemo = () => (
  <section style={{ position: 'relative', padding: '140px 56px', background: LP.bgCool, borderTop: '1px solid ' + LP.hairline, borderBottom: '1px solid ' + LP.hairline }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 1200, height: 600, background: 'radial-gradient(ellipse 60% 100% at 50% 50%, rgba(124,197,255,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
    <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
      <Eyebrow num="03" label="DEMO" />
      <h2 style={{ marginTop: 22, fontSize: 64, fontWeight: 400, color: LP.ink, letterSpacing: -1.8, lineHeight: 1.05, maxWidth: 880 }}>
        [DEMO HEADLINE — e.g. "Watch a morning with Sirius."]
      </h2>
      <p style={{ marginTop: 22, fontSize: 17, color: LP.ink2, lineHeight: 1.6, maxWidth: 620 }}>
        [DEMO SUBHEAD — 1 sentence. What the viewer is about to see and why it's worth 90 seconds.]
      </p>

      <div style={{ marginTop: 56 }}>
        <ImageSlot
          ratio="16/9"
          kind="video"
          label="Product demo video"
          caption="90-second walkthrough: open Sirius → quiet 'all caught up' state → ask it to ship a release → watch the workflow run → end on the orb. Autoplay-on-scroll, muted, with caption track."
          style={{ background: 'linear-gradient(135deg, rgba(124,197,255,0.05), rgba(255,255,255,0.01))' }}
        />
      </div>

      <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {[
          { t: '00:12', label: 'Quiet state',     cap: 'Frame 1: Sirius all caught up — orb at rest.' },
          { t: '00:34', label: 'You ask',         cap: 'Frame 2: You speak; chips appear.' },
          { t: '01:08', label: 'Sirius works',    cap: 'Frame 3: Workflow running — pipeline + diff.' },
        ].map((f, i) => (
          <div key={i}>
            <ImageSlot ratio="16/10" label={f.label} caption={f.cap} style={{ borderRadius: 10 }} />
            <div style={{ marginTop: 10, fontSize: 11, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1, display: 'flex', justifyContent: 'space-between' }}>
              <span>{f.t}</span>
              <span>FRAME {i+1}/3</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { LPDemo });
