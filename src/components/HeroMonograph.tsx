"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const HeroMonograph = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex items-end bg-[#121413] pt-20">
      {/* Monumental Full-Bleed Architectural Photograph */}
      <motion.div
        initial={prefersReducedMotion ? false : { scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <img
          src="/cedar-hero.jpg"
          alt="Private residence engineered by Eris Engineering in Kenya"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Subtle Bottom-Weighted Vignette for Legibility */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#121413]/85 via-[#121413]/25 to-[#121413]/40"
      />

      {/* Quiet Lower-Left Editorial Anchor */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 pb-14 md:pb-20">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <h1 className="text-[2.125rem] sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[-0.03em] leading-[1.08] text-[#FAFAFA]">
            Architecture engineered with quiet precision.
          </h1>

          <p className="mt-5 text-base sm:text-lg text-[#FAFAFA]/80 font-light leading-relaxed max-w-xl">
            Private residences across Kenya, executed by structural engineers
            under fixed-sum contracts and documented weekly.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3.5">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-[#FAFAFA] text-[#121413] hover:bg-[#F1F2F0] px-6 py-3.5 text-sm font-medium transition-colors active:scale-[0.98]"
            >
              <span>Selected Work</span>
              <ArrowUpRight size={16} weight="regular" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#FAFAFA]/35 bg-[#121413]/30 backdrop-blur-sm text-[#FAFAFA] hover:bg-[#FAFAFA]/15 px-6 py-3.5 text-sm font-medium transition-colors active:scale-[0.98]"
            >
              <span>Private Inquiry</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroMonograph;
