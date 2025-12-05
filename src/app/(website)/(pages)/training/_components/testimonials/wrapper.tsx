import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { STUDENTS_FEEDBACK } from "@/lib/endpoints";

import TrainingTestimonialsContent from "./content";
import { StudentsFeedbackResponse } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get students feedback
async function getStudentFeedback(): Promise<StudentsFeedbackResponse | null> {
  try {
    // Student feedback endpoint
    const url = `${process.env.API_URL}${STUDENTS_FEEDBACK}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["student-feedback"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Error fetching students feedback: ${res.statusText}`);
    }

    // Data
    const data: StudentsFeedbackResponse = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch students feedback:", error);
    return null;
  }
}

// Wrapper
export default async function TrainingTestimonialsWrapper() {
  // Student feedback
  const feedbackResponse = await getStudentFeedback();

  // Handle error
  if (!feedbackResponse) {
    return (
      <SectionWrapper className="bg-transparent">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
          <p className="text-secondary-700 text-lg">
            Failed to load students feedback. Please try again.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  // Student feedback
  const feedback = feedbackResponse.results;

  // Empty state
  if (feedback.length === 0) {
    return (
      <SectionWrapper className="gap-2">
        <Image
          src="/images/empty-state/feedback.svg"
          width={400}
          height={400}
          alt="No feedback available"
          priority={false}
        />
        <div className="text-center">
          <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
            No feedback yet
          </h3>
          <p className="text-secondary-700 text-sm">
            Ask trainers to provide you with the feedback link.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <TrainingTestimonialsContent studentsFeedback={feedback} />
    </>
  );
}
