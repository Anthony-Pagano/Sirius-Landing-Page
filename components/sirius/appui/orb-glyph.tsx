export function OrbGlyph({
  size = 22,
  hue = "cool",
}: {
  size?: number;
  hue?: "cool" | "warm";
}) {
  const cool = {
    c0: "rgba(155,225,255,0.95)",
    c1: "rgba(108,216,255,0.35)",
    glow: "rgba(108,216,255,0.30)",
  };
  const warm = {
    c0: "rgba(240,200,121,0.95)",
    c1: "rgba(217,185,120,0.35)",
    glow: "rgba(217,185,120,0.28)",
  };

  const { c0, c1, glow } = hue === "cool" ? cool : warm;
  const glowPx = Math.round(size * 0.5);

  return (
    <span
      aria-hidden
      style={{
        display: "inline-block",
        width: size,
        height: size,
        borderRadius: "9999px",
        background: `radial-gradient(circle at 35% 32%, ${c0}, ${c1} 55%, transparent 72%)`,
        boxShadow: `0 0 ${glowPx}px ${glow}`,
        flexShrink: 0,
      }}
    />
  );
}
