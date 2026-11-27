import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogListContent } from "@/components/BlogListContent";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Eris Construction Journal",
  description:
    "Engineering insights, cost guides, and practical due diligence for diaspora families building custom residences in Kenya.",
  alternates: {
    canonical: "/blog/",
  },
  openGraph: {
    title: "The Eris Construction Journal | Eris Engineering",
    description:
      "Engineering insights, cost guides, and practical due diligence for building your home in Kenya.",
    url: "/blog/",
    type: "website",
    images: [
      {
        url: "/cedar-living.jpg",
        width: 1200,
        height: 630,
        alt: "The Eris Construction Journal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Eris Construction Journal | Eris Engineering",
    description:
      "Engineering insights, cost guides, and due diligence for building in Kenya.",
    images: ["/cedar-living.jpg"],
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://eris.co.ke/" },
            { "@type": "ListItem", position: 2, name: "Journal", item: "https://eris.co.ke/blog/" },
          ],
        }}
      />
      <Header />
      <BlogListContent />
      <Footer />
    </div>
  );
}
