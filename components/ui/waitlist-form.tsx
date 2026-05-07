"use client";

import { FormEvent, useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<FormState>("idle");

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setState("error");
      return;
    }

    setState("loading");
    window.setTimeout(() => setState("success"), 650);
  };

  const message =
    state === "success"
      ? "Preview request validated. Connect the beta intake endpoint before collecting real invites."
      : state === "error"
        ? "Enter a valid email address to request access."
        : "Private beta · limited early access";

  return (
    <form className="w-full" onSubmit={submit} noValidate>
      <label htmlFor="waitlist-email" className="block text-sm text-[var(--color-text-secondary)]">
        Email address
      </label>
      <div className="mt-3 flex w-full flex-col gap-3 sm:flex-row">
        <input
          id="waitlist-email"
          type="email"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (state === "error" || state === "success") {
              setState("idle");
            }
          }}
          placeholder="you@example.com"
          aria-describedby="waitlist-helper waitlist-status"
          aria-invalid={state === "error"}
          className="h-14 min-w-0 flex-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-input-bg)] px-6 text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-placeholder)] hover:border-[rgba(var(--color-accent-rgb),0.32)] focus:border-[var(--color-focus)] focus:ring-2 focus:ring-[var(--color-focus)]"
        />
        <button
          type="submit"
          aria-busy={state === "loading"}
          disabled={state === "loading" || state === "success"}
          className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-7 text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-text-inverse)] outline-none transition hover:-translate-y-0.5 hover:bg-[var(--color-primary-hover)] active:bg-[var(--color-primary-active)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-text-disabled)] disabled:opacity-70"
        >
          {state === "loading" ? "Sending" : state === "success" ? "Requested" : "Request Early Access"}
        </button>
      </div>
      <p id="waitlist-helper" className="mt-3 text-sm leading-6 text-[var(--color-text-secondary)]">
        Tell us where to send your invite. No spam, no public launch list. This preview validates locally.
      </p>
      <p
        id="waitlist-status"
        aria-live="polite"
        className={state === "error" ? "mt-2 text-sm text-[var(--color-error)]" : "mt-2 text-sm text-[var(--color-text-muted)]"}
      >
        {message}
      </p>
    </form>
  );
}
