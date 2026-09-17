"use client";

import { motion, useReducedMotion } from "@/components/Motion";
import { experience } from "@/data/experience";

export function Experience() {
  const reducedMotion = useReducedMotion();
  const uniqueExperience = experience.filter(
    (role, index, roles) =>
      roles.findIndex((candidate) => candidate.id === role.id) === index
  );

  return (
    <section id="experience" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            Work <span className="text-[var(--accent)]">Experience</span>
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--accent)]"
          />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Building enterprise systems, data pipelines, and full-stack
            applications
          </p>
        </motion.div>

        <div className="relative mx-auto mt-14 max-w-3xl">
          {/* Timeline spine */}
          <div
            aria-hidden
            className="absolute bottom-4 left-[11px] top-4 w-0.5 overflow-hidden sm:left-[15px]"
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]"
              initial={reducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: reducedMotion ? 0 : 1.15,
                ease: "easeInOut",
              }}
            />
          </div>

          <ol className="relative space-y-8">
            {uniqueExperience.map((role, index) => (
              <motion.li
                key={role.id}
                initial={
                  reducedMotion ? false : { opacity: 0, x: 28, y: 12 }
                }
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: reducedMotion ? 0 : 0.18 + index * 0.16,
                  ease: "easeOut",
                }}
                className="relative flex gap-5 sm:gap-7"
              >
                {/* Node */}
                <div className="relative z-10 mt-7 shrink-0">
                  <motion.span
                    initial={
                      reducedMotion ? false : { scale: 0.5, opacity: 0 }
                    }
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 18,
                      delay: reducedMotion ? 0 : 0.22 + index * 0.16,
                    }}
                    className="block h-6 w-6 rounded-full border-[3px] border-white bg-[var(--accent)] shadow-[0_0_0_4px_rgba(124,58,237,0.18)] sm:h-8 sm:w-8"
                    aria-hidden
                  />
                </div>

                {/* Card */}
                <article className="card min-w-0 flex-1 bg-white p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="font-heading text-xl font-bold leading-snug text-[var(--fg)] sm:text-2xl">
                        {role.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-2.5">
                        <span
                          aria-hidden
                          className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)] font-heading text-sm font-bold text-[var(--accent)]"
                        >
                          {role.company.charAt(0)}
                        </span>
                        <span className="truncate text-sm font-medium text-[var(--muted)] sm:text-base">
                          {role.company}
                        </span>
                      </div>
                    </div>

                    <time className="inline-flex w-fit shrink-0 items-center rounded-full bg-[var(--accent-subtle)] px-3 py-1 font-mono text-xs font-medium text-[var(--accent-strong)]">
                      {role.period}
                    </time>
                  </div>

                  <ul className="mt-5 space-y-2 text-[var(--muted)]">
                    {role.highlights.map((item) => (
                      <li key={item} className="flex gap-2 leading-relaxed">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
