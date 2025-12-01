import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  Gem,
  MapPin,
  PenTool,
} from "lucide-react";
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
      <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="/onyx-exterior.jpg"
            alt="The Onyx Villa Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
        </div>

        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center gap-3 mb-6">
                <Badge className="bg-orange-600 text-white text-sm px-4 py-1.5 border-none uppercase tracking-wider font-semibold">
                  Signature Series
                </Badge>
                <Badge
                  variant="outline"
                  className="text-slate-300 border-slate-600 text-sm px-4 py-1.5 uppercase tracking-wider font-semibold"
                >
                  Concept #01
                </Badge>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight">
                The Onyx <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                  Villa
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed mb-10">
                A bold statement of modern living. Blurring the lines between
                indoor luxury and the Kenyan outdoors with panoramic glazing and
                structural elegance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/calculator">
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 h-auto rounded-full w-full sm:w-auto"
                  >
                    Get Construction Quote
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-slate-600 text-white hover:bg-slate-800 text-lg px-8 py-6 h-auto rounded-full w-full sm:w-auto"
                >
                  View Floor Plans
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Design Transparency Banner */}
      <section className="bg-slate-900 border-y border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <Gem className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Premium Finishes
              </h3>
              <p className="text-slate-400 text-sm">
                High-spec porcelain tiling and custom joinery throughout.
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <PenTool className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Architectural Highlight
              </h3>
              <p className="text-slate-400 text-sm">
                Double-volume glass atrium maximizing natural light entry.
              </p>
            </div>
            <div className="p-4">
              <div className="flex justify-center mb-4">
                <MapPin className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Ideally Suited For
              </h3>
              <p className="text-slate-400 text-sm">
                South C, Langata, Ruiru, Syokimau & similar urban plots.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The "Hook" Section with Floating Box */}
      <section className="py-24 px-4 bg-slate-50">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-2 lg:order-1"
            >
              <div className="inline-block mb-4">
                <span className="text-orange-600 font-bold tracking-wider text-sm uppercase">
                  The Concept
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                Designed for the <br />
                <span className="text-slate-500">Modern Urbanite.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Onyx Villa isn't just a house; it's a statement. Featuring
                floor-to-ceiling panoramic glazing, an open-plan entertaining
                wing, and a seamless flow onto the terrace.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                It represents the future of residential construction in
                Kenya—bold, functional, and timeless. Designed for those who
                appreciate the intersection of art and engineering.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-orange-500" />
                  Key Features
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "Double-Volume Living",
                    "Floating Staircase",
                    "Rooftop Terrace",
                    "Smart Home Ready",
                    "Solar Water Heating",
                    "Biometric Access",
                  ].map((feature, i) => (
                    <li
                      key={i}
                      className="text-slate-600 text-sm flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-1 lg:order-2"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/onyx-exterior.jpg"
                  alt="Onyx Villa Exterior"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating "Ideally Suited" Box */}
              <div className="absolute -bottom-8 -left-8 bg-slate-900 text-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                <p className="text-orange-500 font-bold text-sm uppercase tracking-wider mb-2">
                  Perfect For
                </p>
                <p className="text-2xl font-bold leading-tight">
                  Urban plots with scenic views.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The "Engineer's Note" */}
      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="bg-slate-50 border border-slate-100 rounded-3xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="bg-white p-4 rounded-2xl shadow-sm">
                  <ClipboardCheck className="w-8 h-8 text-orange-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    Eris Engineering Note
                  </h2>
                  <p className="text-slate-500">
                    Technical specifications & constructability
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className="text-orange-500">01.</span> Structural
                    Glazing
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Massive window spans require reinforced concrete lintels and
                    hidden steel supports to ensure structural integrity without
                    compromising the view.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className="text-orange-500">02.</span> Waterproofing
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Double-layer bituminous membrane system with precise
                    gradient screeding for the flat roof to guarantee zero
                    leakage in heavy rains.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
                    <span className="text-orange-500">03.</span> Thermal Comfort
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
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

      {/* 5. The Gallery Grid */}
      <section className="py-24 px-4 bg-slate-950 text-white">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Visual Tour
              </h2>
              <p className="text-slate-400 max-w-xl text-lg">
                Explore the details that define the Onyx Villa. From the grand
                entrance to the private quarters.
              </p>
            </div>
            <Button
              variant="outline"
              className="border-slate-700 text-white hover:bg-slate-800"
            >
              View Full Gallery
            </Button>
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
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] bg-slate-900 rounded-xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Call-To-Action */}
      <section className="py-32 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 skew-y-3 transform origin-bottom-right translate-y-20" />

        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
              Ready to build the <br />
              <span className="text-orange-600">Onyx Villa?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              This design is complete, vetted, and ready for construction. Skip
              the 6-month design phase and start building sooner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/calculator">
                <Button
                  size="lg"
                  className="bg-orange-600 hover:bg-orange-700 text-white text-xl px-10 py-7 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
                >
                  Get Construction Quote
                  <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </Link>
              <p className="text-sm text-slate-400 mt-4 sm:mt-0">
                or{" "}
                <a href="#" className="underline hover:text-orange-600">
                  schedule a consultation
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 7. Footer Disclaimer */}
      <section className="py-12 px-4 bg-white border-t border-slate-100">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm text-slate-400 italic">
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
