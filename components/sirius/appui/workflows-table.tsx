import { AppIcon } from "./app-icon";
import { AppPill, AppPillTone } from "./app-pill";

const HEADERS = ["", "Name", "Trigger", "Status", "Last run", "Runs", ""];

export function WorkflowsTable({
  rows,
}: {
  rows: {
    name: string;
    trigger: string;
    tone: AppPillTone;
    statusLabel: string;
    lastRun: string;
    runs: number;
  }[];
}) {
  return (
    <div
      className="rounded-[var(--radius-md)] overflow-hidden"
      style={{
        background: "var(--color-surface-deep)",
        border: "1px solid var(--color-border)",
      }}
    >
      <table className="w-full border-collapse text-[12px]">
        <thead>
          <tr>
            {HEADERS.map((h, i) => (
              <th
                key={i}
                className="text-left px-4 py-3 text-[10px] font-semibold uppercase"
                style={{
                  letterSpacing: "0.14em",
                  color: "var(--color-ink-4)",
                  background: "var(--color-surface-2)",
                  borderBottom: "1px solid var(--color-border)",
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              style={{
                borderBottom:
                  i < rows.length - 1
                    ? "1px solid var(--color-border)"
                    : undefined,
              }}
            >
              {/* Icon col */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-3)]">
                <AppIcon name="flows" size={14} />
              </td>
              {/* Name */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-1)] font-medium">
                {r.name}
              </td>
              {/* Trigger */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-3)]">
                {r.trigger}
              </td>
              {/* Status */}
              <td className="px-4 py-3 align-middle">
                <AppPill tone={r.tone} label={r.statusLabel} />
              </td>
              {/* Last run */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-3)] tabular-nums">
                {r.lastRun}
              </td>
              {/* Runs */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-3)] tabular-nums">
                {r.runs}
              </td>
              {/* Chevron */}
              <td className="px-4 py-3 align-middle text-[var(--color-ink-4)]">
                <AppIcon name="play" size={12} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
