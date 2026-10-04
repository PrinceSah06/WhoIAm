"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-neutral-200 bg-white px-6 py-24 sm:px-8 lg:px-12 lg:py-32"
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
            06 · Contact
          </p>

          <h2 className="max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
            Let's build
            <br />
            something{" "}
            <span className="text-neutral-400">useful.</span>
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <p className="max-w-md text-lg leading-8 text-neutral-600">
                Have a project, opportunity, or idea you'd like to
                discuss? Send me a message and I'll get back to you.
              </p>

              <div className="mt-10 space-y-5">
                {/* Email */}
                <a
                  href="mailto:sahp4088@gmail.com"
                  className="group flex items-center gap-4"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 group-hover:bg-black group-hover:text-white">
                    <Mail size={18} />
                  </span>

                  <span className="text-sm font-medium">
                    sahp4088@gmail.com
                  </span>

                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </a>

                {/* Location */}
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200">
                    <MapPin size={18} />
                  </span>

                  <span className="text-sm font-medium text-neutral-700">
                    Ferozepur, Punjab, India
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-16 border-t border-neutral-200 pt-6">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                Open to
              </p>

              <p className="mt-3 text-sm leading-6 text-neutral-600">
                Junior Full-Stack roles · Backend roles · Remote ·
                Relocation
              </p>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-8"
            onSubmit={(event) => event.preventDefault()}
          >
            {/* Name + Email */}
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
                />
              </div>
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What would you like to talk about?"
                className="w-full border-b border-neutral-300 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-3 block text-xs font-medium uppercase tracking-[0.15em] text-neutral-500"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className="w-full resize-none border-b border-neutral-300 bg-transparent px-0 py-4 text-base outline-none transition-colors placeholder:text-neutral-400 focus:border-black"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-black px-7 py-4 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-neutral-800"
            >
              Send message

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </button>

            <p className="text-xs leading-5 text-neutral-400">
              The contact form is currently a static UI. We'll connect it
              to a backend later.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}