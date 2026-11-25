"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
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

export function ContactInquiryForm() {
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
      const leadClient = supabase as unknown as {
        from: (table: "contact_leads") => {
          insert: (rows: Array<{
            name: string;
            email: string;
            phone: string;
            project_type: string;
            budget_range: string;
            message: string | null;
            created_at: string;
          }>) => {
            select: () => Promise<{ error: { message: string } | null }>;
          };
        };
      };

      const { error } = await leadClient
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
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                    <SelectItem value="5m_10m">KES 5M to 10M</SelectItem>
                    <SelectItem value="10m_20m">KES 10M to 20M</SelectItem>
                    <SelectItem value="20m_plus">KES 20M and above</SelectItem>
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
  );
}
