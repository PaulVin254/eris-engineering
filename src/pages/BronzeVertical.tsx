import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  PenTool,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BronzeVertical = () => {
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
            src="/bronze-hero.jpg"
            alt="The Bronze Vertical Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-amber-700 text-white text-base px-6 py-1.5 border-none hover:bg-amber-800">
              Estimated Cost: KES 28M - 35M
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Bronze Vertical <span className="text-stone-500">|</span>{" "}
              Signature Series
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed">
              Maximize your urban footprint with this three-story vertical
              masterpiece.
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
                High-Density Luxury
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-8">
                From the sunken lounge to the private rooftop jacuzzi, The
                Bronze Vertical offers four floors of living space on a minimal
                footprint.
              </p>

              {/* Best Locations Box */}
              <div className="bg-stone-50 border border-stone-200 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-2 mb-3 text-amber-700 font-bold">
                  <MapPin className="w-5 h-5" />
                  <h3>Engineered for High-Value Zones</h3>
                </div>
                <p className="text-stone-700">
                  This vertical footprint is optimized for maximum ROI in:{" "}
                  <span className="font-semibold">
                    Kilimani, Kileleshwa, Lavington, & Westlands.
                  </span>
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/5] bg-stone-100 rounded-xl overflow-hidden shadow-xl order-1 lg:order-2"
            >
              <img
                src="/bronze-living.jpg"
                alt="Bronze Vertical Living Area"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The "Engineer's Note" */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-stone-800 border-l-4 border-amber-600 shadow-2xl rounded-r-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-stone-700 p-3 rounded-full">
                <ClipboardCheck className="w-8 h-8 text-amber-500" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                Eris Engineering Constructability Note
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Structural Frame
                  </h3>
                  <p className="text-stone-300">
                    Reinforced concrete moment-resisting frame (Grid System) to
                    handle vertical loads without thick internal walls,
                    maximizing usable floor area.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Cladding System
                  </h3>
                  <p className="text-stone-300">
                    Bronze finish using Aluminium Composite Panels (ACP) on a
                    steel sub-frame with thermal expansion joints for durability
                    and aesthetic precision.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Rooftop Waterproofing
                  </h3>
                  <p className="text-stone-300">
                    Triple-layer tanking system with protective screed for the
                    jacuzzi zone, ensuring zero leakage to the floors below.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Gallery Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
              Visual Tour
            </h2>
            <p className="text-stone-500">
              Explore the details that define The Bronze Vertical.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Vertical Efficiency",
                desc: "Triples your square footage on narrow plots.",
                img: "/bronze-aerial.jpg",
              },
              {
                title: "The Sky Lounge",
                desc: "Engineered deck with reinforced jacuzzi zone.",
                img: "/bronze-rooftop.jpg",
              },
              {
                title: "Wellness Level",
                desc: "Dedicated upper-floor flex space with panoramic views.",
                img: "/bronze-gym.jpg",
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
                <div className="aspect-[4/5] bg-stone-100 rounded-lg overflow-hidden mb-4 shadow-md">
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

      {/* 6. The Call-To-Action */}
      <section className="py-24 px-4 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Ready to Build Up?
            </h2>
            <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
              This design is engineered for narrow plots and approved for
              multi-story construction—let's maximize your land value today.
            </p>
            <Link to="/calculator">
              <Button
                size="lg"
                className="bg-amber-700 hover:bg-amber-800 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Quote for This Design
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-stone-500 italic max-w-2xl mx-auto">
              Cost estimate assumes 3-story reinforced concrete structure. Final
              cost depends on foundation depth (piling for black cotton soil)
              and facade specs.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BronzeVertical;
