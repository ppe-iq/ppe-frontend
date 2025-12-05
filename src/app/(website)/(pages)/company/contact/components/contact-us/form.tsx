"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2Icon, SendIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitContactForm } from "@/actions/contact";
import PrimaryButton from "@/components/global/button/primary-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toastClasses } from "@/lib/constants";
import {
  CompanyContactFormSchema,
  CompanyContactFormSchemaDefaults,
  CompanyContactFormSchemaType,
} from "@/validators/company-contact/index.schema";

export default function CompanyContactForm() {
  // React hook from
  const form = useForm<CompanyContactFormSchemaType>({
    resolver: zodResolver(CompanyContactFormSchema),
    defaultValues: CompanyContactFormSchemaDefaults,
  });

  // Form submit handler
  async function handleFormSubmission(values: CompanyContactFormSchemaType) {
    try {
      // Send data
      const result = await submitContactForm(values);

      if (!result.success) {
        throw new Error(result.message);
      }

      // Success toast
      toast.success(result.message, {
        description: "We will get back to you soon.",
        ...toastClasses,
      });

      // Reset the form
      form.reset();
    } catch (error) {
      console.error("Form submission error:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Something went wrong! Please try again later.";

      toast.error("Oops!", {
        description: errorMessage,
        ...toastClasses,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleFormSubmission)}
        className="bg-secondary-400 border-secondary-500 drop-shadow-[0_2px_12px_rgba(0, 0, 0, 0.4)] space-y-5 rounded-[10px] border px-3.5 py-4"
      >
        {/* First and last names */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          {/* First name */}
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="w-full flex-1 sm:w-fit">
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>First Name</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your first name"
                    className="font-medium"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is where you enter your first name
                </FormDescription>
              </FormItem>
            )}
          />

          {/* Last name */}
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="w-full flex-1 sm:w-fit">
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Last Name</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your last name"
                    className="font-medium"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is where you enter your last name
                </FormDescription>
              </FormItem>
            )}
          />
        </div>

        {/* Company name and phone number */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
          {/* Company name */}
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full flex-1 sm:w-fit">
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Company Name</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your first name"
                    className="font-medium"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is where you enter your company name entered
                </FormDescription>
              </FormItem>
            )}
          />

          {/* Phone number */}
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem className="w-full flex-1 sm:w-fit">
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Phone Number</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter phone number with country code"
                    className="font-medium"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is where you enter your phone number
                </FormDescription>
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-800 flex items-center justify-between">
                <span>Email</span>
                <span className="text-xs text-slate-400">required</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your email"
                  className="font-medium"
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="sr-only">
                This is where you enter your email address
              </FormDescription>
            </FormItem>
          )}
        />

        {/* Interest */}
        <FormField
          control={form.control}
          name="interest"
          render={({ field }) => (
            <FormItem>
              <FormLabel
                htmlFor="interest"
                className="text-secondary-800 flex items-center justify-between"
              >
                <span>Im Interested In</span>
                <span className="text-xs text-slate-400">required</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    id="interest"
                    className="w-full cursor-pointer placeholder:text-sm placeholder:!font-medium"
                  >
                    <SelectValue placeholder="Select your interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel className="font-medium">
                        Interests
                      </SelectLabel>
                      {[
                        {
                          label: "Services",
                          value: "services",
                        },
                        {
                          label: "Training",
                          value: "training",
                        },
                        {
                          label: "Products",
                          value: "products",
                        },
                        {
                          label: "Partnership",
                          value: "partnership",
                        },
                      ].map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="cursor-pointer"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-800 flex items-center justify-between">
                <span>Message</span>
                <span className="text-xs text-slate-400">required</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Enter your message"
                  rows={4}
                  cols={3}
                  className="resize-none font-medium"
                />
              </FormControl>
              <FormMessage />
              <FormDescription className="sr-only">
                This is where you enter your message
              </FormDescription>
            </FormItem>
          )}
        />

        <PrimaryButton
          type="submit"
          disabled={form.formState.isSubmitting}
          className="hover:bg-primary-700 flex items-center gap-2"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2Icon strokeWidth={1.5} className="animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <SendIcon strokeWidth={1.5} />
              <span>Send Message</span>
            </>
          )}
        </PrimaryButton>
      </form>
    </Form>
  );
}
