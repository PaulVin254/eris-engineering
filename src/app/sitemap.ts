import type { MetadataRoute } from "next";
import { SIGNATURE_RESIDENCES } from "@/data/signatureResidences";
import { blogPosts } from "@/data/blogPosts";

export const dynamic = "force-static";

const BASE_URL = "https://eris.co.ke";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/projects/",
    "/projects/vihiga-residence/",
    "/concepts/",
    "/about/",
    "/process/",
    "/contact/",
    "/calculator/",
    "/boq-audit/",
    "/blog/",
    "/privacy/",
    "/terms/",
    "/data-deletion/",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route === "" ? "/" : route}`,
    changeFrequency: route === "" || route === "/projects/" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1.0
        : route === "/projects/" || route === "/projects/vihiga-residence/" || route === "/concepts/"
          ? 0.9
          : 0.8,
  }));

  const residenceEntries: MetadataRoute.Sitemap = SIGNATURE_RESIDENCES.map(
    (residence) => ({
      url: `${BASE_URL}/projects/${residence.slug}/`,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...residenceEntries, ...blogEntries];
}
