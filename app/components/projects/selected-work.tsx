"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../../config/project";
import { ProjectCard } from "./project-card";

export function SelectedWork() {
  const featuredProjects = projects.filter(
    (project) => project.featured,
  );

  return (
    <section
      id="work"
      className="border-t border-neutral-200 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.6fr] md:items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-neutral-400">
              02 · Selected Work
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold tracking-[-0.04em] md:text-6xl">
              Projects that
              <br />
              solve real problems
              <span className="text-orange-600">.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="max-w-md text-sm leading-6 text-neutral-500 md:text-base">
              A selection of applications and digital products
              I've built while exploring full-stack development,
              AI and modern web technologies.
            </p>

            <a
              href="/projects"
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium"
            >
              View all projects

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}