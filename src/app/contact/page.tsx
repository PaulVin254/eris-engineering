import type { Metadata } from "next";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react/dist/ssr";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ContactInquiryForm } from "@/components/ContactInquiryForm";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Private Inquiry & Engineering Consultation",
  description:
    "Arrange a confidential technical review with Eris Engineering's principal structural engineers regarding site feasibility, drawings, or fixed-sum construction in Kenya.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    title: "Private Inquiry | Eris Engineering",
    description:
      "Arrange a confidential technical review with our principal engineers regarding site feasibility, architectural drawings, or fixed-sum construction.",
    url: "/contact/",
    type: "website",
    images: [
      {
        url: "/quartz-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Eris Engineering for a private residential consultation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Inquiry | Eris Engineering",
    description:
      "Arrange a confidential technical review with our principal structural engineers.",
    images: ["/quartz-exterior.jpg"],
  },
};

const WHATSAPP_URL =
  "https://wa.me/254717297022?text=Hello%20Eris%20Engineering%2C%20I%20would%20like%20to%20schedule%20a%20private%20engineering%20consultation.";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://eris.co.ke/" },
            { "@type": "ListItem", position: 2, name: "Private Inquiry", item: "https://eris.co.ke/contact/" },
          ],
        }}
      />
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Editorial Heading */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
              Private inquiry.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
              Arrange a confidential technical review with our principal
              engineers regarding site feasibility, architectural drawings, or
              fixed-sum construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Studio Desk Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F1F2F0] rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-medium tracking-tight text-[#121413]">
                  Consultation scope
                </h2>
                <ul className="space-y-4 text-sm text-[#525855]">
                  {[
                    "Preliminary site and geotechnical feasibility review",
                    "Indicative construction schedule and milestone structure",
                    "Constructability review of existing architectural drawings",
                    "County approvals and statutory compliance guidance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="regular"
                        className="text-[#1B3B2B] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#E2E5E2] rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-medium tracking-tight text-[#121413]">
                  Direct studio desk
                </h2>

                <div className="space-y-4 text-sm">
                  <a
                    href="tel:+254717297022"
                    className="flex items-start gap-3 text-[#121413] hover:text-[#1B3B2B] transition-colors"
                  >
                    <Phone
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">+254 717 297 022</div>
                      <div className="text-xs text-[#525855]">
                        Direct line and international WhatsApp
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:paul@eris.co.ke"
                    className="flex items-start gap-3 text-[#121413] hover:text-[#1B3B2B] transition-colors"
                  >
                    <EnvelopeSimple
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">paul@eris.co.ke</div>
                      <div className="text-xs text-[#525855]">
                        Eng. Paul Wakoli, Principal Engineer
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-[#121413]">
                    <MapPin
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">Westlands, Nairobi</div>
                      <div className="text-xs text-[#525855]">
                        Active site operations across Central and Western Kenya
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5E2] hover:border-[#121413] px-5 py-3 text-sm font-medium text-[#121413] transition-colors"
                  >
                    <span>Direct WhatsApp</span>
                    <ArrowUpRight size={15} weight="light" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E2E5E2] rounded-xl p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-normal tracking-tight text-[#121413]">
                    Project brief
                  </h2>
                  <p className="mt-2 text-sm text-[#525855]">
                    Share your project location, timeline, and scope. Video
                    consultations are scheduled across UK, US, European, and
                    Gulf time zones.
                  </p>
                </div>

                <ContactInquiryForm />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
