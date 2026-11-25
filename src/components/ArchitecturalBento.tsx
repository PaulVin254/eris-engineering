"use client";

import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";

const ArchitecturalBento = () => {
  const prefersReducedMotion = useReducedMotion();

  const reveal = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 16 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-60px" },
        transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
      };

  return (
    <section id="bento" className="py-24 md:py-32 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Stacked Architectural Heading */}
        <motion.div {...reveal} className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.025em] leading-[1.1] text-[#121413]">
            Built on structural discipline.
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#525855] font-light leading-relaxed">
            Every residence is governed by civil engineering calculations,
            verified material procurement, and scheduled weekly site records.
          </p>
        </motion.div>

        {/* 5-Cell Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
          {/* Cell 1: Large Photographic Plate */}
          <motion.div
            {...reveal}
            className="md:col-span-6 lg:col-span-7 relative rounded-xl overflow-hidden min-h-[360px] lg:min-h-[420px] bg-[#121413] group"
          >
            <img
              src="/teak-courtyard.jpg"
              alt="Cantilevered masonry and timber residential courtyard"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#121413]/85 via-[#121413]/20 to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9 text-[#FAFAFA]">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight">
                Material Permanence
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#FAFAFA]/80 font-light max-w-md leading-relaxed">
                Reinforced concrete cantilevers, ventilated timber rainscreens,
                and hand-dressed stone masonry detailed for decades.
              </p>
            </div>
          </motion.div>

          {/* Cell 2: Highland Forest Architectural Standard Tile */}
          <motion.div
            {...reveal}
            className="md:col-span-6 lg:col-span-5 bg-[#1B3B2B] text-[#FAFAFA] rounded-xl p-8 md:p-10 flex flex-col justify-between min-h-[360px] lg:min-h-[420px]"
          >
            <div className="font-mono text-5xl md:text-6xl font-normal tracking-tight text-[#FAFAFA]">
              100%
            </div>

            <div className="mt-12">
              <h3 className="text-xl md:text-2xl font-normal tracking-tight">
                Milestone-Gated Execution
              </h3>
              <p className="mt-3 text-sm md:text-base text-[#FAFAFA]/80 font-light leading-relaxed">
                Capital releases strictly against engineer-certified structural
                completions across five defined stages, governed by a fixed-sum
                Bill of Quantities.
              </p>
            </div>
          </motion.div>

          {/* Cell 3: Concrete Mist Weekly Documentation Tile */}
          <motion.div
            {...reveal}
            className="md:col-span-2 lg:col-span-4 bg-[#F1F2F0] text-[#121413] rounded-xl p-8 flex flex-col justify-between min-h-[290px]"
          >
            <div className="font-mono text-3xl md:text-4xl font-normal tracking-tight text-[#1B3B2B]">
              Friday 17:00
            </div>

            <div className="mt-10">
              <h3 className="text-xl font-normal tracking-tight">
                Recorded Site Inspections
              </h3>
              <p className="mt-2.5 text-sm text-[#525855] font-light leading-relaxed">
                High-definition site walkthroughs filmed every week by the
                supervising engineer alongside verified material delivery logs.
              </p>
            </div>
          </motion.div>

          {/* Cell 4: Interior Architectural Detail Photograph */}
          <motion.div
            {...reveal}
            className="md:col-span-2 lg:col-span-4 relative rounded-xl overflow-hidden min-h-[290px] bg-[#121413] group"
          >
            <img
              src="/quartz-kitchen-patio.jpg"
              alt="Flush sliding threshold between kitchen and courtyard terrace"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#121413]/85 via-[#121413]/15 to-transparent"
            />
            <div className="absolute bottom-0 left-0 right-0 p-7 text-[#FAFAFA]">
              <h3 className="text-xl font-normal tracking-tight">
                Threshold Precision
              </h3>
              <p className="mt-1.5 text-sm text-[#FAFAFA]/80 font-light leading-relaxed">
                Flush slot-drained glazing tracks and concealed steel lintels.
              </p>
            </div>
          </motion.div>

          {/* Cell 5: Gallery White Principal-Led Practice Tile */}
          <motion.div
            {...reveal}
            className="md:col-span-2 lg:col-span-4 bg-white border border-[#E2E5E2] text-[#121413] rounded-xl p-8 flex flex-col justify-between min-h-[290px]"
          >
            <div>
              <h3 className="text-xl font-normal tracking-tight">
                Principal-Led Practice
              </h3>
              <p className="mt-3 text-sm text-[#525855] font-light leading-relaxed">
                Direct oversight by founding civil and structural engineers from
                geotechnical soil investigation through final commissioning.
              </p>
            </div>

            <div className="pt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3B2B] hover:text-[#142C20] transition-colors"
              >
                <span>Practice Overview</span>
                <ArrowUpRight size={15} weight="regular" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchitecturalBento;
