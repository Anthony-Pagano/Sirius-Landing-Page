export type DagStep = {
  type: string;
  title: string;
  state: "done" | "running" | "idle" | "gated";
};

function stepBorderColor(state: DagStep["state"]): string {
  switch (state) {
    case "done":
      return "var(--color-border-strong)";
    case "running":
      return "rgba(108,216,255,0.45)";
    case "gated":
      return "rgba(217,185,120,0.45)";
    case "idle":
      return "var(--color-border)";
  }
}

function dotColor(state: DagStep["state"]): string {
  switch (state) {
    case "done":
      return "var(--color-success)";
    case "running":
      return "var(--color-state-listening-strong)";
    case "gated":
      return "var(--color-accent)";
    case "idle":
      return "var(--color-ink-4)";
  }
}

function typeColor(state: DagStep["state"]): string {
  switch (state) {
    case "running":
      return "var(--color-state-listening-strong)";
    case "gated":
      return "var(--color-accent)";
    default:
      return "var(--color-ink-3)";
  }
}

function Connector() {
  return (
    <div className="flex items-center w-[26px] shrink-0">
      <svg
        width={26}
        height={12}
        viewBox="0 0 26 12"
        fill="none"
        aria-hidden
      >
        <path
          d="M0 6 H20"
          stroke="var(--color-accent)"
          strokeOpacity="0.45"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
        {/* Arrowhead */}
        <path
          d="M20 3.5 L26 6 L20 8.5"
          stroke="var(--color-accent)"
          strokeOpacity="0.45"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function DagMini({ steps }: { steps: DagStep[] }) {
  return (
    <div className="flex items-stretch gap-0 overflow-hidden">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-0">
          {/* Node card */}
          <div
            className="relative flex flex-col justify-between rounded-[12px] px-3 py-2.5 shrink-0 w-[150px] h-[74px]"
            style={{
              background: "var(--color-surface-2)",
              border: `1px solid ${stepBorderColor(step.state)}`,
            }}
          >
            {/* Top row: dot + type label */}
            <div className="flex items-center gap-1.5">
              <span
                className="inline-block w-[5px] h-[5px] rounded-full shrink-0"
                style={{
                  background: dotColor(step.state),
                  animation:
                    step.state === "running"
                      ? "sirius-pulse 1.6s ease-in-out infinite"
                      : undefined,
                }}
                aria-hidden
              />
              <span
                className="text-[9.5px] font-semibold uppercase truncate"
                style={{
                  letterSpacing: "0.12em",
                  color: typeColor(step.state),
                }}
              >
                {step.type}
              </span>
            </div>
            {/* Title */}
            <p
              className="text-[12px] font-medium leading-[1.3]"
              style={{ color: "var(--color-ink-1)" }}
            >
              {step.title}
            </p>
          </div>
          {/* Connector (not after last) */}
          {i < steps.length - 1 && <Connector />}
        </div>
      ))}
    </div>
  );
}
