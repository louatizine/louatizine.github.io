"use client";

import { MapPin, Mail, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { motion, itemVariants, staggerVariants } from "@/components/Motion";
import { profile } from "@/data/profile";

const focusAreas = [
  {
    label: "Data platforms",
    detail: "ETL pipelines, Azure Data Factory, structured storage",
  },
  {
    label: "Backend systems",
    detail: "APIs, enterprise modules, automation at scale",
  },
  {
    label: "Next focus",
    detail: "DP-203 certification and deeper Azure data engineering",
  },
] as const;

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--bg)] py-20 sm:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 h-72 w-72 rounded-full bg-[var(--accent-subtle)] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20"
        >
          {/* Left: identity + focus */}
          <div>
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]"
            >
              About
            </motion.p>
            <motion.h2
              variants={itemVariants}
              className="mt-3 font-heading text-3xl font-bold leading-tight text-[var(--fg)] sm:text-4xl"
            >
              Building reliable systems at the{" "}
              <span className="text-[var(--accent)]">data &amp; product</span>{" "}
              intersection
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="mt-4 flex items-center gap-2 text-[var(--muted)]"
            >
              <MapPin className="h-4 w-4 shrink-0 text-[var(--accent)]" />
              <span>{profile.location}</span>
            </motion.div>

            <motion.ul variants={staggerVariants} className="mt-10 space-y-6">
              {focusAreas.map((area) => (
                <motion.li
                  key={area.label}
                  variants={itemVariants}
                  className="border-l-4 border-[var(--accent)] pl-4"
                >
                  <div className="font-heading text-base font-semibold text-[var(--fg)]">
                    {area.label}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">
                    {area.detail}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Right: full story */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-5 text-lg leading-relaxed text-[var(--muted)]">
              {profile.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-[var(--border)] pt-8">
              <div className="flex items-center gap-3">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4" />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--accent)] transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white"
                  aria-label="Email"
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-strong)]"
              >
                Let&apos;s connect
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
