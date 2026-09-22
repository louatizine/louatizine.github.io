"use client";

import { Database, Workflow, BarChart, Rocket } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";

const steps = [
  {
    number: "01",
    title: "Ingest",
    description:
      "Extract data from sources, validate schemas, and handle errors early so pipelines stay trustworthy.",
    icon: Database,
  },
  {
    number: "02",
    title: "Transform",
    description:
      "Clean, normalize, and structure data so business logic has a reliable foundation.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Model",
    description:
      "Apply rules, aggregations, and ML only where they create clear, measurable value.",
    icon: BarChart,
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Serve results through APIs, dashboards, or downstream systems that people can act on.",
    icon: Rocket,
  },
] as const;

export function Process() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-24 h-64 w-64 rounded-full bg-[var(--accent-subtle)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-20 h-72 w-72 rounded-full bg-pink-100/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            My Approach
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            A clear path from data to value
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
            Four stages I walk every project through   focused on quality,
            reliability, and outcomes you can measure.
          </p>
        </motion.div>

        <div className="relative mt-16 sm:mt-20">
          {/* Road spine */}
          <div
            aria-hidden
            className="absolute left-6 top-0 bottom-0 w-px sm:left-1/2 sm:-translate-x-px"
          >
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-[var(--accent)] via-[var(--accent-light)] to-[var(--accent)]"
              initial={reducedMotion ? false : { scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
            />
            {/* Lane dashes */}
            <div className="absolute inset-y-4 left-1/2 w-[3px] -translate-x-1/2 space-y-3 overflow-hidden">
              {Array.from({ length: 18 }).map((_, i) => (
                <span
                  key={i}
                  className="block h-3 w-full rounded-full bg-white/90"
                />
              ))}
            </div>
          </div>

          <ol className="relative space-y-12 sm:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.li
                  key={step.number}
                  initial={
                    reducedMotion
                      ? false
                      : { opacity: 0, x: isLeft ? -28 : 28 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: reducedMotion ? 0 : index * 0.08,
                    ease: "easeOut",
                  }}
                  className={`relative flex items-start gap-6 sm:items-center ${
                    isLeft
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse"
                  }`}
                >
                  {/* Content panel */}
                  <div
                    className={`ml-14 flex-1 sm:ml-0 sm:w-[calc(50%-2.75rem)] sm:flex-none ${
                      isLeft ? "sm:pr-4 sm:text-right" : "sm:pl-4 sm:text-left"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] ${
                        isLeft ? "sm:flex-row-reverse" : ""
                      }`}
                    >
                      <span className="font-mono tracking-wider">
                        {step.number}
                      </span>
                      <span
                        aria-hidden
                        className="hidden h-px w-8 bg-[var(--accent-light)] sm:block"
                      />
                    </div>
                    <h3 className="mt-2 font-heading text-2xl font-bold text-[var(--fg)]">
                      {step.title}
                    </h3>
                    <p
                      className={`mt-2 max-w-md text-base leading-relaxed text-[var(--muted)] ${
                        isLeft ? "sm:ml-auto" : ""
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>

                  {/* Milestone node on the road */}
                  <div className="absolute left-6 z-10 flex -translate-x-1/2 items-center justify-center sm:left-1/2">
                    <motion.div
                      initial={
                        reducedMotion ? false : { scale: 0.6, opacity: 0 }
                      }
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 18,
                        delay: reducedMotion ? 0 : 0.12 + index * 0.08,
                      }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[var(--accent)] text-white shadow-lg shadow-[var(--accent)]/25"
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </motion.div>
                  </div>

                  {/* Spacer for desktop balance */}
                  <div className="hidden flex-1 sm:block sm:w-[calc(50%-2.75rem)] sm:flex-none" />
                </motion.li>
              );
            })}
          </ol>

          {/* Journey end marker */}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: reducedMotion ? 0 : 0.2 }}
            className="relative mt-14 flex justify-start sm:justify-center"
          >
            <div className="ml-14 flex items-center gap-3 sm:ml-0">
              <span className="h-3 w-3 rotate-45 border-2 border-[var(--accent)] bg-white shadow-sm" />
              <span className="font-heading text-sm font-semibold tracking-wide text-[var(--accent-strong)]">
                Value delivered
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
