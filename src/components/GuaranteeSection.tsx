import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Clock, Award, Gift, ArrowRight } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Main Guarantee */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-6 py-2 mb-6">
            <Shield className="w-5 h-5 mr-2 text-primary" />
            <span className="font-semibold text-primary">Industry-First Guarantee</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Build in 90 Days or 
            <span className="text-primary"> We Pay You</span>
            <br />KES 500,000
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            We're so confident in our process that we guarantee your home will be completed 
            within 90 days or we pay you cash. No contractor in Kenya offers this level of commitment.
          </p>
        </div>

        {/* Why We Can Make This Promise */}
        <Card className="p-8 mb-16 bg-background/80 backdrop-blur-sm border-0 shadow-xl">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">
            Why We Can Make This Unbelievable Promise
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Unlike Other Contractors...</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>❌ Relatives and "fundis" work without supervision</li>
                <li>❌ No project management or timelines</li>
                <li>❌ Materials sourced from unknown suppliers</li>
                <li>❌ No accountability or progress tracking</li>
                <li>❌ Hidden costs discovered mid-project</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Eris Engineering...</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>✅ Licensed engineers oversee every phase</li>
                <li>✅ Military-precision project scheduling</li>
                <li>✅ Pre-verified supplier network</li>
                <li>✅ Daily progress updates via SiteSync</li>
                <li>✅ Fixed-price contract with no surprises</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* The Complete Package */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              What You Get in This Limited Offer
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              This isn't just construction – it's complete peace of mind for diaspora families.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">90-Day Completion Guarantee</h4>
                  <p className="text-muted-foreground">We pay you KES 500,000 if we're late</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust-blue/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-trust-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">FREE SiteSync Access (2 Years)</h4>
                  <p className="text-muted-foreground">Usually KES 24,000 - yours free</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-trust-green/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-trust-green" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Post-Construction Cleaning</h4>
                  <p className="text-muted-foreground">KES 15,000 value included at no charge</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Gift className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Branded Site Safety Kit</h4>
                  <p className="text-muted-foreground">Helmet and vest for your site visits</p>
                </div>
              </div>
            </div>
          </div>
          
          <Card className="p-8 bg-background border-primary/20 shadow-2xl">
            <div className="text-center mb-6">
              <h4 className="text-2xl font-bold text-foreground mb-2">Total Package Value</h4>
              <div className="text-4xl font-bold text-muted-foreground line-through mb-1">KES 2,539,000</div>
              <div className="text-5xl font-bold text-primary">KES 1,999,000</div>
              <div className="text-sm text-trust-green font-semibold">Save KES 540,000</div>
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm">
                <span>Standard Home Construction</span>
                <span>KES 1,950,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>SiteSync App (2 years)</span>
                <span>KES 24,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Professional Cleaning</span>
                <span>KES 15,000</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Safety Equipment</span>
                <span>KES 5,000</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold">
                  <span>Your Investment</span>
                  <span className="text-primary">KES 1,999,000</span>
                </div>
              </div>
            </div>
            
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
              <div className="flex items-center space-x-2 text-destructive font-semibold text-sm">
                <Clock className="w-4 h-4" />
                <span>Limited Time: Only 5 spots remaining this month</span>
              </div>
            </div>
            
            <Button size="lg" className="w-full text-lg py-4">
              Secure Your Spot Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <p className="text-xs text-center text-muted-foreground mt-4">
              Includes FREE 30-minute consultation (usually KES 5,000)
            </p>
          </Card>
        </div>

        {/* Money-Back Guarantee */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-to-r from-trust-green/10 to-trust-blue/10 border-trust-green/20">
            <Shield className="w-16 h-16 text-trust-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-4">
              100% Money-Back Guarantee
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              If you're not completely satisfied with our service within the first 30 days, 
              we'll refund every shilling. No questions asked.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;