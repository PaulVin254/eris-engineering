import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Download, Users, ArrowRight } from "lucide-react";
import { useState } from "react";

const LeadMagnetSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto px-4">
        {/* Main Lead Magnet */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12 bg-background shadow-2xl border-0 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <div className="inline-flex items-center bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
                  <BookOpen className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-semibold text-primary">FREE INSIDER GUIDE</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  "What Your Contractor Won't Tell You About Building a Home"
                </h2>
                
                <p className="text-lg text-muted-foreground mb-6">
                  Discover the hidden costs, common scams, and insider secrets that could save you 
                  <span className="font-semibold text-primary"> over KES 500,000</span> on your project.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-trust-green/20 rounded-full flex items-center justify-center">
                      <span className="text-trust-green text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">7 red flags that signal a dishonest contractor</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-trust-green/20 rounded-full flex items-center justify-center">
                      <span className="text-trust-green text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">Hidden costs that inflate budgets by 40%</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-trust-green/20 rounded-full flex items-center justify-center">
                      <span className="text-trust-green text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">Questions to ask before sending any money</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-trust-green/20 rounded-full flex items-center justify-center">
                      <span className="text-trust-green text-sm">✓</span>
                    </div>
                    <span className="text-muted-foreground">How to verify materials and avoid substandard work</span>
                  </li>
                </ul>
                
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <p className="text-sm text-primary font-semibold">
                    🎁 BONUS: Free 30-minute consultation (normally KES 5,000) included!
                  </p>
                </div>
              </div>
              
              <div>
                <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="text-center mb-6">
                    <Download className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">Download FREE Guide</h3>
                    <p className="text-sm text-muted-foreground">
                      Used by 500+ diaspora families to build safely
                    </p>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="text-center"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full text-lg">
                      Download Free Guide Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </form>
                  
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    No spam. Unsubscribe anytime. Your data is protected.
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4 mt-6 pt-6 border-t border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Downloads</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-trust-green">4.9★</div>
                      <div className="text-xs text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-trust-blue">Free</div>
                      <div className="text-xs text-muted-foreground">Always</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>

        {/* Additional Resources */}
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-trust-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-trust-blue" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Monthly Webinar</h3>
            <p className="text-muted-foreground mb-4">
              Join our monthly Q&A session: "Safe Building for Diaspora Families"
            </p>
            <Button variant="outline" size="sm">
              Reserve Your Spot
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Building Calculator</h3>
            <p className="text-muted-foreground mb-4">
              Get accurate cost estimates for your dream home project
            </p>
            <Button variant="outline" size="sm">
              Use Calculator
            </Button>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-trust-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="w-8 h-8 text-trust-green" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Contractor Checklist</h3>
            <p className="text-muted-foreground mb-4">
              Essential questions to ask any contractor before hiring
            </p>
            <Button variant="outline" size="sm">
              Download Checklist
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetSection;