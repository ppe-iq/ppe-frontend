"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Resend } from "resend";

import AdminCourseReservationEmail from "@/app/(website)/(pages)/training/reserve/_components/boost/admin-reservation-email";
import CourseReservationUserEmail from "@/app/(website)/(pages)/training/reserve/_components/boost/reservation-user-email";

import { CourseReservationFormData } from "./types";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReservationEmails(
  formData: CourseReservationFormData,
  reservationData: any,
) {
  const fullName = `${formData.firstName} ${formData.lastName}`;
  const courseTitle = reservationData.course_title || formData.course;

  try {
    // Send user confirmation email
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "PPE Courses <info@ppe-iq.com>",
      to: [formData.email],
      subject: `Confirmation: Your reservation for ${courseTitle}`,
      react: CourseReservationUserEmail({
        fullName,
        courseTitle,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: formData.company,
        message: formData.message,
      }),
    });

    // Send admin notification
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "PPE Courses <info@ppe-iq.com>",
      to: [process.env.RESEND_FROM_EMAIL || "info@ppe-iq.com"],
      subject: `Confirmation: Your reservation for ${courseTitle}`,
      react: AdminCourseReservationEmail({
        fullName,
        courseTitle,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        company: formData.company,
        message: formData.message,
        submittedAt: new Date().toLocaleString(),
      }),
    });
  } catch (error) {
    console.error("Failed to send emails:", error);
    throw error;
  }
}
