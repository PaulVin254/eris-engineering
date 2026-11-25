import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Phone,
  EnvelopeSimple,
  MapPin,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react";
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
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  projectType: z.string({ required_error: "Please select a project type." }),
  budgetRange: z.string({ required_error: "Please select a budget range." }),
  message: z.string().optional(),
});

const WHATSAPP_URL =
  "https://wa.me/254717297022?text=Hello%20Eris%20Engineering%2C%20I%20would%20like%20to%20schedule%20a%20private%20engineering%20consultation.";

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
      const { error } = await supabase
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
            "Unable to submit your inquiry. Please retry or contact our studio directly by WhatsApp or email.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Inquiry Received",
        description:
          "A founding engineer will respond within one business day to arrange your consultation.",
      });
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Error",
        description:
          "Unable to submit your inquiry. Please retry or contact our studio directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#121413] selection:bg-[#1B3B2B] selection:text-[#FAFAFA] overflow-x-hidden">
      <Header />

      <main className="pt-28 md:pt-36 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Editorial Heading */}
          <div className="max-w-3xl mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal tracking-[-0.03em] leading-[1.06] text-[#121413]">
              Private inquiry.
            </h1>
            <p className="mt-5 text-base sm:text-lg text-[#525855] font-light leading-relaxed max-w-2xl">
              Arrange a confidential technical review with our principal
              engineers regarding site feasibility, architectural drawings, or
              fixed-sum construction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Studio Desk Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-[#F1F2F0] rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-medium tracking-tight text-[#121413]">
                  Consultation scope
                </h2>
                <ul className="space-y-4 text-sm text-[#525855]">
                  {[
                    "Preliminary site and geotechnical feasibility review",
                    "Indicative construction schedule and milestone structure",
                    "Constructability review of existing architectural drawings",
                    "County approvals and statutory compliance guidance",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        weight="regular"
                        className="text-[#1B3B2B] shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white border border-[#E2E5E2] rounded-xl p-8 space-y-6">
                <h2 className="text-xl font-medium tracking-tight text-[#121413]">
                  Direct studio desk
                </h2>

                <div className="space-y-4 text-sm">
                  <a
                    href="tel:+254717297022"
                    className="flex items-start gap-3 text-[#121413] hover:text-[#1B3B2B] transition-colors"
                  >
                    <Phone
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">+254 717 297 022</div>
                      <div className="text-xs text-[#525855]">
                        Direct line and international WhatsApp
                      </div>
                    </div>
                  </a>

                  <a
                    href="mailto:paul@eris.co.ke"
                    className="flex items-start gap-3 text-[#121413] hover:text-[#1B3B2B] transition-colors"
                  >
                    <EnvelopeSimple
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">paul@eris.co.ke</div>
                      <div className="text-xs text-[#525855]">
                        Eng. Paul Wakoli, Principal Engineer
                      </div>
                    </div>
                  </a>

                  <div className="flex items-start gap-3 text-[#121413]">
                    <MapPin
                      size={18}
                      weight="light"
                      className="text-[#1B3B2B] shrink-0 mt-0.5"
                    />
                    <div>
                      <div className="font-medium">Westlands, Nairobi</div>
                      <div className="text-xs text-[#525855]">
                        Active site operations across Central and Western Kenya
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#E2E5E2] hover:border-[#121413] px-5 py-3 text-sm font-medium text-[#121413] transition-colors"
                  >
                    <span>Direct WhatsApp</span>
                    <ArrowUpRight size={15} weight="light" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E2E5E2] rounded-xl p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-normal tracking-tight text-[#121413]">
                    Project brief
                  </h2>
                  <p className="mt-2 text-sm text-[#525855]">
                    Share your project location, timeline, and scope. Video
                    consultations are scheduled across UK, US, European, and
                    Gulf time zones.
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
                          <FormLabel className="text-sm font-medium text-[#121413]">
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full name"
                              className="h-12 rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] placeholder:text-[#525855]/70 focus-visible:ring-[#1B3B2B]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#121413]">
                              Email Address
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="name@domain.com"
                                className="h-12 rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] placeholder:text-[#525855]/70 focus-visible:ring-[#1B3B2B]"
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
                            <FormLabel className="text-sm font-medium text-[#121413]">
                              Phone or WhatsApp Number
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="+44 / +1 / +254"
                                className="h-12 rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] placeholder:text-[#525855]/70 focus-visible:ring-[#1B3B2B]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-sm font-medium text-[#121413]">
                              Commission Type
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] focus:ring-[#1B3B2B]">
                                  <SelectValue placeholder="Select scope" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="residential">
                                  Custom Private Residence
                                </SelectItem>
                                <SelectItem value="commercial">
                                  Commercial Structure
                                </SelectItem>
                                <SelectItem value="renovation">
                                  Structural Renovation
                                </SelectItem>
                                <SelectItem value="consultation">
                                  Feasibility and Engineering Advisory
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
                            <FormLabel className="text-sm font-medium text-[#121413]">
                              Estimated Budget (KES)
                            </FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger className="h-12 rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] focus:ring-[#1B3B2B]">
                                  <SelectValue placeholder="Select range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="under_5m">
                                  Under KES 5 Million
                                </SelectItem>
                                <SelectItem value="5m_10m">
                                  KES 5M to 10M
                                </SelectItem>
                                <SelectItem value="10m_20m">
                                  KES 10M to 20M
                                </SelectItem>
                                <SelectItem value="20m_plus">
                                  KES 20M and above
                                </SelectItem>
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
                          <FormLabel className="text-sm font-medium text-[#121413]">
                            Site Location and Notes
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="County, plot size, architectural status, or target timeline"
                              className="min-h-[120px] rounded-lg border-[#E2E5E2] bg-[#FAFAFA] text-[#121413] placeholder:text-[#525855]/70 focus-visible:ring-[#1B3B2B]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto h-12 px-8 rounded-lg bg-[#1B3B2B] hover:bg-[#142C20] text-[#FAFAFA] text-sm font-medium"
                    >
                      {isSubmitting ? "Sending..." : "Send Inquiry"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
