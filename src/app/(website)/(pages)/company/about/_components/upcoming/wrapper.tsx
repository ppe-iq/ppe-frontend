import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { UPCOMING_TRAININGS } from "@/lib/endpoints";

import CompanyAboutUpComingContent from "./content";
import { UpcomingTrainingsResponse } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get upcoming trainings
async function getUpcomingTrainings(): Promise<UpcomingTrainingsResponse | null> {
  try {
    // Params
    const params = new URLSearchParams({
      page: "1",
      page_size: "10",
    });

    // Endpoint
    const url = `${process.env.API_URL}${UPCOMING_TRAININGS}?${params.toString()}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["upcoming-trainings"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to get upcoming trainings: ${res.statusText}`);
    }

    // Data
    return await res.json();
  } catch (error) {
    console.error("Failed to get upcoming trainings:", error);
    return null;
  }
}

export default async function CompanyAboutUpcomingTrainingsWrapper() {
  // Get upcoming trainings
  const response = await getUpcomingTrainings();

  // Handle error
  if (!response) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-2">
        <h1 className="font-bebas text-primary-900 text-3xl">Oops!</h1>
        <p className="text-secondary-700">
          Failed to load upcoming trainings. Please try again later.
        </p>
      </div>
    );
  }

  // Upcoming trainings
  const upcomingTrainings = response.results || [];

  // Empty state
  if (upcomingTrainings.length === 0) {
    return (
      <SectionWrapper>
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <Image
            src="/images/empty-state/courses.svg"
            width={400}
            height={400}
            alt="No upcoming trainings available"
            priority={false}
          />
          <div className="text-center">
            <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
              No Upcoming Trainings Yet
            </h3>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <CompanyAboutUpComingContent
      upcomingTrainings={upcomingTrainings}
      hasNext={response.count > 10}
    />
  );
}
