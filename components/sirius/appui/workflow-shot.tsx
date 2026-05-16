import type { AppPillTone } from "./app-pill";
import type { AppIconName } from "./app-icon";
import { Rail } from "./rail";
import { TopBar } from "./top-bar";
import { DagMini } from "./dag-mini";
import type { DagStep } from "./dag-mini";
import { ChatPane } from "./chat-pane";
import type { ChatMsg } from "./chat-pane";
import { RecentRuns } from "./recent-runs";

export type WorkflowShotProps = {
  variant: "full" | "compact";
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
  railActive?: AppIconName;
};

export function WorkflowShot(props: WorkflowShotProps) {
  if (props.variant === "full") {
    return (
      <div
        className="flex h-full w-full"
        style={{
          background: "var(--color-bg)",
          fontFamily: "var(--font-sans)",
          color: "var(--color-ink-1)",
        }}
      >
        <Rail active={props.railActive ?? "flows"} />
        <div className="flex-1 min-w-0 flex flex-col">
          <TopBar
            breadcrumb={props.breadcrumb}
            title={props.title}
            tone={props.tone}
            statusLabel={props.statusLabel}
            trigger={props.trigger}
            runsMeta={props.runsMeta}
          />
          <main
            className="flex-1 min-h-0 grid gap-3 p-3"
            style={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,300px)" }}
          >
            {/* DAG pane */}
            <div
              className="rounded-[12px] p-4 overflow-hidden flex items-center"
              style={{
                background: "var(--color-surface-deep)",
                border: "1px solid var(--color-border)",
              }}
            >
              <DagMini steps={props.steps} />
            </div>
            {/* Chat pane */}
            <ChatPane
              header={props.chatHeader}
              messages={props.messages}
            />
          </main>
          {props.recentRuns && (
            <RecentRuns runs={props.recentRuns} />
          )}
        </div>
      </div>
    );
  }

  // compact variant
  return (
    <div
      className="flex h-full w-full"
      style={{
        background: "var(--color-bg)",
        fontFamily: "var(--font-sans)",
        color: "var(--color-ink-1)",
      }}
    >
      <div className="flex-1 min-w-0 flex flex-col">
        <TopBar
          breadcrumb={props.breadcrumb}
          title={props.title}
          tone={props.tone}
          statusLabel={props.statusLabel}
          trigger={props.trigger}
          runsMeta={props.runsMeta}
          compact
        />
        <div className="flex-1 min-h-0 flex flex-col gap-3 p-3">
          {/* DAG pane */}
          <div
            className="rounded-[12px] p-3 overflow-hidden shrink-0"
            style={{
              background: "var(--color-surface-deep)",
              border: "1px solid var(--color-border)",
            }}
          >
            <DagMini steps={props.steps} />
          </div>
          {/* Chat pane */}
          <div className="flex-1 min-h-0">
            <ChatPane
              header={props.chatHeader}
              messages={props.messages}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
