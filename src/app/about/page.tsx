import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PrivateInquirySection from "@/components/PrivateInquirySection";
import { JsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "The Practice — Structural Engineers & Leadership",
  description:
    "Eris Engineering Ltd provides institutional construction governance across Kenya, led by founding civil and structural engineers under fixed-sum contracts.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    title: "The Practice | Eris Engineering",
    description:
      "Structural engineers building enduring private architecture across Kenya under fixed-sum certainty and weekly site documentation.",
    url: "/about/",
    type: "website",
    images: [
      {
        url: "/paul-wakoli.jpg",
        width: 1200,
        height: 630,
        alt: "Eng. Paul Wakoli, Founding Principal at Eris Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Practice | Eris Engineering",
    description:
      "Structural engineers building enduring private architecture across Kenya.",
    images: ["/paul-wakoli.jpg"],
  },
};

const TENETS = [
  {
    index: "01",
    title: "Fixed-Sum Certainty",
    description:
      "Every structural member, concrete grade, and finishing material is priced inside an itemized Bill of Quantities prior to site mobilization.",
  },
  {
    index: "02",
    title: "Direct Principal Supervision",
    description:
      "Projects are managed directly by founding civil and structural engineers rather than delegated to unvetted intermediaries.",
  },
  {
    index: "03",
    title: "Documented Execution",
    description:
      "Weekly high-definition site inspections, material delivery records, and milestone certificates provide an unbroken engineering record.",
  },
];

const PARTNERS = [
  {
    name: "Eng. Paul Wakoli",
    role: "Founding Principal and Civil Engineer",
    photo: "/engineer-paul-headshot.png",
  },
  {
    name: "Eng. Brian Kibet",
    role: "Co-Founder and Structural Engineer",
    photo: "/engineer-kibet-photo.png",
  },
  {
    name: "Eng. Annelise Nyanga",
    role: "Co-Founder and Project Engineer",
    photo: "/engineer-annelise-photo.png",
  },
  {
    name: "Peter Macharia",
    role: "Co-Founder and Project Finance",
    photo: "/peter-photo.png",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://eris.co.ke/" },
            { "@type": "ListItem", position: 2, name: "The Practice", item: "https://eris.co.ke/about/" },
          ],
        }}
      />
      <Header />

      <main className="pt-28 md:pt-36">
        {/* Practice Header */}
        <section className="pb-16 md:pb-20">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
                Structural engineers building enduring private architecture.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
                Eris Engineering Ltd was established in Kenya to give private
                clients and diaspora families institutional construction
                governance from initial soil study through final handover.
              </p>
            </div>
          </div>
        </section>

        {/* Founding Narrative */}
        <section className="py-20 md:py-28 bg-white border-y border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F1F2F0] max-w-md">
                  <img
                    src="/paul-wakoli.jpg"
                    alt="Eng. Paul Wakoli, Founding Principal at Eris Engineering"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] leading-[1.12] text-[#121413]">
                  Replacing blind trust with verifiable engineering proof.
                </h2>

                <p className="text-base sm:text-lg text-[#525855] font-light leading-relaxed">
                  Across Kenya, private residential construction too often fails
                  clients living abroad. Unverified estimates, informal site
                  supervision, and unrecorded cash disbursements turn long-term
                  investments into stalled structures.
                </p>

                <p className="text-base sm:text-lg text-[#525855] font-light leading-relaxed">
                  Having witnessed close family lose capital to unmonitored
                  building projects, our founding partners structured Eris
                  Engineering around a single standard: remove ambiguity from
                  every phase of construction.
                </p>

                <p className="text-base sm:text-lg text-[#121413] font-normal leading-relaxed">
                  Every commission is governed by engineering calculations,
                  milestone-gated capital releases, and weekly filmed
                  inspections conducted on site by our principal engineers.
                </p>

                <div className="pt-4 border-t border-[#E2E5E2]">
                  <div className="text-base font-medium text-[#121413]">
                    Eng. Paul Wakoli
                  </div>
                  <div className="text-sm text-[#525855]">
                    Founding Principal, Eris Engineering Ltd
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Studio Tenets */}
        <section className="py-20 md:py-28 bg-[#FAFAFA]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] text-[#121413]">
                Operating principles.
              </h2>
              <p className="mt-4 text-base text-[#525855] font-light leading-relaxed">
                Three structural commitments that govern every residential and
                commercial commission we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TENETS.map((tenet) => (
                <div
                  key={tenet.index}
                  className="bg-[#F1F2F0] rounded-xl p-8 space-y-4"
                >
                  <div className="font-mono text-xs text-[#1B3B2B]">
                    {tenet.index}
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-[#121413]">
                    {tenet.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#525855] font-light leading-relaxed">
                    {tenet.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founding Partners Grid */}
        <section className="py-20 md:py-28 bg-white border-t border-[#E2E5E2]">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mb-14">
              <h2 className="text-3xl sm:text-4xl font-normal tracking-[-0.025em] text-[#121413]">
                Leadership and engineering team.
              </h2>
              <p className="mt-4 text-base text-[#525855] font-light leading-relaxed">
                Multidisciplinary civil engineers and financial governance
                principals overseeing every active site.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PARTNERS.map((member) => (
                <div key={member.name} className="group">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F1F2F0] border border-[#E2E5E2] mb-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <h3 className="text-lg font-medium tracking-tight text-[#121413]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#525855] mt-1">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PrivateInquirySection />
      </main>

      <Footer />
    </div>
  );
}
