"use client";

import { useId, useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

type DemoRequestFormProps = {
  projectTitle?: string;
  variant?: "dark" | "light";
  onSuccess?: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function DemoRequestForm({
  projectTitle,
  variant = "dark",
  onSuccess,
}: DemoRequestFormProps) {
  const fieldId = useId();
  const nameId = `${fieldId}-name`;
  const emailId = `${fieldId}-email`;
  const messageId = `${fieldId}-message`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  const isDark = variant === "dark";

  const labelClass = isDark
    ? "text-sm font-medium text-[var(--dark-section-muted)]"
    : "text-sm font-medium text-[var(--muted)]";

  const inputClass = isDark
    ? "mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--accent-light)] focus:ring-1 focus:ring-[var(--accent-light)]"
    : "mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-[var(--fg)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

  const errorInputClass = isDark
    ? "border-red-400/60 focus:border-red-400 focus:ring-red-400"
    : "border-red-400 focus:border-red-500 focus:ring-red-500";

  const fieldErrorClass = isDark ? "mt-1.5 text-sm text-red-300" : "mt-1.5 text-sm text-red-600";

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      next.name = "Name is required.";
    }
    if (!trimmedEmail) {
      next.email = "Email is required.";
    } else if (!isValidEmail(trimmedEmail)) {
      next.email = "Enter a valid email address.";
    }
    if (!trimmedMessage) {
      next.message = "Message is required.";
    }

    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) {
      setStatus("idle");
      return;
    }

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Demo requests are not configured yet. Please email me directly.",
      );
      return;
    }

    setStatus("submitting");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();
    const subject = projectTitle
      ? `Demo request: ${projectTitle}`
      : "Demo request";

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          name: trimmedName,
          email: trimmedEmail,
          project: projectTitle || "General inquiry",
          message: trimmedMessage,
          from_name: "Portfolio Demo Request",
        }),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
      };

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Something went wrong. Please try again.");
      }

      setStatus("success");
      onSuccess?.();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="text-center" role="status">
        <CheckCircle2
          className={`mx-auto h-10 w-10 ${isDark ? "text-[var(--accent-light)]" : "text-[var(--accent)]"}`}
          aria-hidden
        />
        <p
          className={`mt-4 font-heading text-xl font-semibold ${isDark ? "text-white" : "text-[var(--fg)]"}`}
        >
          Request received
        </p>
        <p
          className={`mt-2 text-sm ${isDark ? "text-[var(--dark-section-muted)]" : "text-[var(--muted)]"}`}
        >
          Thanks, {name.trim().split(" ")[0]}. I&apos;ll follow up at{" "}
          <span className={isDark ? "text-white" : "text-[var(--fg)]"}>
            {email.trim()}
          </span>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left" noValidate>
      {projectTitle && (
        <div>
          <span className={labelClass}>Project</span>
          <p
            className={`mt-1.5 font-medium ${isDark ? "text-white" : "text-[var(--fg)]"}`}
          >
            {projectTitle}
          </p>
        </div>
      )}

      <div>
        <label htmlFor={nameId} className={labelClass}>
          Name <span aria-hidden>*</span>
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (fieldErrors.name) {
              setFieldErrors((prev) => ({ ...prev, name: undefined }));
            }
          }}
          aria-invalid={Boolean(fieldErrors.name)}
          aria-describedby={fieldErrors.name ? `${nameId}-error` : undefined}
          className={`${inputClass} ${fieldErrors.name ? errorInputClass : ""}`}
          placeholder="Your name"
        />
        {fieldErrors.name && (
          <p id={`${nameId}-error`} className={fieldErrorClass} role="alert">
            {fieldErrors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={emailId} className={labelClass}>
          Email <span aria-hidden>*</span>
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (fieldErrors.email) {
              setFieldErrors((prev) => ({ ...prev, email: undefined }));
            }
          }}
          aria-invalid={Boolean(fieldErrors.email)}
          aria-describedby={fieldErrors.email ? `${emailId}-error` : undefined}
          className={`${inputClass} ${fieldErrors.email ? errorInputClass : ""}`}
          placeholder="you@company.com"
        />
        {fieldErrors.email && (
          <p id={`${emailId}-error`} className={fieldErrorClass} role="alert">
            {fieldErrors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor={messageId} className={labelClass}>
          Message <span aria-hidden>*</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={3}
          required
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (fieldErrors.message) {
              setFieldErrors((prev) => ({ ...prev, message: undefined }));
            }
          }}
          aria-invalid={Boolean(fieldErrors.message)}
          aria-describedby={
            fieldErrors.message ? `${messageId}-error` : undefined
          }
          className={`${inputClass} resize-y ${fieldErrors.message ? errorInputClass : ""}`}
          placeholder="Anything you'd like me to cover in the demo"
        />
        {fieldErrors.message && (
          <p id={`${messageId}-error`} className={fieldErrorClass} role="alert">
            {fieldErrors.message}
          </p>
        )}
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400" role="alert">
          {errorMessage}{" "}
          <a
            href={`mailto:${profile.email}?subject=${encodeURIComponent(
              projectTitle
                ? `Demo request: ${projectTitle}`
                : "Demo request",
            )}`}
            className="underline hover:no-underline"
          >
            Email me instead
          </a>
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-[var(--accent-strong)] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden />
            Sending…
          </>
        ) : (
          "Request Demo"
        )}
      </button>
    </form>
  );
}
