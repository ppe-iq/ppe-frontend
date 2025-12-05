import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function TrainingCoursesSkeleton() {
  return (
    <SectionWrapper className="bg-secondary-400">
      {/* Quote skeleton */}
      <Skeleton className="mx-auto h-8 w-96" />

      {/* Title & description skeleton */}
      <div className="flex flex-col items-center gap-2">
        <Skeleton className="h-16 w-80" />
        <Skeleton className="h-6 w-full max-w-2xl" />
      </div>

      {/* Courses grid skeleton */}
      <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className="grid h-[30rem] w-full place-items-center p-4"
          >
            <Skeleton className="bg-secondary-600 mb-4 h-54 w-full rounded-[6px]" />
            <Skeleton className="bg-secondary-600 mb-4 h-6 w-full rounded-full" />
            <div className="w-full space-y-2">
              <Skeleton className="bg-secondary-600 mb-4 h-6 w-full rounded-full" />
              <Skeleton className="bg-secondary-600 mb-4 h-6 w-1/2 rounded-full" />
            </div>
          </Skeleton>
        ))}
      </div>
    </SectionWrapper>
  );
}
