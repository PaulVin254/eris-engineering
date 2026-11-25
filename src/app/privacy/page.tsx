import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Eris Engineering Ltd. and Ephphatha Sign Language School under the Kenya Data Protection Act of 2019.",
  alternates: {
    canonical: "/privacy/",
  },
  openGraph: {
    title: "Privacy Policy | Eris Engineering",
    description:
      "Privacy Policy for Eris Engineering Ltd. in compliance with the Kenya Data Protection Act of 2019.",
    url: "/privacy/",
    type: "website",
    images: ["/cedar-hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Eris Engineering",
    description:
      "Privacy Policy for Eris Engineering Ltd. under the Kenya Data Protection Act of 2019.",
    images: ["/cedar-hero.jpg"],
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center space-x-3 mb-8">
            <Shield className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="font-semibold text-foreground">
              Last Updated: May 2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                Eris Engineering Ltd. (&quot;we&quot;, &quot;us&quot;, or
                &quot;our&quot;), based in Nairobi, Kenya, operates this website
                and the Ephphatha Sign Language School as our corporate
                portfolio &amp; venture. We are fully committed to protecting
                your privacy in strict compliance with the Office of the Data
                Protection Commissioner (ODPC) under the Kenya Data Protection
                Act of 2019.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Meta Platform Integration &amp; Data Collection
              </h2>
              <p>
                To provide seamless service and rapid communications regarding
                our construction services and educational enrollments, we
                utilize the Meta App / WhatsApp Business Platform. We strictly
                request and use the following Meta permissions:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>leads_retrieval:</strong> To securely collect
                  submitted Instant Form leads.
                </li>
                <li>
                  <strong>pages_show_list &amp; pages_read_engagement:</strong>{" "}
                  To interface with our official Facebook pages.
                </li>
                <li>
                  <strong>whatsapp_business_messaging:</strong> To send critical
                  notifications and respond to your queries.
                </li>
              </ul>
              <p className="mt-4">
                Data captured via these channels is securely routed using
                self-hosted automation (n8n) and safely encrypted within our
                database infrastructure (Supabase).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Purpose of Data Processing
              </h2>
              <p>Your data is collected strictly for:</p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  Facilitating professional construction management and customer
                  service.
                </li>
                <li>
                  Managing educational enrollments for Ephphatha Sign Language
                  School.
                </li>
                <li>
                  Sending requested marketing and transactional updates via
                  WhatsApp.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. WhatsApp Opt-Out &amp; Marketing Controls
              </h2>
              <p>
                You are in complete control of your communications. You can
                instantly halt all WhatsApp notifications at any time by simply
                replying with the exact keyword <strong>&quot;STOP&quot;</strong>{" "}
                to any WhatsApp message you receive from our infrastructure.
                Upon receiving this command, our systems will permanently log
                your opt-out preference.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Data Deletion Protocol
              </h2>
              <p>
                You have the fundamental right to be forgotten. In compliance
                with Meta Platform rules and the Kenya Data Protection Act, you
                may request the total extraction and deletion of your data from
                all our active databases.
              </p>
              <p className="font-semibold text-primary mt-2">
                SLA Guarantee: All data deletion requests will be completed and
                confirmed within forty-eight (48) hours.
              </p>
              <p className="mt-2">
                To request data deletion, please email{" "}
                <strong>paul@eris.co.ke</strong> or visit our dedicated{" "}
                <Link
                  href="/data-deletion"
                  className="text-primary hover:underline"
                >
                  Data Deletion Instructions
                </Link>{" "}
                page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
