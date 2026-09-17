"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { GitHubIcon } from "@/components/BrandIcons";
import { secondaryProjects } from "@/data/projects";

export function MoreProjects() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-white pb-20 sm:pb-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="more-projects-list"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--border)] bg-white px-5 py-2.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            More Projects
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <div id="more-projects-list" className="mt-8 space-y-4">
            {secondaryProjects.map((project) => (
              <article
                key={project.id}
                className="card flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-heading font-bold text-[var(--fg)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {project.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-[var(--accent-subtle)] px-2.5 py-1 text-xs font-medium text-[var(--accent)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
                >
                  <GitHubIcon className="h-4 w-4" />
                  Code
                </a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
