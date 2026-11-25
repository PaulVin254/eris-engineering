import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Residences", to: "/projects" },
  { label: "Signature Series", to: "/concepts" },
  { label: "Approach", to: "/process" },
  { label: "Practice", to: "/about" },
];

const DARK_HERO_ROUTES = [
  "/",
  "/projects/cedar-horizon",
  "/projects/teak-geometric",
  "/projects/quartz-linear",
  "/projects/bronze-vertical",
  "/projects/onyx-villa",
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const location = useLocation();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 40);
  });

  const hasDarkHero = DARK_HERO_ROUTES.includes(location.pathname);
  const isOverDarkHero = hasDarkHero && !isScrolled && !menuOpen;

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "h-[72px] w-full transition-colors duration-300 flex items-center",
          isOverDarkHero
            ? "bg-transparent text-[#FAFAFA]"
            : "bg-[#FAFAFA]/95 backdrop-blur-md border-b border-[#E2E5E2] text-[#121413]"
        )}
      >
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-10 flex items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => setMenuOpen(false)}
            aria-label="Eris Engineering Home"
            className="flex items-center shrink-0"
          >
            <img
              src={
                isOverDarkHero
                  ? "/eris-engineering-logo-dark.svg"
                  : "/eris-engineering-logo.svg"
              }
              alt="Eris Engineering"
              className="h-9 sm:h-10 w-auto transition-opacity duration-300"
            />
          </Link>

          {/* Single-Line Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "text-sm font-normal tracking-[-0.01em] whitespace-nowrap transition-colors duration-200",
                    isOverDarkHero
                      ? isActive
                        ? "text-[#FAFAFA]"
                        : "text-[#FAFAFA]/80 hover:text-[#FAFAFA]"
                      : isActive
                        ? "text-[#1B3B2B] font-medium"
                        : "text-[#525855] hover:text-[#121413]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Primary Studio Action & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className={cn(
                "hidden sm:inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium whitespace-nowrap transition-colors duration-200",
                isOverDarkHero
                  ? "bg-[#FAFAFA] text-[#121413] hover:bg-[#F1F2F0]"
                  : "bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20]"
              )}
            >
              <span>Private Inquiry</span>
              <ArrowUpRight size={15} weight="regular" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className={cn(
                "lg:hidden w-10 h-10 rounded-lg flex items-center justify-center border transition-colors",
                isOverDarkHero
                  ? "border-[#FAFAFA]/30 text-[#FAFAFA] hover:bg-[#FAFAFA]/10"
                  : "border-[#E2E5E2] text-[#121413] hover:bg-[#F1F2F0]"
              )}
            >
              {menuOpen ? (
                <X size={18} weight="regular" />
              ) : (
                <List size={18} weight="regular" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#FAFAFA] border-t border-[#E2E5E2] z-40 px-6 py-10 flex flex-col justify-between overflow-y-auto"
          >
            <nav className="flex flex-col divide-y divide-[#E2E5E2] border-y border-[#E2E5E2]">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-5 flex items-center justify-between text-xl font-normal tracking-tight text-[#121413] hover:text-[#1B3B2B]"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight size={18} weight="light" className="text-[#525855]" />
                </Link>
              ))}
            </nav>

            <div className="pt-8 space-y-4">
              <p className="text-sm text-[#525855]">
                Nairobi and Western Kenya. Direct principal engineering oversight.
              </p>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#1B3B2B] text-[#FAFAFA] hover:bg-[#142C20] px-6 py-3.5 text-sm font-medium"
              >
                <span>Private Inquiry</span>
                <ArrowUpRight size={16} weight="regular" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
