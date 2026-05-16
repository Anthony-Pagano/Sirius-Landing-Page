import type { ReactNode } from "react";

export function ScaledShot({
  width,
  height,
  children,
}: {
  width: number;
  height: number;
  children: ReactNode;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ containerType: "size" }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          transform: `scale(calc(100cqw / ${width}))`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
