import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ArrowRight,
  Clock,
  Calendar,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

// Form Schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  budgetRange: z.string({ required_error: "Please select a budget range." }),
  message: z.string().optional(),
});

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase
        .from("contact_leads")
        .insert([
          {
            name: values.name,
            email: values.email,
            phone: values.phone,
            project_type: values.projectType,
            budget_range: values.budgetRange,
            message: values.message || null,
            created_at: new Date().toISOString(),
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        toast({
          title: "Submission Error",
          description:
            "There was an issue submitting your form. Please try again or contact us directly.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Strategy Session Requested!",
        description:
          "We've received your details. An engineer will contact you within 2 hours.",
      });
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description:
          "There was an issue submitting your form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto space-y-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready To Build? <br />
              <span className="text-orange-500">
                Let's Get Your Strategy Sorted.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Book your free 30-minute consultation. No sales pressure. Just
              engineering advice.
            </p>
          </motion.div>
        </section>

        {/* Split Layout */}
        <section className="container mx-auto px-4 mb-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Left Side: Value Stack */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-muted/30 p-8 rounded-2xl border border-border">
                <h3 className="text-2xl font-bold mb-6">
                  What You Get In This Call:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Clear cost breakdown (no hidden fees)",
                    "Realistic timeline assessment",
                    "Site feasibility check (remote)",
                    "Permit & compliance roadmap",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="bg-green-100 p-1 rounded-full mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 pt-8 border-t border-border">
                  <p className="font-semibold text-sm text-muted-foreground mb-2">
                    VALUE: KES 5,000
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    YOURS: FREE
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-bold">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+254717297022"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Call Us Directly
                      </p>
                      <p className="font-bold text-lg">+254 717 297 022</p>
                    </div>
                  </a>

                  <a
                    href="mailto:paul@eris.co.ke"
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-muted transition-colors group"
                  >
                    <div className="bg-orange-100 p-3 rounded-full group-hover:bg-orange-200 transition-colors">
                      <Mail className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email Us</p>
                      <p className="font-bold text-lg">paul@eris.co.ke</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl">
                    <div className="bg-slate-100 p-3 rounded-full">
                      <MapPin className="w-5 h-5 text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Office Location
                      </p>
                      <p className="font-bold text-lg">
                        Westlands, Nairobi, Kenya
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Smart Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="border-2 border-orange-100 shadow-xl shadow-orange-500/5">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold">
                      Claim Your Strategy Session
                    </h3>
                    <p className="text-muted-foreground">
                      Fill out the form below. We usually reply within 2 hours.
                    </p>
                  </div>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John Doe"
                                className="h-12"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="john@example.com"
                                  className="h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="+1 (555) 000-0000"
                                  className="h-12"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="projectType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Project Type</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Select type" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="residential">
                                    Residential Home
                                  </SelectItem>
                                  <SelectItem value="commercial">
                                    Commercial Build
                                  </SelectItem>
                                  <SelectItem value="renovation">
                                    Renovation / Fit-out
                                  </SelectItem>
                                  <SelectItem value="consultation">
                                    Just Consulting
                                  </SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="budgetRange"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Budget Range (KES)</FormLabel>
                              <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger className="h-12">
                                    <SelectValue placeholder="Select range" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="under_5m">
                                    Under 5 Million
                                  </SelectItem>
                                  <SelectItem value="5m_10m">
                                    5M - 10M
                                  </SelectItem>
                                  <SelectItem value="10m_20m">
                                    10M - 20M
                                  </SelectItem>
                                  <SelectItem value="20m_plus">20M+</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              Tell us about your project (Optional)
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="I have a plot in Ruiru and want to build a 4-bedroom maisonette..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button
                        type="submit"
                        className="w-full h-14 text-lg bg-orange-500 hover:bg-orange-600"
                        disabled={isSubmitting}
                      >
                        {isSubmitting
                          ? "Submitting..."
                          : "Claim My Free Strategy Session"}
                        {!isSubmitting && (
                          <ArrowRight className="ml-2 w-5 h-5" />
                        )}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        Your information is 100% secure. We hate spam too.
                      </p>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* WhatsApp Fast Lane */}
        <section className="bg-green-50 border-y border-green-100 py-12 mb-24">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold mb-2">
              In a hurry? Skip the form.
            </h2>
            <p className="text-muted-foreground mb-6">
              Chat with a Senior Engineer right now on WhatsApp.
            </p>
            <Button
              variant="outline"
              className="border-green-600 text-green-700 hover:bg-green-100 h-12 px-8"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Common Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {[
              {
                q: "Do you charge for the first meeting?",
                a: "No. The initial 30-minute strategy session is completely free. We use this time to see if we're a good fit for your project.",
              },
              {
                q: "Can we meet via Zoom?",
                a: "Absolutely. 90% of our clients are in the Diaspora. We are experts at running remote meetings via Zoom, Google Meet, or Teams.",
              },
              {
                q: "I don't have land yet, can I still call?",
                a: "Yes! In fact, it's better if you call us before you buy. We can help you assess the feasibility of a plot before you commit your money.",
              },
              {
                q: "What happens after I submit the form?",
                a: "You'll receive an email confirmation immediately. Then, one of our lead engineers will personally reach out via WhatsApp or Email within 2 hours to schedule your call.",
              },
            ].map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-semibold text-lg">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
