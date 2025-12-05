"use server";

import { CONTACT } from "@/lib/endpoints";

import { sendContactEmails } from "./emails";
import { ContactFormData, ContactResponse } from "./types";

export async function submitContactForm(
  formData: ContactFormData,
): Promise<ContactResponse> {
  try {
    const response = await fetch(`${process.env.API_URL}${CONTACT}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phoneNumber,
        company: formData.companyName,
        subject: formData.interest,
        message: formData.message,
      }),

      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Failed to submit form: ${response.statusText}`,
      );
    }

    const data = await response.json();

    // Send emails to both: user and admin
    sendContactEmails(formData).catch((error) => {
      console.error("Email sending failed:", error);
    });

    return {
      success: true,
      message: "Message sent successfully!",
      data,
    };
  } catch (error) {
    console.error("Contact form submission error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to send message. Please try again later.",
    };
  }
}
