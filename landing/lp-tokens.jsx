// Sirius landing — shared tokens + small primitives
// Palette, fonts, and reusable bits (orb, wordmark, eyebrow, image slot).
// Imported by every landing/*.jsx section file.

const LP = {
  bg:       '#060912',
  bgWarm:   '#0a0c14',
  bgCool:   '#080d18',
  ink:      '#eef1f7',
  ink2:     '#a3acbf',
  ink3:     '#5e677a',
  ink4:     '#363d4d',
  hairline: 'rgba(255,255,255,0.08)',
  hairline2:'rgba(255,255,255,0.16)',
  cyan:     '#7cc5ff',
  cyanDim:  '#3a86c8',
  warm:     '#d6a572',
};

const LFONT = "'Inter Tight', system-ui, -apple-system, sans-serif";
const LMONO = "'JetBrains Mono', ui-monospace, monospace";

const LandingOrb = ({ size = 320 }) => {
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!ref.current || typeof window.SiriusOrb !== 'function') return;
    const internal = Math.min(360, Math.max(120, Math.round(size)));
    ref.current.width = internal;
    ref.current.height = internal;
    const orb = new window.SiriusOrb(ref.current, { mouseEnabled: true });
    return () => orb.destroy();
  }, [size]);
  return <canvas ref={ref} style={{ width: size, height: size, display: 'block' }} />;
};

const LPMark = () => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
    <span style={{ width: 7, height: 7, borderRadius: 50, background: LP.cyan, boxShadow: '0 0 14px ' + LP.cyan }} />
    <span style={{ fontSize: 13, color: LP.ink, letterSpacing: 4, fontFamily: LMONO, fontWeight: 500 }}>SIRIUS</span>
  </div>
);

const Eyebrow = ({ num, label }) => (
  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, fontSize: 11, color: LP.ink3, fontFamily: LMONO, letterSpacing: 2.5, fontWeight: 500 }}>
    <span style={{ color: LP.cyan }}>{num}</span>
    <span style={{ width: 24, height: 1, background: LP.hairline2 }} />
    <span>{label}</span>
  </div>
);

const ImageSlot = ({ ratio = '16/9', kind = 'image', label, caption, style }) => (
  <div style={{
    width: '100%', aspectRatio: ratio,
    border: '1px dashed ' + LP.hairline2, borderRadius: 14,
    background: 'linear-gradient(135deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.005) 100%)',
    position: 'relative', overflow: 'hidden',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    ...style,
  }}>
    <div style={{ position: 'absolute', inset: 18, border: '1px solid ' + LP.hairline, borderRadius: 8, pointerEvents: 'none' }} />
    {[[0,0],[1,0],[0,1],[1,1]].map((p,i)=>(
      <div key={i} style={{
        position: 'absolute',
        top:    p[1] === 0 ? 12 : 'auto', bottom: p[1] === 1 ? 12 : 'auto',
        left:   p[0] === 0 ? 12 : 'auto', right:  p[0] === 1 ? 12 : 'auto',
        width: 10, height: 10,
        borderTop:    p[1] === 0 ? '1px solid ' + LP.cyan : 'none',
        borderBottom: p[1] === 1 ? '1px solid ' + LP.cyan : 'none',
        borderLeft:   p[0] === 0 ? '1px solid ' + LP.cyan : 'none',
        borderRight:  p[0] === 1 ? '1px solid ' + LP.cyan : 'none',
      }} />
    ))}
    <div style={{ textAlign: 'center', padding: 24, position: 'relative' }}>
      <div style={{ fontSize: 10.5, color: LP.cyan, fontFamily: LMONO, letterSpacing: 2.5, fontWeight: 500 }}>
        {kind === 'video' ? '▶ VIDEO PLACEHOLDER' : '◇ IMAGE PLACEHOLDER'}
      </div>
      <div style={{ marginTop: 12, fontSize: 15, color: LP.ink, lineHeight: 1.4, fontWeight: 500, maxWidth: 420, margin: '12px auto 0' }}>
        {label}
      </div>
      {caption && (
        <div style={{ marginTop: 8, fontSize: 12, color: LP.ink3, lineHeight: 1.5, maxWidth: 380, margin: '8px auto 0' }}>
          {caption}
        </div>
      )}
    </div>
  </div>
);

Object.assign(window, { LP, LFONT, LMONO, LandingOrb, LPMark, Eyebrow, ImageSlot });
