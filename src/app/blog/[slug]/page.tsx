import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPostContent } from "@/components/BlogPostContent";
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
} from "@/data/blogPosts";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title} | Eris Engineering`,
      description: post.excerpt,
      url: `/blog/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | Eris Engineering`,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <BlogPostContent post={post} relatedPosts={relatedPosts} />
      <Footer />
    </div>
  );
}
