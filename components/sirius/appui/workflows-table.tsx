import { AppIcon } from "./app-icon";
import { AppPill } from "./app-pill";
import type { AppPillTone } from "./app-pill";

const HEADERS = ["", "Name", "Trigger", "Status", "Last run", "Runs", ""];

/**
 * WorkflowsTable — faithful static port of the app's workflows index table.
 *
 * Matches workflows/page.tsx table exactly:
 * - card: rounded-[12px] overflow-hidden surface-1 border
 * - thead th: text-left p-[12px_18px] 10.5px font-semibold uppercase
 *   letterSpacing 1.8 ink-4 surface-2 bg, borderBottom
 * - rows: borderBottom (last none)
 * - cells p-[12px_18px]: flows icon ink-3, name ink-1 medium, trigger ink-3,
 *   Pill, lastRun ink-3 tabular, runs ink-3 tabular, chevron (play icon) ink-4
 */
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
      style={{
        borderRadius: 12,
        overflow: "hidden",
        background: "var(--color-surface-1)",
        border: "1px solid var(--color-border)",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
        <thead>
          <tr>
            {HEADERS.map((h, i) => (
              <th
                key={i}
                style={{
                  textAlign: "left",
                  padding: "12px 18px",
                  fontFamily: "var(--font-sans)",
                  fontSize: 10.5,
                  letterSpacing: 1.8,
                  color: "var(--color-ink-4)",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  borderBottom: "1px solid var(--color-border)",
                  background: "var(--color-surface-2)",
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
              <td style={{ padding: "12px 18px", verticalAlign: "middle", color: "var(--color-ink-3)" }}>
                <AppIcon name="flows" size={14} />
              </td>
              {/* Name */}
              <td
                style={{
                  padding: "12px 18px",
                  verticalAlign: "middle",
                  color: "var(--color-ink-1)",
                  fontWeight: 500,
                  fontFamily: "var(--font-sans)",
                }}
              >
                {r.name}
              </td>
              {/* Trigger */}
              <td
                style={{
                  padding: "12px 18px",
                  verticalAlign: "middle",
                  color: "var(--color-ink-3)",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {r.trigger}
              </td>
              {/* Status */}
              <td style={{ padding: "12px 18px", verticalAlign: "middle" }}>
                <AppPill tone={r.tone} label={r.statusLabel} />
              </td>
              {/* Last run */}
              <td
                style={{
                  padding: "12px 18px",
                  verticalAlign: "middle",
                  color: "var(--color-ink-3)",
                  fontFamily: "var(--font-sans)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.lastRun}
              </td>
              {/* Runs */}
              <td
                style={{
                  padding: "12px 18px",
                  verticalAlign: "middle",
                  color: "var(--color-ink-3)",
                  fontFamily: "var(--font-sans)",
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.runs}
              </td>
              {/* Chevron */}
              <td
                style={{
                  padding: "12px 18px",
                  verticalAlign: "middle",
                  color: "var(--color-ink-4)",
                }}
              >
                <AppIcon name="play" size={12} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
