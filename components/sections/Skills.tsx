"use client";

import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Database,
  Server,
  Layout,
  Cpu,
  GitBranch,
  Shield,
} from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";
import { skillCategories } from "@/data/skills";

const categoryIcons: Record<string, LucideIcon> = {
  "data-cloud": Cloud,
  "enterprise-dotnet": Shield,
  databases: Database,
  backend: Server,
  frontend: Layout,
  "ai-ml": Cpu,
  devops: GitBranch,
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
} as const;

const tagContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.045, delayChildren: 0.08 },
  },
} as const;

const tagVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.28, ease: "easeOut" },
  },
} as const;

export function Skills() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="skills" className="bg-[var(--bg)] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
            Skills & <span className="text-[var(--accent)]">Technologies</span>
          </h2>
          <div
            aria-hidden
            className="mx-auto mt-4 h-1 w-16 rounded-full bg-[var(--accent)]"
          />
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Technical expertise across data engineering, backend systems, and
            full-stack development
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: reducedMotion ? 0 : 0.09 },
            },
          }}
          className="mt-12 grid auto-rows-fr grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] ?? Layout;

            return (
              <motion.article
                key={category.id}
                variants={reducedMotion ? undefined : cardVariants}
                className="card flex h-full flex-col border-t-4 border-t-[var(--accent)] bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent-subtle)] text-[var(--accent)]">
                    <Icon className="h-5 w-5" strokeWidth={2.25} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[var(--fg)]">
                    {category.title}
                  </h3>
                </div>

                <motion.div
                  variants={reducedMotion ? undefined : tagContainerVariants}
                  className="mt-5 flex flex-1 flex-wrap content-start gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill.name}
                      variants={reducedMotion ? undefined : tagVariants}
                      title={skill.inProgress ? "In progress" : undefined}
                      className="relative inline-flex items-center rounded-lg bg-[var(--accent-subtle)] px-3 py-1.5 text-sm font-semibold text-[var(--accent-strong)]"
                    >
                      {skill.name}
                      {skill.inProgress && (
                        <span
                          aria-label="In progress"
                          className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-amber-400 ring-2 ring-white"
                        />
                      )}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.article>
            );
          })}
        </motion.div>

   
      </div>
    </section>
  );
}
