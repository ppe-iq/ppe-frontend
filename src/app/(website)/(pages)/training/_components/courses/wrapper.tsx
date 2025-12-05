import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { COURSES } from "@/lib/endpoints";

import TrainingCoursesContent from "./content";
import { CoursesResponse } from "./types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get courses with filter
export async function getCourses(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<CoursesResponse | null> {
  try {
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

    // Add search filter
    if (searchParams.search && typeof searchParams.search === "string") {
      params.set("search", searchParams.search);
    }

    // URL
    const url = `${process.env.API_URL}${COURSES}?${params.toString()}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["courses"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Error fetching courses: ${res.statusText}`);
    }

    // Data
    const data: CoursesResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching courses:", error);
    return null;
  }
}

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function TrainingCoursesWrapper({ searchParams }: Props) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get courses
  const coursesResponse = await getCourses(resolvedSearchParams);

  // Handle error
  if (!coursesResponse) {
    return (
      <SectionWrapper className="bg-transparent">
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
          <p className="text-secondary-700 text-lg">
            Failed to load courses. Please try again.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  // Courses
  const courses = coursesResponse.results;

  // Empty state
  if (courses.length === 0) {
    return (
      <SectionWrapper className="gap-2">
        <Image
          src="/images/empty-state/courses.svg"
          width={500}
          height={500}
          alt="No courses available"
          priority={false}
        />
        <div className="text-center">
          <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
            No courses yet.
          </h3>
          <p className="text-secondary-700 text-sm">
            Stay tuned. Courses are coming soon.
          </p>
        </div>
      </SectionWrapper>
    );
  }

  // Get current page
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page as string)
    : 1;
  return (
    <SectionWrapper className="bg-secondary-400">
      {/* Courses content */}
      <TrainingCoursesContent
        courses={courses}
        currentPage={currentPage}
        totalCount={coursesResponse.count}
      />
    </SectionWrapper>
  );
}
