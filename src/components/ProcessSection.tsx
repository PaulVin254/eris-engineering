import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      description: "We understand your vision, budget, and timeline. Our experts provide honest advice about costs and feasibility.",
      duration: "30 minutes",
    },
    {
      number: "02", 
      title: "Detailed Planning",
      description: "Create comprehensive plans, secure permits, and establish milestone-based payment schedule that protects your investment.",
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Construction & Updates",
      description: "Begin construction with daily photo updates via SiteSync app. You see every step of progress from anywhere in the world.",
      duration: "8-12 weeks",
    },
    {
      number: "04",
      title: "Quality Assurance",
      description: "Final inspection, handover documentation, and 2-year warranty on all work. Your dream home is ready.",
      duration: "1 week",
    },
  ];

  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Our Proven Process
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From initial consultation to keys in hand, every step is designed 
            to give you complete confidence and peace of mind.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-background">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-xl font-bold">{step.number}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-background rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-6">
                What Makes Us Different
              </h3>
              <div className="space-y-4">
                {[
                  "Milestone-based payments protect your money",
                  "Daily photo updates via WhatsApp & app",
                  "Direct communication with project manager", 
                  "2-year warranty on all construction work",
                  "Fixed pricing with no hidden costs",
                  "On-time completion guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-foreground mb-2">30</div>
                <div className="text-lg text-muted-foreground mb-6">Day Completion Guarantee</div>
                <p className="text-muted-foreground mb-6">
                  If we don't complete your project within the agreed timeline, 
                  we pay you KES 500,000. That's how confident we are.
                </p>
                <Button size="lg" variant="default" className="w-full text-base font-semibold">
                  Start Your Project Today
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;