import { landingContent } from "@/content/landing";
import { cn } from "@/lib/utils";

export function WorkflowPreview() {
  return (
    <div className="min-w-0 w-full rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border)] bg-[var(--color-surface-panel)] p-2.5 shadow-[var(--shadow-panel)] backdrop-blur-xl md:p-3">
      <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
            Sirius operator console
          </p>
          <span className="rounded-full border border-[var(--color-warning)]/28 bg-[var(--color-warm-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-warning)]">
            Approval gated
          </span>
        </div>

        <div className="grid gap-3 p-3 md:p-4 xl:grid-cols-[0.82fr_1.18fr]">
          <div className="grid gap-3">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Voice request</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-text-primary)] md:text-[15px]">
                “Run the release workflow for sirius/api and ping me when CI is green.”
              </p>
            </div>

            <div className="grid gap-2 sm:grid-cols-3 xl:grid-cols-1">
              {landingContent.demo.summary.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
                    {item.label}
                  </p>
                  <p className="mt-1.5 text-sm text-[var(--color-text-primary)]">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Execution log</p>
              <div className="mt-3 space-y-2">
                {landingContent.demo.executionLog.map((line) => (
                  <p key={line} className="font-mono text-[11px] leading-5 text-[var(--color-text-muted)]">
                    <span className="text-[var(--color-accent)]">$</span> {line}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="grid gap-3">
            <div className="grid gap-2.5">
              {landingContent.workflowSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="grid gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-3 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono mt-1 text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-disabled)]">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-sm text-[var(--color-text-primary)] md:text-[15px]">{step.title}</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-text-faint)]">
                        {step.state === "blocked" ? "Waiting for explicit human approval before deploy." : "Status visible to the user."}
                      </p>
                    </div>
                  </div>
                  <StatusBadge state={step.state} label={step.stateLabel} />
                </div>
              ))}
            </div>

            <div className="grid gap-3 md:grid-cols-[1fr_1.25fr] xl:grid-cols-[0.92fr_1.08fr]">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Action row</p>
                <div className="mt-3 grid gap-2">
                  <button className="h-10 rounded-full bg-[var(--color-primary)] px-4 text-xs font-medium uppercase tracking-[0.16em] text-[var(--color-text-inverse)] transition hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]">
                    Approve deploy
                  </button>
                  <button className="h-10 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-secondary)] px-4 text-xs uppercase tracking-[0.16em] text-[var(--color-text-secondary)] transition hover:border-[rgba(var(--color-accent-rgb),0.42)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]">
                    Edit plan
                  </button>
                  <button disabled className="h-10 cursor-not-allowed rounded-full border border-[var(--color-disabled-border)] bg-[var(--color-disabled-bg)] px-4 text-xs uppercase tracking-[0.16em] text-[var(--color-text-disabled)]">
                    Deploy locked
                  </button>
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">State coverage</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    ["done", "Done"],
                    ["active", "Active"],
                    ["next", "Next"],
                    ["blocked", "Blocked"],
                    ["error", "Error"],
                    ["handoff", "Handoff"],
                    ["loading", "Loading"],
                    ["disabled", "Disabled"],
                  ].map(([state, label]) => (
                    <StatusBadge key={state} state={state} label={label} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ state, label }: { state: string; label: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-8 items-center justify-center rounded-full border px-3 font-mono text-[10px] uppercase tracking-[0.16em]",
        state === "done" && "border-[var(--color-success)]/32 text-[var(--color-success)]",
        state === "active" && "border-[var(--color-accent)]/34 bg-[var(--color-accent-soft)] text-[var(--color-accent)]",
        state === "blocked" && "border-[var(--color-warning)]/36 bg-[var(--color-warm-soft)] text-[var(--color-warning)]",
        state === "error" && "border-[var(--color-error)]/36 bg-[var(--color-error-soft)] text-[var(--color-error)]",
        state === "handoff" && "border-[var(--color-info)]/36 bg-[var(--color-info-soft)] text-[var(--color-info)]",
        state === "loading" && "border-[var(--color-border-strong)] text-[var(--color-text-secondary)]",
        state === "disabled" && "border-[var(--color-disabled-border)] bg-[var(--color-disabled-bg)] text-[var(--color-text-disabled)]",
        state === "next" && "border-[var(--color-border)] text-[var(--color-text-muted)]",
      )}
    >
      {label}
    </span>
  );
}
