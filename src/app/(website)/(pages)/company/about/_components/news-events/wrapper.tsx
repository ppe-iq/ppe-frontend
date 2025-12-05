import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { NEWSEVENTS } from "@/lib/endpoints";

import CompanyAboutNewsEventsContent from "./content";
import { NewsEventsResponse } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get new & events
async function getNewsEvents(): Promise<NewsEventsResponse | null> {
  try {
    // Endpoint
    const url = `${process.env.API_URL}${NEWSEVENTS}?page_size=4`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["news-events"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch news & events: ${res.statusText}`);
    }

    // Data
    const data: NewsEventsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch news & events:", error);
    return null;
  }
}

// Wrapper
export default async function CompanyAboutNewsEventsWrapper() {
  // Get news & events
  const response = await getNewsEvents();

  // Handle error
  if (!response) {
    return (
      <SectionWrapper className="bg-transparent">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
          <p className="text-secondary-700 text-lg">
            Failed to load news & events. Please try again.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  // News & events
  const newsEvents = response.results || [];

  // Empty state
  if (newsEvents.length === 0) {
    return (
      <SectionWrapper className="gap-2">
        <Image
          src="/images/empty-state/courses.svg"
          width={500}
          height={500}
          alt="No news or events available"
          priority={false}
        />
        <div className="text-center">
          <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
            No events & news yet.
          </h3>
          <p className="text-secondary-700 text-sm">
            Stay tuned. News & Events are coming soon.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <>
      <CompanyAboutNewsEventsContent
        newsEvents={newsEvents}
        hasNext={response.count > 4}
      />
    </>
  );
}
