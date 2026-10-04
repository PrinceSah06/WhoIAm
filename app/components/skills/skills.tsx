"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { skillCategories } from "../../../config/skills";

export function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-neutral-200 bg-[#f7f7f5] px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
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
            04 · Skills
          </p>

          <h2 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Technologies I use
            <br />
            to <span className="text-neutral-400">build.</span>
          </h2>
        </motion.div>

        {/* Skills */}
        <div className="mt-20 border-t border-neutral-300">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
              }}
              className="grid gap-8 border-b border-neutral-300 py-10 lg:grid-cols-[0.7fr_1fr_1.5fr] lg:items-start"
            >
              {/* Number + title */}
              <div className="flex items-start gap-5">
                <span className="font-mono text-xs text-neutral-400">
                  {category.number}
                </span>

                <h3 className="text-xl font-medium">
                  {category.title}
                </h3>
              </div>

              {/* Description */}
              <p className="max-w-sm text-sm leading-7 text-neutral-500">
                {category.description}
              </p>

              {/* Technology pills */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-neutral-300 bg-white px-4 py-2 text-xs font-medium text-neutral-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-neutral-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Currently exploring */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-[2rem] bg-[#111111] p-8 text-white sm:p-10"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-500">
                Currently Exploring
              </p>

              <h3 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
                Always learning what's next.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-500">
                I'm continuously exploring new technologies and
                improving my understanding of full-stack development,
                backend architecture, AI, and system design.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-neutral-400">
              <span>Explore</span>

              <ArrowUpRight size={17} />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "AI",
              "System Design",
              "Docker",
              "Bun",
              "Hono",
              "Backend Architecture",
            ].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 px-4 py-2 text-xs text-neutral-300"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}