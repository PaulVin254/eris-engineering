import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The requested page could not be found on Eris Engineering.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA]">
      <Header />
      <main className="flex-grow flex items-center justify-center px-6 py-32">
        <div className="max-w-xl w-full bg-white border border-[#E2E5E2] rounded-xl p-8 sm:p-12 text-center space-y-6">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#1B3B2B]">
            Error 404
          </div>
          <h1 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] text-[#121413]">
            Page not found.
          </h1>
          <p className="text-base text-[#525855] font-light leading-relaxed">
            The monograph or route you requested is unavailable or has been
            moved.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-6 py-3 text-sm font-medium transition-colors"
            >
              <span>Return Home</span>
              <ArrowUpRight size={15} weight="regular" />
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5E2] bg-white hover:border-[#121413] text-[#121413] px-6 py-3 text-sm font-medium transition-colors"
            >
              <span>Selected Residences</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
