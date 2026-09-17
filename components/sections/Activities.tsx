"use client";

import { Dumbbell, Users, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";
import { activities } from "@/data/activities";

const categoryIcons: Record<string, LucideIcon> = {
  Sports: Dumbbell,
  Academic: Users,
};

export function Activities() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="activities"
      className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[var(--accent-subtle)] blur-3xl"
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
            Outside the IDE
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            Beyond the <span className="text-[var(--accent)]">Code</span>
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--accent)]"
          />
          <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--muted)]">
            Teams, clubs, and habits that shaped how I collaborate and stay
            consistent.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2 sm:gap-6">
          {activities.map((activity, index) => {
            const Icon = categoryIcons[activity.category] ?? Users;
            const initials = activity.organization
              .split(/\s+/)
              .filter((w) => /^[A-Za-z]/.test(w))
              .map((w) => w[0])
              .slice(0, 2)
              .join("")
              .toUpperCase();

            return (
              <motion.article
                key={activity.id}
                initial={reducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  delay: reducedMotion ? 0 : 0.08 + index * 0.1,
                  ease: "easeOut",
                }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 transition-colors duration-300 hover:border-[var(--accent-light)] hover:bg-[var(--accent-subtle)] sm:p-7"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -right-1 -top-2 select-none font-heading text-[6.5rem] font-bold leading-none text-[var(--accent)] opacity-[0.05] transition-opacity duration-300 group-hover:opacity-[0.1]"
                >
                  {initials}
                </span>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--accent-subtle)] text-[var(--accent)] ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105 group-hover:bg-white group-hover:ring-[var(--accent-light)]">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </div>
                  <time className="shrink-0 rounded-md bg-[var(--bg)] px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-[var(--accent)] ring-1 ring-[var(--border)]">
                    {activity.period}
                  </time>
                </div>

                <div className="relative mt-6 flex-1">
                  <p className="text-xs font-bold uppercase tracking-wider text-[var(--accent)]">
                    {activity.category}
                  </p>
                  <h3 className="mt-2 font-heading text-xl font-bold text-[var(--fg)]">
                    {activity.role}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-[var(--muted)]">
                    {activity.organization}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                    {activity.description}
                  </p>
                </div>

                <div
                  aria-hidden
                  className="relative mt-6 h-0.5 w-10 origin-left rounded-full bg-[var(--accent)] transition-all duration-300 group-hover:w-24"
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
