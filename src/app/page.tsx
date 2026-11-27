import type { Metadata } from "next";
import Header from "@/components/Header";
import HeroMonograph from "@/components/HeroMonograph";
import ArchitecturalBento from "@/components/ArchitecturalBento";
import SelectedResidences from "@/components/SelectedResidences";
import SignatureSeriesSection from "@/components/SignatureSeriesSection";
import ClientPerspectives from "@/components/ClientPerspectives";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    absolute:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
  },
  description:
    "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    description:
      "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/cedar-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Private residence engineered by Eris Engineering in Kenya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    description:
      "Building in Kenya from abroad? Get custom home designs, structural drawings & a real cost breakdown (BOQ) upfront—plus fixed-price building when you're ready.",
    images: ["/cedar-hero.jpg"],
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <Header />
      <main>
        <HeroMonograph />
        <ArchitecturalBento />
        <SelectedResidences />
        <SignatureSeriesSection />
        <ClientPerspectives />
        <PrivateInquirySection />
      </main>
      <Footer />
    </div>
  );
}
