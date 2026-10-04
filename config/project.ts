export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
  video?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "focus-ai",
    number: "01",
    title: "FocusAI",
    category: "AI / Productivity",
    description:
      "An AI-powered task and daily scheduling app that turns a user's to-do list into a prioritized daily schedule based on deadlines, duration, priority, and energy level.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Groq",
    ],
    featured: true,
    liveUrl: "#",
  },

  {
    id: "best-practice-backend",
    number: "02",
    title: "BestPracticeBackend",
    category: "Backend / Authentication",
    description:
      "A production-style authentication API template focused on secure JWT authentication, refresh-token rotation, Redis session tracking, RBAC, rate limiting, testing, and Docker.",
    technologies: [
      "Bun",
      "Hono",
      "TypeScript",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    featured: true,
    githubUrl: "#",
  },

  {
    id: "ai-chat-code-editor",
    number: "03",
    title: "AI Chat Code Editor",
    category: "AI / Developer Tools",
    description:
      "A real-time AI coding workspace where users can chat with an AI assistant, receive structured code, and run code directly inside the browser.",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Gemini",
      "Redis",
    ],
    featured: true,
    liveUrl: "#",
  },

  {
    id: "cloud-code-editor",
    number: "04",
    title: "Cloud Code Editor",
    category: "Developer Tools",
    description:
      "A private cloud IDE where users can create projects, edit code with a VS Code-style editor, and automatically save their work.",
    technologies: [
      "React",
      "TypeScript",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Monaco",
    ],
    featured: true,
  },
];