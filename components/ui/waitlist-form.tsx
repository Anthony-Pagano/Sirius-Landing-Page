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
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 sm:flex-row sm:rounded-full sm:border sm:border-[var(--color-border-strong)] sm:bg-[var(--color-surface-inset)] sm:p-1.5">
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
          className="h-14 min-w-0 flex-1 rounded-full border border-[var(--color-border-strong)] bg-[var(--color-input-bg)] px-6 text-center text-[var(--color-text-primary)] outline-none transition placeholder:text-[var(--color-text-placeholder)] hover:border-[rgba(var(--color-accent-rgb),0.32)] focus:border-[var(--color-focus)] focus:ring-2 focus:ring-[var(--color-focus)] sm:border-0 sm:bg-transparent sm:text-left sm:focus:ring-0"
        />
        <button
          type="submit"
          aria-busy={state === "loading"}
          disabled={state === "loading" || state === "success"}
          className="inline-flex h-14 w-full items-center justify-center rounded-full bg-[var(--color-accent-strong)] px-8 text-base font-medium text-[var(--color-text-inverse)] shadow-[0_18px_60px_rgba(var(--color-accent-strong-rgb),0.22)] outline-none transition hover:-translate-y-0.5 hover:bg-[var(--color-link-hover)] active:bg-[var(--color-accent)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:bg-[var(--color-disabled-bg)] disabled:text-[var(--color-text-disabled)] disabled:opacity-70 sm:w-auto"
        >
          {state === "loading" ? "Sending" : state === "success" ? "Requested" : "Request access ->"}
        </button>
      </div>
      <p id="waitlist-helper" className="sr-only">
        Tell us where to send your invite. No spam, no public launch list. This preview validates locally.
      </p>
      <p
        id="waitlist-status"
        aria-live="polite"
        className={state === "error" ? "mt-3 text-sm text-[var(--color-error)]" : "mt-3 text-sm text-[var(--color-text-muted)]"}
      >
        {message}
      </p>
    </form>
  );
}
