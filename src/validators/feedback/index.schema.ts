import z from "zod";

// Main form schema
export const FeedbackFormSchema = z.object({
  course: z.string().min(1, { error: "Course is required" }),
  fullName: z.string().min(1, { error: "Full name is required" }),
  company: z.string().min(1, { error: "Company is required" }),
  email: z.email({ error: "Invalid email address" }),
  message: z
    .string()
    .min(1, { error: "Message is required " })
    .max(250, { error: "250 letters at most" }),
  rate: z.string().min(1, { error: "Rate is required" }),
});

// Form schema type
export type FeedbackFormSchemaType = z.infer<typeof FeedbackFormSchema>;

// Default values
export const FeedbackFormSchemaDefaults: FeedbackFormSchemaType = {
  course: "",
  fullName: "",
  company: "",
  email: "",
  message: "",
  rate: "",
};
