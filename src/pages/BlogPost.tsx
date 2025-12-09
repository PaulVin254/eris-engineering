import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Twitter,
  Facebook,
  Linkedin,
  Copy,
  Check,
} from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { useToast } from "@/hooks/use-toast";

// Simple Markdown-like parser for blog content
const parseContent = (content: string) => {
  const lines = content.trim().split("\n");

  return lines.map((line, index) => {
    const trimmed = line.trim();

    // Empty lines
    if (!trimmed) return <div key={index} className="h-4" />;

    // H2 headers
    if (trimmed.startsWith("## ")) {
      return (
        <h2
          key={index}
          className="text-2xl md:text-3xl font-bold text-slate-900 mt-10 mb-4"
        >
          {trimmed.slice(3)}
        </h2>
      );
    }

    // H3 headers
    if (trimmed.startsWith("### ")) {
      return (
        <h3
          key={index}
          className="text-xl md:text-2xl font-bold text-slate-900 mt-8 mb-3"
        >
          {trimmed.slice(4)}
        </h3>
      );
    }

    // Horizontal rule
    if (trimmed === "---") {
      return <hr key={index} className="my-8 border-slate-200" />;
    }

    // Unordered list items
    if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
      const text = trimmed.slice(2);
      return (
        <li key={index} className="ml-6 mb-2 text-slate-700">
          {parseInlineFormatting(text)}
        </li>
      );
    }

    // Ordered list items
    if (/^\d+\.\s/.test(trimmed)) {
      const text = trimmed.replace(/^\d+\.\s/, "");
      return (
        <li key={index} className="ml-6 mb-2 text-slate-700 list-decimal">
          {parseInlineFormatting(text)}
        </li>
      );
    }

    // Checkmarks (✅, ❌, 🚩)
    if (
      trimmed.startsWith("✅") ||
      trimmed.startsWith("❌") ||
      trimmed.startsWith("🚩")
    ) {
      return (
        <p key={index} className="mb-2 text-slate-700">
          {parseInlineFormatting(trimmed)}
        </p>
      );
    }

    // Regular paragraphs
    return (
      <p key={index} className="mb-4 text-slate-700 leading-relaxed">
        {parseInlineFormatting(trimmed)}
      </p>
    );
  });
};

// Parse inline formatting (bold, links)
const parseInlineFormatting = (text: string) => {
  // Handle bold text
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Handle links [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let lastIndex = 0;
    const elements: React.ReactNode[] = [];
    let match;

    while ((match = linkRegex.exec(part)) !== null) {
      // Add text before the link
      if (match.index > lastIndex) {
        elements.push(part.slice(lastIndex, match.index));
      }
      // Add the link
      elements.push(
        <Link
          key={`link-${index}-${match.index}`}
          to={match[2]}
          className="text-orange-500 hover:text-orange-600 underline"
        >
          {match[1]}
        </Link>
      );
      lastIndex = match.index + match[0].length;
    }

    // Add remaining text after last link
    if (lastIndex < part.length) {
      elements.push(part.slice(lastIndex));
    }

    return elements.length > 0 ? elements : part;
  });
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = slug ? getRelatedPosts(slug, 3) : [];

  // Redirect to blog if post not found
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    toast({ title: "Link copied to clipboard!" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      {/* Hero Image */}
      <section className="relative pt-20">
        <div className="aspect-[21/9] max-h-[500px] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent" />
        </div>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 pb-8 md:pb-12">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Back Button */}
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>

              {/* Category */}
              <span className="inline-block px-3 py-1 bg-orange-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide mb-4">
                {post.category}
              </span>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <span>{post.author}</span>
                </div>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Share Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex items-center gap-3 mb-10 pb-6 border-b border-slate-200"
            >
              <span className="text-sm text-slate-500 flex items-center gap-2">
                <Share2 className="w-4 h-4" />
                Share:
              </span>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  shareUrl
                )}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  shareUrl
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                  shareUrl
                )}&title=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <button
                onClick={handleCopyLink}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </motion.div>

            {/* Article Content */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose prose-lg prose-slate max-w-none"
            >
              {parseContent(post.content)}
            </motion.article>

            {/* Author Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 bg-slate-100 rounded-2xl flex flex-col sm:flex-row gap-4 items-start"
            >
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">
                  Written by
                </p>
                <h4 className="text-lg font-bold text-slate-900">
                  {post.author}
                </h4>
                <p className="text-slate-600 text-sm mt-2">
                  A licensed structural engineer with over 10 years of
                  experience building homes across Kenya. Passionate about
                  helping diaspora families build safely and transparently.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <article className="bg-slate-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-orange-500 font-semibold uppercase">
                        {relatedPost.category}
                      </span>
                      <h3 className="font-bold text-slate-900 mt-2 group-hover:text-orange-500 transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Dream Home?
          </h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Get a detailed cost estimate for your Kenya construction project in
            minutes.
          </p>
          <Link to="/calculator">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8"
            >
              Try Our AI Calculator
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
