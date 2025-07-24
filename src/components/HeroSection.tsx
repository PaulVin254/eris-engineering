import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Shield, Eye, Users } from "lucide-react";
import heroImage from "@/assets/hero-home.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen bg-slate-900 overflow-hidden">
      {/* Dark overlay background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
      
      {/* Full width container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main content area - centered */}
        <div className="flex-1 flex items-center">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12 items-center">
              
              {/* Left: Main Content - 2/3 width */}
              <div className="lg:col-span-2 text-center lg:text-left">
                {/* Trust badge */}
                <div className="inline-flex items-center bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-3 mb-8">
                  <Shield className="w-5 h-5 mr-3 text-orange-500" />
                  <span className="text-sm font-medium text-white">61% of diaspora fear fraud when building in Kenya</span>
                </div>

                {/* Main headline - Bold and prominent */}
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8">
                  Build Your Kenyan Home{" "}
                  <span className="text-orange-500">Safely</span> –{" "}
                  We Oversee Every Shilling You Send
                </h1>

                {/* Subheading */}
                <p className="text-xl lg:text-2xl text-gray-300 mb-12 leading-relaxed max-w-4xl">
                  When Kenyans abroad try to build at home, 6 in 10 fear being cheated. 
                  We understand – that's why Eris Engineering makes the process secure and transparent.
                </p>

                {/* Key Benefits Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12">
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-gray-200">Live progress updates via WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-gray-200">Money-back guarantee</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-gray-200">No hidden costs</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0" />
                    <span className="text-lg text-gray-200">Professional oversight</span>
                  </div>
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 mb-8 justify-center lg:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-10 py-6 font-semibold shadow-lg"
                  >
                    Get Free Consultation
                    <span className="text-sm ml-2 opacity-90">(Worth KES 5,000)</span>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-10 py-6 font-semibold"
                  >
                    Download Free Guide
                  </Button>
                </div>

                {/* Urgency text */}
                <p className="text-sm text-gray-400">
                  ⏰ Limited: Only 5 homes per month qualify for our guarantee
                </p>
              </div>

              {/* Right: Trust Card & Image Display */}
              <div className="lg:col-span-1 space-y-8">
                {/* Prominent image display - rounded and bordered */}
                <div className="relative">
                  <div className="rounded-2xl border-4 border-orange-500/30 overflow-hidden shadow-2xl">
                    <img 
                      src={heroImage} 
                      alt="Beautiful Kenyan home construction" 
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Why Diaspora Choose Us Card */}
                <Card className="bg-white/95 backdrop-blur-sm p-8 shadow-2xl border-0">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Diaspora Choose Us</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Eye className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Full Transparency</h4>
                        <p className="text-sm text-slate-600">See every step through our SiteSync app with live photos and updates</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">100% Secure</h4>
                        <p className="text-sm text-slate-600">Insured contracts and verified materials protect your investment</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-1">Proven Track Record</h4>
                        <p className="text-sm text-slate-600">50+ successful diaspora projects completed on time and budget</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-center font-medium text-slate-900">
                      "Finally, peace of mind while building from abroad"
                    </p>
                    <p className="text-xs text-center text-slate-600 mt-1">
                      - James M., Toronto → Kiambu
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;