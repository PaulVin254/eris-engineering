import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Wanjiku",
      location: "London → Kiambu",
      profession: "Nurse",
      rating: 5,
      quote: "Eris gave me something I never thought possible – peace of mind while building from 8,000 km away. The daily WhatsApp photos showed every brick being laid. When I visited Kenya, my nyumba was exactly as promised. No drama, no stress, just pure joy.",
      highlight: "Finally, peace of mind while building abroad"
    },
    {
      name: "James Mutua", 
      location: "Toronto → Machakos",
      profession: "Software Engineer",
      rating: 5,
      quote: "After my cousin disappeared with KES 1.2 million meant for our family home, I was terrified to try again. Eris's SiteSync app showed me every shilling spent and every day's progress. They rebuilt my trust along with my house.",
      highlight: "They rebuilt my trust along with my house"
    },
    {
      name: "Grace Akinyi",
      location: "Melbourne → Kisumu", 
      profession: "Teacher",
      rating: 5,
      quote: "The 90-day guarantee seemed too good to be true, but they delivered! My home was completed in 85 days. The quality is bora sana – better than houses costing twice as much. My family in Kisumu is so proud.",
      highlight: "Completed 5 days ahead of schedule!"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Stories from Diaspora Families 
            <span className="text-primary"> Like Yours</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from Kenyans abroad who chose trust and transparency over taking chances with relatives and local fundis.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-background hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
              {/* Quote Icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Highlight Quote */}
              <div className="bg-primary/10 border-l-4 border-primary rounded-r-lg p-4 mb-6">
                <p className="font-semibold text-primary text-sm">
                  "{testimonial.highlight}"
                </p>
              </div>

              {/* Main Quote */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-3">
                <Avatar className="w-12 h-12 bg-primary/10">
                  <AvatarFallback className="text-primary font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.profession}</div>
                  <div className="text-sm text-primary font-medium">{testimonial.location}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div className="bg-background rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-sm text-muted-foreground">Happy Diaspora Families</div>
            <div className="text-xs text-muted-foreground mt-1">Across 12 countries</div>
          </div>
          
          <div className="bg-background rounded-lg p-6">
            <div className="text-4xl font-bold text-trust-green mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-Time Delivery</div>
            <div className="text-xs text-muted-foreground mt-1">Never missed a deadline</div>
          </div>
          
          <div className="bg-background rounded-lg p-6">
            <div className="text-4xl font-bold text-trust-blue mb-2">4.9★</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
            <div className="text-xs text-muted-foreground mt-1">From verified clients</div>
          </div>
          
          <div className="bg-background rounded-lg p-6">
            <div className="text-4xl font-bold text-primary mb-2">₤0</div>
            <div className="text-sm text-muted-foreground">Money Lost to Fraud</div>
            <div className="text-xs text-muted-foreground mt-1">With our protection</div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <Card className="inline-block p-6 bg-gradient-to-r from-trust-green/10 to-trust-blue/10 border-trust-green/20">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-trust-green/20 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-trust-green" />
              </div>
              <div className="text-left">
                <div className="font-bold text-foreground text-lg">Verified by Google Reviews</div>
                <div className="text-muted-foreground">4.9/5 stars from real diaspora clients</div>
                <div className="text-sm text-trust-green font-medium">All reviews independently verified</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;