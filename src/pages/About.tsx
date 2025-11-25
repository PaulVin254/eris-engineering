import { motion } from "framer-motion";
import {
  ShieldAlert,
  Search,
  Clock,
  Ruler,
  Users,
  ArrowRight,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const About = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section: The Elephant in the Room */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Badge variant="destructive" className="mb-4 px-4 py-1 text-sm">
                The Hard Truth
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-tight">
                The "Kenyan Construction" Story You're Afraid Of... <br />
                <span className="text-red-600">Is True.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Stolen materials. Ghosted calls. Budgets that double overnight.
                We didn't just build a construction company. We built an
                antidote to the chaos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg h-14 px-8"
                >
                  See How We Fix It <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-red-50 border-red-100">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <XCircle className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-bold text-red-900">The Old Way</h3>
                    <ul className="space-y-2 text-sm text-red-800">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        "Fundi" disappears with deposit
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Materials "vanish" from site
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Timeline: "God willing"
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-green-50 border-green-100 mt-12">
                  <CardContent className="p-6 space-y-4">
                    <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-bold text-green-900">The Eris Way</h3>
                    <ul className="space-y-2 text-sm text-green-800">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Milestone-based payments
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Daily video logs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                        Timeline: Contractually binding
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Origin Story */}
        <section className="bg-muted/30 py-24 border-y border-border/50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Badge
                variant="outline"
                className="border-blue-500 text-blue-600 bg-blue-50"
              >
                The Origin Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Why We Declared War on "Trust"
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed text-left">
                <p>
                  "I saw it happen to my own family. My uncle in London sent
                  millions home for a retirement villa. For two years, he got
                  photos of 'progress'. When he finally flew back, he found a
                  half-built shell in a swamp. The money was gone. The 'foreman'
                  was his cousin."
                </p>
                <p>It made me sick. Not just the theft, but the betrayal.</p>
                <p className="font-medium text-foreground">
                  So I built Eris Engineering with a simple, radical philosophy:{" "}
                  <br />
                  <span className="text-orange-500 font-bold">
                    Remove "Trust" from the equation. Replace it with "Proof".
                  </span>
                </p>
                <p>
                  We don't ask you to trust us. We force ourselves to prove it.
                  Every single day.
                </p>
              </div>
              <div className="pt-8">
                <div className="flex items-center justify-center gap-4">
                  <Avatar className="h-16 w-16 border-2 border-orange-500">
                    <AvatarImage src="/paul-wakoli.jpg" />
                    <AvatarFallback>PW</AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <p className="font-bold text-lg">Paul Wakoli</p>
                    <p className="text-sm text-muted-foreground">
                      Founder & Civil Engineer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Anti-Fundi Manifesto */}
        <section className="container mx-auto px-4 py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The "Anti-Fundi" Manifesto
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We are not "builders". We are a paramilitary engineering unit.
              Here are the 3 laws we live by.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Search className="w-8 h-8 text-blue-600" />,
                title: "Radical Transparency",
                desc: "We show you the receipts. Literally. You see exactly what materials cost. No markups hidden in 'miscellaneous' fees.",
              },
              {
                icon: <Clock className="w-8 h-8 text-orange-600" />,
                title: "Zero 'African Time'",
                desc: "If we say Tuesday at 9:00 AM, we mean Tuesday at 9:00 AM. We treat deadlines as blood oaths, not suggestions.",
              },
              {
                icon: <Ruler className="w-8 h-8 text-green-600" />,
                title: "Engineering First",
                desc: "We don't build on 'vibes'. We build on code. Every decision is backed by structural calculations and qualified engineers.",
              },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-2 hover:border-orange-500/50 transition-colors duration-300"
              >
                <CardContent className="p-8 space-y-4">
                  <div className="bg-muted w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The Team */}
        <section className="bg-slate-900 text-white py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="bg-orange-500 hover:bg-orange-600 text-white border-none mb-4">
                Competence Over Charisma
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Led By Engineers, Not Salesmen
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  name: "Paul Wakoli",
                  role: "Civil Engineer",
                  bg: "bg-blue-500",
                  photo: "/paul-wakoli.jpg",
                },
                {
                  name: "Brian Kibet",
                  role: "Civil Engineer",
                  bg: "bg-purple-500",
                  photo: "/brian-kibet.jpg",
                },
                {
                  name: "Annelise Nyanga",
                  role: "Civil Engineer",
                  bg: "bg-green-500",
                  photo: null,
                },
                {
                  name: "Peter Macharia",
                  role: "CFO",
                  bg: "bg-orange-500",
                  photo: null,
                },
              ].map((member, i) => (
                <div key={i} className="group relative">
                  <div className="aspect-[3/4] bg-slate-800 rounded-xl overflow-hidden relative mb-4">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        <div
                          className={`absolute inset-0 ${member.bg} opacity-20 group-hover:opacity-30 transition-opacity`}
                        ></div>
                        <div className="absolute inset-0 flex items-center justify-center text-slate-600">
                          <Users className="w-16 h-16 opacity-50" />
                        </div>
                      </>
                    )}
                  </div>
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-slate-400">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skin in the Game */}
        <section className="container mx-auto px-4 py-24">
          <div className="bg-orange-50 border border-orange-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="bg-orange-100 p-4 rounded-full shrink-0">
              <ShieldAlert className="w-12 h-12 text-orange-600" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">
                The "Skin In The Game" Guarantee
              </h3>
              <p className="text-muted-foreground text-lg">
                We don't just promise updates. We penalize ourselves.
                <span className="font-bold text-foreground">
                  {" "}
                  If you don't get your Friday Video Update by 5 PM, we credit
                  your account KES 5,000.
                </span>
                No questions asked.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mb-12">
          <div className="bg-foreground text-background rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold">
                Enough Stories. Let's Talk Facts.
              </h2>
              <p className="text-lg md:text-xl text-gray-300">
                You have a vision. We have the engineering discipline to build
                it. Let's see if we're a match.
              </p>
              <Button
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 h-auto rounded-xl shadow-lg shadow-orange-500/20"
              >
                Book Your Free Strategy Session
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
