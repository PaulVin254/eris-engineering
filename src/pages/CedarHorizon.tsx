import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardCheck,
  CheckCircle2,
  PenTool,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CedarHorizon = () => {
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
            src="/cedar-hero.jpg"
            alt="The Cedar Horizon Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/30 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white text-stone-900 text-base px-6 py-1.5 border-none hover:bg-stone-100">
              Estimated Cost: KES 22M - 28M
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Cedar Horizon <span className="text-stone-400">|</span>{" "}
              Signature Series
            </h1>
            <p className="text-xl md:text-2xl text-stone-200 max-w-3xl mx-auto font-light leading-relaxed">
              Dissolve the walls between you and nature with a design engineered
              for total transparency.
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

      {/* 3. The "Hook" & Details */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] bg-stone-100 rounded-xl overflow-hidden shadow-xl order-2 lg:order-1"
            >
              <img
                src="/cedar-living.jpg"
                alt="Cedar Horizon Living Area"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
                Resort-Style Living
              </h2>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                The Cedar Horizon features continuous timber ceilings that flow
                from inside to out, creating a resort-style living experience
                optimized for large, green plots.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                By extending the roofline and using floor-to-ceiling glass, the
                boundary between the interior comfort and the exterior landscape
                completely disappears.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The "Engineer's Note" */}
      <section className="py-20 px-4 bg-stone-50">
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
              <h2 className="text-2xl md:text-3xl font-bold text-stone-900">
                Eris Engineering Constructability Note
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">
                    Structural Steel Frame
                  </h3>
                  <p className="text-stone-600">
                    Hidden steel skeleton integrated into window frames to
                    support the roof load and prevent glass buckling under the
                    weight of the expansive roof.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">
                    Rainscreen Cladding
                  </h3>
                  <p className="text-stone-600">
                    Timber installed on a ventilated rainscreen grid with
                    breathable membrane to prevent warping in Kenyan weather
                    while allowing the building to breathe.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-stone-900 text-lg">
                    Zero-Gradient Ceilings
                  </h3>
                  <p className="text-stone-600">
                    Precision truss leveling and high-grade insulation to
                    prevent heat transfer, ensuring the flat ceiling aesthetic
                    doesn't compromise thermal performance.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Gallery Grid */}
      <section className="py-20 px-4 bg-stone-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Tour</h2>
            <p className="text-stone-400">
              Explore the details that define The Cedar Horizon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Natural Armor",
                desc: "Vertical timber cladding on a ventilated façade system.",
                img: "/cedar-hero.jpg",
              },
              {
                title: "The Social Hub",
                desc: "Open-plan volume anchored by a marble waterfall island with under-floor plumbing.",
                img: "/cedar-kitchen.jpg",
              },
              {
                title: "Wet-Room Engineering",
                desc: "Curbless shower design supported by sunken slab waterproofing.",
                img: "/cedar-bath.jpg",
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
                <div className="aspect-[4/3] bg-stone-800 rounded-lg overflow-hidden mb-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-stone-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Call-To-Action */}
      <section className="py-24 px-4 bg-white">
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
              We hold the complete architectural and structural dataset for this
              home—skip the design wait and break ground immediately.
            </p>
            <Link to="/calculator">
              <Button
                size="lg"
                className="bg-stone-900 hover:bg-stone-800 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Quote for This Design
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-stone-500 italic">
              Cost estimate varies based on timber species selection (Cypress
              vs. Cedar) and glazing specs.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CedarHorizon;
