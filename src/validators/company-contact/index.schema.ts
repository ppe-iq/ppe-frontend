import z from "zod";

// Main form schema
export const CompanyContactFormSchema = z.object({
  firstName: z.string().min(1, { error: "First name is required" }),
  lastName: z.string().min(1, { error: "Last name is required" }),
  email: z.email({ error: "Invalid email address" }),
  companyName: z.string().min(1, { error: "Company name is required" }),
  phoneNumber: z
    .string()
    .min(1, { error: "Phone number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { error: "Invalid phone number" })
    .transform((val) => (val.startsWith("+") ? val : `+${val}`)),
  interest: z.string().min(1, { error: "Select your interest" }),
  message: z
    .string()
    .min(1, { error: "Message is required" })
    .max(250, { error: "250 letters at most" }),
});

// Form schema type
export type CompanyContactFormSchemaType = z.infer<
  typeof CompanyContactFormSchema
>;

// Default values
export const CompanyContactFormSchemaDefaults: CompanyContactFormSchemaType = {
  firstName: "",
  lastName: "",
  email: "",
  companyName: "",
  phoneNumber: "",
  interest: "",
  message: "",
};
