import { AppPill } from "./app-pill";
import type { AppPillTone } from "./app-pill";
import { AppIcon } from "./app-icon";

export function TopBar({
  breadcrumb,
  title,
  tone,
  statusLabel,
  trigger,
  runsMeta,
  compact = false,
}: {
  breadcrumb: string;
  title: string;
  tone: AppPillTone;
  statusLabel: string;
  trigger: string;
  runsMeta: string;
  compact?: boolean;
}) {
  return (
    <div
      className={[
        "flex items-end justify-between gap-4",
        compact ? "px-4 py-3" : "px-5 py-3.5",
      ].join(" ")}
      style={{ borderBottom: "1px solid var(--color-border)" }}
    >
      {/* Left column */}
      <div className="min-w-0 flex-1">
        {/* Breadcrumb */}
        <div className="flex items-center gap-1.5 text-[11px] mb-1.5">
          <span
            className="font-medium"
            style={{ color: "var(--color-ink-3)" }}
          >
            Workflows
          </span>
          <span style={{ color: "var(--color-ink-4)" }}>/</span>
          <span
            className="font-medium truncate"
            style={{ color: "var(--color-ink-2)" }}
          >
            {breadcrumb}
          </span>
        </div>

        {/* Title */}
        <h2
          className={[compact ? "text-[18px]" : "text-[22px]", "leading-[1.1]"].join(" ")}
          style={{
            color: "var(--color-ink-1)",
            fontFamily: "var(--font-display)",
            fontWeight: 400,
            letterSpacing: "-0.005em",
          }}
        >
          {title}
        </h2>

        {/* Meta row */}
        <div className="flex items-center gap-3 flex-wrap mt-2">
          <AppPill tone={tone} label={statusLabel} />
          <span
            className="flex items-center gap-1.5 text-[11px] font-medium"
            style={{ color: "var(--color-ink-3)" }}
          >
            <AppIcon name="clock" size={11} />
            {trigger}
          </span>
          <span
            className="text-[11px] font-medium tabular-nums"
            style={{ color: "var(--color-ink-3)" }}
          >
            {runsMeta}
          </span>
        </div>
      </div>

      {/* Right: Run now button */}
      <button
        type="button"
        className="inline-flex items-center gap-1.5 h-8 px-3 rounded-[8px] text-[12px] font-medium shrink-0"
        style={{
          background: "var(--color-accent)",
          color: "var(--color-bg)",
        }}
      >
        <AppIcon name="play" size={11} />
        Run now
      </button>
    </div>
  );
}
