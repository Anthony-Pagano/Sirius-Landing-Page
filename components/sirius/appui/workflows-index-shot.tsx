import { AppEyebrow } from "./app-eyebrow";
import { WorkflowsTable } from "./workflows-table";
import type { AppPillTone } from "./app-pill";

const ROWS: {
  name: string;
  trigger: string;
  tone: AppPillTone;
  statusLabel: string;
  lastRun: string;
  runs: number;
}[] = [
  {
    name: "Weekly client update",
    trigger: "Manual",
    tone: "awaiting",
    statusLabel: "Awaiting input",
    lastRun: "2h ago",
    runs: 12,
  },
  {
    name: "Standup digest",
    trigger: "Mon 09:00",
    tone: "running",
    statusLabel: "Running",
    lastRun: "5m ago",
    runs: 48,
  },
  {
    name: "Meeting brief",
    trigger: "Per meeting",
    tone: "done",
    statusLabel: "Done",
    lastRun: "1h ago",
    runs: 96,
  },
  {
    name: "Research digest",
    trigger: "Daily 07:00",
    tone: "done",
    statusLabel: "Done",
    lastRun: "7h ago",
    runs: 140,
  },
  {
    name: "Inbox triage",
    trigger: "Per inbound",
    tone: "idle",
    statusLabel: "Idle",
    lastRun: "—",
    runs: 0,
  },
];

export function WorkflowsIndexShot() {
  return (
    <div
      className="flex h-full w-full flex-col p-5"
      style={{
        background: "var(--color-bg)",
        fontFamily: "var(--font-sans)",
        color: "var(--color-ink-1)",
      }}
    >
      {/* Header */}
      <AppEyebrow accent="warm">Workflows</AppEyebrow>
      <h3
        className="mt-2 text-[22px]"
        style={{
          color: "var(--color-ink-1)",
          fontFamily: "var(--font-display)",
          fontWeight: 400,
          letterSpacing: "-0.005em",
        }}
      >
        Workflows
      </h3>
      <p
        className="mt-1.5 text-[12px]"
        style={{ color: "var(--color-ink-2)" }}
      >
        Run any by name. Sirius lifts new ones from your conversations.
      </p>

      {/* Table */}
      <div className="mt-4 flex-1 min-h-0 overflow-hidden">
        <WorkflowsTable rows={ROWS} />
      </div>
    </div>
  );
}
