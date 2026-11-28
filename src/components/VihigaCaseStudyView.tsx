"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle,
  FileText,
  ShieldCheck,
  WarningOctagon,
} from "@phosphor-icons/react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { cn } from "@/lib/utils";
import {
  CONSULTATION_SNAPSHOTS,
  VIHIGA_AUDIT_FINDINGS,
  VIHIGA_BOQ_ROWS,
  VIHIGA_CONDITION_PLATES,
  VIHIGA_CONSTRAINTS,
  VIHIGA_CONSULTATION_JOURNEY,
  VIHIGA_OVERVIEW,
  VIHIGA_PROGRESSION_STAGES,
  VIHIGA_RENDERS,
} from "@/data/vihigaCaseStudy";

const VihigaCaseStudyView = () => {
  const [activeStage, setActiveStage] = useState(2);
  const prefersReducedMotion = useReducedMotion();
  const currentStage = VIHIGA_PROGRESSION_STAGES[activeStage];

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
        {/* 1. Full-Bleed Real Elevated Site Hero */}
        <section className="relative min-h-[84dvh] w-full overflow-hidden flex items-end bg-[#121413] pt-24">
          <motion.div
            initial={prefersReducedMotion ? false : { scale: 1.03 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <img
              src={VIHIGA_OVERVIEW.heroImage}
              alt="Elevated view of The Vihiga Residence superstructure and ring beam under Eris Engineering supervision"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#121413]/92 via-[#121413]/45 to-[#121413]/40"
          />

          <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 lg:px-10 pb-14 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-xs font-mono uppercase tracking-widest text-[#FAFAFA]/80 mb-3">
                {VIHIGA_OVERVIEW.location} · Real Project Case Study
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#FAFAFA]">
                {VIHIGA_OVERVIEW.title}
              </h1>
              <p className="mt-4 text-base sm:text-lg text-[#FAFAFA]/90 font-light leading-relaxed max-w-2xl">
                {VIHIGA_OVERVIEW.heroHeadline}
              </p>
              <p className="mt-3 text-sm text-[#FAFAFA]/75 font-light max-w-2xl">
                {VIHIGA_OVERVIEW.clientProfile}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FAFAFA] text-[#121413] hover:bg-[#F1F2F0] px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>Book Supervision Like This</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
                <a
                  href="#progression"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#FAFAFA]/35 bg-[#121413]/40 backdrop-blur-sm text-[#FAFAFA] hover:bg-[#FAFAFA]/15 px-5 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>See All 4 Construction Stages</span>
                </a>
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-1.5 text-sm text-[#FAFAFA]/80 hover:text-[#FAFAFA] px-2 py-2 transition-colors"
                >
                  <ArrowLeft size={15} weight="regular" />
                  <span>All Residences</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 4-Cell Verified Specification Strip */}
        <section className="bg-white border-b border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E5E2]">
              {VIHIGA_OVERVIEW.specs.map((spec, idx) => (
                <div
                  key={spec.label}
                  className={cn(
                    "py-7",
                    idx === 0 && "pr-6",
                    idx === 1 && "lg:px-8",
                    idx === 2 && "pr-6 lg:px-8",
                    idx === 3 && "lg:pl-8"
                  )}
                >
                  <div className="text-xs text-[#525855] uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div
                    className={cn(
                      "mt-1.5 font-mono text-lg sm:text-xl",
                      idx === 1 ? "text-[#1B3B2B] font-medium" : "text-[#121413]"
                    )}
                  >
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Matched Elevated Site Progression Switcher */}
        <section id="progression" className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div {...reveal} className="max-w-2xl mb-10">
              <p className="text-xs font-mono uppercase tracking-widest text-[#1B3B2B] mb-2">
                Same Site · Overhead Evidence
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                Watch the house rise from chalk lines to ring beam.
              </h2>
              <p className="mt-3 text-base text-[#525855] font-light leading-relaxed">
                Every critical pour was verified on site from the same vantage point before the next crew moved in.
              </p>
            </motion.div>

            <motion.div
              {...reveal}
              className="bg-white border border-[#E2E5E2] rounded-xl p-5 sm:p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-8 space-y-4">
                  <div className="aspect-[4/3] sm:aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#121413]">
                    <img
                      src={currentStage.image}
                      alt={`${currentStage.code} — ${currentStage.title}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {VIHIGA_PROGRESSION_STAGES.map((stage, index) => (
                      <button
                        key={stage.code}
                        type="button"
                        onClick={() => setActiveStage(index)}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-left text-xs font-medium transition-colors border",
                          activeStage === index
                            ? "bg-[#1B3B2B] text-[#FAFAFA] border-[#1B3B2B]"
                            : "bg-[#F1F2F0] text-[#525855] border-[#E2E5E2] hover:text-[#121413]"
                        )}
                      >
                        <div className="font-mono">{stage.code}</div>
                        <div
                          className={cn(
                            "text-[11px] mt-0.5",
                            activeStage === index ? "text-[#FAFAFA]/80" : "text-[#525855]"
                          )}
                        >
                          {stage.dateLabel}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex flex-col justify-between space-y-6 bg-[#F1F2F0] rounded-xl p-6">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-wider text-[#1B3B2B]">
                      {currentStage.code} · {currentStage.dateLabel}
                    </p>
                    <h3 className="mt-2 text-xl sm:text-2xl font-normal tracking-tight text-[#121413]">
                      {currentStage.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#525855] font-light leading-relaxed">
                      {currentStage.caption}
                    </p>
                  </div>

                  <div className="border-t border-[#E2E5E2] pt-5 space-y-3">
                    <p className="text-xs text-[#525855] font-light leading-relaxed">
                      Want independent milestone verification for your own local fundis?
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-5 py-3 text-sm font-medium transition-colors"
                    >
                      <span>Request Supervision Proposal</span>
                      <ArrowUpRight size={15} weight="regular" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 4. Real Site Constraints & Condition Assessment */}
        <section className="py-20 md:py-24 bg-white border-y border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div {...reveal} className="max-w-2xl mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-[#1B3B2B] mb-2">
                Real Constraints Solved
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                Tight sloping plot. 1-month design window. Family traditions honored.
              </h2>
              <p className="mt-3 text-base text-[#525855] font-light leading-relaxed">
                Most residential headaches begin before a shovel touches the ground. Here is how early engineering decisions kept the Vihiga build inside its KES 2.5M–3.0M ceiling.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {VIHIGA_CONSTRAINTS.map((item) => (
                <motion.div
                  key={item.index}
                  {...reveal}
                  className="bg-[#F1F2F0] rounded-xl p-6 sm:p-8 border border-[#E2E5E2]/80"
                >
                  <div className="font-mono text-xs text-[#1B3B2B]">
                    {item.index}
                  </div>
                  <h3 className="mt-2 text-lg sm:text-xl font-medium tracking-tight text-[#121413]">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                    {item.summary}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {VIHIGA_CONDITION_PLATES.map((plate) => (
                <motion.div key={plate.title} {...reveal} className="group">
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[#F1F2F0] mb-4 border border-[#E2E5E2]">
                    <img
                      src={plate.image}
                      alt={plate.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-[#121413]">
                    {plate.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#525855] font-light leading-relaxed">
                    {plate.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Consultation Journey & 3D Architectural Vision */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div {...reveal} className="max-w-2xl mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-[#1B3B2B] mb-2">
                From Brief to Drawings in 4 Weeks
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                How the consultation worked—no guesswork, no disappearing act.
              </h2>
              <p className="mt-3 text-base text-[#525855] font-light leading-relaxed">
                Every design stage unlocked after the family reviewed and approved the previous milestone—moving from first Nairobi coffee meeting to stamped drawings and a line-by-line BOQ in 28 days.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
              {VIHIGA_CONSULTATION_JOURNEY.map((step) => (
                <motion.div
                  key={step.step}
                  {...reveal}
                  className="bg-white border border-[#E2E5E2] rounded-xl p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-mono text-[#1B3B2B]">
                      <span>{step.step}</span>
                      <span className="text-[#525855]">{step.dateLabel}</span>
                    </div>
                    <h3 className="mt-3 text-base sm:text-lg font-medium tracking-tight text-[#121413]">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-[#525855] font-light leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {CONSULTATION_SNAPSHOTS.length > 0 && (
              <div className="mb-12">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#1B3B2B] mb-4">
                  Client Review Sessions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {CONSULTATION_SNAPSHOTS.map((snap) => (
                    <div
                      key={snap.title}
                      className="bg-white border border-[#E2E5E2] rounded-xl overflow-hidden"
                    >
                      <div className="aspect-[16/10] bg-[#F1F2F0]">
                        <img
                          src={snap.image}
                          alt={snap.title}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="text-sm font-medium text-[#121413]">
                          {snap.title}
                        </div>
                        <p className="mt-1 text-xs text-[#525855] font-light">
                          {snap.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {VIHIGA_RENDERS.map((render) => (
                <motion.div key={render.title} {...reveal} className="group">
                  <div className="aspect-[16/9] rounded-xl overflow-hidden bg-[#F1F2F0] mb-4 border border-[#E2E5E2]">
                    <img
                      src={render.image}
                      alt={render.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-[#121413]">
                    {render.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-[#525855] font-light leading-relaxed">
                    {render.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Transparent Official BOQ Breakdown */}
        <section className="py-20 md:py-24 bg-white border-y border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              <motion.div {...reveal} className="lg:col-span-4 space-y-5">
                <p className="text-xs font-mono uppercase tracking-widest text-[#1B3B2B]">
                  Every Shilling Accounted For
                </p>
                <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                  Where the KES 2.86M went.
                </h2>
                <p className="text-base text-[#525855] font-light leading-relaxed">
                  Instead of vague lump-sum quotes from fundis, the family received an itemized Bill of Quantities priced at KES 2,856,688—giving them exact cement bag counts, steel tonnages, and hardware benchmarks to procure materials directly without markup surprises.
                </p>
                <div className="bg-[#F1F2F0] rounded-xl p-5 border border-[#E2E5E2] space-y-2">
                  <div className="text-xs uppercase tracking-wider text-[#525855]">
                    Net Main Building Works Base
                  </div>
                  <div className="font-mono text-2xl font-medium text-[#121413]">
                    KES 2,140,655
                  </div>
                  <p className="text-xs text-[#525855] font-light">
                    Independent 5-milestone engineering supervision was benchmarked at 5.0% of Net Main Building Works (KES 107,000 all-inclusive).
                  </p>
                </div>
                <Link
                  href="/boq-audit"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3B2B] hover:text-[#142C20] transition-colors"
                >
                  <FileText size={16} weight="regular" />
                  <span>Already have a BOQ? Get an independent audit</span>
                  <ArrowUpRight size={14} weight="regular" />
                </Link>
              </motion.div>

              <motion.div
                {...reveal}
                className="lg:col-span-8 bg-[#FAFAFA] border border-[#E2E5E2] rounded-xl overflow-hidden"
              >
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-[#1B3B2B] text-[#FAFAFA] text-xs uppercase tracking-wider">
                        <th className="py-3.5 px-5 font-medium">BOQ Section</th>
                        <th className="py-3.5 px-5 font-medium">Engineered Scope</th>
                        <th className="py-3.5 px-5 font-medium text-right whitespace-nowrap">
                          Budget (KES)
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E2E5E2] text-sm">
                      {VIHIGA_BOQ_ROWS.map((row) => (
                        <tr key={row.section} className="bg-white">
                          <td className="py-3.5 px-5 font-medium text-[#121413] whitespace-nowrap">
                            {row.section}
                          </td>
                          <td className="py-3.5 px-5 text-[#525855] font-light">
                            {row.scope}
                          </td>
                          <td className="py-3.5 px-5 font-mono text-right text-[#121413] whitespace-nowrap">
                            {row.amountKes}
                          </td>
                        </tr>
                      ))}
                      <tr className="bg-[#F1F2F0] font-medium">
                        <td className="py-4 px-5 text-[#121413]">
                          Grand Total BOQ Estimate
                        </td>
                        <td className="py-4 px-5 text-xs text-[#525855]">
                          Delivered inside client’s KES 2.5M – 3.0M target range
                        </td>
                        <td className="py-4 px-5 font-mono text-right text-base text-[#1B3B2B] whitespace-nowrap">
                          2,856,688
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 7. What Independent Engineering Supervision Caught */}
        <section className="py-20 md:py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <motion.div {...reveal} className="max-w-3xl mb-12">
              <p className="text-xs font-mono uppercase tracking-widest text-[#1B3B2B] mb-2">
                Why Independent Milestone Audits Pay For Themselves
              </p>
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                Good local fundis still miss critical engineering specs when no one checks before a pour.
              </h2>
              <p className="mt-3 text-base text-[#525855] font-light leading-relaxed">
                The family wanted to stay hands-on by using their trusted local fundis. Eris acted strictly as their independent engineer of record—checking work at key milestones under a FIDIC agreement without handling their cash or hardware. Below are real, anonymized defects documented and corrected before concrete or roof loads locked them in forever.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {VIHIGA_AUDIT_FINDINGS.map((finding) => (
                <motion.article
                  key={finding.milestone}
                  {...reveal}
                  className="bg-white border border-[#E2E5E2] rounded-xl overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] bg-[#121413] overflow-hidden">
                    <img
                      src={finding.image}
                      alt={finding.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#1B3B2B]">
                          {finding.milestone}
                        </span>
                        <span className="inline-flex items-center gap-1 rounded-md bg-[#F1F2F0] px-2.5 py-1 text-xs font-medium text-[#121413]">
                          <WarningOctagon size={14} weight="regular" className="text-[#1B3B2B]" />
                          {finding.statusTag}
                        </span>
                      </div>

                      <h3 className="mt-3 text-xl font-medium tracking-tight text-[#121413]">
                        {finding.title}
                      </h3>

                      <ul className="mt-4 space-y-2.5">
                        {finding.checksCaught.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-sm text-[#525855] font-light leading-relaxed"
                          >
                            <CheckCircle
                              size={16}
                              weight="fill"
                              className="text-[#1B3B2B] shrink-0 mt-0.5"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F1F2F0] rounded-lg p-4 border border-[#E2E5E2]">
                      <div className="text-xs font-mono uppercase tracking-wider text-[#1B3B2B]">
                        Engineering Resolution
                      </div>
                      <p className="mt-1 text-sm text-[#121413] font-normal leading-relaxed">
                        {finding.outcome}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Credentials & Callout Box */}
            <motion.div
              {...reveal}
              className="bg-[#1B3B2B] text-[#FAFAFA] rounded-xl p-8 sm:p-10 lg:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-8"
            >
              <div className="flex items-start gap-5 max-w-2xl">
                <img
                  src="/engineer-paul-headshot.png"
                  alt="Eng. Paul Wakoli"
                  loading="lazy"
                  decoding="async"
                  className="w-16 h-16 rounded-xl object-cover shrink-0 bg-white/10"
                />
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#FAFAFA]/80">
                    <ShieldCheck size={15} weight="regular" />
                    <span>NCA8 Reg. No. 99140/B/0226 · PE (EBK) Signed Off</span>
                  </div>
                  <h3 className="mt-1.5 text-2xl sm:text-3xl font-normal tracking-tight">
                    Already have your own fundi or contractor?
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-[#FAFAFA]/85 font-light leading-relaxed">
                    Keep full control over your hardware store and site team—and let Eng. Paul Wakoli & Eng. Ezra Kibet Kiptoo inspect the 5 critical build stages before concrete hides a mistake.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#FAFAFA] text-[#121413] hover:bg-[#F1F2F0] px-6 py-3.5 text-sm font-medium transition-colors"
                >
                  <span>Request Supervision Proposal</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
};

export default VihigaCaseStudyView;
