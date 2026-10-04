"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../../config/project";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white"
    >
      {/* Media */}
      <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="relative h-full w-full">
            {/* Grid */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <span className="block font-mono text-xs uppercase tracking-[0.3em] text-white/40">
                  {project.category}
                </span>

                <h3 className="mt-3 px-6 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                  {project.title}
                </h3>
              </div>
            </div>

            <div className="absolute bottom-5 left-5 font-mono text-xs text-white/30">
              PROJECT_{project.number}
            </div>
          </div>
        )}

        {/* Project number */}
        <div className="absolute left-4 top-4 rounded-full bg-black/70 px-3 py-1.5 font-mono text-[10px] text-white backdrop-blur-sm">
          {project.number}
        </div>

        {/* Arrow */}
        <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-100">
          <ArrowUpRight size={17} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-neutral-400">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-semibold tracking-tight">
              {project.title}
            </h3>
          </div>

          <span className="font-mono text-xs text-neutral-400">
            {project.number}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-neutral-500">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-600"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}