import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { SIGNATURE_RESIDENCES } from "@/data/signatureResidences";

export const metadata: Metadata = {
  title: "Signature Architectural Series",
  description:
    "Five construction-ready private residences engineered for Kenyan soil conditions, complete with structural calculations and itemized Bills of Quantities.",
  alternates: {
    canonical: "/concepts/",
  },
  openGraph: {
    title: "Signature Architectural Series | Eris Engineering",
    description:
      "Five construction-ready private residences engineered for Kenyan soil conditions, complete with structural calculations and itemized BOQs.",
    url: "/concepts/",
    type: "website",
    images: [
      {
        url: "/teak-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Eris Engineering Signature Architectural Series",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signature Architectural Series | Eris Engineering",
    description:
      "Five construction-ready private residences engineered for Kenyan soil conditions.",
    images: ["/teak-hero.jpg"],
  },
};

export default function ConceptsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Stacked Editorial Header */}
        <section className="pb-16">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
                Signature architectural series.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
                Five construction-ready private residences engineered for Kenyan
                soil conditions, complete with structural calculations and
                itemized Bills of Quantities.
              </p>
            </div>
          </div>
        </section>

        {/* 2-Column Architectural Plate Grid */}
        <section className="pb-12">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {SIGNATURE_RESIDENCES.map((residence) => (
                <article
                  key={residence.slug}
                  className="bg-white border border-[#E2E5E2] rounded-xl overflow-hidden flex flex-col justify-between group"
                >
                  <div>
                    <Link
                      href={`/projects/${residence.slug}`}
                      className="block aspect-[16/10] bg-[#F1F2F0] overflow-hidden"
                    >
                      <img
                        src={residence.heroImage}
                        alt={residence.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                      />
                    </Link>

                    <div className="p-7 sm:p-8">
                      <div className="flex items-baseline justify-between gap-4">
                        <h2 className="text-2xl font-normal tracking-tight text-[#121413]">
                          {residence.title}
                        </h2>
                        <span className="font-mono text-xs text-[#525855] shrink-0">
                          {residence.areaSqm}
                        </span>
                      </div>

                      <p className="mt-1 text-xs uppercase tracking-wider text-[#1B3B2B] font-medium">
                        {residence.subtitle}, {residence.bedrooms} Bedrooms
                      </p>

                      <p className="mt-4 text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                        {residence.architecturalThesis}
                      </p>
                    </div>
                  </div>

                  <div className="px-7 sm:px-8 pb-7 pt-4 border-t border-[#E2E5E2] flex items-center justify-between gap-4">
                    <span className="font-mono text-xs text-[#525855]">
                      {residence.estimateRange}
                    </span>

                    <Link
                      href={`/projects/${residence.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-[#1B3B2B] hover:text-[#142C20] transition-colors"
                    >
                      <span>View Residence</span>
                      <ArrowUpRight size={15} weight="regular" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
}
