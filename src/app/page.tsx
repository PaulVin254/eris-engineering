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
    "Private residences across Kenya, executed by structural engineers under fixed-sum contracts and documented weekly.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Eris Engineering | Custom Residential Engineering & Architecture in Kenya",
    description:
      "Private residences across Kenya, executed by structural engineers under fixed-sum contracts and documented weekly.",
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
      "Private residences across Kenya, executed by structural engineers under fixed-sum contracts and documented weekly.",
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
