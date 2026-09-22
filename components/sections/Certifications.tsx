"use client";

import { Award } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";
import { certifications } from "@/data/certifications";

export function Certifications() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-light)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-[var(--accent-subtle)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            Credentials
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            Certifications
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--accent)]"
          />
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
            Formal proof points for the stack I build with   cloud, data, and
            engineering depth.
          </p>
        </motion.div>

        <ul className="mx-auto mt-14 max-w-3xl space-y-4">
          {certifications.map((cert, index) => (
            <motion.li
              key={cert.id}
              initial={reducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : 0.08 + index * 0.08,
                ease: "easeOut",
              }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-6 transition-colors duration-300 hover:border-[var(--accent-light)] hover:bg-[var(--accent-subtle)] sm:p-7"
            >
              {cert.code && (
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-3 select-none font-mono text-[5.5rem] font-bold leading-none text-[var(--accent)] opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
                >
                  {cert.code.split("-")[0]}
                </span>
              )}

              <div className="relative flex min-w-0 items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-[var(--accent)] shadow-sm ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105 group-hover:ring-[var(--accent-light)]">
                  <Award className="h-5 w-5" strokeWidth={2.25} />
                </div>
                <div className="min-w-0">
                  {cert.code && (
                    <p className="font-mono text-xs font-semibold tracking-wide text-[var(--accent)]">
                      {cert.code}
                    </p>
                  )}
                  <h3 className="mt-1 font-heading text-lg font-bold text-[var(--fg)] sm:text-xl">
                    {cert.name}
                    {cert.inProgress && (
                      <span className="ml-2 align-middle text-sm font-semibold text-[var(--accent)]">
                        In progress
                      </span>
                    )}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {cert.issuer}
                  </p>
                  {cert.focus && (
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {cert.focus}
                    </p>
                  )}
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
