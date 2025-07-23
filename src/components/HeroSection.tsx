import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Eye, Users } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Kenyan home" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-white max-w-2xl">
            {/* Trust Stat */}
            <div className="inline-flex items-center bg-primary/20 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">61% of diaspora fear fraud when building in Kenya</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Kenyan Home 
              <span className="text-primary"> Safely</span> – 
              We Oversee Every Shilling You Send
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              When Kenyans abroad try to build at home, 6 in 10 fear being cheated. 
              We understand – that's why Eris Engineering makes the process secure and transparent.
            </p>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/90">Live progress updates via WhatsApp</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/90">Money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/90">No hidden costs</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-white/90">Professional oversight</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" variant="default" className="text-lg px-8 py-4">
                Get Free Consultation
                <span className="text-sm ml-2">(Worth KES 5,000)</span>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
                Download Free Guide
              </Button>
            </div>

            {/* Urgency */}
            <p className="text-sm text-white/80">
              ⏰ Limited: Only 5 homes per month qualify for our guarantee
            </p>
          </div>

          {/* Trust Card */}
          <div className="lg:flex justify-end hidden">
            <Card className="bg-white/95 backdrop-blur-sm p-8 max-w-md shadow-2xl">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Diaspora Choose Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-trust-blue" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Full Transparency</h4>
                    <p className="text-sm text-muted-foreground">See every step through our SiteSync app with live photos and updates</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-trust-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-trust-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">100% Secure</h4>
                    <p className="text-sm text-muted-foreground">Insured contracts and verified materials protect your investment</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Proven Track Record</h4>
                    <p className="text-sm text-muted-foreground">50+ successful diaspora projects completed on time and budget</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-center font-medium text-foreground">
                  "Finally, peace of mind while building from abroad"
                </p>
                <p className="text-xs text-center text-muted-foreground mt-1">
                  - James M., Toronto → Kiambu
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;