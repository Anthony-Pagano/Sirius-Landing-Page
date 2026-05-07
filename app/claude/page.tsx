/* eslint-disable @next/next/no-sync-scripts */

const legacyScripts = [
  "lp-tokens.jsx",
  "lp-nav.jsx",
  "lp-hero.jsx",
  "lp-problem.jsx",
  "lp-system.jsx",
  "lp-demo.jsx",
  "lp-usecases.jsx",
  "lp-comparison.jsx",
  "lp-voices.jsx",
  "lp-faq.jsx",
  "lp-cta.jsx",
  "landing-page.jsx",
];

export default function ClaudeLandingPage() {
  return (
    <main style={{ minHeight: "100vh", background: "#060912" }}>
      <div id="claude-root" />

      <script
        src="https://unpkg.com/react@18/umd/react.development.js"
        crossOrigin="anonymous"
      />
      <script
        src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
        crossOrigin="anonymous"
      />
      <script src="https://unpkg.com/@babel/standalone/babel.min.js" />

      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.SiriusOrb = class SiriusOrb {
              constructor(canvas) {
                this.canvas = canvas;
                this.ctx = canvas.getContext("2d");
                this.frame = 0;
                this.raf = null;
                this.render = this.render.bind(this);
                this.render();
              }

              render() {
                const ctx = this.ctx;
                const w = this.canvas.width || 320;
                const h = this.canvas.height || 320;
                const cx = w / 2;
                const cy = h / 2;
                const radius = Math.min(w, h) * 0.36;
                this.frame += 0.012;

                ctx.clearRect(0, 0, w, h);
                const glow = ctx.createRadialGradient(cx, cy, radius * 0.1, cx, cy, radius * 1.4);
                glow.addColorStop(0, "rgba(124,197,255,0.2)");
                glow.addColorStop(0.55, "rgba(21,72,116,0.42)");
                glow.addColorStop(1, "rgba(124,197,255,0)");
                ctx.fillStyle = glow;
                ctx.beginPath();
                ctx.arc(cx, cy, radius * 1.45, 0, Math.PI * 2);
                ctx.fill();

                const core = ctx.createRadialGradient(cx - radius * 0.2, cy - radius * 0.25, radius * 0.08, cx, cy, radius);
                core.addColorStop(0, "rgba(238,241,247,0.48)");
                core.addColorStop(0.18, "rgba(124,197,255,0.65)");
                core.addColorStop(0.58, "rgba(18,56,91,0.72)");
                core.addColorStop(1, "rgba(6,9,18,0.88)");
                ctx.fillStyle = core;
                ctx.beginPath();
                ctx.arc(cx, cy, radius, 0, Math.PI * 2);
                ctx.fill();

                ctx.strokeStyle = "rgba(124,197,255,0.72)";
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(cx, cy, radius * (0.96 + Math.sin(this.frame) * 0.012), 0, Math.PI * 2);
                ctx.stroke();

                this.raf = window.requestAnimationFrame(this.render);
              }

              destroy() {
                if (this.raf) window.cancelAnimationFrame(this.raf);
              }
            };
          `,
        }}
      />

      {legacyScripts.map((file) => (
        <script key={file} type="text/babel" src={`/claude/legacy/${file}`} />
      ))}

      <script
        type="text/babel"
        dangerouslySetInnerHTML={{
          __html: `
            const root = ReactDOM.createRoot(document.getElementById("claude-root"));
            root.render(<SiriusLanding />);
          `,
        }}
      />
    </main>
  );
}
