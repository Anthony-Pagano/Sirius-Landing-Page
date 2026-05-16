export type AppIconName =
  | "work"
  | "flows"
  | "feed"
  | "voice"
  | "settings"
  | "play"
  | "send"
  | "clock"
  | "mail"
  | "doc"
  | "git"
  | "search"
  | "check"
  | "spark"
  | "table"
  | "plus";

function iconPath(name: AppIconName): React.ReactNode {
  switch (name) {
    case "work":
      return (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      );
    case "flows":
      return (
        <>
          <circle cx="5" cy="12" r="2.5" />
          <circle cx="12" cy="6" r="2.5" />
          <circle cx="19" cy="12" r="2.5" />
          <line x1="7.5" y1="12" x2="9.5" y2="6" />
          <line x1="14.5" y1="6" x2="16.5" y2="12" />
        </>
      );
    case "feed":
      return (
        <>
          <circle cx="5" cy="19" r="1.5" />
          <path d="M4 12a8 8 0 0 1 8 8" />
          <path d="M4 6a14 14 0 0 1 14 14" />
        </>
      );
    case "voice":
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="9" />
        </>
      );
    case "settings":
      return (
        <>
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="3" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="21" />
          <line x1="3" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="21" y2="12" />
          <line x1="5.6" y1="5.6" x2="7" y2="7" />
          <line x1="17" y1="17" x2="18.4" y2="18.4" />
          <line x1="18.4" y1="5.6" x2="17" y2="7" />
          <line x1="7" y1="17" x2="5.6" y2="18.4" />
        </>
      );
    case "play":
      return <polygon points="6,4 20,12 6,20" />;
    case "send":
      return (
        <>
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </>
      );
    case "clock":
      return (
        <>
          <circle cx="12" cy="12" r="9" />
          <polyline points="12,7 12,12 15,15" />
        </>
      );
    case "mail":
      return (
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <polyline points="3,5 12,13 21,5" />
        </>
      );
    case "doc":
      return (
        <>
          <path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <polyline points="14,3 14,8 19,8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="12" y2="17" />
        </>
      );
    case "git":
      return (
        <>
          <circle cx="7" cy="18" r="2.5" />
          <circle cx="17" cy="6" r="2.5" />
          <path d="M7 15.5V9a4 4 0 0 1 4-4h3" />
          <path d="M14.5 6l2.5-2.5L19.5 6" />
        </>
      );
    case "search":
      return (
        <>
          <circle cx="10.5" cy="10.5" r="6.5" />
          <line x1="15.5" y1="15.5" x2="21" y2="21" />
        </>
      );
    case "check":
      return <polyline points="4,12 9,17 20,7" />;
    case "spark":
      return (
        <>
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
          <line x1="4.9" y1="4.9" x2="7.8" y2="7.8" />
          <line x1="16.2" y1="16.2" x2="19.1" y2="19.1" />
          <line x1="19.1" y1="4.9" x2="16.2" y2="7.8" />
          <line x1="7.8" y1="16.2" x2="4.9" y2="19.1" />
        </>
      );
    case "table":
      return (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="9" x2="9" y2="21" />
          <line x1="15" y1="9" x2="15" y2="21" />
        </>
      );
    case "plus":
      return (
        <>
          <line x1="12" y1="4" x2="12" y2="20" />
          <line x1="4" y1="12" x2="20" y2="12" />
        </>
      );
    default:
      return null;
  }
}

import React from "react";

export function AppIcon({
  name,
  size = 16,
}: {
  name: AppIconName;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {iconPath(name)}
    </svg>
  );
}
