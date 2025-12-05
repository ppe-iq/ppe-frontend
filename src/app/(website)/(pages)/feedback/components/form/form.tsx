"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Check,
  ChevronsUpDown,
  Loader2Icon,
  SendIcon,
  StarIcon,
} from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { submitStudentFeedback } from "@/actions/feedback";
import PrimaryButton from "@/components/global/button/primary-button";
import { Button } from "@/components/ui/button";
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
  FeedbackFormSchema,
  FeedbackFormSchemaDefaults,
  FeedbackFormSchemaType,
} from "@/validators/feedback/index.schema";

import { Course } from "../../../training/_components/courses/types";
import DoneModal from "./done-modal";

// Props
type Props = {
  courses: Course[];
};

export default function FeedbackForm({ courses }: Props) {
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

  // Rate state
  const [currRate, setCurrRate] = useState<number>(0);

  // Toggle popover
  const [isPopoverOpen, setIsPopoverOpen] = useState<boolean>(false);

  // Done modal
  const [isDoneModalOpen, setIsDoneModalOpen] = useState<boolean>(false);

  // React hook from
  const form = useForm<FeedbackFormSchemaType>({
    resolver: zodResolver(FeedbackFormSchema),
    defaultValues: FeedbackFormSchemaDefaults,
  });

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
  async function handleFormSubmission(values: FeedbackFormSchemaType) {
    try {
      // Send data
      const result = await submitStudentFeedback(values);

      if (!result.success) {
        throw new Error(result.message);
      }
      // Success toast
      toast.success(result.message, {
        description: "We will get back to you soon.",
        ...toastClasses,
      });

      // Reset the form
      setCurrRate(0);
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
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleFormSubmission)}
          className="bg-secondary-400 drop-shadow-[0_2px_12px_rgba(0, 0, 0, 0.4)] border-primary-750 space-y-5 rounded-[10px] border-4 border-b-transparent border-l-transparent px-3.5 py-4"
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
                          ? courses.find(
                              (course) => course.slug === field.value,
                            )?.title
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

          {/* Full name */}
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Full Name</span>
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
                  This is where you enter your full name
                </FormDescription>
              </FormItem>
            )}
          />

          {/* Company */}
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Company</span>
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
                  This is where you enter your company name
                </FormDescription>
              </FormItem>
            )}
          />

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
                    className="resize-none font-medium placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription className="sr-only">
                  This is where you enter your message
                </FormDescription>
              </FormItem>
            )}
          />

          {/* Rate */}
          <FormField
            control={form.control}
            name="rate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-secondary-800 flex items-center justify-between">
                  <span>Rate Us</span>
                  <span className="text-xs text-slate-400">required</span>
                </FormLabel>
                <FormControl>
                  <div className="flex items-center gap-2">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Button
                        key={idx}
                        onClick={() => {
                          const newRate = idx + 1;
                          setCurrRate(newRate);
                          field.onChange(newRate.toString());
                        }}
                        variant="ghost"
                        size="icon"
                        type="button"
                        className="size-fit"
                      >
                        <StarIcon
                          className={cn(
                            "stroke-primary-700 size-5 transition duration-300",
                            idx < currRate && "fill-primary-700",
                          )}
                        />
                      </Button>
                    ))}
                  </div>
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

      <DoneModal isOpen={isDoneModalOpen} onOpenChange={setIsDoneModalOpen} />
    </>
  );
}
