import type { Metadata } from "next";
import Header from "@/components/Header";
import { CalculatorClient } from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Fundi Construction Cost Calculator",
  description:
    "Real-time AI-powered construction cost breakdown for residential building projects in Kenya, covering materials, labor, and stage estimates.",
  alternates: {
    canonical: "/calculator/",
  },
  openGraph: {
    title: "Fundi Construction Cost Calculator | Eris Engineering",
    description:
      "Real-time AI-powered construction cost breakdown for residential building projects in Kenya.",
    url: "/calculator/",
    type: "website",
    images: [
      {
        url: "/cedar-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Eris Engineering residential cost calculator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fundi Construction Cost Calculator | Eris Engineering",
    description:
      "Real-time AI-powered construction cost breakdown for residential building projects in Kenya.",
    images: ["/cedar-hero.jpg"],
  },
};

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans flex flex-col">
      <Header />
      <CalculatorClient />
    </div>
  );
}
