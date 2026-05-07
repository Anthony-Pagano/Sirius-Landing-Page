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
      ? "Thanks. We'll be in touch."
      : state === "error"
        ? "Enter a valid email address to request access."
        : "";

  return (
    <form onSubmit={submit} noValidate className="w-full">
      <label htmlFor="waitlist-email" className="sr-only">
        Email address
      </label>
      <div className="relative flex items-end gap-4 border-b border-[var(--color-border-strong)] pb-3 transition-colors duration-200 focus-within:border-[var(--color-accent)]">
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
          aria-describedby="waitlist-status"
          aria-invalid={state === "error"}
          className="min-w-0 flex-1 bg-transparent text-[18px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] outline-none"
        />
        <button
          type="submit"
          disabled={state === "loading" || state === "success"}
          className="shrink-0 text-[14px] font-medium tracking-tight text-[var(--color-text-primary)] underline-offset-4 transition hover:underline decoration-[var(--color-accent)] disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)]"
        >
          {state === "loading" ? "Sending" : state === "success" ? "Requested" : "Request access →"}
        </button>
      </div>
      <p
        id="waitlist-status"
        aria-live="polite"
        className="mt-4 min-h-[1.25rem] text-[13px] leading-5 text-[var(--color-text-muted)]"
      >
        {message}
      </p>
    </form>
  );
}
