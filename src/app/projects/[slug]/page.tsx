import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ResidenceMonographLayout from "@/components/ResidenceMonographLayout";
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

  return <ResidenceMonographLayout residence={residence} />;
}
