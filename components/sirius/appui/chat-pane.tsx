import { OrbGlyph } from "./orb-glyph";
import { AppEyebrow } from "./app-eyebrow";
import { AppIcon } from "./app-icon";

export type ChatMsg = {
  role: "user" | "assistant";
  text: string;
};

export function ChatPane({
  header = "Chat with this workflow",
  subtitle = "Sirius knows what this workflow is",
  messages,
}: {
  header?: string;
  subtitle?: string;
  messages: ChatMsg[];
}) {
  return (
    <div
      className="flex h-full flex-col rounded-[12px] overflow-hidden"
      style={{
        background: "var(--color-surface-1)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Header bar */}
      <div
        className="flex items-center justify-between px-4 py-2.5 shrink-0"
        style={{ borderBottom: "1px solid var(--color-border)" }}
      >
        <AppEyebrow accent="dim">{header}</AppEyebrow>
        <span
          className="text-[10px] font-medium"
          style={{ color: "var(--color-ink-4)" }}
        >
          {subtitle}
        </span>
      </div>

      {/* Message list */}
      <div className="flex-1 min-h-0 overflow-hidden flex flex-col gap-3 px-3.5 py-3">
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} className="flex flex-row-reverse gap-2.5 items-start">
              {/* Avatar */}
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-medium"
                style={{
                  color: "var(--color-ink-2)",
                  border: "1px solid var(--color-border)",
                }}
              >
                Y
              </span>
              {/* Bubble */}
              <div
                className="max-w-[78%] px-3.5 py-2.5 rounded-[14px] text-[12.5px] leading-[1.5]"
                style={{
                  color: "var(--color-ink-1)",
                  background: "#4A331A",
                  border: "1px solid var(--color-border)",
                  boxShadow: "0 1px 0 rgba(0,0,0,0.18)",
                }}
              >
                {msg.text}
              </div>
            </div>
          ) : (
            <div key={i} className="flex gap-2.5 items-start">
              {/* Orb avatar */}
              <div className="shrink-0 pt-0.5">
                <OrbGlyph size={20} />
              </div>
              {/* Text */}
              <p
                className="max-w-[85%] text-[12.5px] leading-[1.55] pt-0.5"
                style={{ color: "var(--color-ink-1)" }}
              >
                {msg.text}
              </p>
            </div>
          )
        )}
      </div>

      {/* Composer */}
      <div
        className="flex items-center gap-2.5 px-3.5 py-3 shrink-0"
        style={{ borderTop: "1px solid var(--color-border)" }}
      >
        <OrbGlyph size={30} />
        {/* Faux input */}
        <div
          className="flex-1 h-9 rounded-[10px] px-3 flex items-center text-[12px]"
          style={{
            color: "var(--color-ink-4)",
            background: "var(--color-surface-1)",
            border: "1px solid var(--color-border)",
          }}
        >
          Send a message…
        </div>
        {/* Send button */}
        <button
          type="button"
          className="inline-flex items-center gap-1.5 h-9 px-3 rounded-[8px] text-[12px] font-medium shrink-0"
          style={{
            background: "var(--color-accent)",
            color: "var(--color-bg)",
          }}
        >
          <AppIcon name="send" size={12} />
          Send
        </button>
      </div>
    </div>
  );
}
