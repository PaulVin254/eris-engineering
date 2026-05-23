import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center space-x-3 mb-8">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold">Terms of Service</h1>
          </div>

          <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-muted-foreground">
            <p className="font-semibold text-foreground">
              Last Updated: May 2026
            </p>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing our website (eris.co.ke, erisengineering.co.ke) and
                communicating with our WhatsApp Business infrastructure, you
                agree to be bound by these Terms of Service. These terms govern
                the relationship between you and Eris Engineering Ltd.,
                including our wholly-owned subsidiary, Ephphatha Sign Language
                School.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                2. Governing Law
              </h2>
              <p>
                These terms and our operations are governed strictly by the laws
                of the Republic of Kenya. Data processing operations natively
                comply with the Office of the Data Protection Commissioner
                (ODPC) mandates defined by the Kenya Data Protection Act of
                2019.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                3. Meta API Usage & Messaging
              </h2>
              <p>
                As part of our commitment to transparent and swift
                communication, Eris Engineering utilizes the Meta WhatsApp
                Business API. By opting in via Facebook Instant Forms, website
                inputs, or initiating a WhatsApp conversation with us, you
                consent to receive project updates, service details, and
                educational enrollment information directly to your WhatsApp.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Opt-Out Guarantee:</strong> You can completely and
                  instantly halt all notifications at any time by replying with
                  the keyword <strong>"STOP"</strong>.
                </li>
                <li>
                  <strong>Data Processing:</strong> All leads retrieved via
                  Meta's `leads_retrieval` endpoints are isolated securely
                  through our n8n automation and Supabase databases.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                4. User Rights & Data Deletion
              </h2>
              <p>
                We do not hold your data hostage. Should you wish to sever ties
                or have your records expunged from our CRM, databases, and
                third-party Meta integration networks, you have the right to
                request full data deletion.
              </p>
              <p className="mt-2">
                Our strict Service Level Agreement (SLA) promises full data
                deletion within <strong>48 hours</strong> of your written
                request to <strong>paul@eris.co.ke</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                5. Contact Information
              </h2>
              <p>
                For any questions regarding these terms, your business
                interactions with us, or questions concerning Ephphatha Sign
                Language School, please contact us at{" "}
                <strong>paul@eris.co.ke</strong>.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
