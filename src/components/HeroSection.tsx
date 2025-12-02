import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Eye, Users, Phone } from "lucide-react";
import { HeroSection as DynamicHero } from "@/components/ui/dynamic-hero";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  // Navigation items for the dynamic hero
  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "process", label: "Our Process", href: "#process" },
    { id: "contact", label: "Contact", href: "#contact" },
    {
      id: "phone",
      label: "+254 717 297 022",
      onClick: () => window.open("tel:+254717297022"),
    },
    {
      id: "consultation",
      label: "Free Consultation",
      onClick: () => console.log("Free consultation clicked"),
    },
  ];

  return (
    <DynamicHero navItems={navItems} imageUrl={heroImage}>
      {/* Custom content that replaces the default centered layout */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-8 mt-8">
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left: Main Content - 2/3 width */}
          <div className="lg:col-span-2 text-center lg:text-left">
            {/* Trust badge */}
            <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
              <Shield className="w-5 h-5 mr-3 text-orange-500" />
              <span className="text-sm font-medium text-foreground">
                61% of diaspora fear fraud when building in Kenya
              </span>
            </div>

            {/* Main headline - Bold and prominent */}
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-8">
              Build Your Kenyan Home{" "}
              <span className="text-orange-500">Safely</span> – We Oversee Every
              Shilling You Send
            </h1>

            {/* Subheading */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-4xl">
              When Kenyans abroad try to build at home, 6 in 10 fear being
              cheated. We understand – that's why Eris Engineering makes the
              process secure and transparent.
            </p>

            {/* Key Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-lg text-foreground">
                  Live progress updates via WhatsApp
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-lg text-foreground">
                  Money-back guarantee
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-lg text-foreground">No hidden costs</span>
              </div>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                <span className="text-lg text-foreground">
                  Professional oversight
                </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6 font-semibold shadow-lg"
              >
                Get Free Consultation
                <span className="text-sm ml-2 opacity-90">
                  (Worth KES 5,000)
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background text-lg px-10 py-6 font-semibold"
              >
                Download Free Guide
              </Button>
            </div>

            {/* Urgency text */}
            <p className="text-sm text-muted-foreground">
              ⏰ Limited: Only 5 homes per month qualify for our guarantee
            </p>
          </div>

          {/* Right: Trust Card */}
          <div className="lg:col-span-1">
            <Card className="bg-card/95 backdrop-blur-sm p-8 shadow-2xl border">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Why Diaspora Choose Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Full Transparency
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      See every step through our SiteSync app with live photos
                      and updates
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      100% Secure
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Insured contracts and verified materials protect your
                      investment
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Proven Track Record
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      50+ successful diaspora projects completed on time and
                      budget
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
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
    </DynamicHero>
  );
};

export default HeroSection;
