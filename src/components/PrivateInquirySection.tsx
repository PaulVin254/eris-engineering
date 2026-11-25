import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP_URL =
  "https://wa.me/254717297022?text=Hello%20Eris%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20private%20residential%20commission%20in%20Kenya.";

const PrivateInquirySection = () => {
  return (
    <section className="py-24 md:py-28 bg-[#FAFAFA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="bg-white border border-[#E2E5E2] rounded-xl p-8 sm:p-12 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-[-0.025em] leading-[1.1] text-[#121413]">
              Commission your residence with certainty.
            </h2>
            <p className="mt-4 text-base md:text-lg text-[#525855] font-light leading-relaxed">
              Speak directly with our founding structural engineers regarding
              site feasibility, architectural plans, or turnkey construction.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-6 py-3.5 text-sm font-medium transition-colors"
            >
              <span>Private Inquiry</span>
              <ArrowUpRight size={15} weight="regular" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5E2] bg-white hover:border-[#121413] text-[#121413] px-6 py-3.5 text-sm font-medium transition-colors"
            >
              <span>Direct WhatsApp</span>
              <ArrowUpRight size={15} weight="light" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivateInquirySection;
