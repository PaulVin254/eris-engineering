import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Beautiful Kenyan home construction" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 z-10 relative">
        <div className="max-w-4xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center bg-background/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <CheckCircle className="w-4 h-4 mr-2 text-white" />
            <span className="text-sm font-medium text-white">Trusted by 50+ diaspora families</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 tracking-tight">
            Building a
            <br />
            <span className="text-primary">Better Standard</span>
            <br />
            for Diaspora Homes.
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-2xl">
            When 61% of Kenyans abroad fear fraud while building, we provide the transparency 
            and oversight you need for complete peace of mind.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" variant="default" className="text-base font-semibold px-8 py-4 h-14">
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-semibold px-8 py-4 h-14 bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn Our Process
            </Button>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-sm text-white/80 font-medium">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-sm text-white/80 font-medium">On-Time Delivery</div>
            </div>
            <div className="text-center md:col-span-1 col-span-2">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">₹0</div>
              <div className="text-sm text-white/80 font-medium">Hidden Costs</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;