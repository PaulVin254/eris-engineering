import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import FloatingHomeImages from "./FloatingHomeImages";

const StorySection = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-secondary/30 via-background/50 to-primary/10 overflow-hidden">
      {/* Diagonal Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-red-500/3 via-transparent to-blue-500/3"></div>

      <FloatingHomeImages />
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="relative">
            {/* Glassmorphism background for header */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/20"></div>
            <div className="relative p-8">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-blue-600 to-green-600 bg-clip-text text-transparent">
                The Story Every Diaspora Kenyan Knows
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                You work tirelessly abroad, send money home to build your dream,
                then discover it's gone wrong. Here's how we ensure that never
                happens to you.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Story Flow */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* The Problem */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="group"
          >
            <Card className="relative p-8 h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
              {/* Diagonal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 via-orange-500/10 to-red-500/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-red-600/10 via-transparent to-orange-400/10"></div>

              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-lg"></div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-orange-500 transform rotate-12 scale-150"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-white/30"
                >
                  <AlertTriangle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  The Painful Reality
                </h3>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    "I sent KES 2.5 million to my brother to build our family
                    home in Kitengela. For months, he sent photos of 'progress'
                    – foundation work, walls going up."
                  </p>
                  <p>
                    "When I finally visited Kenya, I discovered the foundation
                    was cracked, the materials were substandard, and KES 800,000
                    was simply... missing."
                  </p>
                  <p className="font-semibold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                    "I had no oversight, no updates, and no recourse. My dream
                    became a nightmare."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* The Solution */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="group"
          >
            <Card className="relative p-8 h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
              {/* Diagonal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-indigo-500/10 to-blue-500/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-transparent to-indigo-400/10"></div>

              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-lg"></div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-500 transform -rotate-12 scale-150"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-white/30"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  The Eris Difference
                </h3>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    <strong>Professional oversight:</strong> Licensed engineers
                    supervise every phase, not relatives or uncertified "fundis"
                    who cut corners.
                  </p>
                  <p>
                    <strong>Daily transparency:</strong> Receive WhatsApp
                    updates with photos, progress reports, and financial
                    tracking through our SiteSync system.
                  </p>
                  <p>
                    <strong>Verified materials:</strong> We source quality
                    materials directly from certified suppliers and document
                    every purchase.
                  </p>
                  <p className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    "Your money is protected by contracts, insurance, and our
                    reputation."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* The Result */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="group"
          >
            <Card className="relative p-8 h-full overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-105">
              {/* Diagonal gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-emerald-500/10 to-green-500/20"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-green-600/10 via-transparent to-emerald-400/10"></div>

              {/* Glassmorphism effect */}
              <div className="absolute inset-0 bg-white/10 dark:bg-black/10 backdrop-blur-sm"></div>
              <div className="absolute inset-0 border border-white/20 dark:border-white/10 rounded-lg"></div>

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 transform rotate-12 scale-150"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg border-2 border-white/30"
                >
                  <CheckCircle className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Peace of Mind
                </h3>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                  <p>
                    "With Eris, I watched my home being built in real-time from
                    Toronto. Every shilling was accounted for, every milestone
                    met on schedule."
                  </p>
                  <p>
                    "The SiteSync app showed me live photos, material receipts,
                    and progress updates. I felt involved despite being 13,000
                    kilometers away."
                  </p>
                  <p className="font-semibold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                    "When I finally came home, my nyumba was exactly as promised
                    – on time, on budget, and built to last."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="relative mb-12"
        >
          {/* Glassmorphism background for stats */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl border border-white/20"></div>
          <div className="relative p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-lg"></div>
                <div className="relative p-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-2">
                    61%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Diaspora fear fraud when investing
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg"></div>
                <div className="relative p-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Successful diaspora projects
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-lg"></div>
                <div className="relative p-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                    30%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Faster than typical builds
                  </div>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-lg"></div>
                <div className="relative p-4">
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    On-time completion rate
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center relative"
        >
          {/* Glassmorphism background for CTA */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl border border-white/20"></div>
          <div className="relative p-4 md:p-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 md:mb-4 bg-gradient-to-r from-primary via-blue-600 to-green-600 bg-clip-text text-transparent">
              Don't Let This Happen to You
            </h3>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              Every month we help diaspora families avoid these costly mistakes.
              Join them in building safely with complete peace of mind.
            </p>
            <div className="flex flex-col gap-3 md:gap-4 justify-center max-w-lg md:max-w-none mx-auto md:flex-row">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto"
              >
                <Button
                  size="lg"
                  className="w-full md:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 shadow-xl border border-white/20 min-h-[48px] md:min-h-[56px]"
                >
                  <span className="flex items-center justify-center">
                    Get Your Free Consultation
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 flex-shrink-0" />
                  </span>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full md:w-auto"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full md:w-auto text-base md:text-lg px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm border-white/30 hover:bg-white/20 shadow-xl min-h-[48px] md:min-h-[56px]"
                >
                  <span className="text-center leading-tight">
                    Download: "What Your Contractor Won't Tell You"
                  </span>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
