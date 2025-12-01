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

const QuartzLinear = () => {
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
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-800">
          <img
            src="/quartz-exterior.jpg"
            alt="The Quartz Linear Hero"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge className="mb-6 bg-white text-slate-900 text-base px-6 py-1.5 border-none hover:bg-slate-100">
              Estimated Cost: KES 18M - 24M
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              The Quartz Linear <span className="text-slate-400">|</span>{" "}
              Signature Series
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
              Designed for the privacy-conscious homeowner who refuses to
              compromise on natural light.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. Design Partner Transparency Banner */}
      <section className="bg-slate-100 border-b border-slate-200 py-6 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
          <div className="bg-white p-3 rounded-full shadow-sm shrink-0">
            <PenTool className="w-6 h-6 text-slate-700" />
          </div>
          <p className="text-slate-700 text-sm md:text-base max-w-3xl">
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
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                The Urban Sanctuary
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                The Quartz Linear turns the home inward to a private walled
                courtyard, creating a serene sanctuary perfect for narrow
                high-value plots in areas like Kilimani or Runda.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                By prioritizing internal views and light wells, this design
                achieves complete privacy without sacrificing the feeling of
                openness and connection to nature.
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
                src="/quartz-kitchen-patio.jpg"
                alt="Quartz Linear Interior Courtyard"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. The "Engineer's Note" */}
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
                  <h3 className="font-bold text-slate-900 text-lg">
                    Linear Brick Cladding
                  </h3>
                  <p className="text-slate-600">
                    Heavy masonry veneer anchored with stainless steel wall ties
                    every 450mm for stability and long-term durability without
                    cracking.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Flush Thresholds
                  </h3>
                  <p className="text-slate-600">
                    Engineered hidden slot-drainage system at door tracks allows
                    for a zero-step luxury finish between indoor and outdoor
                    spaces while preventing water ingress.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">
                    Cantilevered Canopy
                  </h3>
                  <p className="text-slate-600">
                    Reinforced concrete cantilever (Class 30) designed to float
                    without columns, providing shade and architectural drama.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. The Gallery Grid */}
      <section className="py-20 px-4 bg-slate-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Visual Tour</h2>
            <p className="text-slate-400">
              Explore the details that define The Quartz Linear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Precision Masonry",
                desc: "Linear brickwork adds texture and thermal mass.",
                img: "/quartz-exterior.jpg",
              },
              {
                title: "Seamless Living",
                desc: "High-performance sliding doors create a unified entertaining space.",
                img: "/quartz-kitchen-patio.jpg",
              },
              {
                title: "Spa-Grade Plumbing",
                desc: "High-pressure systems supporting freestanding tub layouts.",
                img: "/quartz-master-bath.jpg",
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
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Ready to Build?
            </h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
              The structural drawings for The Quartz Linear are complete—we can
              mobilize on your site within 21 days.
            </p>
            <Link to="/calculator">
              <Button
                size="lg"
                className="bg-slate-900 hover:bg-slate-800 text-white text-lg px-8 py-6 h-auto rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
              >
                Get Quote for This Design
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <p className="mt-6 text-sm text-slate-500 italic">
              Cost estimate varies based on soil conditions (e.g., black cotton
              soil) and final finish selections.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuartzLinear;
