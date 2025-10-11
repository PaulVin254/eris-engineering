import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <img
            src="/eris-engineering-logo.svg"
            alt="Eris Engineering"
            className="h-12 w-auto"
          />
        </a>{" "}
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-foreground hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-foreground hover:text-primary transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-foreground hover:text-primary transition-colors"
          >
            Projects
          </a>
          <a
            href="#process"
            className="text-foreground hover:text-primary transition-colors"
          >
            Our Process
          </a>
          <a
            href="#contact"
            className="text-foreground hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>
        {/* Contact Info & CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+254 717 297 022</span>
          </div>
          <Button variant="default" size="sm">
            Free Consultation
          </Button>
        </div>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Projects
            </a>
            <a
              href="#process"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Our Process
            </a>
            <a
              href="#contact"
              className="text-foreground hover:text-primary transition-colors py-2"
            >
              Contact
            </a>
            <div className="pt-4 border-t border-border">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                <Phone className="w-4 h-4" />
                <span>+254 717 297 022</span>
              </div>
              <Button variant="default" className="w-full">
                Free Consultation
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
