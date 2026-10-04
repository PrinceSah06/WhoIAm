"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="text-lg font-semibold tracking-tight"
          >
            PRINCE<span className="text-orange-600">.</span>
          </a>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-black"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-full p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile menu */}
        {open && (
          <div className="mt-4 rounded-2xl border border-neutral-200 bg-white p-6 shadow-xl md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}