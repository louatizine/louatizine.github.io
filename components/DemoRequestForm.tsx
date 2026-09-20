"use client";

import { useId, useState, type FormEvent } from "react";
import { Calendar, CheckCircle2, Loader2 } from "lucide-react";
import { profile } from "@/data/profile";

type DemoRequestFormProps = {
  projectTitle?: string;
  variant?: "dark" | "light";
  onSuccess?: () => void;
};

type Status = "idle" | "submitting" | "success" | "error";

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

  const isDark = variant === "dark";

  const labelClass = isDark
    ? "text-sm font-medium text-[var(--dark-section-muted)]"
    : "text-sm font-medium text-[var(--muted)]";

  const inputClass = isDark
    ? "mt-1.5 w-full rounded-lg border border-white/15 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/40 outline-none transition-colors focus:border-[var(--accent-light)] focus:ring-1 focus:ring-[var(--accent-light)]"
    : "mt-1.5 w-full rounded-lg border border-[var(--border)] bg-white px-3.5 py-2.5 text-[var(--fg)] placeholder:text-[var(--muted)] outline-none transition-colors focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMessage(
        "Demo requests are not configured yet. Please email me directly.",
      );
      return;
    }

    setStatus("submitting");

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
          name: name.trim(),
          email: email.trim(),
          project: projectTitle || "General inquiry",
          message: message.trim() || "(no message)",
          from_name: "Portfolio Demo Request",
        }),
      });

      const data = (await response.json()) as { success?: boolean; message?: string };

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
          Thanks{name.trim() ? `, ${name.trim().split(" ")[0]}` : ""}. I&apos;ll
          follow up by email — or book a time that works for you.
        </p>
        <a
          href={profile.calendlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-heading font-semibold text-white transition-colors hover:bg-[var(--accent-strong)]"
        >
          <Calendar className="h-4 w-4" aria-hidden />
          Book a meeting
        </a>
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
          Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor={emailId} className={labelClass}>
          Email
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          placeholder="you@company.com"
        />
      </div>

      <div>
        <label htmlFor={messageId} className={labelClass}>
          Message <span className="opacity-70">(optional)</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} resize-y`}
          placeholder="Anything you'd like me to cover in the demo"
        />
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
