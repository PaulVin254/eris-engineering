import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SelectedResidences from "@/components/SelectedResidences";
import SignatureSeriesSection from "@/components/SignatureSeriesSection";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Selected Residences & Active Construction",
  description:
    "Active construction and completed private residential commissions across Kenya, governed by fixed-sum Bills of Quantities and milestone-gated progress releases.",
  alternates: {
    canonical: "/projects/",
  },
  openGraph: {
    title: "Selected Residences & Active Construction | Eris Engineering",
    description:
      "Active construction and completed private residential commissions across Kenya, governed by fixed-sum Bills of Quantities.",
    url: "/projects/",
    type: "website",
    images: [
      {
        url: "/bronze-aerial.jpg",
        width: 1200,
        height: 630,
        alt: "Selected residential projects by Eris Engineering in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Selected Residences & Active Construction | Eris Engineering",
    description:
      "Active construction and completed private residential commissions across Kenya.",
    images: ["/bronze-aerial.jpg"],
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://eris.co.ke/" },
            { "@type": "ListItem", position: 2, name: "Residences", item: "https://eris.co.ke/projects/" },
          ],
        }}
      />
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Calm Editorial Header */}
        <section className="pb-16 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
                Selected residences and active construction.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
                Every commission is executed under direct engineering
                supervision, fixed-sum Bills of Quantities, and milestone-gated
                progress releases.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm">
                <Link
                  href="/concepts"
                  className="inline-flex items-center gap-1.5 font-medium text-[#1B3B2B] hover:text-[#142C20] transition-colors"
                >
                  <span>Signature Series</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
                <Link
                  href="/calculator"
                  className="inline-flex items-center gap-1.5 font-medium text-[#1B3B2B] hover:text-[#142C20] transition-colors"
                >
                  <span>Estimate Build Cost</span>
                  <ArrowUpRight size={15} weight="regular" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SelectedResidences />
        <SignatureSeriesSection />
        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
}
