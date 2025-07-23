import { Card } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Eye, Home } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      subtitle: "Hujambo! Let's understand your vision",
      description: "We start with a video call to understand your dream nyumba. No cost, no obligation – just honest guidance about your project.",
      icon: MessageSquare,
      details: [
        "30-minute video consultation",
        "Site assessment via photos/video",
        "Initial budget discussion",
        "Timeline planning"
      ]
    },
    {
      number: "02", 
      title: "Transparent Planning",
      subtitle: "Every shilling accounted for",
      description: "We create a detailed plan with fixed pricing. No hidden costs, no surprises – you know exactly what you're paying for.",
      icon: Eye,
      details: [
        "Detailed architectural plans",
        "Fixed-price contract",
        "Material specifications",
        "Clear timeline milestones"
      ]
    },
    {
      number: "03",
      title: "Daily Updates",
      subtitle: "Watch your home grow from anywhere",
      description: "Through our SiteSync app, receive daily WhatsApp updates with photos, progress reports, and financial tracking.",
      icon: CheckCircle,
      details: [
        "Daily photo updates",
        "Progress milestone reports",
        "Real-time budget tracking", 
        "Direct WhatsApp communication"
      ]
    },
    {
      number: "04",
      title: "Your Dream Home",
      subtitle: "Delivered on time, on budget",
      description: "Move into your completed home, built to international standards with a guarantee that gives you complete peace of mind.",
      icon: Home,
      details: [
        "Professional quality inspection",
        "Complete handover documentation",
        "2-year warranty coverage",
        "Ongoing support available"
      ]
    }
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Build Your Trust 
            <span className="text-primary"> (And Your Home)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our transparent process eliminates the fear and uncertainty. 
            Here's exactly how we turn your dream into reality – safely.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-shadow duration-300 border-l-4 border-l-primary">
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                {/* Step Info */}
                <div className="lg:col-span-2">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-primary mb-1">STEP {step.number}</div>
                      <h3 className="text-2xl font-bold text-foreground">{step.title}</h3>
                      <p className="text-primary font-medium">{step.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    {step.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-trust-green flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Visual Element */}
                <div className="hidden lg:block">
                  <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto">
                    <step.icon className="w-24 h-24 text-primary/60" />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Process Benefits */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center bg-trust-blue/5 border-trust-blue/20">
            <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-trust-blue" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Complete Transparency</h4>
            <p className="text-muted-foreground">
              Unlike relatives or local fundis, we show you everything. Every purchase, every progress update, every decision.
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-trust-green/5 border-trust-green/20">
            <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-trust-green" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Professional Standards</h4>
            <p className="text-muted-foreground">
              Licensed engineers, not amateur builders. Quality materials, not shortcuts. Your investment is protected.
            </p>
          </Card>
          
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold text-foreground mb-2">Always Connected</h4>
            <p className="text-muted-foreground">
              Daily WhatsApp updates keep you involved. Ask questions anytime – we understand the diaspora experience.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;