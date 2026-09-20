"use client";

import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { DemoRequestForm } from "@/components/DemoRequestForm";
import { motion, itemVariants, staggerVariants } from "@/components/Motion";
import { profile } from "@/data/profile";

export function Contact() {
  return (
    <section id="contact" className="bg-[var(--dark-section)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let&apos;s work together on
              <br />
              your next project
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--dark-section-muted)]">
              Request a demo of one of my applications, or reach out about Full
              Stack and Data Engineering opportunities. I&apos;ll follow up by
              email — you can also book a meeting after you submit.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto mt-10 max-w-lg rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8"
          >
            <h3 className="font-heading text-lg font-semibold text-white">
              Request a demo
            </h3>
            <p className="mt-1 text-sm text-[var(--dark-section-muted)]">
              Share your name and email and I&apos;ll get back to you.
            </p>
            <div className="mt-6">
              <DemoRequestForm variant="dark" />
            </div>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            className="mt-16 grid gap-6 text-left sm:grid-cols-2"
          >
            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-light)]" />
                <div>
                  <div className="text-sm font-medium text-[var(--dark-section-muted)]">
                    Email
                  </div>
                  <a
                    href={`mailto:${profile.email}`}
                    className="mt-1 text-white transition-colors hover:text-[var(--accent-light)]"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-light)]" />
                <div>
                  <div className="text-sm font-medium text-[var(--dark-section-muted)]">
                    Location
                  </div>
                  <div className="mt-1 text-white">{profile.location}</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <LinkedInIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-light)]" />
                <div>
                  <div className="text-sm font-medium text-[var(--dark-section-muted)]">
                    LinkedIn
                  </div>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-white transition-colors hover:text-[var(--accent-light)]"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start gap-3">
                <GitHubIcon className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent-light)]" />
                <div>
                  <div className="text-sm font-medium text-[var(--dark-section-muted)]">
                    GitHub
                  </div>
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 text-white transition-colors hover:text-[var(--accent-light)]"
                  >
                    View my code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
