export type SkillCategory = {
  id: string;
  number: string;
  title: string;
  description: string;
  skills: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "languages",
    number: "01",
    title: "Languages",
    description:
      "Languages I use across frontend, backend, scripting, and application development.",
    skills: [
      "TypeScript",
      "JavaScript",
      "Python",
    ],
  },

  {
    id: "frontend",
    number: "02",
    title: "Frontend",
    description:
      "Building responsive interfaces and application experiences with modern React technologies.",
    skills: [
      "React",
      "Next.js",
      "Zustand",
      "Redux Toolkit",
      "Tailwind CSS",
      "Monaco Editor",
      "Three.js",
    ],
  },

  {
    id: "backend",
    number: "03",
    title: "Backend",
    description:
      "Building APIs, authentication systems, real-time applications, and server-side architecture.",
    skills: [
      "Node.js",
      "Express",
      "Bun",
      "Hono",
      "REST APIs",
      "JWT",
      "Refresh Tokens",
      "RBAC",
      "Zod",
      "Socket.IO",
      "WebContainers API",
    ],
  },

  {
    id: "databases",
    number: "04",
    title: "Databases",
    description:
      "Working with relational, document, caching, and ORM-based data systems.",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Mongoose",
      "Prisma",
      "Drizzle ORM",
      "Redis",
      "Valkey",
    ],
  },

  {
    id: "ai",
    number: "05",
    title: "AI & APIs",
    description:
      "Integrating LLMs and third-party APIs into practical applications.",
    skills: [
      "Groq",
      "Google Gemini",
      "OpenAI API",
      "LLM Integration",
      "Structured JSON Output",
      "Third-party APIs",
    ],
  },

  {
    id: "devops",
    number: "06",
    title: "DevOps & Tools",
    description:
      "Tools and workflows I use to test, containerize, deploy, and manage projects.",
    skills: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "Vercel",
      "Postman",
      "Bun Test",
    ],
  },
];