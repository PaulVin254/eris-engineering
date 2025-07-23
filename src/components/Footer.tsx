import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">E</span>
              </div>
              <span className="text-xl font-semibold">Eris Engineering</span>
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Building dreams for Kenyan families abroad with transparency, 
              trust, and professional excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/80 hover:text-white transition-colors text-sm">Home</a></li>
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors text-sm">About Us</a></li>
              <li><a href="#process" className="text-white/80 hover:text-white transition-colors text-sm">Our Process</a></li>
              <li><a href="#projects" className="text-white/80 hover:text-white transition-colors text-sm">Projects</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors text-sm">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Home Construction</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Renovation Projects</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">SiteSync Monitoring</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Project Management</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors text-sm">Quality Assurance</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-white/90">+254 700 123 456</div>
                  <div className="text-white/60">WhatsApp available</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-white/90">hello@erisengineering.co.ke</div>
                  <div className="text-white/60">24/7 support</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="text-sm">
                  <div className="text-white/90">Nairobi, Kenya</div>
                  <div className="text-white/60">Serving nationwide</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Your Dream Home?</h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join 50+ diaspora families who chose trust over taking chances. 
              Get your free consultation today.
            </p>
            <Button size="lg" variant="default" className="text-base font-semibold px-8 py-4">
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/60">
              © 2024 Eris Engineering. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;