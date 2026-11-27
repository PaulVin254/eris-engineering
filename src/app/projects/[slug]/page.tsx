import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
import { JsonLd } from "@/components/JsonLd";
import {
  SIGNATURE_RESIDENCES,
  getResidenceBySlug,
} from "@/data/signatureResidences";

export const dynamicParams = false;

export function generateStaticParams() {
  return SIGNATURE_RESIDENCES.map((residence) => ({
    slug: residence.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const residence = getResidenceBySlug(slug);

  if (!residence) {
    return {
      title: "Residence Not Found",
    };
  }

  const title = `${residence.title} — ${residence.subtitle}`;
  const description = `${residence.architecturalThesis} (${residence.areaSqm}, ${residence.bedrooms} bedrooms, indicative budget ${residence.estimateRange}).`;

  return {
    title,
    description,
    alternates: {
      canonical: `/projects/${residence.slug}/`,
    },
    openGraph: {
      title: `${residence.title} | Eris Engineering`,
      description,
      url: `/projects/${residence.slug}/`,
      type: "article",
      images: [
        {
          url: residence.heroImage,
          width: 1200,
          height: 630,
          alt: `${residence.title} — ${residence.subtitle}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${residence.title} | Eris Engineering`,
      description,
      images: [residence.heroImage],
    },
  };
}

export default async function ResidencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const residence = getResidenceBySlug(slug);

  if (!residence) {
    notFound();
  }

  const areaNumeric = parseInt(residence.areaSqm, 10);
  const residenceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SingleFamilyResidence",
        name: residence.title,
        description: residence.architecturalThesis,
        url: `https://eris.co.ke/projects/${residence.slug}/`,
        image: `https://eris.co.ke${residence.heroImage}`,
        numberOfBedrooms: residence.bedrooms,
        ...(Number.isFinite(areaNumeric)
          ? {
              floorSize: {
                "@type": "QuantitativeValue",
                value: areaNumeric,
                unitCode: "MTK",
              },
            }
          : {}),
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
            name: residence.title,
            item: `https://eris.co.ke/projects/${residence.slug}/`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={residenceSchema} />
      <ResidenceMonographLayout residence={residence} />
    </>
  );
}
