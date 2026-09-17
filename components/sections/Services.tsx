"use client";

import { Database, Code, Sparkles, ArrowRight, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "@/components/Motion";

type Service = {
  id: string;
  index: string;
  icon: LucideIcon;
  title: string;
  focus: string;
  description: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    id: "data-engineering",
    index: "01",
    icon: Database,
    title: "Data Engineering & Pipelines",
    focus: "Pipelines",
    featured: true,
    description:
      "Building scalable ETL pipelines and data workflows with Azure Data Factory, Databricks, and modern orchestration tools. Focus on reliable data ingestion, transformation, and structured storage.",
  },
  {
    id: "full-stack",
    index: "02",
    icon: Code,
    title: "Full Stack Development",
    focus: "Products",
    description:
      "Developing enterprise applications with .NET/C#, React, and Node.js. Experience with modular ERP systems, real-time applications, and document automation integrated with Microsoft Graph and SharePoint.",
  },
  {
    id: "ai-ml",
    index: "03",
    icon: Sparkles,
    title: "AI/ML Integration",
    focus: "Intelligence",
    description:
      "Integrating machine learning capabilities into production systems. Practical experience with Azure AI services, computer vision applications, and bringing ML models into operational data flows.",
  },
];

export function Services() {
  const reducedMotion = useReducedMotion();
  const featured = services.find((s) => s.featured)!;
  const secondary = services.filter((s) => !s.featured);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent-light)] to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[var(--accent-subtle)] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
              What I do
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-[var(--fg)] sm:text-4xl lg:text-5xl">
              Three lanes that{" "}
              <span className="text-[var(--accent)]">connect data to products</span>
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)]">
              Specialized in building data-driven systems that bridge backend
              infrastructure, data pipelines, and user-facing applications.
            </p>
          </div>

          <a
            href="#projects"
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-[var(--accent)] px-6 py-3 font-semibold text-white transition-all hover:bg-[var(--accent-strong)] hover:shadow-lg sm:self-auto"
          >
            View My Work
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Bento: featured + stacked pair */}
        <div className="mt-14 grid gap-5 lg:grid-cols-12 lg:gap-6">
          <ServicePanel
            service={featured}
            reducedMotion={!!reducedMotion}
            className="lg:col-span-7 lg:min-h-[28rem]"
            delay={0}
          />

          <div className="grid gap-5 lg:col-span-5 lg:grid-rows-2 lg:gap-6">
            {secondary.map((service, i) => (
              <ServicePanel
                key={service.id}
                service={service}
                reducedMotion={!!reducedMotion}
                className="lg:min-h-0"
                delay={0.1 + i * 0.08}
                compact
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicePanel({
  service,
  reducedMotion,
  className = "",
  delay = 0,
  compact = false,
}: {
  service: Service;
  reducedMotion: boolean;
  className?: string;
  delay?: number;
  compact?: boolean;
}) {
  const Icon = service.icon;

  return (
    <motion.article
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: reducedMotion ? 0 : delay, ease: "easeOut" }}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--bg)] p-7 transition-colors duration-300 hover:border-[var(--accent-light)] hover:bg-[var(--accent-subtle)] sm:p-8 ${className}`}
    >
      {/* Index watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-4 font-mono text-[7rem] font-bold leading-none text-[var(--accent)] opacity-[0.06] transition-opacity duration-300 group-hover:opacity-[0.12] sm:text-[8.5rem]"
      >
        {service.index}
      </span>

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--accent)] shadow-sm ring-1 ring-[var(--border)] transition-transform duration-300 group-hover:scale-105 group-hover:ring-[var(--accent-light)]">
          <Icon className="h-5 w-5" strokeWidth={2.25} />
        </div>
        <span className="rounded-md bg-white/80 px-2.5 py-1 font-mono text-xs font-semibold tracking-wide text-[var(--accent)] ring-1 ring-[var(--border)]">
          {service.focus}
        </span>
      </div>

      <div className={`relative mt-auto pt-8 ${compact ? "pt-6" : "pt-16"}`}>
        <p className="font-mono text-sm font-semibold text-[var(--accent)]">
          {service.index}
        </p>
        <h3
          className={`mt-2 font-heading font-bold text-[var(--fg)] ${
            compact ? "text-xl" : "text-2xl sm:text-3xl"
          }`}
        >
          {service.title}
        </h3>
        <p
          className={`mt-3 leading-relaxed text-[var(--muted)] ${
            compact ? "text-sm" : "max-w-md text-base"
          }`}
        >
          {service.description}
        </p>

        <div
          aria-hidden
          className="mt-6 h-0.5 w-10 origin-left rounded-full bg-[var(--accent)] transition-all duration-300 group-hover:w-24"
        />
      </div>
    </motion.article>
  );
}
