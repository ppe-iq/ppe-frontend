"use server";

import { Resend } from "resend";

import { NEWSLETTER_SUBSCRIBE } from "@/lib/endpoints";

import { NewsletterFormData, NewsletterResponse } from "./types";

// Init Resend
const resend = new Resend(process.env.RESEND_API_KEY);

export async function subscribeToNewsletter(
  formData: NewsletterFormData,
): Promise<NewsletterResponse> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${NEWSLETTER_SUBSCRIBE}`;

    // Response
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email }),
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Failed to subscribe to newsletter: ${response.statusText}`,
      );
    }

    // Data
    const data = await response.json();

    // Add the email to resend contact
    try {
      // Add contact
      const {} = await resend.contacts.create({
        email: formData.email,
        lastName: formData.email.split("@")[0] || formData.email,
        unsubscribed: false,
      });
    } catch (error) {
      console.error("Failed to add email to resend contact:", error);
      // We will continue anyway, since the user is already became in DB
    }

    return {
      success: true,
      message: data.message,
      data,
    };
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to subscribe to newsletter. Please try again later.",
    };
  }
}
