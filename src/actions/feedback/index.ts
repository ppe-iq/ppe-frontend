"use server";

import { STUDENT_FEEDBACK_SUBMIT } from "@/lib/endpoints";

import { StudentFeedbackFormData, StudentFeedbackResponse } from "./types";

export async function submitStudentFeedback(
  formData: StudentFeedbackFormData,
): Promise<StudentFeedbackResponse> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${STUDENT_FEEDBACK_SUBMIT}`;

    // Response
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        course_slug: formData.course,
        full_name: formData.fullName,
        company_name: formData.company,
        email: formData.email,
        message: formData.message,
        rating: parseInt(formData.rate),
      }),

      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(
        errorData.message || `Failed to submit the feedback: ${res.statusText}`,
      );
    }

    // Data
    const data = await res.json();

    return {
      success: true,
      message: "Feedback sent successfully!",
      data,
    };
  } catch (error) {
    console.error("Feedback submission error:", error);
    return {
      success: false,
      message:
        error instanceof Error
          ? error.message
          : "Failed to submit the feedback. Please try again.",
    };
  }
}
