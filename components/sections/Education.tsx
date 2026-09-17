"use client";

import { GraduationCap, BookOpen, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";
import { education } from "@/data/education";

export function Education() {
  const reducedMotion = useReducedMotion();
  const current = education.find((e) => e.current)!;
  const past = education.filter((e) => !e.current);

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-[var(--accent-subtle)] blur-3xl"
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
            Learning path
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            Education
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--accent)]"
          />
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
            From foundations to data engineering — building the stack behind
            reliable systems.
          </p>
        </motion.div>

        {/* Featured: current institution */}
        <motion.article
          initial={reducedMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="group relative mx-auto mt-14 max-w-5xl overflow-hidden rounded-[2rem] border border-[var(--accent-light)]/40 bg-gradient-to-br from-[var(--accent)] via-[var(--accent-strong)] to-[#4c1d95] p-1 shadow-xl shadow-[var(--accent)]/20"
        >
          <div className="relative overflow-hidden rounded-[1.85rem] bg-[var(--dark-section)] px-6 py-8 text-white sm:px-10 sm:py-10">
            {/* Soft orbs */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-[var(--accent)]/30 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-3xl"
            />

            {/* Giant monogram */}
            <span
              aria-hidden
              className="pointer-events-none absolute -right-4 bottom-0 select-none font-heading text-[9rem] font-bold leading-none text-white/[0.06] sm:text-[12rem]"
            >
              IU
            </span>

            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-12">
              <div>
                <span className="font-mono text-xs text-white/50">
                  {current.period}
                </span>

                <div className="mt-6 flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--accent-light)] to-[var(--accent)] font-heading text-lg font-bold text-white shadow-lg shadow-[var(--accent)]/40">
                    IU
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold sm:text-3xl">
                      {current.institution}
                    </h3>
                    <p className="mt-1 text-base font-medium text-[var(--accent-light)] sm:text-lg">
                      {current.degree}
                    </p>
                    {current.track && (
                      <p className="mt-2 inline-flex items-center gap-2 text-sm text-white/70">
                      {current.track}
                      </p>
                    )}
                  </div>
                </div>

                {current.summary && (
                  <p className="mt-6 max-w-md text-base leading-relaxed text-white/70">
                    {current.summary}
                  </p>
                )}
              </div>

              <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur-sm sm:p-6">
                <div className="flex items-center gap-2 text-sm font-semibold text-[var(--accent-light)]">
                  <BookOpen className="h-4 w-4" />
                  Focus coursework
                </div>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {current.coursework?.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={
                        reducedMotion ? false : { opacity: 0, y: 10 }
                      }
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: reducedMotion ? 0 : 0.15 + i * 0.06,
                        duration: 0.35,
                      }}
                      className="flex gap-2.5 rounded-xl bg-white/5 px-3 py-3 text-sm leading-snug text-white/85 ring-1 ring-white/8"
                    >
                      <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-light)]" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Past institutions */}
        <ol className="relative mx-auto mt-10 max-w-5xl space-y-4">
          {past.map((entry, index) => (
            <motion.li
              key={entry.id}
              initial={reducedMotion ? false : { opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.4,
                delay: reducedMotion ? 0 : 0.08 + index * 0.08,
                ease: "easeOut",
              }}
              className="flex gap-4 rounded-2xl border border-[var(--border)] bg-white p-5 sm:gap-5 sm:p-6"
            >
              <div
                aria-hidden
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--accent-subtle)] font-heading text-sm font-bold text-[var(--accent)] ring-4 ring-white shadow-md"
              >
                {entry.institution
                  .split(/\s+/)
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <h3 className="font-heading text-lg font-bold text-[var(--fg)]">
                    {entry.institution}
                  </h3>
                  <time className="shrink-0 font-mono text-xs font-medium text-[var(--accent)]">
                    {entry.period}
                  </time>
                </div>
                <p className="mt-1 font-medium text-[var(--muted)]">
                  {entry.degree}
                </p>
                {entry.summary && (
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {entry.summary}
                  </p>
                )}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
