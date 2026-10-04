
# Prince Sah — Developer Portfolio

> A modern, responsive developer portfolio built to showcase my projects, technical skills, experience, and journey as a full-stack developer.

**Live Portfolio:** Add your deployed URL here  
**GitHub:** https://github.com/PrinceSah06  
**LinkedIn:** https://www.linkedin.com/in/prince-sah-dev

---

## About

I'm **Prince Sah**, a Junior Full-Stack Developer focused on building modern web applications, backend systems, developer tools, and AI-powered products.

My main stack includes:

- **TypeScript / JavaScript**
- **React / Next.js**
- **Node.js / Express**
- **PostgreSQL / MongoDB**
- **Prisma / Redis**
- **REST APIs**
- **JWT Authentication / RBAC**
- **AI & LLM integrations**
- **Docker**

This portfolio is more than a personal website. It is being developed as a small production-style project with a clean architecture so that it can evolve as my skills and projects grow.

---

## What This Portfolio Showcases

### Projects

A collection of my full-stack and AI-focused projects, including:

- **FocusAI** — AI-powered task and daily scheduling application
- **BestPracticeBackend** — Production-style authentication API
- **AI Chat Code Editor** — Real-time AI coding workspace
- **Cloud Code Editor** — Private cloud-based coding environment

### Skills

Technologies and tools I work with across:

- Frontend development
- Backend development
- Databases
- Authentication
- AI integrations
- DevOps
- Developer tooling

### Experience

My development journey, including my Full-Stack Developer internship at **Quantivision Inc.**

### Contact

A simple way for recruiters, developers, and potential collaborators to connect with me.

---

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Zustand
- Redux Toolkit
- Monaco Editor
- Three.js

### Backend

- Node.js
- Express.js
- Bun
- Hono
- REST APIs
- JWT
- Refresh Tokens
- RBAC
- Zod
- Socket.IO
- WebContainers API

### Databases

- PostgreSQL
- MongoDB
- Mongoose
- Prisma
- Drizzle ORM
- Redis
- Valkey

### AI & APIs

- Groq
- Google Gemini
- OpenAI API
- LLM Integration
- Structured JSON Output
- Third-party APIs

### DevOps & Tools

- Docker
- Docker Compose
- Git
- GitHub
- Vercel
- Postman
- Bun Test

---

## Project Structure

```text
prince-portfolio/
│
├── app/
│   ├── (portfolio)/
│   │   └── page.tsx
│   │
│   ├── globals.css
│   └── layout.tsx
│
├── components/
│   ├── about/
│   │   └── about.tsx
│   │
│   ├── contact/
│   │   └── contact.tsx
│   │
│   ├── experience/
│   │   └── journey.tsx
│   │
│   ├── home/
│   │   └── hero.tsx
│   │
│   ├── layout/
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   │
│   ├── projects/
│   │   ├── project-card.tsx
│   │   └── selected-work.tsx
│   │
│   ├── skills/
│   │   └── skills.tsx
│   │
│   └── ui/
│       └── button.tsx
│
├── config/
│   ├── projects.ts
│   ├── skills.ts
│   └── journey.ts
│
├── lib/
│   └── utils.ts
│
├── public/
│   └── assets/
│
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Architecture

The project is currently designed as a **static portfolio**, but the structure is intentionally modular.

### `app/`

Contains the Next.js application routes, global styles, and page layout.

### `components/`

Contains reusable UI sections and components.

Instead of putting the entire portfolio inside one large page component, each major section has its own component.

For example:

```text
Hero
Projects
About
Skills
Journey
Contact
Footer
```

This makes the project easier to maintain and extend.

### `config/`

Contains portfolio data separately from UI components.

For example:

```ts
projects.ts
skills.ts
journey.ts
```

This allows the UI to consume structured data instead of hardcoding everything directly into components.

### `lib/`

Contains shared utilities used throughout the application.

---

## Design Direction

The portfolio uses a **minimal editorial / product-focused design**.

The visual direction focuses on:

- Strong typography
- Clean spacing
- High contrast
- Off-white and black surfaces
- Restrained orange accent
- Subtle borders
- Responsive layouts
- Smooth animations
- Interactive project cards
- Developer-focused visual elements

The goal is to make the portfolio feel like a **real digital product**, rather than a collection of template sections.

---

## Animations & Interaction

The portfolio uses **Motion** for interactive animations.

Examples include:

- Hero entrance animations
- Scroll reveal animations
- Project card interactions
- Hover transitions
- Animated code panel
- Mouse-following interactions
- Micro-interactions
- Navigation transitions

Animations are intentionally kept subtle so that they support the content instead of distracting from it.

---

## Responsive Design

The portfolio is designed mobile-first and adapts to:

- Mobile phones
- Tablets
- Laptops
- Large desktop screens

Special attention is given to:

- Navigation
- Typography scaling
- Project grids
- Section spacing
- Interactive elements
- Touch-friendly controls

---

## Current Status

### Phase 1 — Foundation

- [x] Next.js setup
- [x] TypeScript
- [x] Tailwind CSS
- [x] Project structure
- [x] Shared utility functions
- [x] Reusable UI components

### Phase 2 — Static Portfolio

- [x] Navigation
- [x] Hero section
- [x] Projects section
- [x] About section
- [x] Skills section
- [x] Experience / Journey section
- [x] Contact section
- [x] Footer
- [x] Responsive layout
- [x] Animations
- [x] Real portfolio information

### Phase 3 — Backend

Planned:

- [ ] PostgreSQL database
- [ ] Prisma schema
- [ ] Admin authentication
- [ ] Project management
- [ ] Skills management
- [ ] Experience management
- [ ] Contact message storage
- [ ] API routes

### Phase 4 — Admin Dashboard

Planned:

```text
/admin
/admin/projects
/admin/projects/new
/admin/projects/[id]
/admin/skills
/admin/experience
/admin/messages
```

The goal is to manage portfolio content without modifying the frontend code.

### Phase 5 — AI Assistant

A future AI assistant will be connected to actual portfolio data.

It should be able to answer questions such as:

> "What technologies does Prince use?"

> "Tell me about his FocusAI project."

> "Does Prince have backend experience?"

> "How can I contact Prince?"

The assistant will use real portfolio data rather than inventing information.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/PrinceSah06/prince-portfolio.git
```

Move into the project:

```bash
cd prince-portfolio
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Environment Variables

The current static portfolio does not require backend environment variables.

When backend functionality is introduced, environment variables will be added through:

```text
.env.local
```

Sensitive credentials should never be committed to GitHub.

---

## Development Philosophy

This project is being built with a simple principle:

> **Don't just make it work. Understand why it works.**

I'm using this portfolio as an opportunity to improve my understanding of:

- React architecture
- Next.js App Router
- TypeScript
- CSS and responsive design
- Animation systems
- API architecture
- Authentication
- Databases
- Backend security
- AI integrations
- Production development workflows

Rather than adding technologies just for the sake of having them on the resume, each technology should solve a real problem in the project.

---

## Roadmap

```text
Static Portfolio
      │
      ▼
Responsive & UI Polish
      │
      ▼
Animation & Interaction Refinement
      │
      ▼
Backend API
      │
      ▼
Database
      │
      ▼
Admin Dashboard
      │
      ▼
Contact Management
      │
      ▼
AI Portfolio Assistant
      │
      ▼
Production Deployment
```

---

## Future Improvements

Potential improvements include:

- [ ] Project detail pages
- [ ] Project screenshots and demos
- [ ] GitHub API integration
- [ ] Blog / technical articles
- [ ] Dark/light theme
- [ ] Admin dashboard
- [ ] Contact API
- [ ] Database-backed portfolio content
- [ ] AI portfolio assistant
- [ ] Analytics
- [ ] SEO improvements
- [ ] Open Graph images
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] Automated deployment

---

## Author

### Prince Sah

**Full-Stack Developer | MERN | Next.js | TypeScript | REST APIs | AI Integration**

📍 Ferozepur, Punjab, India

📧 **Email:** sahp4088@gmail.com

🔗 **GitHub:** https://github.com/PrinceSah06

🔗 **LinkedIn:** https://www.linkedin.com/in/prince-sah-dev

---

## License

This project is primarily a personal portfolio and learning project.

You are welcome to take inspiration from the architecture and ideas, but please don't copy the portfolio content, personal information, or branding.
