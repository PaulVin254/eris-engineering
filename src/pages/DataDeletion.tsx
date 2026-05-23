import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Trash2, Mail, Clock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const DataDeletion = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Trash2 className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold text-center">
              Data Deletion Instructions
            </h1>
          </div>

          <p className="text-center text-muted-foreground mb-12 text-lg">
            In compliance with Meta Platform Policies and the Kenya Data
            Protection Act (2019).
          </p>

          <div className="space-y-8">
            {/* The Right to Deletion Box */}
            <div className="bg-card text-card-foreground border rounded-xl p-8 shadow-sm">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Your Data, Your Control
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Eris Engineering Ltd. (and our subsidiary Ephphatha Sign
                    Language School) respects your right to privacy. If you have
                    interacted with us via Facebook Lead Forms, Facebook Pages,
                    or our WhatsApp Business API, you have the unconditional
                    right to request the complete removal of your personal
                    information from our Supabase servers, n8n automations, and
                    CRM structures.
                  </p>
                </div>
              </div>
            </div>

            {/* How to Delete Box */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-primary" />
                How to Request Deletion
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  To initiate a complete deletion of your data, please follow
                  these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    Send an email to our Data Protection Officer at:{" "}
                    <a
                      href="mailto:paul@eris.co.ke"
                      className="text-primary font-medium hover:underline"
                    >
                      paul@eris.co.ke
                    </a>
                  </li>
                  <li>
                    Use the subject line:{" "}
                    <strong>"Data Deletion Request"</strong>
                  </li>
                  <li>
                    Include the phone number or email address associated with
                    your WhatsApp or Facebook account so we can uniquely
                    identify your records in our database.
                  </li>
                </ol>
                <div className="mt-6 p-4 bg-background rounded-lg border flex gap-4 items-center">
                  <Clock className="w-6 h-6 text-primary shrink-0" />
                  <p className="text-sm font-medium text-foreground">
                    <strong>48-Hour SLA Guarantee:</strong> We will locate,
                    extract, and permanently destroy your data from all our
                    active routing and storage systems within 48 hours of
                    receiving your email. A confirmation email will be sent upon
                    completion.
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp Mute Alternative */}
            <div className="bg-card text-card-foreground border rounded-xl p-8">
              <h2 className="text-xl font-semibold mb-4">
                Alternative: Halting WhatsApp Messages
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                If you do not wish to delete your entire project file but simply
                want to stop receiving messages via our Meta WhatsApp Business
                Platform, you do not need to email us. Simply reply to any
                message from our business account with the word:
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-destructive/10 text-destructive border-destructive/20 border px-8 py-3 rounded-lg font-bold text-2xl tracking-widest">
                  STOP
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Our system will immediately register the opt-out and cease all
                automated broadcasts.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Button onClick={() => window.history.back()} variant="outline">
                Return to Previous Page
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DataDeletion;
