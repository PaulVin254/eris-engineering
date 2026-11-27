"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { SignatureResidence } from "@/data/signatureResidences";

interface ResidenceMonographLayoutProps {
  residence: SignatureResidence;
}

const ResidenceMonographLayout = ({
  residence,
}: ResidenceMonographLayoutProps) => {
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
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <Header />

      <main>
        {/* Full-Bleed Architectural Hero */}
        <section className="relative min-h-[82dvh] w-full overflow-hidden flex items-end bg-[#121413] pt-20">
          <motion.div
            initial={prefersReducedMotion ? false : { scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={residence.heroImage}
              alt={residence.title}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#121413]/85 via-[#121413]/25 to-[#121413]/40"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 pb-14 md:pb-20">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#FAFAFA]">
                {residence.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#FAFAFA]/80 font-light leading-relaxed max-w-xl">
                {residence.architecturalThesis}
              </p>
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FAFAFA] text-[#121413] hover:bg-[#F1F2F0] px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>Private Inquiry</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
                <Link
                  href="/concepts"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FAFAFA]/35 bg-[#121413]/30 backdrop-blur-sm text-[#FAFAFA] hover:bg-[#FAFAFA]/15 px-5 py-3.5 text-sm font-medium transition-colors"
                >
                  <ArrowLeft size={15} weight="regular" />
                  <span>All Series</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Cell Specification Strip */}
        <section className="bg-white border-b border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E5E2]">
              <div className="py-7 pr-6">
                <div className="text-xs text-[#525855] uppercase tracking-wider">
                  Gross Floor Area
                </div>
                <div className="mt-1.5 font-mono text-lg text-[#121413]">
                  {residence.areaSqm}
                </div>
              </div>
              <div className="py-7 lg:px-8">
                <div className="text-xs text-[#525855] uppercase tracking-wider">
                  Accommodation
                </div>
                <div className="mt-1.5 font-mono text-lg text-[#121413]">
                  {residence.bedrooms} Bedrooms
                </div>
              </div>
              <div className="py-7 pr-6 lg:px-8">
                <div className="text-xs text-[#525855] uppercase tracking-wider">
                  Roof Assembly
                </div>
                <div className="mt-1.5 text-base font-medium text-[#121413]">
                  {residence.roofSystem}
                </div>
              </div>
              <div className="py-7 lg:pl-8">
                <div className="text-xs text-[#525855] uppercase tracking-wider">
                  Indicative Build Budget
                </div>
                <div className="mt-1.5 font-mono text-lg text-[#1B3B2B]">
                  {residence.estimateRange}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spatial Narrative & Courtyard Plate */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <motion.div {...reveal} className="lg:col-span-5 space-y-6">
                <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                  {residence.narrativeTitle}
                </h2>
                {residence.narrativeParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-base text-[#525855] font-light leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
                <div className="pt-2 border-t border-[#E2E5E2]">
                  <div className="text-xs uppercase tracking-wider text-[#525855]">
                    Suited Topography and Zones
                  </div>
                  <div className="mt-1 text-sm font-medium text-[#121413]">
                    {residence.idealZones}
                  </div>
                </div>
              </motion.div>

              <motion.div
                {...reveal}
                className="lg:col-span-7 aspect-[16/10] rounded-xl overflow-hidden bg-[#F1F2F0]"
              >
                <img
                  src={residence.courtyardImage}
                  alt={`${residence.title} interior and landscape interface`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Structural Engineering Notes */}
        <section className="py-24 bg-white border-y border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="bg-[#F1F2F0] rounded-xl p-8 sm:p-10 lg:p-12">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 pb-8 mb-8 border-b border-[#E2E5E2]">
                <img
                  src="/engineer-paul-headshot.png"
                  alt="Eng. Paul Wakoli"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 bg-white"
                />
                <div>
                  <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-[#121413]">
                    Structural Engineering Specification
                  </h2>
                  <p className="mt-1 text-sm text-[#525855]">
                    Prepared by Eng. Paul Wakoli, Principal Civil and Structural
                    Engineer
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {residence.engineeringNotes.map((note) => (
                  <div
                    key={note.index}
                    className="bg-white border border-[#E2E5E2] rounded-xl p-6 space-y-3"
                  >
                    <div className="font-mono text-xs text-[#1B3B2B]">
                      {note.index}
                    </div>
                    <h3 className="text-lg font-medium tracking-tight text-[#121413]">
                      {note.title}
                    </h3>
                    <p className="text-sm text-[#525855] font-light leading-relaxed">
                      {note.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3-Plate Detail Monograph */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] text-[#121413]">
                Architectural details.
              </h2>
              <p className="mt-3 text-base text-[#525855] font-light leading-relaxed">
                Key material assemblies and structural intersections across{" "}
                {residence.title}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {residence.plates.map((plate) => (
                <div key={plate.title} className="group">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-[#F1F2F0] mb-4">
                    <img
                      src={plate.image}
                      alt={plate.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-[#121413]">
                    {plate.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#525855] font-light leading-relaxed">
                    {plate.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
};

export default ResidenceMonographLayout;
