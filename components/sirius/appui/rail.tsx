import { OrbGlyph } from "./orb-glyph";
import { AppIcon, AppIconName } from "./app-icon";

const NAV_ITEMS: AppIconName[] = ["work", "flows", "feed", "voice"];

export function Rail({ active = "flows" }: { active?: AppIconName }) {
  return (
    <nav
      className="relative flex h-full w-[60px] shrink-0 flex-col items-stretch py-4"
      style={{
        background: "var(--color-surface-deep)",
        borderRight: "1px solid var(--color-border)",
      }}
    >
      {/* Logo orb */}
      <div className="flex justify-center mb-5">
        <OrbGlyph size={26} hue="cool" />
      </div>

      {/* Primary nav icons */}
      <div className="flex flex-col gap-1.5">
        {NAV_ITEMS.map((name) => {
          const isActive = name === active;
          return (
            <div key={name} className="relative mx-auto">
              {isActive && (
                <span
                  className="absolute left-0 top-[10px] bottom-[10px] w-[2px] rounded-[2px]"
                  style={{
                    background: "var(--color-state-listening-strong)",
                    boxShadow: "0 0 10px rgba(108,216,255,0.55)",
                  }}
                  aria-hidden
                />
              )}
              <button
                type="button"
                className={[
                  "relative flex h-[44px] w-[44px] items-center justify-center rounded-r-[10px]",
                  isActive
                    ? "text-[var(--color-state-listening-strong)]"
                    : "text-[var(--color-ink-3)]",
                ].join(" ")}
              >
                <AppIcon name={name} size={18} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Settings at bottom */}
      <div className="relative mx-auto">
        {active === "settings" && (
          <span
            className="absolute left-0 top-[10px] bottom-[10px] w-[2px] rounded-[2px]"
            style={{
              background: "var(--color-state-listening-strong)",
              boxShadow: "0 0 10px rgba(108,216,255,0.55)",
            }}
            aria-hidden
          />
        )}
        <button
          type="button"
          className={[
            "relative flex h-[44px] w-[44px] items-center justify-center rounded-r-[10px]",
            active === "settings"
              ? "text-[var(--color-state-listening-strong)]"
              : "text-[var(--color-ink-3)]",
          ].join(" ")}
        >
          <AppIcon name="settings" size={18} />
        </button>
      </div>
    </nav>
  );
}
