export type JourneyItem = {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: "experience" | "education" | "project";
};

export const journey: JourneyItem[] = [
  {
    year: "Jan 2026 — Apr 2026",
    title: "Full-Stack Developer Intern",
    organization: "Quantivision Inc. · Remote · Canada",
    description:
      "Worked directly with an early-stage startup, building practical projects while learning and applying Bun, Hono.js, Python/OpenCV, Docker, and backend development.",
    type: "experience",
  },

  {
    year: "2026",
    title: "FocusAI",
    organization: "Personal Project",
    description:
      "Built a full-stack AI task and daily scheduling application using Next.js, TypeScript, PostgreSQL, Prisma, and Groq.",
    type: "project",
  },

  {
    year: "2026",
    title: "AI & Cloud Developer Tools",
    organization: "Personal Projects",
    description:
      "Built AI Chat Code Editor and Cloud Code Editor projects exploring real-time communication, AI integrations, WebContainers, Monaco Editor, authentication, and auto-saving workflows.",
    type: "project",
  },

  {
    year: "2025 — 2026",
    title: "Full-Stack Development",
    organization: "Self-Directed Learning",
    description:
      "Developed practical experience across React, Next.js, Node.js, Express, databases, authentication, APIs, Docker, AI integrations, and modern development tools.",
    type: "education",
  },

  {
    year: "Aug 2021 — Jun 2024",
    title: "Bachelor of Arts",
    organization: "RSD College, Ferozepur City, Punjab",
    description:
      "Bachelor of Arts with Information Technology as a core subject, affiliated with Punjab University.",
    type: "education",
  },
];