"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Check, ChevronsUpDown, Loader2Icon, SendIcon } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitCourseReservation } from "@/actions/reservations";
import PrimaryButton from "@/components/global/button/primary-button";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import useDebounce from "@/hooks/use-debounce";
import { toastClasses } from "@/lib/constants";
import { cn } from "@/lib/utils";
import {
  ReserveSeatFormSchema,
  ReserveSeatFormSchemaDefaults,
  ReserveSeatFormSchemaType,
} from "@/validators/reserve-seat/index.schema";

import { Course } from "../../../_components/courses/types";
import { formContainer } from "./variants";

// Props
type Props = {
  courses: Course[];
};

export default function TrainingReserveForm({ courses }: Props) {
  // Router navigation
  const router = useRouter();

  // Search params
  const searchParams = useSearchParams();

  // Transition effect
  const [isPending, startTransition] = useTransition();

  // Get current search value from URL
  const searchQuery = searchParams.get("search") || "";

  // Local search state
  const [search, setSearch] = useState<string>(searchQuery);

  // Debounced search value
  const { debouncedValue: debouncedSearch } = useDebounce({
    value: search,
    ms: 200,
  });

  // React hook form
  const form = useForm<ReserveSeatFormSchemaType>({
    resolver: zodResolver(ReserveSeatFormSchema),
    defaultValues: ReserveSeatFormSchemaDefaults,
  });

  // Toggle popover
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  // Update URL when search filter change
  useEffect(() => {
    // Build search params
    const params = new URLSearchParams(searchParams);

    // Handle search filter
    if (!debouncedSearch) {
      params.delete("search");
    } else {
      params.set("search", debouncedSearch);
    }

    // Compare the URLs
    const newUrl = `?${params.toString()}`;
    const currentUrl = `?${searchParams.toString()}`;

    // Only update if URL actually changed
    if (newUrl !== currentUrl) {
      startTransition(() => {
        router.replace(newUrl, { scroll: false });
      });
    }
  }, [debouncedSearch, router, searchParams]);

  // Form submit handler
  async function handleFormSubmission(values: ReserveSeatFormSchemaType) {
    try {
      // Send data
      const result = await submitCourseReservation(values);

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
      <motion.form
        onSubmit={form.handleSubmit(handleFormSubmission)}
        variants={formContainer}
        initial="hidden"
        whileInView="show"
        viewport={formContainer.viewport}
        className="bg-secondary-400 border-secondary-500 drop-shadow-[0_2px_12px_rgba(0, 0, 0, 0.4)] space-y-5 rounded-[10px] border px-3.5 py-4 md:col-span-2"
      >
        {/* Course selector */}
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem className="w-full flex-1">
              <FormLabel className="text-secondary-800 flex items-center justify-between">
                <span>Choose training course</span>
                <span className="text-xs text-slate-400">required</span>
              </FormLabel>
              <FormControl>
                <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
                  <PopoverTrigger asChild className="w-full">
                    <Button
                      variant="outline"
                      role="combobox"
                      className="w-full justify-between"
                    >
                      {field.value
                        ? courses.find((course) => course.slug === field.value)
                            ?.title
                        : "Select course..."}
                      <ChevronsUpDown className="opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    align="start"
                    className="w-xs p-0 sm:w-sm md:w-md lg:w-lg"
                  >
                    <Command>
                      <CommandInput
                        value={search}
                        onValueChange={(value) => setSearch(value)}
                        placeholder="Search course..."
                        className="h-9"
                      />
                      <CommandList>
                        {isPending ? (
                          <p
                            className={cn(
                              "text-secondary-800 col-span-2 mt-4 mb-2 flex items-center justify-center gap-2 text-sm",
                            )}
                          >
                            <Loader2Icon className="size-3 animate-spin" />
                            <span>Updating results...</span>
                          </p>
                        ) : (
                          <>
                            <CommandEmpty>No course found.</CommandEmpty>
                            <CommandGroup>
                              {courses.map((course) => (
                                <CommandItem
                                  key={course.id}
                                  value={course.slug}
                                  onSelect={(value) => {
                                    field.onChange(value);
                                    setIsPopoverOpen(false);
                                  }}
                                  className="cursor-pointer"
                                >
                                  {course.title}
                                  <Check
                                    className={cn(
                                      "ml-auto",
                                      field.value === course.slug
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </>
                        )}
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
              <FormDescription className="sr-only">
                This is where you can pick a training course.
              </FormDescription>
            </FormItem>
          )}
        />

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

        {/* Phone and Company name */}
        <div className="flex flex-col items-start gap-4 sm:flex-row">
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

          {/* Company name */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem className="w-full flex-1 sm:w-fit">
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Company name</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your company's name"
                    className="font-medium"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is your company name.
                </FormDescription>
              </FormItem>
            )}
          />
        </div>

        {/* Message */}
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-secondary-800">Message</FormLabel>
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

        {/* Terms */}
        <FormField
          control={form.control}
          name="acceptTerms"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <FormLabel
                  htmlFor="terms"
                  className="text-secondary-800 flex items-center gap-2"
                >
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <span className="text-secondary-750">
                    You agree to our{" "}
                    <Link href="/terms" className="text-secondary-950">
                      privacy policy
                    </Link>
                    .
                  </span>
                </FormLabel>
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
              <span>Reserving...</span>
            </>
          ) : (
            <>
              <SendIcon strokeWidth={1.5} />
              <span>Reserve My Seat</span>
            </>
          )}
        </PrimaryButton>
      </motion.form>
    </Form>
  );
}
