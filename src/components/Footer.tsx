import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { SIGNATURE_RESIDENCES } from "@/data/signatureResidences";

const WHATSAPP_URL =
  "https://wa.me/254717297022?text=Hello%20Eris%20Engineering%2C%20I%20would%20like%20to%20discuss%20a%20private%20residential%20commission%20in%20Kenya.";

const Footer = () => {
  return (
    <footer className="bg-[#121413] text-[#FAFAFA] border-t border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Practice Summary */}
          <div className="md:col-span-3 space-y-6">
            <Link href="/" className="inline-block">
              <img
                src="/eris-engineering-logo-dark.svg"
                alt="Eris Engineering"
                className="h-11 w-auto"
              />
            </Link>
            <p className="text-sm text-white/70 font-light leading-relaxed max-w-sm">
              Structural engineering and custom residential construction across
              Kenya, governed by fixed-sum contracts and principal oversight.
            </p>
          </div>

          {/* Studio Links */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/50">
              Practice
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Residences
                </Link>
              </li>
              <li>
                <Link href="/concepts" className="hover:text-white transition-colors">
                  Signature Series
                </Link>
              </li>
              <li>
                <Link href="/process" className="hover:text-white transition-colors">
                  Approach
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  The Practice
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Private Inquiry
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/50">
              Resources
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Construction Journal
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white transition-colors">
                  Cost Calculator
                </Link>
              </li>
              <li>
                <Link href="/boq-audit" className="hover:text-white transition-colors">
                  BOQ Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Signature Residences */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/50">
              Signature Series
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              {SIGNATURE_RESIDENCES.map((residence) => (
                <li key={residence.slug}>
                  <Link
                    href={`/projects/${residence.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    {residence.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Studio Desk */}
          <div className="md:col-span-3 space-y-5">
            <h3 className="text-xs font-medium uppercase tracking-widest text-white/50">
              Studio Desk
            </h3>

            <div className="space-y-3.5 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin size={16} weight="light" className="mt-0.5 text-white/60 shrink-0" />
                <span>Westlands, Nairobi and Western Kenya</span>
              </div>
              <a
                href="tel:+254717297022"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone size={16} weight="light" className="text-white/60 shrink-0" />
                <span>+254 717 297 022</span>
              </a>
              <a
                href="mailto:paul@eris.co.ke"
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <EnvelopeSimple size={16} weight="light" className="text-white/60 shrink-0" />
                <span>paul@eris.co.ke</span>
              </a>
            </div>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 hover:border-white/60 px-4 py-2.5 text-sm font-medium text-[#FAFAFA] transition-colors"
            >
              <span>Direct WhatsApp</span>
              <ArrowUpRight size={15} weight="light" />
            </a>
          </div>
        </div>

        {/* Legal & Venture Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/50">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} Eris Engineering Ltd. All rights reserved.</p>
            <p>
              Community venture:{" "}
              <a
                href="https://ephphathakenya.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white underline underline-offset-4"
              >
                Ephphatha Sign Language School
              </a>
            </p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
