"use client";

import { useState } from "react";
import Image from "next/image";
import { Calendar } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { DemoRequestModal } from "@/components/DemoRequestModal";
import { motion, itemVariants, staggerVariants } from "@/components/Motion";
import { projects } from "@/data/projects";

export function Projects() {
  const [demoProject, setDemoProject] = useState<string | null>(null);

  return (
    <section id="projects" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerVariants}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-heading text-3xl font-bold text-[var(--fg)] sm:text-4xl">
              Featured <span className="text-[var(--accent)]">Projects</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
              Selected work demonstrating full-stack development, data engineering,
              and enterprise system integration
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.article
                key={project.id}
                variants={itemVariants}
                className="card group overflow-hidden bg-white"
              >
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold text-[var(--fg)]">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[var(--muted)]">
                    {project.problem}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--accent-subtle)] px-3 py-1 text-xs font-medium text-[var(--accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 3 && (
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                        +{project.stack.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4">
                    <button
                      type="button"
                      onClick={() => setDemoProject(project.title)}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                    >
                      <Calendar className="h-4 w-4" />
                      Request Demo
                    </button>
                    {project.sourceCode && (
                      <a
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                      >
                        <GitHubIcon className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <DemoRequestModal
        open={demoProject !== null}
        projectTitle={demoProject ?? ""}
        onClose={() => setDemoProject(null)}
      />
    </section>
  );
}
