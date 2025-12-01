import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const OnyxVilla = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-slate-800">
          <img
            src="/onyx-exterior.jpg"
            alt="The Onyx Villa Hero"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-orange-600 text-white text-base px-6 py-1.5 border-none">
              Ready-to-Build Concept
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Onyx Villa <span className="text-orange-500">|</span> Signature Series
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed">
              Blurring the lines between indoor luxury and the Kenyan outdoors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. The "Hook" Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                A Statement of Modern Living
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Onyx Villa isn't just a house; it's a statement. Featuring
                floor-to-ceiling panoramic glazing, an open-plan entertaining
                wing, and a seamless flow onto the terrace.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                It represents the future of residential construction in
                Kenya—bold, functional, and timeless. Designed for those who
                appreciate the intersection of art and engineering.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] bg-slate-100 rounded-xl overflow-hidden shadow-xl"
            >
              <img
                src="/onyx-exterior.jpg"
                alt="Onyx Villa Exterior"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. The "Engineer's Note" */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-white border-l-4 border-orange-500 shadow-lg rounded-r-xl p-8 md:p-12"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-orange-100 p-3 rounded-full">
                <ClipboardCheck className="w-8 h-8 text-orange-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                Eris Engineering Constructability Note
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Structural Glazing</h3>
                  <p className="text-slate-600">
                    Massive window spans require reinforced concrete lintels and
                    hidden steel supports to ensure structural integrity without
                    compromising the view.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Waterproofing Strategy</h3>
                  <p className="text-slate-600">
                    Double-layer bituminous membrane system with precise gradient
                    screeding for the flat roof to guarantee zero leakage in heavy
                    rains.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">Thermal Comfort</h3>
                  <p className="text-slate-600">
                    Orientation-specific positioning to reduce the greenhouse
                    effect while maximizing natural light, keeping the interior
                    cool naturally.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. The Gallery Grid */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Tour</h2>
            <p className="text-slate-400">Explore the details that define the Onyx Villa.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rear Elevation",
                desc: "Mixed-media cladding with seamless patio transition.",
                img: "/onyx-exterior.jpg",
              },
              {
                title: "Interior Volume",
                desc: "Open-plan structural layout with long-span spaces.",
                img: "/onyx-living.jpg",
              },
              {
                title: "High-Spec Finishing",
                desc: "Precision tiling and premium plumbing fixtures.",
                img: "/onyx-bath.jpg",
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
                <div className="aspect-[4/3] bg-slate-800 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-orange-500 mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Call-To-Action */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Do you own a plot? We have the blueprints.
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              This design is complete, vetted, and ready for construction. Skip
              the 6-month design phase and start building sooner.
            </p>
            <Link to="/calculator">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
                Get a Construction Quote for The Onyx Villa
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 6. Footer Disclaimer */}
      <section className="py-8 px-4 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-slate-500 italic">
            The Onyx Villa is part of the Eris Signature Design Series.
            Architectural visualization provided by our design partners. Eris
            Engineering is the authorized construction execution partner.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnyxVilla;
