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
      ? "You're on the early access list."
      : state === "error"
        ? "Enter a valid email address to request access."
        : "Private beta · limited early access";

  return (
    <form className="w-full" onSubmit={submit} noValidate>
      <label htmlFor="waitlist-email" className="block text-sm text-white/78">
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
          className="h-14 min-w-0 flex-1 rounded-full border border-[var(--color-border-strong)] bg-white/[0.055] px-6 text-white outline-none transition placeholder:text-white/38 hover:border-white/24 focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/35"
        />
        <button
          type="submit"
          aria-busy={state === "loading"}
          disabled={state === "loading" || state === "success"}
          className="inline-flex h-14 items-center justify-center rounded-full bg-[var(--color-button)] px-7 text-sm font-medium uppercase tracking-[0.18em] text-[#06080d] outline-none transition hover:-translate-y-0.5 hover:bg-white focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {state === "loading" ? "Sending" : state === "success" ? "Requested" : "Request Access"}
        </button>
      </div>
      <p id="waitlist-helper" className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
        Tell us where to send your invite. This prototype uses client-side validation only; connect a backend before treating submissions as real.
      </p>
      <p
        id="waitlist-status"
        aria-live="polite"
        className={state === "error" ? "mt-2 text-sm text-red-200" : "mt-2 text-sm text-[var(--color-text-faint)]"}
      >
        {message}
      </p>
    </form>
  );
}
