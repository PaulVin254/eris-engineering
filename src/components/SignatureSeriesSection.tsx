"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { SIGNATURE_RESIDENCES } from "@/data/signatureResidences";
import { cn } from "@/lib/utils";

const SignatureSeriesSection = () => {
  const [activeSlug, setActiveSlug] = useState(SIGNATURE_RESIDENCES[0].slug);
  const prefersReducedMotion = useReducedMotion();

  const activeResidence =
    SIGNATURE_RESIDENCES.find((item) => item.slug === activeSlug) ??
    SIGNATURE_RESIDENCES[0];

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Stacked Editorial Header */}
        <motion.div {...reveal} className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.025em] leading-[1.1] text-[#121413]">
            Signature architectural series.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#525855] font-light leading-relaxed">
            Pre-engineered residential designs with complete structural drawings,
            ready for site adaptation and immediate mobilization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left: Interactive Architectural Index */}
          <div className="lg:col-span-5 divide-y divide-[#E2E5E2] border-y border-[#E2E5E2]">
            {SIGNATURE_RESIDENCES.map((residence) => {
              const isSelected = residence.slug === activeResidence.slug;
              return (
                <button
                  key={residence.slug}
                  type="button"
                  onClick={() => setActiveSlug(residence.slug)}
                  className={cn(
                    "w-full py-5 pr-4 text-left flex items-center justify-between gap-4 transition-all border-l-2",
                    isSelected
                      ? "border-[#1B3B2B] pl-4 text-[#121413]"
                      : "border-transparent pl-0 text-[#525855] hover:text-[#121413]"
                  )}
                >
                  <div>
                    <div className="text-lg sm:text-xl font-normal tracking-tight">
                      {residence.title}
                    </div>
                    <div className="text-xs text-[#525855] mt-0.5">
                      {residence.subtitle}
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[#525855] shrink-0">
                    {residence.areaSqm}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Active Plate Preview */}
          <div className="lg:col-span-7 space-y-6">
            <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#121413]">
              <img
                src={activeResidence.heroImage}
                alt={activeResidence.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <p className="text-sm sm:text-base text-[#525855] font-light leading-relaxed max-w-xl">
                {activeResidence.architecturalThesis}
              </p>

              <Link
                href={`/projects/${activeResidence.slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-5 py-3 text-sm font-medium shrink-0 self-start transition-colors"
              >
                <span>View Residence</span>
                <ArrowUpRight size={15} weight="regular" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureSeriesSection;
