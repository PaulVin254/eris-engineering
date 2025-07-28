import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import FloatingHomeImages from "./FloatingHomeImages";

const StorySection = () => {
  return (
    <section className="relative py-20 bg-secondary/30 overflow-hidden">
      <FloatingHomeImages />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            The Story Every Diaspora Kenyan Knows
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You work tirelessly abroad, send money home to build your dream,
            then discover it's gone wrong. Here's how we ensure that never
            happens to you.
          </p>
        </div>

        {/* Story Flow */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* The Problem */}
          <Card className="p-8 bg-destructive/5 border-destructive/20">
            <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Painful Reality
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                "I sent KES 2.5 million to my brother to build our family home
                in Kitengela. For months, he sent photos of 'progress' –
                foundation work, walls going up."
              </p>
              <p>
                "When I finally visited Kenya, I discovered the foundation was
                cracked, the materials were substandard, and KES 800,000 was
                simply... missing."
              </p>
              <p className="font-semibold text-destructive">
                "I had no oversight, no updates, and no recourse. My dream
                became a nightmare."
              </p>
            </div>
          </Card>

          {/* The Solution */}
          <Card className="p-8 bg-primary/5 border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              The Eris Difference
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>Professional oversight:</strong> Licensed engineers
                supervise every phase, not relatives or uncertified "fundis" who
                cut corners.
              </p>
              <p>
                <strong>Daily transparency:</strong> Receive WhatsApp updates
                with photos, progress reports, and financial tracking through
                our SiteSync system.
              </p>
              <p>
                <strong>Verified materials:</strong> We source quality materials
                directly from certified suppliers and document every purchase.
              </p>
              <p className="font-semibold text-primary">
                "Your money is protected by contracts, insurance, and our
                reputation."
              </p>
            </div>
          </Card>

          {/* The Result */}
          <Card className="p-8 bg-trust-green/5 border-trust-green/20">
            <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8 text-trust-green" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Peace of Mind
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                "With Eris, I watched my home being built in real-time from
                Toronto. Every shilling was accounted for, every milestone met
                on schedule."
              </p>
              <p>
                "The SiteSync app showed me live photos, material receipts, and
                progress updates. I felt involved despite being 13,000
                kilometers away."
              </p>
              <p className="font-semibold text-trust-green">
                "When I finally came home, my nyumba was exactly as promised –
                on time, on budget, and built to last."
              </p>
            </div>
          </Card>
        </div>

        {/* Stats Bar */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">61%</div>
            <div className="text-sm text-muted-foreground">
              Diaspora fear fraud when investing
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-trust-green mb-2">50+</div>
            <div className="text-sm text-muted-foreground">
              Successful diaspora projects
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-trust-blue mb-2">30%</div>
            <div className="text-sm text-muted-foreground">
              Faster than typical builds
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">
              On-time completion rate
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Don't Let This Happen to You
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Every month we help diaspora families avoid these costly mistakes.
            Join them in building safely with complete peace of mind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Get Your Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Download: "What Your Contractor Won't Tell You"
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
