import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">E</span>
            </div>
            <span className="text-xl font-semibold text-foreground tracking-tight">Eris Engineering</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Process</a>
            <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="default" size="sm" className="text-sm font-medium px-6">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg">
            <nav className="flex flex-col p-6 space-y-4">
              <a href="#home" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Home</a>
              <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>About</a>
              <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Process</a>
              <a href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Projects</a>
              <a href="#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Testimonials</a>
              <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={toggleMenu}>Contact</a>
              <Button variant="default" size="sm" className="mt-4 text-sm font-medium">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;