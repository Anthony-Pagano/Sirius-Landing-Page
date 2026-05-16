import { ProductMock } from "@/components/ui/product-mock";
import { cn } from "@/lib/utils";

type StepState = "done" | "running" | "queued" | "gated" | "scheduled";

type Step = {
  label: string;
  detail?: string;
  state: StepState;
};

const STEPS: Step[] = [
  { label: "research team",       detail: "30 companies analysed",     state: "done" },
  { label: "find right person",   detail: "30 contacts identified",    state: "done" },
  { label: "shared connections",  detail: "18 / 30 checked",            state: "running" },
  { label: "tailored opener",     detail: "last project + your bio",   state: "queued" },
  { label: "send",                detail: "review queued openers",      state: "gated" },
  { label: "log to Notion",       detail: "STEP outreach · 2026 Q2",    state: "queued" },
  { label: "follow up · 5d",      detail: "if no reply",                state: "scheduled" },
];

function StatusPill({ state }: { state: StepState }) {
  const labels: Record<StepState, string> = {
    done:      "Done",
    running:   "Running",
    queued:    "Queued",
    gated:     "Awaiting review",
    scheduled: "Scheduled",
  };

  return (
    <span
      className={cn(
        "inline-flex h-6 items-center gap-1.5 rounded-full border px-2.5 font-mono text-[10px] uppercase tracking-[0.16em] shrink-0",
        state === "done" &&
          "border-[rgba(167,219,178,0.32)] bg-[rgba(167,219,178,0.06)] text-[var(--color-success)]",
        state === "running" &&
          "border-[rgba(108,216,255,0.36)] bg-[rgba(108,216,255,0.08)] text-[var(--color-state-listening-strong)]",
        state === "queued" &&
          "border-[var(--color-border)] text-[var(--color-text-faint)]",
        state === "gated" &&
          "border-[rgba(var(--color-warm-rgb),0.36)] bg-[rgba(var(--color-warm-rgb),0.08)] text-[var(--color-warm)]",
        state === "scheduled" &&
          "border-[var(--color-border)] text-[var(--color-text-faint)]",
      )}
    >
      {state === "running" && (
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-state-listening-strong)] motion-safe:animate-pulse" />
      )}
      {labels[state]}
    </span>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
        {label}
      </p>
      <p className="mt-1 text-[14px] text-[var(--color-text-primary)]">{value}</p>
    </div>
  );
}

export function WorkflowDagMock() {
  return (
    <ProductMock label="Workflow · STEP cohort outreach" status="Running">
      <div className="grid grid-cols-3 gap-4">
        <Meta label="Trigger" value="voice · weekly" />
        <Meta label="Last run" value="2h ago" />
        <Meta label="Progress" value="18 / 30" />
      </div>

      <div className="mt-6 pt-5 border-t border-[var(--color-border)]">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-text-faint)]">
          Steps
        </p>

        <div className="mt-3 divide-y divide-[var(--color-border)]">
          {STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-4 py-3">
              <span className="font-mono text-[10.5px] text-[var(--color-text-faint)] w-6 shrink-0">
                {(i + 1).toString().padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[14px] text-[var(--color-text-primary)]">{step.label}</p>
                {step.detail && (
                  <p className="mt-0.5 text-[12px] text-[var(--color-text-faint)]">{step.detail}</p>
                )}
              </div>
              <StatusPill state={step.state} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 pt-4 border-t border-[var(--color-border)]">
        <p className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[var(--color-accent)]">
          Latest opener · drafted
        </p>
        <p className="mt-2 font-display-italic text-[13.5px] leading-[1.55] text-[var(--color-text-secondary)]">
          &ldquo;Hi Mira — saw your work on Coda&apos;s mobile editor. Coming from dev-tools myself, I&apos;d love to compare notes on what shipped vs. what stayed in the spec…&rdquo;
        </p>
      </div>
    </ProductMock>
  );
}
