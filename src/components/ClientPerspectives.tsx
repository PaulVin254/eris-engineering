"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Editable client perspectives. Replace with verified client quotes as needed.
 */
export const CLIENT_PERSPECTIVES = [
  {
    id: "western-kenya",
    clientName: "Maryanne K.",
    role: "Specialist Clinician, Manchester to Vihiga",
    quote:
      "Every concrete pour and curing stage was documented on film by our supervising engineer before a single milestone payment was released.",
  },
  {
    id: "kiambu-county",
    clientName: "David and Joyce M.",
    role: "Software Architect, Seattle to Kiambu",
    quote:
      "Having one fixed-sum Bill of Quantities meant material fluctuations never became our burden. The house was delivered to the exact structural specification.",
  },
  {
    id: "nakuru-county",
    clientName: "Patrick O.",
    role: "Operations Director, Dubai to Nakuru",
    quote:
      "From geotechnical soil testing to roof waterproofing, the discipline felt institutional. You are dealing directly with structural engineers, not brokers.",
  },
];

const ClientPerspectives = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const active = CLIENT_PERSPECTIVES[activeIndex];

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section className="py-24 md:py-32 bg-[#F1F2F0] border-y border-[#E2E5E2]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <motion.div {...reveal} className="max-w-4xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#1B3B2B] mb-6">
            Client Perspectives
          </p>

          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-normal tracking-[-0.02em] leading-[1.25] text-[#121413]">
            &ldquo;{active.quote}&rdquo;
          </blockquote>

          <div className="mt-8 text-sm text-[#525855]">
            <span className="font-medium text-[#121413]">
              {active.clientName}
            </span>
            <span>, {active.role}</span>
          </div>

          {/* Minimal Tab Controls */}
          <div className="mt-10 flex flex-wrap gap-2.5">
            {CLIENT_PERSPECTIVES.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "rounded-lg px-4 py-2 text-xs font-medium transition-colors border",
                  activeIndex === idx
                    ? "bg-[#1B3B2B] text-[#FAFAFA] border-[#1B3B2B]"
                    : "bg-white text-[#525855] border-[#E2E5E2] hover:text-[#121413]"
                )}
              >
                {item.clientName}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPerspectives;
