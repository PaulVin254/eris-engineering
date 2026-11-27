import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { JsonLd } from "@/components/JsonLd";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Engineering Approach & Delivery Process",
  description:
    "Five disciplined stages from geotechnical investigation and fixed-sum BOQ through milestone-gated construction and formal commissioning across Kenya.",
  alternates: {
    canonical: "/process/",
  },
  openGraph: {
    title: "Engineering Approach & Delivery Process | Eris Engineering",
    description:
      "Five disciplined stages from initial geotechnical investigation through formal commissioning for remote certainty.",
    url: "/process/",
    type: "website",
    images: [
      {
        url: "/teak-courtyard.jpg",
        width: 1200,
        height: 630,
        alt: "Eris Engineering five-stage residential construction process",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Approach & Delivery Process | Eris Engineering",
    description:
      "Five disciplined stages from geotechnical investigation through formal commissioning.",
    images: ["/teak-courtyard.jpg"],
  },
};

const STAGES = [
  {
    number: "01",
    title: "Geotechnical and Site Study",
    description:
      "Every commission begins on site with topographic survey verification, soil bearing capacity testing, drainage mapping, and local authority compliance review before a foundation line is drawn.",
    deliverable: "Site Feasibility and Soil Bearing Report",
  },
  {
    number: "02",
    title: "Fixed-Sum Bill of Quantities",
    description:
      "Our quantity surveyors and engineers quantify every reinforcement bar, cement grade, aggregate volume, and mechanical allowance into a binding fixed-sum contract schedule.",
    deliverable: "Signed Fixed-Sum BOQ and Master Schedule",
  },
  {
    number: "03",
    title: "Structural and Architectural Detailing",
    description:
      "Complete structural reinforcement drawings, MEP coordination, waterproofing details, and finish schedules are finalized so site execution proceeds without guesswork.",
    deliverable: "Stamped Structural and Construction Drawings",
  },
  {
    number: "04",
    title: "Milestone-Gated Construction",
    description:
      "Construction advances through five discrete engineering stages. Each milestone is inspected, recorded on high-definition video every Friday, and verified prior to releasing the subsequent stage.",
    deliverable: "Weekly Video Logs and Stage Sign-Off Certificates",
  },
  {
    number: "05",
    title: "Commissioning and Handover",
    description:
      "Pressure testing of plumbing, solar and electrical load verification, snag-list clearance, and formal delivery of as-built drawings and structural warranties.",
    deliverable: "Keys, As-Built Dossier, and Structural Warranty",
  },
];

const FAQS = [
  {
    question: "How are material price fluctuations handled during the build?",
    answer:
      "Once the fixed-sum Bill of Quantities and construction contract are executed, structural material quantities and supplier allocations are locked at signing so mid-build price volatility is not passed unexpectedly onto the client.",
  },
  {
    question: "How are payments structured for clients living abroad?",
    answer:
      "Payments follow five verified engineering milestones: Substructure, Ground Slab, Superstructure, Roofing and Services, and Final Finishes. Funds for each stage are released only after recorded visual inspection.",
  },
  {
    question: "Can Eris Engineering build from existing architectural drawings?",
    answer:
      "Yes. If you already hold architectural plans, our structural engineers review constructability, perform soil-specific structural detailing, and prepare an itemized Bill of Quantities before mobilization.",
  },
  {
    question: "Do you work outside Nairobi?",
    answer:
      "Yes. Our engineering teams actively execute residential and commercial commissions across Kiambu, Nairobi, Nakuru, Vihiga, and wider Western and Central Kenya.",
  },
];

export default function ProcessPage() {
  const processSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://eris.co.ke/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Approach",
            item: "https://eris.co.ke/process/",
          },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <JsonLd data={processSchema} />
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Header */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
                An engineering approach built for remote certainty.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
                Five disciplined stages from initial geotechnical investigation
                through formal commissioning, ensuring every structural detail
                is verified before capital moves.
              </p>
            </div>
          </div>
        </section>

        {/* 5-Stage Chronological Sequence */}
        <section className="py-20 bg-white border-y border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="space-y-6">
              {STAGES.map((stage) => (
                <div
                  key={stage.number}
                  className="bg-[#FAFAFA] border border-[#E2E5E2] rounded-xl p-7 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start"
                >
                  <div className="lg:col-span-2">
                    <span className="font-mono text-2xl sm:text-3xl font-normal text-[#1B3B2B]">
                      {stage.number}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <h2 className="text-2xl font-normal tracking-tight text-[#121413]">
                      {stage.title}
                    </h2>
                    <p className="text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="lg:col-span-4 lg:text-right">
                    <div className="text-xs uppercase tracking-wider text-[#525855]">
                      Primary Deliverable
                    </div>
                    <div className="mt-1 text-sm font-medium text-[#121413]">
                      {stage.deliverable}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="py-24 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] text-[#121413] mb-10">
                Frequently asked questions.
              </h2>

              <Accordion
                type="single"
                collapsible
                className="w-full border-t border-[#E2E5E2]"
              >
                {FAQS.map((faq, idx) => (
                  <AccordionItem
                    key={faq.question}
                    value={`faq-${idx}`}
                    className="border-b border-[#E2E5E2]"
                  >
                    <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-medium text-[#121413] hover:text-[#1B3B2B] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
}
