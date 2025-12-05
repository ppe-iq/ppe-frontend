import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { NEWSEVENTS } from "@/lib/endpoints";

import { NewsEventsResponse } from "../../../about/_components/news-events/types";
import CompanyAllNewsEventsContent from "./content";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get news events
async function getAllNewsEvents(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<NewsEventsResponse | null> {
  try {
    // Build params
    const params = new URLSearchParams();

    // Add page number
    const page =
      searchParams.page && typeof searchParams.page === "string"
        ? searchParams.page
        : "1";
    params.set("page", page);

    // Add page size
    const pageSize =
      searchParams.page_size && typeof searchParams.page_size === "string"
        ? searchParams.page_size
        : "10";
    params.set("page_size", pageSize);

    // Endpoint
    const url = `${process.env.API_URL}${NEWSEVENTS}?${params.toString()}`;
    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["all-news-events"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all news & events: ${res.statusText}`);
    }

    // Data
    const data: NewsEventsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch all news & events:", error);
    return null;
  }
}

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function CompanyAllNewsEventsWrapper({
  searchParams,
}: Props) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get all news & events
  const response = await getAllNewsEvents(resolvedSearchParams);

  // Handle error
  if (!response) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-2">
        <h1 className="font-bebas text-primary-900 text-3xl">Oops!</h1>
        <p className="text-secondary-700">
          Failed to load news & events. Please try again later.
        </p>
      </div>
    );
  }

  // News & events
  const newsEvents = response.results || [];

  // Empty state
  if (newsEvents.length === 0) {
    const hasFilters = Object.keys(resolvedSearchParams).length > 0;

    return (
      <SectionWrapper>
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <Image
            src="/images/empty-state/news-events.svg"
            width={400}
            height={400}
            alt="No news & events available"
            priority={false}
          />
          <div className="text-center">
            <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
              {hasFilters ? "No News & Events Found" : "No News & Events Yet"}
            </h3>
            <p className="text-secondary-700 text-sm">
              Stay tuned. They are coming very soon...
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // Current page
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page as string)
    : 1;

  // Page size
  const pageSize = resolvedSearchParams.page_size
    ? parseInt(resolvedSearchParams.page_size as string)
    : 10;

  return (
    <>
      <CompanyAllNewsEventsContent
        newsEvents={newsEvents}
        currentPage={currentPage}
        totalCount={response.count}
        pageSize={pageSize}
      />
    </>
  );
}
