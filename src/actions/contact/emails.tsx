"use server";

import { Resend } from "resend";

import ContactAdminNotificationEmail from "@/app/(website)/(pages)/company/contact/components/contact-us/contact-admin-email";
import ContactConfirmationEmail from "@/app/(website)/(pages)/company/contact/components/contact-us/contact-user-email";

import { ContactFormData } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmails(formData: ContactFormData) {
  const fullName = `${formData.firstName} ${formData.lastName}`;

  try {
    // Send user confirmation email
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "PPE Courses <info@ppe-iq.com>",
      to: [formData.email],
      subject: "Thank you for contacting PPE",
      react: ContactConfirmationEmail({
        fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        interest: formData.interest,
        message: formData.message,
      }),
    });

    // Send admin notification
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "PPE Courses <info@ppe-iq.com>",
      to: [process.env.RESEND_FROM_EMAIL || "info@ppe-iq.com"],
      subject: `New Contact Form: ${formData.interest}`,
      react: ContactAdminNotificationEmail({
        fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        companyName: formData.companyName,
        interest: formData.interest,
        message: formData.message,
        submittedAt: new Date().toLocaleString(),
      }),
    });
  } catch (error) {
    console.error("Failed to send emails:", error);
    throw error;
  }
}
