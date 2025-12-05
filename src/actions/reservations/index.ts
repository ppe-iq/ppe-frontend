"use server";

import { COURSE_RESERVATION } from "@/lib/endpoints";

import { sendReservationEmails } from "./emails";
import { CourseReservationFormData, CourseReservationResponse } from "./types";

export async function submitCourseReservation(
  formData: CourseReservationFormData,
): Promise<CourseReservationResponse> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${COURSE_RESERVATION}`;

    // Response
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        course_slug: formData.course,
        full_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone_number: formData.phoneNumber,
        company: formData.company,
        message: formData.message,
      }),

      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message ||
          `Failed to submit the reservation: ${res.statusText}`,
      );
    }

    // Data
    const data = await res.json();

    // Send emails to both: user and admin
    sendReservationEmails(formData, data).catch((error) => {
      console.error("Email sending failed:", error);
    });

    return {
      success: true,
      message: "Reservation request sent successfully!",
      data,
    };
  } catch (error) {
    console.error("Course reservation submission error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit the reservation. Please try again later.",
    };
  }
}
