import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Kimani",
      location: "London → Nakuru",
      image: "SK",
      rating: 5,
      text: "After losing money to two different contractors, I was terrified to try again. Eris changed everything. The daily updates gave me confidence, and the final result exceeded my expectations.",
      project: "4-bedroom family home"
    },
    {
      name: "Dr. Michael Wanjiku", 
      location: "Toronto → Kiambu",
      image: "MW",
      rating: 5,
      text: "The SiteSync app was incredible. I could check progress during my lunch breaks in Toronto and see my home taking shape in real-time. Professional service from start to finish.",
      project: "Modern 3-bedroom with clinic"
    },
    {
      name: "Grace Njeri",
      location: "Dubai → Mombasa",
      image: "GN", 
      rating: 5,
      text: "What impressed me most was the transparency. Every shilling was accounted for, every material receipt was shared. No surprises, no extra costs. Just honest, professional work.",
      project: "Coastal retirement home"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
            Stories from Our Families
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Real families, real results. See why diaspora Kenyans trust us 
            with their most important investment.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg hover:shadow-xl transition-shadow bg-background">
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="font-semibold text-primary text-sm">{testimonial.image}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.project}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-muted/30 rounded-2xl p-8 lg:p-12">
          <div className="text-center">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                <div className="text-muted-foreground">Happy Families</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">100%</div>
                <div className="text-muted-foreground">On-Time Delivery</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-foreground mb-2">₹0</div>
                <div className="text-muted-foreground">Hidden Costs</div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the growing family of diaspora Kenyans who chose trust over chance. 
              Your dream home is just one conversation away.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="default" className="text-base font-semibold px-8 py-4">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold px-8 py-4">
                View Our Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;