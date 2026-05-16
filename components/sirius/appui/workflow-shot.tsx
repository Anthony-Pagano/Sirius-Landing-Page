import type { AppPillTone } from "./app-pill";
import { Rail } from "./rail";
import { TopBar } from "./top-bar";
import { DagMini } from "./dag-mini";
import type { DagStep } from "./dag-mini";
import { ChatPane } from "./chat-pane";
import type { ChatMsg } from "./chat-pane";
import { RecentRuns } from "./recent-runs";

const DEFAULT_RUNS: { tone: AppPillTone; label: string; when: string; dur: string }[] = [
  { tone: "done", label: "Done", when: "2h ago", dur: "1m 04s" },
  { tone: "done", label: "Done", when: "1d ago", dur: "58s" },
  { tone: "failed", label: "Failed", when: "3d ago", dur: "12s" },
];

export type WorkflowShotProps = {
  breadcrumb: string;
  title: string;
  tone: AppPillTone;
  statusLabel: string;
  trigger: string;
  runsMeta: string;
  steps: DagStep[];
  messages: ChatMsg[];
  chatHeader?: string;
  recentRuns?: { tone: AppPillTone; label: string; when: string; dur: string }[];
  railActive?: string;
};

/**
 * WorkflowShot — always renders the full workflow-detail workspace at 1360×850.
 *
 * Matches app workflows/[name]/page.tsx layout exactly:
 * - outer: flex, 1360×850, bg, font-sans
 * - Rail (72px)
 * - flex-1 flex-col: TopBar | main grid | RecentRuns footer
 * - main grid: gridTemplateColumns "minmax(0,1fr) minmax(400px,520px)", gap 20, p 20px 48px
 * - left DAG pane: rounded-12 surface-1 border flex items-center justify-center
 * - right: ChatPane
 * - footer: RecentRuns (always shown)
 *
 * No variant/compact — ONE faithful full-size rendering, uniformly scaled by ScaledShot.
 */
export function WorkflowShot({
  breadcrumb,
  title,
  tone,
  statusLabel,
  trigger,
  runsMeta,
  steps,
  messages,
  chatHeader,
  recentRuns,
  railActive,
}: WorkflowShotProps) {
  return (
    <div
      style={{
        display: "flex",
        width: 1360,
        height: 850,
        background: "var(--color-bg)",
        fontFamily: "var(--font-sans)",
        color: "var(--color-ink-1)",
        overflow: "hidden",
      }}
    >
      <Rail active={railActive ?? "flows"} />

      <div
        style={{
          flex: 1,
          minWidth: 0,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <TopBar
          breadcrumb={breadcrumb}
          title={title}
          tone={tone}
          statusLabel={statusLabel}
          trigger={trigger}
          runsMeta={runsMeta}
        />

        {/* Two-pane main — matches app exactly */}
        <main
          style={{
            flex: 1,
            minHeight: 0,
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(400px, 520px)",
            gap: 20,
            padding: "20px 48px 20px",
            overflow: "hidden",
          }}
        >
          {/* Left: DAG pane — dot-grid canvas texture matches the app */}
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "var(--color-surface-1)",
              backgroundImage:
                "radial-gradient(circle, var(--color-border-strong) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              backgroundPosition: "0 0",
              border: "1px solid var(--color-border)",
            }}
          >
            <DagMini steps={steps} />
          </div>

          {/* Right: Chat pane */}
          <ChatPane header={chatHeader} messages={messages} />
        </main>

        {/* Recent runs footer — always shown */}
        <RecentRuns runs={recentRuns ?? DEFAULT_RUNS} />
      </div>
    </div>
  );
}
