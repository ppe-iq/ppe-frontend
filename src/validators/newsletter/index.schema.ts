import { z } from "zod";

// Main form schema
export const NewsletterFormSchema = z.object({
  email: z.email({ error: "Invalid email address" }),
});

// Form schema type
export type NewsletterFormSchemaType = z.infer<typeof NewsletterFormSchema>;

// Default values
export const NewsletterFormSchemaDefaults: NewsletterFormSchemaType = {
  email: "",
};
