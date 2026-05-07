// Sirius landing — top nav + footer

const LPNav = () => (
  <header style={{ position: 'relative', zIndex: 2, padding: '28px 56px', display: 'flex', alignItems: 'center', gap: 40 }}>
    <LPMark />
    <nav style={{ display: 'flex', gap: 28, marginLeft: 32, fontSize: 13.5, color: LP.ink2 }}>
      {['Product', 'How it works', 'Memory', 'Manifesto'].map((n) => (
        <span key={n} style={{ cursor: 'pointer' }}>{n}</span>
      ))}
    </nav>
    <span style={{ flex: 1 }} />
    <span style={{ fontSize: 13, color: LP.ink2, cursor: 'pointer' }}>Sign in</span>
    <button style={{
      padding: '9px 18px', fontSize: 13, fontWeight: 500, color: LP.bg,
      background: LP.cyan, border: 'none', borderRadius: 999, cursor: 'pointer',
      fontFamily: LFONT,
    }}>Request access</button>
  </header>
);

const LPFooter = () => (
  <footer style={{ position: 'relative', padding: '64px 56px 48px', borderTop: '1px solid ' + LP.hairline }}>
    <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr', gap: 40 }}>
      <div>
        <LPMark />
        <p style={{ marginTop: 18, fontSize: 13, color: LP.ink3, lineHeight: 1.6, maxWidth: 280 }}>
          [FOOTER TAGLINE — short.]
        </p>
      </div>
      {[
        { h: 'Product',   items: ['Workflows', 'Automations', 'Feeds', 'Memory', 'Changelog'] },
        { h: 'Company',   items: ['Manifesto', 'Team', 'Careers', 'Press'] },
        { h: 'Resources', items: ['Docs', 'API', 'Status', 'Security'] },
        { h: 'Legal',     items: ['Privacy', 'Terms', 'Trust'] },
      ].map((col) => (
        <div key={col.h}>
          <div style={{ fontSize: 11, color: LP.ink3, fontFamily: LMONO, letterSpacing: 1.5, fontWeight: 500, marginBottom: 16 }}>{col.h.toUpperCase()}</div>
          {col.items.map((i) => (
            <div key={i} style={{ fontSize: 13, color: LP.ink2, marginBottom: 10, cursor: 'pointer' }}>{i}</div>
          ))}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 56, paddingTop: 24, borderTop: '1px solid ' + LP.hairline, display: 'flex', alignItems: 'center', gap: 24, fontSize: 11.5, color: LP.ink3, fontFamily: LMONO, letterSpacing: 0.4 }}>
      <span>© 2026 Sirius Labs</span>
      <span>·</span>
      <span>[CITY]</span>
      <span style={{ flex: 1 }} />
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 6, height: 6, borderRadius: 50, background: LP.cyan, boxShadow: '0 0 8px ' + LP.cyan }} />
        all systems online
      </span>
    </div>
  </footer>
);

Object.assign(window, { LPNav, LPFooter });
