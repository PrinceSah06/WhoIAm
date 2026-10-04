import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const footerLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-800 bg-[#111111] px-6 py-12 text-white sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Top */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Link
              href="#"
              className="text-xl font-semibold tracking-tight"
            >
              Prince
              <span className="text-orange-500">.</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-neutral-400">
              Full-Stack Developer building modern web applications,
              backend systems, and useful products with Next.js,
              TypeScript, and AI.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium"
            >
              Let's work together

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Navigation
            </p>

            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-neutral-500">
              Connect
            </p>

            <div className="flex flex-col gap-4">
              {/* Email */}
              <a
                href="mailto:sahp4088@gmail.com"
                className="group flex w-fit items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded border border-neutral-700 text-[10px] font-bold">
                  @
                </span>

                Email

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/PrinceSah06"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded border border-neutral-700 text-[9px] font-bold">
                  GH
                </span>

                GitHub

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>

              {/* LinkedIn */}
              <a
               href="https://www.linkedin.com/in/prince-sah-dev"
                target="_blank"
                rel="noreferrer"
                className="group flex w-fit items-center gap-3 text-sm text-neutral-400 transition-colors hover:text-white"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded border border-neutral-700 text-[11px] font-bold">
                  in
                </span>

                LinkedIn

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Prince Sah. All rights reserved.</p>

          <p>Ferozepur, Punjab · India</p>
        </div>
      </div>
    </footer>
  );
}