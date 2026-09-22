"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";
import { CvDownloadButton } from "@/components/CvDownloadButton";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";

const heroContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
} as const;

const heroItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
} as const;

export function Hero() {
  const reducedMotion = useReducedMotion();

  // Calculate real stats from data
  const yearsExperience = new Date().getFullYear() - 2021; // Adjust based on earliest role
  const projectsCount = projects.length;
  const techCount = Array.from(
    new Set(experience.flatMap((role) => role.tech))
  ).length;

  return (
    <section
      id="top"
      className="gradient-blob relative overflow-hidden pb-16 pt-24 sm:pb-24 sm:pt-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Hero Content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={reducedMotion ? undefined : heroContainer}
          className="grid gap-12 lg:grid-cols-2 lg:gap-16"
        >
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <motion.h1
              variants={reducedMotion ? undefined : heroItem}
              className="font-heading text-4xl font-bold leading-tight tracking-tight text-[var(--fg)] sm:text-5xl lg:text-6xl"
            >
              Hello, I'm{" "}
              <span className="text-[var(--accent)]">{profile.name.split(" ")[0]}</span>
            </motion.h1>

            <motion.p
              variants={reducedMotion ? undefined : heroItem}
              className="mt-4 font-heading text-xl font-semibold text-[var(--muted)] sm:text-2xl"
            >
              {profile.title.split(" specializing")[0]}
            </motion.p>

            <motion.div
              variants={reducedMotion ? undefined : heroItem}
              className="mt-6 space-y-3 text-lg leading-relaxed text-[var(--muted)]"
            >
              {profile.valueProposition.map((sentence, i) => (
                <p key={i}>{sentence}</p>
              ))}
            </motion.div>

            <motion.div
              variants={reducedMotion ? undefined : heroItem}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--accent-strong)] hover:shadow-lg"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </a>
              <CvDownloadButton />
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            variants={reducedMotion ? undefined : heroItem}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-purple-100 to-pink-50 shadow-2xl">
              <Image
                src="/assets/Gemini_Generated_Image_rahd08rahd08rahd.jpg"
                alt={profile.name}
                fill
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="object-cover object-[center_12%]"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={reducedMotion ? undefined : heroContainer}
          initial="hidden"
          animate="visible"
          className="mt-16 grid gap-6 sm:grid-cols-3"
        >
          <motion.div
            variants={reducedMotion ? undefined : heroItem}
            className="rounded-2xl bg-[var(--accent-subtle)] p-6 text-center"
          >
            <div className="font-heading text-4xl font-bold text-[var(--accent)]">
              {yearsExperience}+
            </div>
            <div className="mt-2 text-sm font-medium text-[var(--muted)]">
              Years Experience
            </div>
          </motion.div>

          <motion.div
            variants={reducedMotion ? undefined : heroItem}
            className="rounded-2xl bg-[var(--accent-subtle)] p-6 text-center"
          >
            <div className="font-heading text-4xl font-bold text-[var(--accent)]">
              {projectsCount}
            </div>
            <div className="mt-2 text-sm font-medium text-[var(--muted)]">
              Featured Projects
            </div>
          </motion.div>

          <motion.div
            variants={reducedMotion ? undefined : heroItem}
            className="rounded-2xl bg-[var(--accent-subtle)] p-6 text-center"
          >
            <div className="font-heading text-4xl font-bold text-[var(--accent)]">
              {techCount}+
            </div>
            <div className="mt-2 text-sm font-medium text-[var(--muted)]">
              Technologies
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
