import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function FeedbackFormSkeleton() {
  return (
    <SectionWrapper className="min-h-[calc(100vh-3rem)] space-y-10">
      {/* Header Skeleton */}
      <div className="flex w-full flex-col items-center justify-center gap-3">
        <Skeleton className="h-8 w-1/2" />
        <Skeleton className="h-10 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
      </div>

      {/* Main Layout */}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="hidden flex-col space-y-3 sm:flex">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-32 w-full" />
          ))}
        </div>

        {/* Main content skeleton */}
        <div className="w-full">
          <Skeleton className="h-80 w-full rounded-lg" />
        </div>
      </div>
    </SectionWrapper>
  );
}
