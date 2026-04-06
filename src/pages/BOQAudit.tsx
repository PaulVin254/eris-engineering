import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowRight,
  Calculator,
  CheckCircle2,
  FileSearch,
  HardHat,
  ShieldAlert,
  TrendingDown,
  XCircle,
  Construction,
  Search,
  Scale,
  CreditCard,
  TrendingUp,
  Package,
  Users,
  Clock,
  FileText,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import heroImage from "@/assets/hero-home.jpg"; // Using existing asset for now

const BOQAudit = () => {
  const [checklistScore, setChecklistScore] = useState<number>(0);

  const toggleChecklist = (index: number) => {
    // Simple state toggle logic if we wanted interactive checklist,
    // but for now just a visual representation is likely fine or simple state
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const staggerChildren = {
    whileInView: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Header />

      {/* ═══ HERO: RED ALERT DASHBOARD ═══ */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-36 overflow-hidden bg-slate-950 border-b border-slate-800">
        {/* Technical Dot-Grid Background */}
        <div
          className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, #475569 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        {/* Hazard gradient wash */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-slate-950 to-transparent z-[1] pointer-events-none" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Monospace Alert Badge */}
            <div className="flex justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-orange-950/40 border border-orange-500/40 text-orange-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500" />
                </span>
                PRIORITY ALERT — STOP THE BLEEDING
              </div>
            </div>

            {/* Headline: Massive, Uppercase, Tight */}
            <h1 className="text-center text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.05] tracking-tight uppercase">
              Is Your Contractor Building{" "}
              <span className="text-orange-500">His House</span> With Your
              Money?
            </h1>

            <p className="text-center text-lg md:text-xl text-slate-400 mb-14 leading-relaxed max-w-3xl mx-auto">
              How to identify the{" "}
              <span className="text-white font-mono font-semibold bg-slate-800/80 px-2 py-0.5 border border-slate-700">
                "Ghost Costs"
              </span>{" "}
              hiding in your BOQ and save up to{" "}
              <span className="text-orange-500 font-mono font-bold text-2xl">
                1.5M KES
              </span>{" "}
              before you lay a single stone.
            </p>

            {/* CTA Row: Mechanical Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-500 text-white font-mono font-bold text-base px-10 py-7 h-auto rounded-none border-2 border-orange-400 shadow-[4px_4px_0px_0px_rgba(249,115,22,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(249,115,22,0.6)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all uppercase tracking-widest"
                >
                  Book Your Audit Call
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </Link>
              <div className="flex items-center gap-2 text-slate-500 font-mono text-xs tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
                </span>
                ONLY 2 SLOTS REMAINING THIS WEEK
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* THE PROBLEM: SYSTEM FAILURE REPORT */}
      <section className="py-24 bg-slate-950 text-white relative border-b border-slate-800">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-600/50 to-transparent" />
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center mb-20"
            {...fadeInUp}
          >
            <div className="font-mono text-orange-500 text-xs tracking-[0.25em] uppercase mb-4">
              [ DIAGNOSTIC REPORT ]
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 uppercase tracking-tight">
              Welcome to the{" "}
              <span className="text-orange-500">"Black Box"</span>
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              You've spent years saving. You've looked at the floor plans. But
              deep down, there is a nagging fear that every Kenyan homeowner
              knows too well.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-0 items-stretch max-w-5xl mx-auto">
            {/* Left: System Failure Card */}
            <motion.div {...fadeInUp} className="h-full">
              <div className="h-full bg-slate-900 border border-slate-800 relative overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-3 bg-slate-800/80 border-b border-slate-700">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
                  <div className="h-2.5 w-2.5 rounded-full bg-orange-500" />
                  <div className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                  <span className="ml-3 font-mono text-[10px] text-slate-500 tracking-widest uppercase">
                    SYSTEM_ALERT / INTEGRITY_FAILURE
                  </span>
                </div>
                <div className="p-8">
                  <AlertTriangle className="absolute top-12 right-4 w-32 h-32 text-orange-950/20 pointer-events-none" />
                  <h3 className="relative z-10 text-xl font-bold text-white mb-2 flex items-center gap-3 font-mono">
                    <AlertTriangle className="w-5 h-5 text-orange-500" />
                    <span className="text-orange-500">ERR:</span>{" "}
                    TRANSPARENCY_NOT_FOUND
                  </h3>
                  <div className="h-px bg-slate-800 my-4" />
                  <p className="text-slate-300 mb-6">
                    In Kenya, construction isn't just about cement and steel;
                    it’s about the <strong>"Kenyan Construction Tax."</strong>{" "}
                    It’s that invisible 15-20% markup that vanishes into:
                  </p>
                  <ul className="space-y-4">
                    {[
                      "Rounding errors",
                      "Bloated material lists",
                      "'Unforeseen' expenses",
                      "Ghost workers",
                    ].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-200"
                      >
                        <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div {...fadeInUp} transition={{ delay: 0.2 }}>
              <p className="text-xl text-slate-300 leading-relaxed mb-6">
                You’re being asked to hand over{" "}
                <span className="text-white font-bold">
                  10 Million Shillings
                </span>{" "}
                to someone based on a "trust me" and a document (the BOQ) that
                looks like it was written to be intentionally confusing.
              </p>
              <div className="p-6 bg-orange-500/10 border-l-4 border-orange-500 rounded-r-lg">
                <p className="text-orange-200 font-medium italic">
                  "Why does the 'final' cost always end up being 30% higher than
                  the quote? Because the system is designed to bleed you dry."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Case Study / Trust Trigger Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              You don’t need testimonials. <br />
              <span className="text-orange-600">
                You need risk math + pattern recognition.
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto bg-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden ring-1 ring-slate-800"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Background Texture */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-slate-700 pb-6">
                <div>
                  <div className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 text-xs font-bold tracking-widest uppercase rounded mb-3">
                    Audit Case File #2491
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono font-bold text-white">
                    CASE SNAPSHOT: 14.8M → 19.6M
                  </h3>
                  <p className="text-slate-400 mt-1 font-mono text-sm">
                    (Without Scope Change) • Project: 4-Bedroom Maisonette
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <div className="text-4xl font-bold text-red-500 font-mono">
                    +32%
                  </div>
                  <div className="text-xs text-red-400 uppercase tracking-wider">
                    Cost Overrun
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column: The Breakdown */}
                <div>
                  <h4 className="text-sm uppercase tracking-widest text-slate-500 mb-6 font-semibold">
                    Where The Money Leaked
                  </h4>
                  <div className="space-y-4">
                    {[
                      {
                        label: "PC Sums adjusted upward",
                        value: "+1.6M",
                        icon: TrendingUp,
                      },
                      {
                        label: "Untracked material top-ups",
                        value: "+920K",
                        icon: Package,
                      },
                      {
                        label: '"Site logistics" & casual labour',
                        value: "+680K",
                        icon: Users,
                      },
                      {
                        label: "Idle time (contractor absence)",
                        value: "+1.1M",
                        icon: Clock,
                      },
                      {
                        label: "Informal variations",
                        value: "+500K",
                        icon: FileText,
                      },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center justify-between group p-3 rounded-lg hover:bg-slate-800/50 transition-colors border border-transparent hover:border-slate-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + 0.1 * i, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex items-center gap-3 text-slate-300">
                          <item.icon className="w-5 h-5 text-orange-500/70 group-hover:text-orange-500 transition-colors" />
                          <span className="text-sm md:text-base">
                            {item.label}
                          </span>
                        </div>
                        <span className="font-mono text-red-400 font-medium">
                          {item.value}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700 md:hidden">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Total Overrun</span>
                      <span className="text-red-500 font-bold font-mono text-xl">
                        +4.8M (32%)
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Column: Chart Placeholder */}
                <div className="flex flex-col h-full">
                  <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
                    {/* Placeholder Chart UI */}
                    <div className="relative w-full max-w-xs h-40 flex items-end justify-center gap-8 mb-6 mt-4">
                      {/* Bar 1 */}
                      <div className="w-16 bg-slate-600 rounded-t-sm h-[75%] relative group-hover:bg-slate-500 transition-colors">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-mono">
                          14.8M
                        </span>
                        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-slate-300 opacity-50">
                          BOQ
                        </div>
                      </div>
                      {/* Bar 2 */}
                      <div className="w-16 bg-gradient-to-t from-red-600 to-red-500 rounded-t-sm h-full relative shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-red-400 font-bold font-mono">
                          19.6M
                        </span>
                        <div className="absolute bottom-2 left-0 right-0 text-center text-[10px] text-white opacity-80">
                          ACTUAL
                        </div>
                      </div>

                      {/* Dotted line for overflow */}
                      <div className="absolute top-[25%] left-0 right-0 border-t border-dashed border-red-500/30"></div>
                      <div className="absolute top-[35%] right-0 text-[10px] text-red-500 font-mono bg-slate-800/80 px-1 rounded transform rotate-90 origin-right translate-x-4">
                        +4.8M DRIP
                      </div>
                    </div>

                    <div className="bg-slate-900/80 rounded-lg p-4 max-w-sm border border-slate-700">
                      <p className="text-slate-300 italic text-sm leading-relaxed">
                        "Nothing dramatic. Just quiet bleed. <br />
                        <span className="text-white font-semibold not-italic">
                          That is the Kenyan Construction Tax.
                        </span>
                        "
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industry Statistics Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 uppercase tracking-tight">
              The Numbers Don’t Lie
            </h2>
            <p className="text-lg text-slate-600">
              Across mid-range residential projects in Kenya (10M–30M bracket):
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                value: "7 out of 10",
                label: "Exceed budget",
                delay: 0,
              },
              {
                value: "22%–35%",
                label: "Average overrun",
                delay: 0.1,
              },
              {
                value: "80%",
                label: "Of delays tied to cash flow mismanagement",
                delay: 0.2,
              },
              {
                value: "60%",
                label: "Of PC Sums under-allowanced intentionally",
                delay: 0.3,
              },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: stat.delay }}
              >
                <div className="text-4xl lg:text-5xl font-bold text-orange-600 mb-3 font-mono">
                  {stat.value}
                </div>
                <div className="text-slate-700 font-medium leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl text-slate-800 font-serif italic font-medium leading-relaxed">
              "You don’t lose money in one big theft. <br />
              You lose it in{" "}
              <span className="text-orange-600">tolerated ambiguity</span>."
            </p>
          </motion.div>
        </div>
      </section>

      {/* The Mechanics: The 3 Traps */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How They Pad The Bill
            </h2>
            <p className="text-lg text-slate-600">
              You aren't just paying for a house. You’re paying for the
              contractor’s lack of precision and "side hustles."
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerChildren}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                icon: <Construction className="w-10 h-10 text-orange-500" />,
                title: "The Steel Scam",
                desc: "Your contractor specs Y12 bars where Y10s work, then 'diverts' the extra tonnage to another site.",
              },
              {
                icon: <HardHat className="w-10 h-10 text-orange-500" />,
                title: "The Excavation Myth",
                desc: "They charge you for 100 trips of soil removal when only 60 actually left the gate.",
              },
              {
                icon: <CreditCard className="w-10 h-10 text-orange-500" />,
                title: "The PC Sum Trap",
                desc: "They give you a low 'Prime Cost' for tiles to make the bid look cheap, only to hit you with the 'real' price later.",
              },
            ].map((trap, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white p-8 rounded-xl shadow-lg border border-slate-100 hover:border-orange-200 transition-colors"
              >
                <div className="mb-6 p-4 bg-orange-50 rounded-full w-fit">
                  {trap.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {trap.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{trap.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Red Flag Checklist - Interactive Element */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div {...fadeInUp}>
              <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-bold mb-6">
                THE "RED FLAG" CHECKLIST
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Do any of these apply to your quote?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                If you check more than{" "}
                <strong className="text-slate-900">TWO</strong> of these, you
                are currently being overcharged.
              </p>

              <div className="space-y-4">
                {[
                  "Are your material quantities suspiciously 'round' numbers (e.g., exactly 200 bags)?",
                  "Does your steel reinforcement ratio exceed 100kg per cubic meter?",
                  "Is there a 'Miscellaneous' or 'Contingency' fee higher than 3%?",
                  "Are 'Transport' costs listed as a lump sum instead of being factored into rates?",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 items-start p-4 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <div className="mt-1 h-5 w-5 rounded border-2 border-slate-300 flex items-center justify-center flex-shrink-0"></div>
                    <p className="text-slate-800 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-slate-900 text-white p-8 md:p-10 rounded-2xl shadow-2xl relative overflow-hidden"
              {...fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 p-32 bg-orange-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>

              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Search className="w-6 h-6 text-orange-500" />
                The Solution: 15-Minute BOQ Stress Test
              </h3>

              <p className="text-slate-300 mb-8 leading-relaxed">
                We utilize Structural Optimization and Data Transparency. We
                don't guess. We calculate. Before you commit your life savings,
                let us run your BOQ through our Engineering Audit.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                    <FileSearch className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Line-by-Line Audit</h4>
                    <p className="text-sm text-slate-400">
                      We find exactly where the "padding" is hiding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                    <Scale className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      Structural Optimization Report
                    </h4>
                    <p className="text-sm text-slate-400">
                      Save on steel and concrete without losing strength.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 bg-orange-500/20 rounded-lg text-orange-400">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">
                      The "SiteSync" Transparency Map
                    </h4>
                    <p className="text-sm text-slate-400">
                      How to track every shilling in real-time.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Offer / CTA Section */}
      <section className="py-24 bg-orange-50 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/2 -right-24 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 text-center">
          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
              Stop the Bleed. Save Your Millions.
            </h2>

            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-orange-100 mb-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-lg mb-6">
                <span className="text-slate-500 line-through">
                  Standard Price: 50,000 KES
                </span>
                <span className="font-bold text-orange-600 bg-orange-100 px-4 py-1 rounded-full">
                  BETA OFFER: FREE (First 5 Only)
                </span>
              </div>
              <p className="text-slate-600 mb-6">
                Why? Because we know that once you see the precision we bring to
                your project, you won't want anyone else building your home.
              </p>

              <div className="flex flex-col gap-4 max-w-md mx-auto">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-xl py-8 shadow-orange-200 shadow-lg"
                  >
                    Upload BOQ & Book Audit
                  </Button>
                </Link>
                <p className="text-xs text-slate-500">
                  <CheckCircle2 className="w-3 h-3 inline mr-1 text-green-500" />
                  No obligation. 100% Confidential.
                </p>
              </div>
            </div>

            <p className="text-slate-500 italic">
              "We don't just look at the numbers; we look at the physics."
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BOQAudit;
