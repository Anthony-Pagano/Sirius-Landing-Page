import { cn } from "@/lib/utils";

type ProblemVisualProps = {
  type: "printer" | "fabrication" | "environment";
  active?: boolean;
};

export function ProblemVisual({ type, active = false }: ProblemVisualProps) {
  return (
    <div
      className={cn(
        "relative grid aspect-[1.35] w-full max-w-[360px] place-items-center overflow-hidden rounded-[var(--radius-panel)] border bg-[rgba(6,14,34,0.48)] transition duration-500",
        active
          ? "border-[rgba(78,224,255,0.5)] shadow-[0_0_50px_rgba(78,224,255,0.18)]"
          : "border-[rgba(112,144,255,0.16)] shadow-[0_0_34px_rgba(8,20,58,0.24)]",
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(78,224,255,0.12),transparent_58%)]" />
      <div
        className={cn(
          "absolute inset-x-10 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(78,224,255,0.36),transparent)] transition duration-500",
          active && "bg-[linear-gradient(90deg,transparent,rgba(78,224,255,0.8),transparent)]",
        )}
      />
      {type === "printer" && <PrinterSilhouette active={active} />}
      {type === "fabrication" && <FabricationSilhouette active={active} />}
      {type === "environment" && <EnvironmentSilhouette active={active} />}
    </div>
  );
}

function PrinterSilhouette({ active }: { active: boolean }) {
  return (
    <svg className="relative z-10 h-[70%] w-[78%]" viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <VisualDefs />
      <path d="M86 63H214V28H86V63Z" stroke="url(#cyanStroke)" strokeWidth="2" opacity="0.65" />
      <path
        d="M67 72H233C249 72 259 82 259 98V150H41V98C41 82 51 72 67 72Z"
        stroke="url(#cyanStroke)"
        strokeWidth="2"
        opacity="0.85"
      />
      <path d="M73 150H227V194H73V150Z" stroke="url(#cyanStroke)" strokeWidth="2" opacity="0.72" />
      <path
        d="M96 162H204M96 176H182"
        stroke="rgba(241,244,250,0.42)"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="226" cy="104" r="6" fill={active ? "rgba(78,224,255,0.95)" : "rgba(78,224,255,0.5)"} />
      <path
        d="M99 64C100 83 114 90 134 91H166C186 90 200 83 201 64"
        stroke="rgba(95,227,154,0.38)"
        strokeWidth="1.5"
        strokeDasharray="4 8"
      />
    </svg>
  );
}

function FabricationSilhouette({ active }: { active: boolean }) {
  return (
    <svg className="relative z-10 h-[72%] w-[78%]" viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <VisualDefs />
      <path d="M55 42H245M70 42V167M230 42V167" stroke="url(#cyanStroke)" strokeWidth="2" opacity="0.78" />
      <path d="M101 77H199V112H101V77Z" stroke="url(#cyanStroke)" strokeWidth="2" opacity="0.78" />
      <path d="M150 112V133" stroke="rgba(241,244,250,0.62)" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M96 171H204C211 171 217 177 217 184H83C83 177 89 171 96 171Z"
        stroke="url(#cyanStroke)"
        strokeWidth="2"
        opacity="0.78"
      />
      <path
        d="M126 170C127 153 137 142 151 142C165 142 175 153 176 170"
        stroke="rgba(95,227,154,0.48)"
        strokeWidth="2"
      />
      <path
        d="M131 156H169M124 164H176"
        stroke="rgba(241,244,250,0.34)"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="150" cy="132" r={active ? "4.5" : "3.5"} fill="rgba(78,224,255,0.82)" />
    </svg>
  );
}

function EnvironmentSilhouette({ active }: { active: boolean }) {
  return (
    <svg className="relative z-10 h-[72%] w-[78%]" viewBox="0 0 300 220" fill="none" aria-hidden="true">
      <VisualDefs />
      <path
        d="M66 102L150 44L234 102V181H88V116H212V181"
        stroke="url(#cyanStroke)"
        strokeWidth="2"
        strokeLinejoin="round"
        opacity="0.78"
      />
      <path d="M113 151H139V181H113V151Z" stroke="rgba(241,244,250,0.38)" strokeWidth="1.5" />
      <path d="M168 122H198V145H168V122Z" stroke="rgba(241,244,250,0.38)" strokeWidth="1.5" />
      <path
        d="M72 71C99 53 121 48 150 48C179 48 201 53 228 71"
        stroke="rgba(95,227,154,0.36)"
        strokeWidth="1.4"
        strokeDasharray="4 8"
      />
      <DeviceNode cx={84} cy={74} active={active} />
      <DeviceNode cx={150} cy={45} active={active} />
      <DeviceNode cx={216} cy={74} active={active} />
    </svg>
  );
}

function DeviceNode({ cx, cy, active }: { cx: number; cy: number; active: boolean }) {
  return (
    <>
      <circle cx={cx} cy={cy} r="12" fill="rgba(78,224,255,0.08)" stroke="rgba(78,224,255,0.36)" />
      <circle cx={cx} cy={cy} r={active ? "4.5" : "3.5"} fill="rgba(78,224,255,0.82)" />
    </>
  );
}

function VisualDefs() {
  return (
    <defs>
      <linearGradient id="cyanStroke" x1="36" y1="26" x2="260" y2="194" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F1F4FA" stopOpacity="0.72" />
        <stop offset="0.45" stopColor="#4EE0FF" stopOpacity="0.92" />
        <stop offset="1" stopColor="#5FE39A" stopOpacity="0.46" />
      </linearGradient>
    </defs>
  );
}
