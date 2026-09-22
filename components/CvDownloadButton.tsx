"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { profile } from "@/data/profile";

const cvOptions = [
  { label: "English", href: profile.cv.en, fileName: "Louati-Zine-Eddine-CV-EN.pdf" },
  { label: "Français", href: profile.cv.fr, fileName: "Louati-Zine-Eddine-CV-FR.pdf" },
] as const;

type CvDownloadButtonProps = {
  className?: string;
};

export function CvDownloadButton({ className = "" }: CvDownloadButtonProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;

    function onPointerDown(event: MouseEvent) {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={`relative inline-flex ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-2 rounded-lg border-2 border-[var(--accent)] px-6 py-3 font-semibold text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
      >
        <Download className="h-4 w-4" />
        Download CV
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>

      {open && (
        <div
          id={menuId}
          role="menu"
          aria-label="Choose CV language"
          className="absolute left-0 top-full z-20 mt-2 min-w-full overflow-hidden rounded-xl border border-[var(--border)] bg-white py-1 shadow-lg"
        >
          {cvOptions.map((option) => (
            <a
              key={option.href}
              role="menuitem"
              href={option.href}
              download={option.fileName}
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-[var(--fg)] transition-colors hover:bg-[var(--accent-subtle)] hover:text-[var(--accent)]"
            >
              <Download className="h-3.5 w-3.5 shrink-0" aria-hidden />
              {option.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
