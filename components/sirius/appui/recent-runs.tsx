import { AppEyebrow } from "./app-eyebrow";
import { AppPill, AppPillTone } from "./app-pill";

export function RecentRuns({
  runs,
}: {
  runs: { tone: AppPillTone; label: string; when: string; dur: string }[];
}) {
  return (
    <div
      className="px-4 pt-3 pb-3"
      style={{ borderTop: "1px solid var(--color-border)" }}
    >
      <AppEyebrow accent="dim">Recent runs</AppEyebrow>
      <div className="flex gap-2 flex-wrap mt-2">
        {runs.map((run, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 px-3 py-2 rounded-[8px]"
            style={{
              background: "var(--color-surface-1)",
              border: "1px solid var(--color-border)",
            }}
          >
            <AppPill tone={run.tone} label={run.label} />
            <span className="text-[11px] tabular-nums text-[var(--color-ink-2)]">
              {run.when}
            </span>
            <span className="ml-auto text-[10.5px] tabular-nums text-[var(--color-ink-4)]">
              {run.dur}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
