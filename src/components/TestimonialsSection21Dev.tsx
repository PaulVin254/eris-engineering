import React from "react";
import { motion } from "framer-motion";
import { TestimonialSection21Dev } from "@/components/ui/testimonial";

const TestimonialsSection21Dev = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-orange-500">Diaspora Clients</span>{" "}
            Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real stories from Kenyans living abroad who trusted us to build
            their dream homes back home.
          </p>
        </motion.div>

        {/* Testimonials Component */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <TestimonialSection21Dev />
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-orange-50 dark:bg-orange-900/20 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Start your journey with a free consultation and see why diaspora
              Kenyans trust us with their dreams.
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
              Get Your Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection21Dev;
