import z from "zod";

// Main form schema
export const ReserveSeatFormSchema = z.object({
  course: z.string().min(1, { error: "Course is required" }),
  firstName: z.string().min(1, { error: "First name is required" }),
  lastName: z.string().min(1, { error: "Last name is required" }),
  company: z.string().min(1, { error: "Company is required" }),
  phoneNumber: z
    .string()
    .min(1, { error: "Phone number is required" })
    .regex(/^\+?[1-9]\d{1,14}$/, { error: "Invalid phone number" })
    .transform((val) => (val.startsWith("+") ? val : `+${val}`)),
  email: z.email({ error: "Invalid email address" }),
  message: z.string().max(250, { error: "250 letters at most" }),
  acceptTerms: z
    .boolean()
    .refine((val) => val, { error: "You must agree to our privacy policy" }),
});

// Form schema type
export type ReserveSeatFormSchemaType = z.infer<typeof ReserveSeatFormSchema>;

// Default values
export const ReserveSeatFormSchemaDefaults: ReserveSeatFormSchemaType = {
  course: "",
  firstName: "",
  lastName: "",
  company: "",
  email: "",
  phoneNumber: "",
  message: "",
  acceptTerms: false,
};
