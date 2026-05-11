"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

type Step = "email" | "submittingEmail" | "name" | "submittingName" | "done" | "errorEmail" | "errorName";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const NAME_MAX_LEN = 120;

type ApiResponse = { ok: boolean; error?: "invalid" | "server" };

async function postWaitlist(payload: Record<string, unknown>): Promise<ApiResponse> {
  try {
    const res = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return (await res.json()) as ApiResponse;
  } catch {
    return { ok: false, error: "server" };
  }
}

export function WaitlistForm() {
  const [step, setStep] = useState<Step>("email");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState(""); // honeypot
  const [errorMessage, setErrorMessage] = useState("");

  const mountTimeRef = useRef<number>(0);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const reducedMotion = useReducedMotion();
  const inputId = useId();
  const statusId = useId();

  useEffect(() => {
    mountTimeRef.current = performance.now();
  }, []);

  // Focus management: when step changes to a step that renders an input, focus it.
  useEffect(() => {
    if (step === "email" || step === "name") {
      // wait one frame so the new input is mounted post-AnimatePresence swap
      const id = window.requestAnimationFrame(() => inputRef.current?.focus());
      return () => window.cancelAnimationFrame(id);
    }
  }, [step]);

  const visibleStep: "email" | "name" | "done" =
    step === "done"
      ? "done"
      : step === "name" || step === "submittingName" || step === "errorName"
        ? "name"
        : "email";

  const isSubmitting = step === "submittingEmail" || step === "submittingName";

  const onSubmitEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const normalized = email.trim().toLowerCase();
    if (!EMAIL_REGEX.test(normalized)) {
      setErrorMessage("Enter a valid email address.");
      setStep("errorEmail");
      return;
    }
    setErrorMessage("");
    setStep("submittingEmail");
    const elapsedMs = performance.now() - mountTimeRef.current;
    const res = await postWaitlist({
      stage: "email",
      email: normalized,
      company,
      elapsedMs,
    });
    if (!res.ok) {
      setErrorMessage(
        res.error === "invalid" ? "Enter a valid email address." : "Something went wrong. Try again.",
      );
      setStep("errorEmail");
      return;
    }
    setEmail(normalized);
    setStep("name");
  };

  const onSubmitName = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length === 0 || trimmed.length > NAME_MAX_LEN) {
      setErrorMessage("Enter your name.");
      setStep("errorName");
      return;
    }
    setErrorMessage("");
    setStep("submittingName");
    const res = await postWaitlist({
      stage: "name",
      email,
      name: trimmed,
    });
    if (!res.ok) {
      setErrorMessage(
        res.error === "invalid" ? "Enter your name." : "Something went wrong. Try again.",
      );
      setStep("errorName");
      return;
    }
    setName(trimmed);
    setStep("done");
  };

  const firstName = name.trim().split(/\s+/)[0] || "you";

  const motionProps = reducedMotion
    ? { initial: false, animate: { opacity: 1 }, exit: { opacity: 0 } }
    : {
        initial: { x: 24, opacity: 0 },
        animate: { x: 0, opacity: 1 },
        exit: { x: -24, opacity: 0 },
        transition: { duration: 0.22, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
      };

  const showInputRow = visibleStep !== "done";

  return (
    <form
      onSubmit={visibleStep === "email" ? onSubmitEmail : onSubmitName}
      noValidate
      className="w-full"
    >
      {/* honeypot — visually hidden, not announced */}
      <label className="sr-only" aria-hidden="true">
        Company
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>

      <div
        className={`relative flex min-h-[44px] items-end gap-4 border-b pb-3 transition-colors duration-200 ${
          showInputRow
            ? "border-[var(--color-border-strong)] focus-within:border-[var(--color-accent)]"
            : "border-transparent"
        }`}
      >
        <AnimatePresence mode="wait" initial={false}>
          {visibleStep === "email" && (
            <motion.div key="email" {...motionProps} className="flex w-full items-end gap-4">
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <input
                id={inputId}
                ref={inputRef}
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (step === "errorEmail") {
                    setErrorMessage("");
                    setStep("email");
                  }
                }}
                placeholder="you@example.com"
                aria-describedby={statusId}
                aria-invalid={step === "errorEmail"}
                disabled={isSubmitting}
                className="min-w-0 flex-1 bg-transparent text-[18px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isSubmitting || !EMAIL_REGEX.test(email.trim())}
                className="shrink-0 text-[14px] font-medium tracking-tight text-[var(--color-text-primary)] underline-offset-4 transition hover:underline decoration-[var(--color-accent)] disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)]"
              >
                {step === "submittingEmail" ? "Sending" : "Request access →"}
              </button>
            </motion.div>
          )}

          {visibleStep === "name" && (
            <motion.div key="name" {...motionProps} className="flex w-full items-end gap-4">
              <label htmlFor={inputId} className="sr-only">
                Your name
              </label>
              <input
                id={inputId}
                ref={inputRef}
                type="text"
                autoComplete="given-name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                  if (step === "errorName") {
                    setErrorMessage("");
                    setStep("name");
                  }
                }}
                placeholder="Your name"
                aria-describedby={statusId}
                aria-invalid={step === "errorName"}
                disabled={isSubmitting}
                className="min-w-0 flex-1 bg-transparent text-[18px] text-[var(--color-text-primary)] placeholder:text-[var(--color-text-placeholder)] outline-none disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={isSubmitting || name.trim().length === 0}
                className="shrink-0 text-[14px] font-medium tracking-tight text-[var(--color-text-primary)] underline-offset-4 transition hover:underline decoration-[var(--color-accent)] disabled:cursor-not-allowed disabled:text-[var(--color-text-disabled)]"
              >
                {step === "submittingName" ? "Sending" : "Join →"}
              </button>
            </motion.div>
          )}

          {visibleStep === "done" && (
            <motion.p
              key="done"
              {...motionProps}
              className="w-full text-[18px] text-[var(--color-text-primary)]"
            >
              <span aria-hidden="true">✓ </span>You&apos;re on the list, {firstName}. We&apos;ll be in touch.
            </motion.p>
          )}
        </AnimatePresence>
      </div>

      <p
        id={statusId}
        aria-live="polite"
        className="mt-4 min-h-[1.25rem] text-[13px] leading-5 text-[var(--color-text-muted)]"
      >
        {errorMessage}
      </p>
    </form>
  );
}
