import { landingContent } from "@/content/landing";
import { cn } from "@/lib/utils";

export function WorkflowPreview() {
  return (
    <div className="min-w-0 w-full rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border)] bg-[var(--color-surface-panel)] p-2.5 shadow-[var(--shadow-panel)] backdrop-blur-xl md:p-3">
      <div className="overflow-hidden rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
              Sirius operator console
            </p>
            <p className="mt-1 text-xs text-[var(--color-text-muted)]">Release workflow · sirius/api · 14:32</p>
          </div>
          <span className="rounded-full border border-[var(--color-warning)]/32 bg-[var(--color-warm-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-warning)]">
            Deploy locked
          </span>
        </div>

        <div className="p-3 md:p-4">
          <div className="grid gap-3 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-raised)] p-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Voice request captured</p>
              <p className="mt-2 max-w-2xl text-base leading-7 text-[var(--color-text-primary)]">
                “Run the release workflow for sirius/api and ping me when CI is green.”
              </p>
            </div>
            <div className="grid gap-2 sm:grid-cols-3 lg:min-w-[390px]">
              {landingContent.demo.summary.map((item) => (
                <div key={item.label} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] px-3 py-2.5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-5 text-[var(--color-text-primary)]">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1.36fr)_minmax(250px,0.64fr)]">
            <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-4 py-3">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
                    Generated execution plan
                  </p>
                  <p className="mt-1 text-sm text-[var(--color-text-muted)]">Five steps, one human gate before deployment.</p>
                </div>
                <StatusBadge state="active" label="Live" />
              </div>

              <div className="divide-y divide-[var(--color-border)]">
                {landingContent.workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className={cn(
                      "grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_auto] sm:items-start",
                      step.state === "active" && "bg-[var(--color-accent-soft)]/60",
                      step.state === "blocked" && "bg-[var(--color-warm-soft)]/65",
                    )}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full border",
                          step.state === "done" && "border-[var(--color-success)] bg-[var(--color-success)]",
                          step.state === "active" && "border-[var(--color-accent)] bg-[var(--color-accent)] shadow-[0_0_16px_var(--color-accent)]",
                          step.state === "blocked" && "border-[var(--color-warning)] bg-[var(--color-warning)]",
                          step.state === "next" && "border-[var(--color-border-strong)] bg-transparent",
                        )}
                      />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--color-text-disabled)]">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                          <p className="text-sm font-medium text-[var(--color-text-primary)] md:text-[15px]">{step.title}</p>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-[var(--color-text-muted)]">{step.detail}</p>
                        {step.state === "blocked" && <ApprovalControls />}
                      </div>
                    </div>
                    <StatusBadge state={step.state} label={step.stateLabel} />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Evidence log</p>
                <div className="mt-4 space-y-3">
                  {landingContent.demo.executionLog.map((line) => (
                    <p key={line} className="flex gap-3 font-mono text-[11px] leading-5 text-[var(--color-text-muted)]">
                      <span className="text-[var(--color-accent)]">$</span>
                      <span>{line}</span>
                    </p>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-[var(--color-warning)]/26 bg-[var(--color-warm-soft)] p-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-warning)]">Human handoff</p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
                  Sirius keeps the deploy step paused, shows why it is blocked, and gives the operator the decision in context.
                </p>
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

function ApprovalControls() {
  return (
    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
      <button className="h-9 rounded-full bg-[var(--color-primary)] px-4 text-xs font-medium text-[var(--color-text-inverse)] transition hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]">
        Approve deploy
      </button>
      <button className="h-9 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-secondary)] px-4 text-xs text-[var(--color-text-secondary)] transition hover:border-[rgba(var(--color-accent-rgb),0.42)] hover:bg-[var(--color-secondary-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]">
        Edit plan
      </button>
      <span className="inline-flex h-9 items-center justify-center rounded-full border border-[var(--color-disabled-border)] bg-[var(--color-disabled-bg)] px-4 text-xs text-[var(--color-text-disabled)]">
        Deploy locked
      </span>
    </div>
  );
}
