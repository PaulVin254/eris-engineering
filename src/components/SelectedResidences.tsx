"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

/**
 * Portfolio data for Vihiga and completed residential commissions.
 */
export const VIHIGA_RESIDENCE = {
  slug: "vihiga-residence",
  title: "The Vihiga Residence",
  location: "Vihiga County, Western Kenya",
  brief:
    "A 2-bedroom parents' retirement bungalow built for a Nairobi family under a KES 2.86M Bill of Quantities—designed in 4 weeks and protected at every critical pour by 5-milestone FIDIC engineering supervision.",
  specs: [
    { label: "Floor Area", value: "140 m²" },
    { label: "Official BOQ", value: "KES 2.86M" },
    { label: "Current Stage", value: "Roofing Stage" },
  ],
  stages: [
    {
      code: "01 Setting-Out",
      image: "/vihiga/milestone-1-setting-out.jpg",
      caption:
        "Milestone 1 audit: lime-marked foundation grid, profile boards, boundary setbacks, and safe clearance around the existing 42 ft borehole.",
    },
    {
      code: "02 Ground Slab",
      image: "/vihiga/milestone-2-slab-casting.jpg",
      caption:
        "Milestone 2 audit: hardcore compaction, 1000g DPM, BRC A142 mesh, and Class 25 slab casting alongside the family's local crew.",
    },
    {
      code: "03 Superstructure",
      image: "/vihiga/milestone-3-superstructure.jpg",
      caption:
        "Milestone 3 audit: 200mm machine-cut stone walling, Class 25 columns and 200×300mm ring beam verified after critical rebar rectifications.",
    },
    {
      code: "04 3D Vision",
      image: "/vihiga/render-aerial.jpg",
      caption:
        "Target compound render preserving the existing 6.55m × 4.65m outdoor kitchen beside the new pitched-roof 2-bedroom home.",
    },
  ],
};

export const COMPLETED_RESIDENCES = [
  {
    id: "kiambu-courtyard",
    title: "The Kiambu Courtyard House",
    location: "Kiambu County",
    area: "460 m²",
    status: "Completed Residence",
    image: "/onyx-exterior.jpg",
    note: "Five-bedroom turnkey family residence delivered against a locked Bill of Quantities with perimeter retaining walls and concealed services.",
  },
  {
    id: "highland-pavilion",
    title: "The Highland Pavilion",
    location: "Western Kenya",
    area: "340 m²",
    status: "Completed Residence",
    image: "/teak-hero.jpg",
    note: "Three-bedroom retirement residence designed for natural cross-ventilation, solar water heating, and low-maintenance stone finishes.",
  },
];

const SelectedResidences = () => {
  const [activeStage, setActiveStage] = useState(2);
  const prefersReducedMotion = useReducedMotion();
  const currentStage = VIHIGA_RESIDENCE.stages[activeStage];

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="commissions" className="py-24 md:py-32 bg-white border-y border-[#E2E5E2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Stacked Editorial Header */}
        <motion.div {...reveal} className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.025em] leading-[1.1] text-[#121413]">
            Selected commissions.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#525855] font-light leading-relaxed">
            Active construction and completed private homes across Kenya,
            documented from foundation setting-out through handover.
          </p>
        </motion.div>

        {/* Flagship Case Study: The Vihiga Residence */}
        <motion.div
          {...reveal}
          className="bg-[#F1F2F0] rounded-xl p-6 sm:p-8 lg:p-12 mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Clean Architectural Plate + Stage Switcher */}
            <div className="lg:col-span-7 space-y-4">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#121413]">
                <img
                  src={currentStage.image}
                  alt={`${VIHIGA_RESIDENCE.title} ${currentStage.code}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {VIHIGA_RESIDENCE.stages.map((stage, index) => (
                  <button
                    key={stage.code}
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors border",
                      activeStage === index
                        ? "bg-[#1B3B2B] text-[#FAFAFA] border-[#1B3B2B]"
                        : "bg-white text-[#525855] border-[#E2E5E2] hover:text-[#121413]"
                    )}
                  >
                    {stage.code}
                  </button>
                ))}
              </div>

              <p className="text-sm text-[#525855] font-light leading-relaxed">
                {currentStage.caption}
              </p>
            </div>

            {/* Right: Monograph Details */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <p className="text-xs font-mono text-[#1B3B2B] uppercase tracking-wider mb-3">
                  {VIHIGA_RESIDENCE.location}
                </p>
                <h3 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#121413]">
                  {VIHIGA_RESIDENCE.title}
                </h3>
                <p className="mt-4 text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                  {VIHIGA_RESIDENCE.brief}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {VIHIGA_RESIDENCE.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="bg-white border border-[#E2E5E2] rounded-xl p-4"
                  >
                    <div className="font-mono text-sm sm:text-base font-medium text-[#121413]">
                      {spec.value}
                    </div>
                    <div className="text-xs text-[#525855] mt-1">
                      {spec.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${VIHIGA_RESIDENCE.slug}/`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>Read Full Case Study</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5E2] bg-white hover:border-[#121413] text-[#121413] px-5 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>Book Supervision</span>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2-Up Completed Residence Plates */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {COMPLETED_RESIDENCES.map((item) => (
            <motion.article key={item.id} {...reveal} className="group">
              <div className="aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#F1F2F0] mb-5">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>

              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-normal tracking-tight text-[#121413]">
                  {item.title}
                </h3>
                <span className="font-mono text-xs text-[#525855] shrink-0">
                  {item.area}
                </span>
              </div>

              <p className="mt-1 text-xs uppercase tracking-wider text-[#1B3B2B] font-medium">
                {item.location}, {item.status}
              </p>

              <p className="mt-3 text-sm text-[#525855] font-light leading-relaxed max-w-[58ch]">
                {item.note}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectedResidences;
