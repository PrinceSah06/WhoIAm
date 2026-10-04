"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Button } from "../../components/ui/button";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse movement
  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
  });

  function handleMouseMove(
    event: React.MouseEvent<HTMLDivElement>,
  ) {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    mouseX.set((x - rect.width / 2) / 20);
    mouseY.set((y - rect.height / 2) / 20);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-20 pt-32"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(#d9d9d4 1px, transparent 1px), linear-gradient(90deg, #d9d9d4 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex items-center gap-3 text-sm text-neutral-500"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>

          Available for opportunities
        </motion.div>

        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-neutral-500"
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.9] tracking-[-0.06em]"
            >
              I build
              <br />
              full-stack
              <br />
              <span className="text-neutral-400">
                products.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-8 max-w-xl text-base leading-7 text-neutral-600 md:text-lg"
            >
              I'm Prince, a full-stack developer working with
              MERN, Next.js, TypeScript, REST APIs, and AI
              integrations. I enjoy building useful products and
              learning how the systems behind them work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.4,
              }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <Button className="group">
                View my work

                <ArrowUpRight
                  size={16}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Button>

              <Button variant="secondary">
                Let's talk
              </Button>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            style={{
              x: springX,
              y: springY,
            }}
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
            }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-neutral-300 bg-[#111] p-5 shadow-2xl">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>

                <span className="font-mono text-[10px] text-white/30">
                  portfolio.tsx
                </span>
              </div>

              {/* Code */}
              <div className="mt-8 font-mono text-xs leading-7 text-white/60 md:text-sm">
                <p>
                  <span className="text-orange-400">
                    const
                  </span>{" "}
                  developer = {"{"}
                </p>

                <p className="pl-5">
                  name:{" "}
                  <span className="text-white">
                    "Prince Sah"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  role:{" "}
                  <span className="text-white">
                    "Full-Stack Developer"
                  </span>
                  ,
                </p>

                <p className="pl-5">
                  stack: [
                </p>

                <p className="pl-10 text-orange-300">
                  "Next.js",
                </p>

                <p className="pl-10 text-orange-300">
                  "TypeScript",
                </p>

                <p className="pl-10 text-orange-300">
                  "Node.js",
                </p>

                <p className="pl-10 text-orange-300">
                  "PostgreSQL",
                </p>

                <p className="pl-5">],</p>

                <p className="pl-5">
                  focus: [
                </p>

                <p className="pl-10 text-orange-300">
                  "Backend",
                </p>

                <p className="pl-10 text-orange-300">
                  "AI Integration",
                </p>

                <p className="pl-10 text-orange-300">
                  "System Design",
                </p>

                <p className="pl-5">],</p>

                <p className="pl-5">
                  mindset:{" "}
                  <span className="text-white">
                    "Build & Learn"
                  </span>
                </p>

                <p>{"};"}</p>
              </div>

              {/* Animated line */}
              <motion.div
                animate={{
                  y: [0, 180, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-0 right-0 top-24 h-px bg-orange-500/60"
              />

              {/* Bottom status */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-white/10 pt-4">
                <span className="font-mono text-[10px] text-white/30">
                  BUILDING
                </span>

                <span className="font-mono text-[10px] text-orange-400">
                  ● ONLINE
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="mt-24 flex items-center justify-between border-t border-neutral-300 pt-5 text-xs uppercase tracking-widest text-neutral-400"
        >
          <div className="flex items-center gap-2">
            <ArrowDown size={14} />
            Scroll to explore
          </div>

          <span>Ferozepur, Punjab · 2026</span>
        </motion.div>
      </div>
    </section>
  );
}