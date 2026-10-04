"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { journey } from "../../../config/journey";

const icons = {
  experience: Briefcase,
  education: GraduationCap,
  project: Code2,
};

export function Journey() {
  return (
    <section
      id="experience"
      className="border-t border-neutral-200 bg-[#f0f0ed] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
            05 · Journey
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Still learning.
            <br />
            Still <span className="text-neutral-400">building.</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="mt-20 border-t border-neutral-300">
          {journey.map((item, index) => {
            const Icon = icons[item.type];

            return (
              <motion.div
                key={`${item.year}-${item.title}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="grid gap-6 border-b border-neutral-300 py-10 lg:grid-cols-[0.8fr_1.4fr_2fr] lg:gap-10"
              >
                {/* Year */}
                <div className="font-mono text-xs uppercase tracking-wider text-neutral-400">
                  {item.year}
                </div>

                {/* Title */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-neutral-300 bg-[#f7f7f5]">
                    <Icon size={17} />
                  </div>

                  <div>
                    <h3 className="text-xl font-medium tracking-tight">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm text-neutral-500">
                      {item.organization}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="flex items-start justify-between gap-6">
                  <p className="max-w-xl text-sm leading-7 text-neutral-500">
                    {item.description}
                  </p>

                  <ArrowUpRight
                    size={17}
                    className="hidden shrink-0 text-neutral-400 lg:block"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 grid gap-8 md:grid-cols-2"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              Current direction
            </p>

            <p className="mt-4 max-w-xl text-2xl font-medium leading-tight tracking-tight">
              Building real products while getting deeper into backend
              systems, AI, and software architecture.
            </p>
          </div>

          <div className="flex items-end md:justify-end">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 border-b border-neutral-400 pb-2 text-sm font-medium transition-colors hover:border-black"
            >
              Let's build something

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}