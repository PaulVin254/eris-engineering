"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Facebook,
  Instagram,
  Linkedin,
  Moon,
  Send,
  Sun,
  Phone,
  Mail,
  MapPin,
  Clock,
  Building,
  Hammer,
  Shield,
} from "lucide-react";

function ErisFooter() {
  const [isDarkMode, setIsDarkMode] = React.useState(false); // Default to light mode for professional look
  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <footer className="relative border-t bg-accent text-white transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info & Newsletter */}
          <div className="relative lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img
                src="/eris-engineering-logo.svg"
                alt="Eris Engineering"
                className="h-20 w-auto sm:h-24"
              />
            </div>
            <p className="mb-6 text-white/80 leading-relaxed">
              Building dreams for Kenyan families abroad with transparency,
              trust, and professional excellence. Your peace of mind is our
              priority.
            </p>
            <h3 className="mb-4 text-lg font-semibold">Stay Updated</h3>
            <p className="mb-4 text-white/70 text-sm">
              Get construction updates, industry insights, and exclusive offers
              for diaspora families.
            </p>
            <form className="relative mb-6" onSubmit={handleNewsletterSubmit}>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pr-12 backdrop-blur-sm bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                required
              />
              <Button
                type="submit"
                size="icon"
                className="absolute right-1 top-1 h-8 w-8 rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <Send className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </form>
            <div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-primary/10 blur-2xl" />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#home"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Home
              </a>
              <a
                href="#about"
                className="block transition-colors hover:text-primary text-white/80"
              >
                About Us
              </a>
              <a
                href="#projects"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Our Projects
              </a>
              <a
                href="#process"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Our Process
              </a>
              <a
                href="#testimonials"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Contact
              </a>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Our Services</h3>
            <nav className="space-y-2 text-sm">
              <a
                href="#construction"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Home Construction
              </a>
              <a
                href="#renovation"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Renovation Projects
              </a>
              <a
                href="#monitoring"
                className="block transition-colors hover:text-primary text-white/80"
              >
                SiteSync Monitoring
              </a>
              <a
                href="#design"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Architectural Design
              </a>
              <a
                href="#management"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Project Management
              </a>
              <a
                href="#quality"
                className="block transition-colors hover:text-primary text-white/80"
              >
                Quality Assurance
              </a>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="relative">
            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-start space-x-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-white/90">+254 717 297 022</div>
                  <div className="text-white/60">WhatsApp available</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-white/90">paul@eris.co.ke</div>
                  <div className="text-white/60">24/7 support</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-white/90">Nairobi, Kenya</div>
                  <div className="text-white/60">Serving nationwide</div>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                <div className="text-sm">
                  <div className="text-white/90">Mon - Sat: 8AM - 6PM EAT</div>
                  <div className="text-white/60">Emergency support 24/7</div>
                </div>
              </div>
            </div>

            <h4 className="mb-3 text-sm font-semibold">Follow Us</h4>
            <div className="mb-6 flex space-x-3">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.facebook.com/profile.php?id=61581890138497"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Facebook"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <Facebook className="h-4 w-4" />
                        <span className="sr-only">Facebook</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Facebook</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.instagram.com/erisbuilders/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                      >
                        <Instagram className="h-4 w-4" />
                        <span className="sr-only">Instagram</span>
                      </Button>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Follow us on Instagram</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20 hover:scale-105 transition-all"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Connect with us on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-white/60" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
                className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-white/20"
              />
              <Moon className="h-4 w-4 text-white/60" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Build Your Dream Home?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join 50+ diaspora families who chose trust over taking chances.
              Get your free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="default"
                className="text-lg px-8 py-4 bg-primary hover:bg-primary/90"
              >
                Book Free Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20"
              >
                Download Free Guide
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/20 pt-6 text-center md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Eris Engineering Ltd. All rights
            reserved.
          </p>
          <nav className="flex gap-4 text-sm">
            <a
              href="#privacy"
              className="transition-colors hover:text-primary text-white/60"
            >
              Privacy Policy
            </a>
            <a
              href="#terms"
              className="transition-colors hover:text-primary text-white/60"
            >
              Terms of Service
            </a>
            <a
              href="#cookies"
              className="transition-colors hover:text-primary text-white/60"
            >
              Cookie Policy
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export { ErisFooter };
