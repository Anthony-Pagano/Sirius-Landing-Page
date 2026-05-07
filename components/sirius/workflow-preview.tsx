import { landingContent } from "@/content/landing";

export function WorkflowPreview() {
  return (
    <div className="rounded-[calc(var(--radius-panel)+4px)] border border-[var(--color-border)] bg-[rgba(4,10,25,0.76)] p-6 shadow-[0_0_80px_rgba(4,16,52,0.32)] backdrop-blur-xl">
      <div className="flex items-center justify-between gap-6 border-b border-white/8 pb-5">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-white/44">Pipeline · ship release</p>
          <p className="mt-3 text-lg text-white/90">5 stages · ETA 4 min</p>
        </div>
        <div className="rounded-full border border-[var(--color-border)] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[var(--color-accent)]">
          In progress
        </div>
      </div>

      <div className="mt-6 space-y-5">
        {landingContent.workflowSteps.map((step, index) => (
          <div key={step.title} className="flex items-center justify-between gap-6 border-b border-white/6 pb-5 last:border-b-0 last:pb-0">
            <div className="flex items-center gap-4">
              <span className="text-xs uppercase tracking-[0.25em] text-white/34">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <p className="text-white/84">{step.title}</p>
            </div>
            <span
              className={
                step.state === "done"
                  ? "rounded-md border border-cyan-400/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300"
                  : step.state === "active"
                    ? "rounded-md border border-amber-300/30 px-3 py-1 text-xs uppercase tracking-[0.2em] text-amber-200"
                    : "rounded-md border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/42"
              }
            >
              {step.stateLabel}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
