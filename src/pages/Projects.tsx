import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Play,
  Calendar,
  DollarSign,
  MapPin,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const projects = [
  {
    id: 1,
    title: "The Karen Villa Retrofit",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600596542815-27bfefd0c3c6?auto=format&fit=crop&w=800&q=80",
    location: "Karen, Nairobi",
    challenge:
      "Client in Texas needed a complete modernization of a 1980s villa while retaining the original structural character.",
    result:
      "Delivered in 6 months, 15% under the projected budget due to smart material sourcing.",
    status: "Completed",
    stats: { time: "6 Months", budget: "Under Budget" },
  },
  {
    id: 2,
    title: "Ruiru Maisonette Build",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80",
    location: "Ruiru, Kiambu",
    challenge:
      "UK-based client had been burned by a previous contractor who disappeared with funds. Trust was at zero.",
    result:
      "Restored faith with weekly video updates. Completed the shell and core in record time.",
    status: "In Progress",
    stats: { time: "On Track", budget: "On Budget" },
  },
  {
    id: 3,
    title: "Westlands Office Interiors",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
    location: "Westlands, Nairobi",
    challenge:
      "Dubai investor needed a high-end office fit-out for a tech tenant within a strict 3-month window.",
    result:
      "Handed over keys in 11 weeks. Tenant moved in immediately with zero snag list items.",
    status: "Completed",
    stats: { time: "11 Weeks", budget: "On Budget" },
  },
  {
    id: 4,
    title: "Naivasha Holiday Home",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    location: "Naivasha, Nakuru",
    challenge:
      "Client in Australia wanted a vacation home built on difficult, sloping terrain.",
    result:
      "Engineered a custom foundation solution. Project is currently ahead of schedule.",
    status: "In Progress",
    stats: { time: "Ahead", budget: "On Budget" },
  },
  {
    id: 5,
    title: "Kilimani Apartment Renovation",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    location: "Kilimani, Nairobi",
    challenge:
      "US-based landlord needed to upgrade a tired unit to attract premium expat tenants.",
    result:
      "Full renovation completed in 4 weeks. Rented out at 30% above market rate within days.",
    status: "Completed",
    stats: { time: "4 Weeks", budget: "On Budget" },
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category.toLowerCase() === activeTab);

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
                className="mb-4 px-4 py-1 text-sm border-orange-500 text-orange-600 bg-orange-50"
              >
                Proof of Competence
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-4">
                We Don't Just Build Houses. <br className="hidden md:block" />
                We Build <span className="text-orange-500">Legacies</span>{" "}
                Without The Headaches.
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See the real results we’ve delivered for clients in the UK, US,
                and Dubai who couldn't be on-site. No stories. Just finished
                buildings.
              </p>
              <div className="flex items-center justify-center gap-2 mt-6 text-sm font-medium text-green-600 bg-green-50 w-fit mx-auto px-4 py-2 rounded-full">
                <CheckCircle2 className="w-4 h-4" />
                Over 50+ Projects Delivered On Time & On Budget
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 mb-24">
          <Tabs
            defaultValue="all"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <div className="flex justify-center mb-10">
              <TabsList className="grid w-full max-w-md grid-cols-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="residential">Homes</TabsTrigger>
                <TabsTrigger value="commercial">Biz</TabsTrigger>
                <TabsTrigger value="interiors">Inside</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value={activeTab} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full flex flex-col overflow-hidden border-border/50 hover:border-orange-500/50 transition-colors duration-300 group">
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge
                            variant={
                              project.status === "Completed"
                                ? "default"
                                : "secondary"
                            }
                            className={
                              project.status === "Completed"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-blue-600 hover:bg-blue-700 text-white"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="text-xs font-semibold text-orange-500 uppercase tracking-wider mb-1">
                              {project.category}
                            </p>
                            <h3 className="text-xl font-bold">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {project.location}
                        </div>
                      </CardHeader>
                      <CardContent className="flex-grow space-y-4">
                        <div className="bg-muted/50 p-3 rounded-lg text-sm">
                          <span className="font-semibold block mb-1 text-foreground">
                            The Challenge:
                          </span>
                          {project.challenge}
                        </div>
                        <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-sm border border-green-100 dark:border-green-900/50">
                          <span className="font-semibold block mb-1 text-green-700 dark:text-green-400">
                            The Result:
                          </span>
                          {project.result}
                        </div>
                        <div className="grid grid-cols-2 gap-2 pt-2">
                          <div className="flex items-center text-xs font-medium text-muted-foreground">
                            <Calendar className="w-3 h-3 mr-1.5" />
                            {project.stats.time}
                          </div>
                          <div className="flex items-center text-xs font-medium text-muted-foreground">
                            <DollarSign className="w-3 h-3 mr-1.5" />
                            {project.stats.budget}
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button
                          className="w-full group-hover:bg-orange-500 group-hover:text-white transition-colors"
                          variant="outline"
                        >
                          View Case Study{" "}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* SiteSync Advantage */}
        <section className="bg-muted/30 py-20 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-100 border-blue-200">
                  The Mechanism
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  How We Get These Results: <br />
                  <span className="text-blue-600">The SiteSync™ Advantage</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Most contractors ghost you when things go wrong. We
                  over-communicate. Our proprietary SiteSync technology ensures
                  you know exactly what's happening on your site, thousands of
                  miles away.
                </p>
                <ul className="space-y-4">
                  {[
                    "Weekly Video Walkthroughs (Every Friday)",
                    "Real-Time Budget Tracking Dashboard",
                    "Direct WhatsApp Access to Your Project Manager",
                    "Zero 'Surprise' Costs Policy",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="bg-green-100 p-1 rounded-full">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-20 blur-xl"></div>
                <div className="relative bg-background border border-border rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-muted p-4 border-b flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div className="ml-4 text-xs text-muted-foreground font-mono">
                      SiteSync_Dashboard_v2.0
                    </div>
                  </div>
                  <div className="p-8 flex flex-col items-center justify-center min-h-[300px] bg-slate-50 dark:bg-slate-900/50">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4 animate-pulse">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                    <p className="font-semibold text-lg">
                      Weekly Site Update #12
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Uploaded: Friday, 2:00 PM EAT
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">
              Don't Take Our Word For It
            </h2>
            <p className="text-muted-foreground text-lg">
              Hear from the Diaspora clients who were once skeptical just like
              you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "I was terrified of sending money home. Eris Engineering changed everything. The weekly videos gave me total peace of mind.",
                author: "Sarah K.",
                location: "London, UK",
              },
              {
                quote:
                  "They finished my parents' retirement home 2 weeks early. The budget was exactly what they quoted. No hidden fees.",
                author: "David M.",
                location: "Dallas, Texas",
              },
              {
                quote:
                  "Professionalism that is rare in Kenya. I felt like I was dealing with a US company. Highly recommended.",
                author: "Grace W.",
                location: "Dubai, UAE",
              },
            ].map((testimonial, i) => (
              <Card key={i} className="bg-muted/20 border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-yellow-500 fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.26.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.55-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="italic text-muted-foreground mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Stop Guessing. Start Building.
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                Get a Free Cost Estimate + A Virtual Site Tour of Our Current
                Projects. See the quality for yourself before you commit a
                single shilling.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-orange-500/20"
              >
                Calculate My Project Cost Now
              </Button>
              <p className="text-xs text-gray-500 mt-4">
                No obligation. 100% Free.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Projects;
