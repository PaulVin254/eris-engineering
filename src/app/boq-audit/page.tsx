import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BOQAuditContent } from "@/components/BOQAuditContent";

export const metadata: Metadata = {
  title: "Engineering BOQ Audit & Risk Review",
  description:
    "Identify ghost costs, padded steel ratios, and under-allowanced PC sums in your Kenyan construction Bill of Quantities before laying a single stone.",
  alternates: {
    canonical: "/boq-audit/",
  },
  openGraph: {
    title: "Engineering BOQ Audit & Risk Review | Eris Engineering",
    description:
      "Identify hidden markups and structural optimization opportunities in your Bill of Quantities before mobilization.",
    url: "/boq-audit/",
    type: "website",
    images: [
      {
        url: "/bronze-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Eris Engineering BOQ Audit and structural optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering BOQ Audit & Risk Review | Eris Engineering",
    description:
      "Identify hidden markups and structural optimization opportunities in your BOQ.",
    images: ["/bronze-hero.jpg"],
  },
};

export default function BOQAuditPage() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Header />
      <BOQAuditContent />
      <Footer />
    </div>
  );
}
