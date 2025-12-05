import Image from "next/image";

import { getCourses } from "../../../_components/courses/wrapper";
import TrainingReserveSeatContent from "./content";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function TrainingReserveSeatWrapper({
  searchParams,
}: Props) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get courses
  const coursesResponse = await getCourses(resolvedSearchParams);

  // Handle error
  if (!coursesResponse) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load all courses. Please try again later.
        </p>
      </div>
    );
  }

  // All courses
  const courses = coursesResponse.results || [];

  // Empty state
  if (courses.length === 0) {
    const hasFilters = Object.keys(resolvedSearchParams).length > 0;

    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
        <Image
          src="/images/empty-state/courses.svg"
          width={400}
          height={400}
          alt="No courses available"
          priority={false}
        />
        <div className="text-center">
          <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
            {hasFilters ? "No Courses Found" : "No Courses Yet"}
          </h3>
          <p className="text-secondary-700 text-sm">
            {hasFilters
              ? "Try adjusting your filters to find what you're looking for."
              : "Courses for this tag are coming soon."}
          </p>
        </div>
      </div>
    );
  }

  return <TrainingReserveSeatContent courses={courses} />;
}
