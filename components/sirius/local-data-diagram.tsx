const leftItems = [
  { label: "Memories", meta: "local" },
  { label: "Conversations", meta: "local" },
  { label: "Files & references", meta: "local" },
];

const rightItems = [
  { label: "Workflow execution", meta: "on demand" },
  { label: "Recurring automations", meta: "scheduled" },
  { label: "Outbound briefings", meta: "scheduled" },
];

function PaneLabel({ children }: { children: string }) {
  return (
    <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-[var(--color-text-faint)]">
      {children}
    </span>
  );
}

function LaptopGlyph() {
  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      stroke="var(--color-text-secondary)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-3 mb-4"
    >
      <rect x="4" y="1" width="28" height="18" rx="2" />
      <rect x="1" y="20" width="34" height="3" rx="1.5" />
    </svg>
  );
}

function CloudGlyph() {
  return (
    <svg
      width="36"
      height="24"
      viewBox="0 0 36 24"
      fill="none"
      stroke="var(--color-text-secondary)"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="mt-3 mb-4"
    >
      <path d="M8 20 C4 20 2 17.5 2 15 C2 12.5 4 10.5 6.5 10.5 C6.5 10.5 6.5 10 6.5 9.5 C6.5 6.5 9 4 12 4 C14.5 4 16.5 5.5 17.5 7.5 C18 7 18.8 6.5 20 6.5 C22.5 6.5 24.5 8.5 24.5 11 C24.5 11 25 11 25.5 11 C28 11 30 13 30 15.5 C30 18 28 20 25.5 20 Z" />
    </svg>
  );
}

export function LocalDataDiagram() {
  return (
    <figure className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:gap-3 md:items-stretch">
      <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-5 md:p-6">
        <PaneLabel>Your machine</PaneLabel>
        <LaptopGlyph />
        <ul>
          {leftItems.map(({ label, meta }) => (
            <li
              key={label}
              className="flex items-center gap-3 py-2.5 border-b border-[var(--color-border)] last:border-b-0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]" />
              <span className="flex-1 text-[14px] text-[var(--color-text-primary)]">
                {label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
                {meta}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="hidden md:flex flex-col items-center justify-center px-2">
        <span className="font-display-italic text-[12px] text-[var(--color-text-faint)] mb-2 whitespace-nowrap">
          only when you ask it to
        </span>
        <div className="h-px w-12 bg-[var(--color-border-strong)]" />
        <svg
          width="12"
          height="8"
          viewBox="0 0 12 8"
          className="mt-1"
          stroke="var(--color-border-strong)"
          fill="none"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 1 L6 7 L10 1" />
        </svg>
      </div>

      <div className="rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface-inset)] p-5 md:p-6">
        <PaneLabel>Sirius cloud</PaneLabel>
        <CloudGlyph />
        <ul>
          {rightItems.map(({ label, meta }) => (
            <li
              key={label}
              className="flex items-center gap-3 py-2.5 border-b border-[var(--color-border)] last:border-b-0"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-warm)]" />
              <span className="flex-1 text-[14px] text-[var(--color-text-primary)]">
                {label}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-text-faint)]">
                {meta}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </figure>
  );
}
