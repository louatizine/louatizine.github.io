"use client";

import { Mail, MapPin, ArrowRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/BrandIcons";
import { motion, itemVariants, staggerVariants, useReducedMotion } from "@/components/Motion";
import { profile } from "@/data/profile";

export function Contact() {
  const reducedMotion = useReducedMotion();

  return (
    <section id="contact" className="bg-[var(--dark-section)] py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Main CTA */}
          <motion.h2
            variants={itemVariants}
            className="font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl"
          >
            Let's work together on
            <br />
            your next project
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-2xl text-lg text-[var(--dark-section-muted)]"
          >
            Open to Full Stack and Data Engineering opportunities with ESNs and
            enterprise teams. Prefer email for first contact.
          </motion.p>

          <motion.a
            variants={itemVariants}
            href={`mailto:${profile.email}?subject=Opportunity%20inquiry`}
            whileHover={reducedMotion ? undefined : { scale: 1.05 }}
            whileTap={reducedMotion ? undefined : { scale: 0.95 }}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-4 font-heading text-lg font-semibold text-white shadow-xl transition-all hover:bg-[var(--accent-strong)]"
          >
            Get in Touch
            <ArrowRight className="h-5 w-5" />
          </motion.a>

          {/* Contact Details */}
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
