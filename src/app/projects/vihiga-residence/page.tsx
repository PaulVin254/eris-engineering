import type { Metadata } from "next";
import VihigaCaseStudyView from "@/components/VihigaCaseStudyView";
import { JsonLd } from "@/components/JsonLd";
import { VIHIGA_OVERVIEW } from "@/data/vihigaCaseStudy";

export const metadata: Metadata = {
  title: "The Vihiga Residence — 2-Bedroom Bungalow Case Study & Supervision",
  description:
    "How a Nairobi family built a 140 m² 2-bedroom home for their parents in Vihiga County on a KES 2.86M BOQ—with 4-week design and 5-milestone FIDIC engineering supervision.",
  alternates: {
    canonical: "/projects/vihiga-residence/",
  },
  openGraph: {
    title: "The Vihiga Residence — KES 2.86M Family Build Case Study | Eris Engineering",
    description:
      "Real photos, itemized KES 2.86M BOQ, Maragoli compound design, and structural defects caught in time under independent 5-milestone supervision in Vihiga County.",
    url: "/projects/vihiga-residence/",
    type: "article",
    images: [
      {
        url: "/vihiga/milestone-3-superstructure.jpg",
        width: 1400,
        height: 1050,
        alt: "Elevated site progress of The Vihiga Residence masonry and ring beam in Vihiga County",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Vihiga Residence Case Study | Eris Engineering",
    description:
      "140 m² 2-bedroom bungalow in Vihiga County built on a KES 2.86M BOQ with independent 5-milestone engineering supervision.",
    images: ["/vihiga/milestone-3-superstructure.jpg"],
  },
};

export default function VihigaResidencePage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SingleFamilyResidence",
        name: VIHIGA_OVERVIEW.title,
        description:
          "140 m² two-bedroom permanent family bungalow in Vihiga County engineered with 200mm load-bearing machine-cut stone walls, Class 25 reinforced concrete ring beam, 30-degree pitched timber roof, and independent 5-milestone structural supervision.",
        url: "https://eris.co.ke/projects/vihiga-residence/",
        image: [
          "https://eris.co.ke/vihiga/milestone-3-superstructure.jpg",
          "https://eris.co.ke/vihiga/milestone-2-slab-casting.jpg",
          "https://eris.co.ke/vihiga/milestone-1-setting-out.jpg",
          "https://eris.co.ke/vihiga/render-aerial.jpg",
        ],
        numberOfBedrooms: 2,
        floorSize: {
          "@type": "QuantitativeValue",
          value: 140,
          unitCode: "MTK",
        },
        address: {
          "@type": "PostalAddress",
          addressRegion: "Vihiga County",
          addressCountry: "KE",
        },
      },
      {
        "@type": "Article",
        headline:
          "The Vihiga Residence Case Study: KES 2.86M 2-Bedroom Bungalow & Independent Engineering Supervision",
        description:
          "Full cost breakdown, soil assessment, Maragoli homestead layout strategy, and real Milestone 2 & Milestone 3 structural audits caught before concrete or roof loading.",
        mainEntityOfPage: "https://eris.co.ke/projects/vihiga-residence/",
        image: "https://eris.co.ke/vihiga/milestone-3-superstructure.jpg",
        author: {
          "@type": "Person",
          name: "Eng. Paul Wakoli",
        },
        publisher: {
          "@type": "Organization",
          name: "Eris Engineering Ltd",
          url: "https://eris.co.ke/",
        },
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
            name: "Residences",
            item: "https://eris.co.ke/projects/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: VIHIGA_OVERVIEW.title,
            item: "https://eris.co.ke/projects/vihiga-residence/",
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <VihigaCaseStudyView />
    </>
  );
}
