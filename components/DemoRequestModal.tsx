"use client";

import { useEffect, useId, useRef } from "react";
import { X } from "lucide-react";
import { DemoRequestForm } from "@/components/DemoRequestForm";

type DemoRequestModalProps = {
  open: boolean;
  projectTitle: string;
  onClose: () => void;
};

export function DemoRequestModal({
  open,
  projectTitle,
  onClose,
}: DemoRequestModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center">
      <button
        type="button"
        aria-label="Close dialog"
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 w-full max-w-md rounded-2xl border border-[var(--border)] bg-white p-6 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2
              id={titleId}
              className="font-heading text-xl font-bold text-[var(--fg)]"
            >
              Request a demo
            </h2>
            <p className="mt-1 text-sm text-[var(--muted)]">
              Leave your details and I&apos;ll follow up — or book a time after
              you submit.
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="rounded-lg p-1.5 text-[var(--muted)] transition-colors hover:bg-gray-100 hover:text-[var(--fg)]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6">
          <DemoRequestForm projectTitle={projectTitle} variant="light" />
        </div>
      </div>
    </div>
  );
}
