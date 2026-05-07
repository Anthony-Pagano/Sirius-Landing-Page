import { landingContent } from "@/content/landing";
import { cn } from "@/lib/utils";

export function WorkflowPreview() {
  return (
    <div className="rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border)] bg-[rgba(4,8,14,0.82)] p-4 shadow-[var(--shadow-panel)] backdrop-blur-xl md:p-5">
      <div className="rounded-[var(--radius-panel)] border border-[var(--color-border)] bg-[#070b12]">
        <div className="flex items-center justify-between border-b border-[var(--color-border)] px-4 py-3">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
            Sirius operator console
          </p>
          <span className="rounded-full border border-[var(--color-warning)]/28 bg-[var(--color-warm-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--color-warning)]">
            Approval gated
          </span>
        </div>

        <div className="p-4 md:p-5">
          <div className="rounded-2xl border border-[var(--color-border)] bg-white/[0.035] p-4">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-[var(--color-accent)]">Voice request</p>
            <p className="mt-2 text-base leading-7 text-white/88">
          “Run the release workflow for sirius/api and ping me when CI is green.”
            </p>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {landingContent.demo.summary.map((item) => (
              <div key={item.label} className="rounded-2xl border border-[var(--color-border)] bg-black/20 p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
                  {item.label}
                </p>
                <p className="mt-2 text-base text-white/88">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {landingContent.workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 rounded-2xl border border-[var(--color-border)] bg-white/[0.02] p-4 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div className="flex items-start gap-4">
                  <span className="font-mono mt-1 text-xs uppercase tracking-[0.2em] text-white/34">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-white/86">{step.title}</p>
                    <p className="mt-1 text-sm text-[var(--color-text-faint)]">
                      {step.state === "blocked" ? "Waiting for explicit human approval before deploy." : "Status visible to the user."}
                    </p>
                  </div>
                </div>
                <StatusBadge state={step.state} label={step.stateLabel} />
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_0.82fr]">
            <div className="rounded-2xl border border-[var(--color-border)] bg-black/20 p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Execution log</p>
              <div className="mt-4 space-y-3">
                {landingContent.demo.executionLog.map((line) => (
                  <p key={line} className="font-mono text-xs leading-6 text-white/62">
                    <span className="text-[var(--color-accent)]">$</span> {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-[var(--color-border)] bg-white/[0.025] p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">Action row</p>
              <div className="mt-4 grid gap-3">
                <button className="h-11 rounded-full bg-[var(--color-button)] px-4 text-sm font-medium uppercase tracking-[0.16em] text-[#06080d] transition hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                  Approve deploy
                </button>
                <button className="h-11 rounded-full border border-[var(--color-border-strong)] px-4 text-sm uppercase tracking-[0.16em] text-white/82 transition hover:border-[var(--color-accent)]/42 hover:bg-white/[0.05] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]">
                  Edit plan
                </button>
                <button disabled className="h-11 cursor-not-allowed rounded-full border border-[var(--color-border)] px-4 text-sm uppercase tracking-[0.16em] text-white/32">
                  Deploy locked
                </button>
              </div>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-[var(--color-border)] bg-black/16 p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">State coverage</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
        state === "error" && "border-[var(--color-error)]/36 bg-[rgba(240,163,163,0.09)] text-[var(--color-error)]",
        state === "handoff" && "border-[var(--color-info)]/36 bg-[rgba(155,214,229,0.08)] text-[var(--color-info)]",
        state === "loading" && "border-white/18 text-white/64",
        state === "disabled" && "border-white/10 text-white/34",
        state === "next" && "border-white/12 text-white/48",
      )}
    >
      {label}
    </span>
  );
}
