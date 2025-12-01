import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  PenTool,
  MapPin,
  Box,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TeakGeometric = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-stone-900">
        {/* Background Image */}
        <div className="absolute inset-0 bg-stone-800">
          <img
            src="/teak-hero.jpg"
            alt="The Teak Geometric Hero"
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/30 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-amber-800 text-white text-base px-6 py-1.5 border-none hover:bg-amber-900">
              Estimated Cost: KES 20M - 26M
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Teak Geometric <span className="text-stone-500">|</span>{" "}
              Signature Series
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed">
              A masterclass in textural contrast, combining the warmth of
              natural timber with the solidity of stone masonry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Design Partner Transparency Banner */}
      <section className="bg-stone-100 border-b border-stone-200 py-6 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
            <PenTool className="w-6 h-6 text-stone-700" />
          </div>
          <p className="text-stone-700 text-sm md:text-base max-w-3xl">
            <span className="font-semibold">Design Transparency:</span> This
            concept is an original architectural design by our partner
            architects. Eris Engineering is the exclusive construction execution
            partner, ensuring this vision is built to exact structural
            standards.
          </p>
        </div>
      </section>

      {/* 3. The "Hook" & Locations */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Floating Volumes & Earthy Tones
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                The Teak Geometric captures the best of both worlds: expansive
                floor-to-ceiling views for the living areas, and a private,
                elevated sanctuary for the bedrooms above.
              </p>

              {/* Ideally Suited For Box */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-100 rounded-full opacity-50 blur-2xl"></div>
                <div className="flex items-center gap-2 mb-3 text-amber-800 font-bold relative z-10">
                  <MapPin className="w-5 h-5" />
                  <h3>Ideally Suited For</h3>
                </div>
                <p className="text-stone-800 relative z-10">
                  The 'Modern Farmhouse' aesthetic of this design thrives on
                  larger, green plots. Perfect for:{" "}
                  <span className="font-semibold">
                    Karen, Tigoni, Nyari, & Runda.
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] bg-stone-100 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2"
            >
              <img
                src="/teak-courtyard.jpg"
                alt="Teak Geometric Courtyard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The "Wow Factor" Feature */}
      <section className="py-16 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <div className="inline-flex items-center justify-center p-3 bg-stone-800 rounded-full mb-6">
              <Box className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Architectural Highlight: The Floating Box
            </h2>
            <p className="text-xl text-stone-300 leading-relaxed">
              The upper timber volume appears to hover over the masonry base. We
              achieve this not with magic, but with high-tensile reinforced
              concrete cantilevers that defy gravity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. The "Engineer's Note" */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white border border-stone-100 rounded-3xl p-8 md:p-12 overflow-hidden relative shadow-lg"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white shadow-lg overflow-hidden">
                    <img
                      src="/engineer-paul-headshot.png"
                      alt="Engineer Paul"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
                    Engineer's Note
                  </h2>
                  <p className="text-stone-500">
                    Technical specifications & constructability
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                    <span className="text-amber-600">01.</span> Structural
                    Cantilever
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Upper timber volume supported by high-tensile reinforced
                    concrete beams to prevent deflection, ensuring the
                    "floating" aesthetic remains stable over decades.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                    <span className="text-amber-600">02.</span> Material
                    Interface
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Galvanized flashing installed where timber meets masonry to
                    prevent 'capillary action' and wood rot, a critical detail
                    often missed in standard construction.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-stone-900 text-lg flex items-center gap-2">
                    <span className="text-amber-600">03.</span> Glazing Headers
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed">
                    Heavy-gauge structural steel lintels hidden in the ceiling
                    to carry roof loads over the massive window spans without
                    visible columns.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. The Gallery Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Visual Tour
            </h2>
            <p className="text-stone-500">
              Explore the details that define The Teak Geometric.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Framing the View",
                desc: "Floor-to-ceiling structural glazing with hardwood-finish aluminum frames.",
                img: "/teak-living.jpg",
              },
              {
                title: "Industrial Precision",
                desc: "Custom-fabricated vertical steel screen acting as a safety balustrade and light filter.",
                img: "/teak-staircase.jpg",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group"
              >
                <div className="aspect-[4/3] bg-stone-100 rounded-lg overflow-hidden mb-4 shadow-md">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. The Call-To-Action */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
              Skip the architectural wait-time; these construction-ready
              drawings allow us to mobilize on your site immediately.
            </p>
            <Link to="/calculator">
              <Button
                size="lg"
                className="bg-amber-800 hover:bg-amber-900 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Quote for This Design
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-stone-500 italic max-w-2xl mx-auto">
              Cost estimate assumes mixed-media construction (Masonry + Timber
              Cladding). Final cost varies based on site soil bearing capacity.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TeakGeometric;
