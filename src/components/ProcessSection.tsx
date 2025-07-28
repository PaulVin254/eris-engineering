import { Card } from "@/components/ui/card";
import { CheckCircle, MessageSquare, Eye, Home } from "lucide-react";
import { motion } from "framer-motion";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Free Consultation",
      subtitle: "Hujambo! Let's understand your vision",
      image:
        "https://images.unsplash.com/photo-1573497161161-c3e73707e25c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "30-minute video consultation",
        "Site assessment via photos/video",
        "Initial budget discussion",
        "Timeline planning",
      ],
    },
    {
      number: "02",
      title: "Transparent Planning",
      subtitle: "Every shilling accounted for",
      image:
        "https://images.unsplash.com/photo-1586227740560-8cf2732c1531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Detailed architectural plans",
        "Fixed-price contract",
        "Material specifications",
        "Clear timeline milestones",
      ],
    },
    {
      number: "03",
      title: "Daily Updates",
      subtitle: "Watch your home grow from anywhere",
      image:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Daily photo updates",
        "Progress milestone reports",
        "Real-time budget tracking",
        "Direct WhatsApp communication",
      ],
    },
    {
      number: "04",
      title: "Your Dream Home",
      subtitle: "Delivered on time, on budget",
      image:
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      details: [
        "Professional quality inspection",
        "Complete handover documentation",
        "2-year warranty coverage",
        "Ongoing support available",
      ],
    },
  ];

  return (
    <section id="process" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            How We Build Your Trust
            <span className="text-primary"> (And Your Home)</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our transparent process eliminates the fear and uncertainty. Here's
            exactly how we turn your dream into reality – safely.
          </p>
        </motion.div>

        {/* Process Steps - Zig-Zag Layout */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    !isEven ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative ${!isEven ? "lg:col-start-2" : ""}`}
                  >
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-96 md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                      {/* Step Number Overlay */}
                      <div className="absolute top-6 left-6 bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-lg">
                        STEP {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`space-y-6 ${
                      !isEven ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xl text-orange-500 font-semibold mb-6">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Details List */}
                    <div className="space-y-4">
                      {step.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + detailIndex * 0.1,
                          }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                          <span className="text-lg text-muted-foreground">
                            {detail}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Process Benefits - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Our Process Works
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The difference between us and everyone else who has let you down
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-800/10 border border-blue-200/50 dark:border-blue-700/30"
            >
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                Complete Transparency
              </h4>
              <p className="text-muted-foreground">
                Unlike relatives or local fundis, we show you everything. Every
                purchase, every progress update, every decision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 dark:from-green-900/20 dark:to-green-800/10 border border-green-200/50 dark:border-green-700/30"
            >
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                Professional Standards
              </h4>
              <p className="text-muted-foreground">
                Licensed engineers, not amateur builders. Quality materials, not
                shortcuts. Your investment is protected.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100/50 dark:from-orange-900/20 dark:to-orange-800/10 border border-orange-200/50 dark:border-orange-700/30"
            >
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3">
                Always Connected
              </h4>
              <p className="text-muted-foreground">
                Daily WhatsApp updates keep you involved. Ask questions anytime
                – we understand the diaspora experience.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
