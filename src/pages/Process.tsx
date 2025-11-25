import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Shield,
  Video,
  Key,
  HardHat,
  CheckCircle2,
  ArrowRight,
  Smartphone,
  FileText,
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const steps = [
  {
    id: 1,
    title: "The Deep-Dive Discovery",
    description:
      "We don't just quote; we interrogate your vision. We identify every potential bottleneck before a single shilling is spent to prevent budget creep.",
    icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
    color: "bg-blue-100 border-blue-200",
  },
  {
    id: 2,
    title: "The 'Ironclad' Contract",
    description:
      "Fixed price. Fixed timeline. Penalties if WE delay. We sign a legally binding agreement that protects YOU, not us.",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    color: "bg-purple-100 border-purple-200",
  },
  {
    id: 3,
    title: "Pre-Construction Visualization",
    description:
      "See your home before we build it. We produce 3D renders and set up your SiteSync™ dashboard so you're ready for day one.",
    icon: <HardHat className="w-8 h-8 text-orange-600" />,
    color: "bg-orange-100 border-orange-200",
  },
  {
    id: 4,
    title: "The Build & The 'Friday Update'",
    description:
      "Every Friday by 5 PM EAT, you get a video walkthrough. If you don't get it, we pay you KES 5,000. No excuses.",
    icon: <Video className="w-8 h-8 text-red-600" />,
    color: "bg-red-100 border-red-200",
  },
  {
    id: 5,
    title: "The 'White Glove' Handover",
    description:
      "Keys, warranties, as-built drawings, and a professional cleaning crew. We don't leave until you are ready to move in.",
    icon: <Key className="w-8 h-8 text-green-600" />,
    color: "bg-green-100 border-green-200",
  },
];

const faqs = [
  {
    question: "What if material prices go up during construction?",
    answer:
      "We lock in prices at the contract stage. That's our risk, not yours. If cement prices double tomorrow, your quote stays exactly the same.",
  },
  {
    question: "What if I'm not happy with the finish?",
    answer:
      "We have a 'Snag List' guarantee. We do a final walkthrough with you (or your representative), and we don't leave the site until every single item is rectified to your satisfaction.",
  },
  {
    question: "Can I make changes once construction starts?",
    answer:
      "Yes, but we follow a strict 'Change Order' protocol. We will quote you for the change, and work only proceeds once you approve the new cost and timeline impact in writing.",
  },
  {
    question: "How do I send payments safely?",
    answer:
      "We use milestone-based payments. You only pay for the next stage of work once the previous stage is completed and verified. No large upfront deposits without work to show for it.",
  },
];

const Process = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge
                variant="outline"
                className="mb-4 px-4 py-1 text-sm border-blue-500 text-blue-600 bg-blue-50"
              >
                The Eris Protocol™
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                The "Sleep At Night" System: <br className="hidden md:block" />
                How We Build Your Home Without You{" "}
                <span className="text-blue-600">
                  Ever Stepping Foot on Site.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No guesswork. No "fundi" stories. Just a boringly predictable
                5-step protocol designed to eliminate risk.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The 5-Step Protocol */}
        <section className="container mx-auto px-4 mb-24">
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 z-0"></div>

            <div className="space-y-12 md:space-y-24 relative z-10">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content Side */}
                  <div className="flex-1 text-center md:text-left">
                    <div
                      className={`inline-flex items-center justify-center p-3 rounded-xl mb-4 ${step.color} md:hidden`}
                    >
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">
                      <span className="text-muted-foreground mr-2">
                        0{step.id}.
                      </span>
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Center Icon (Desktop) */}
                  <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-background border-4 border-muted shadow-lg shrink-0 z-10">
                    <div className="scale-75 transform">{step.icon}</div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SiteSync Tech Demo */}
        <section className="bg-slate-900 text-white py-24 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <Badge className="bg-green-500 hover:bg-green-600 text-white border-none">
                  Proprietary Technology
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Your Eyes On The Ground. <br />
                  <span className="text-green-400">24/7. From Anywhere.</span>
                </h2>
                <p className="text-xl text-slate-300">
                  We don't just send photos. We give you a digital window into
                  your investment. SiteSync™ is our proprietary reporting engine
                  that keeps us honest and you informed.
                </p>

                <div className="grid gap-6">
                  {[
                    {
                      icon: <Smartphone className="w-6 h-6" />,
                      title: "Direct WhatsApp Integration",
                      desc: "Daily updates sent straight to your phone.",
                    },
                    {
                      icon: <Video className="w-6 h-6" />,
                      title: "Weekly Drone Footage",
                      desc: "See the progress from every angle.",
                    },
                    {
                      icon: <Shield className="w-6 h-6" />,
                      title: "Financial Transparency",
                      desc: "Real-time budget tracking dashboard.",
                    },
                  ].map((feature, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="p-3 rounded-lg bg-slate-800 text-green-400">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg">{feature.title}</h4>
                        <p className="text-slate-400">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock UI */}
              <div className="relative mx-auto w-full max-w-md">
                <div className="absolute -inset-4 bg-green-500/20 blur-2xl rounded-full"></div>
                <div className="relative bg-slate-950 border border-slate-800 rounded-[2.5rem] p-4 shadow-2xl">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-slate-950 rounded-b-xl z-20"></div>
                  <div className="bg-slate-900 rounded-[2rem] overflow-hidden h-[600px] relative">
                    {/* Mock App Header */}
                    <div className="bg-slate-800 p-6 pt-12 pb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-slate-400">
                            Project Dashboard
                          </p>
                          <p className="font-bold text-white">
                            Karen Villa Retrofit
                          </p>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-xs font-bold">
                          JS
                        </div>
                      </div>
                    </div>

                    {/* Mock App Content */}
                    <div className="p-6 space-y-4">
                      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-xs font-medium text-green-400">
                            Live Status
                          </span>
                          <span className="text-xs text-slate-400">
                            Updated 2m ago
                          </span>
                        </div>
                        <div className="h-32 bg-slate-700 rounded-lg mb-3 flex items-center justify-center relative overflow-hidden group">
                          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                              <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-white border-b-[6px] border-b-transparent ml-1"></div>
                            </div>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80"
                            alt="Site"
                            className="w-full h-full object-cover opacity-60"
                          />
                        </div>
                        <p className="text-sm font-medium">
                          Week 12: Roof Truss Installation
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-xs text-slate-400 mb-1">
                            Budget Used
                          </p>
                          <p className="text-lg font-bold text-white">42%</p>
                          <div className="w-full h-1 bg-slate-700 rounded-full mt-2">
                            <div className="w-[42%] h-full bg-green-500 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                          <p className="text-xs text-slate-400 mb-1">
                            Timeline
                          </p>
                          <p className="text-lg font-bold text-white">
                            On Track
                          </p>
                          <div className="w-full h-1 bg-slate-700 rounded-full mt-2">
                            <div className="w-[65%] h-full bg-blue-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / Objection Handling */}
        <section className="container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                We know you have doubts. Let's kill them right now.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-blue-600 text-white rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                See The Process In Action.
              </h2>
              <p className="text-lg md:text-xl text-blue-100">
                Don't just take our word for it. Book a 15-minute walkthrough
                call and we'll show you a live dashboard of a current project.
              </p>
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-6 h-auto rounded-xl shadow-xl"
              >
                Book A Process Walkthrough Call
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;
