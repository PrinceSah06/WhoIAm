"use client";

import { motion } from "motion/react";
import { Code2, Layers3, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Build",
    description:
      "I enjoy turning ideas into working full-stack applications and real products.",
  },
  {
    icon: Layers3,
    title: "Understand",
    description:
      "I'm particularly interested in backend architecture, authentication, APIs, and how systems work together.",
  },
  {
    icon: Sparkles,
    title: "Explore",
    description:
      "I regularly experiment with AI integrations and new tools that can improve the way I build.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="bg-[#111111] px-6 py-24 text-white sm:px-8 lg:px-12 lg:py-32"
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
            03 · About
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            I'm interested in
            <br />
            more than just
            <br />
            <span className="text-neutral-500">writing code.</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_1fr] lg:gap-24">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <p className="max-w-xl text-lg leading-8 text-neutral-300">
              I'm a junior full-stack developer focused on building
              modern web applications with MERN, Next.js, and
              TypeScript.
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
              My interests go beyond the frontend. I enjoy working
              with backend systems, authentication, APIs, databases,
              and the architecture that connects everything together.
            </p>

            <p className="mt-6 max-w-xl text-base leading-8 text-neutral-500">
              I'm also exploring AI integrations and developer tools.
              During my internship, I worked with technologies such as
              Bun, Hono, Python/OpenCV, and Docker while building
              practical projects.
            </p>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center border-b border-white/30 pb-2 text-sm font-medium transition-colors hover:border-white"
            >
              Let's work together

              <span className="ml-3 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </motion.div>

          {/* Highlights */}
          <div className="space-y-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="border-t border-white/10 py-8 first:border-t"
                >
                  <div className="flex gap-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10">
                      <Icon size={17} />
                    </div>

                    <div>
                      <h3 className="text-lg font-medium">
                        {item.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-7 text-neutral-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <p className="max-w-4xl text-2xl font-medium leading-tight tracking-tight text-neutral-300 sm:text-3xl lg:text-4xl">
            "I want to keep building, keep learning, and understand
            not only how to use technology, but how the systems behind
            it actually work."
          </p>
        </motion.div>
      </div>
    </section>
  );
}