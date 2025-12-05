import { zodResolver } from "@hookform/resolvers/zod";
import { BellRingIcon, Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { subscribeToNewsletter } from "@/actions/newsletter";
import PrimaryButton from "@/components/global/button/primary-button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toastClasses } from "@/lib/constants";
import {
  NewsletterFormSchema,
  NewsletterFormSchemaDefaults,
  NewsletterFormSchemaType,
} from "@/validators/newsletter/index.schema";

export default function NewsletterForm() {
  // React hook form
  const form = useForm<NewsletterFormSchemaType>({
    resolver: zodResolver(NewsletterFormSchema),
    defaultValues: NewsletterFormSchemaDefaults,
  });

  // Form submission handler
  async function handleFormSubmission(values: NewsletterFormSchemaType) {
    try {
      // Send data
      const result = await subscribeToNewsletter(values);

      if (!result.success) {
        throw new Error(result.message);
      }

      toast.success(result.message, {
        description: "Thank you for subscribing to our newsletter.",
        ...toastClasses,
      });

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
        className="border-primary-650 flex w-full items-center justify-between overflow-hidden rounded-full border-[1.5px]"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter your email"
                  className="text-primary-950 border-none font-medium shadow-none focus:border-none focus:!ring-0"
                />
              </FormControl>
              <FormDescription className="sr-only">
                This is where we&apos;ll send you our newsletter.
              </FormDescription>
            </FormItem>
          )}
        />

        <PrimaryButton
          type="submit"
          disabled={form.formState.isSubmitting}
          className="hover:bg-primary-600 flex flex-1 items-center gap-2 rounded-full"
        >
          {form.formState.isSubmitting ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              <span>Subscribing...</span>
            </>
          ) : (
            <>
              <BellRingIcon className="size-4" />
              <span>Subscribe</span>
            </>
          )}
        </PrimaryButton>
      </form>

      {/* Error message */}
      {form.formState.errors.email && (
        <FormMessage className="mt-1 ml-2 text-sm">
          {form.formState.errors.email.message}
        </FormMessage>
      )}
    </Form>
  );
}
