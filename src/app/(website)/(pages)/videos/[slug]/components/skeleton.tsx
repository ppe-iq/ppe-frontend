import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function VideoDetailsSkeleton() {
  return (
    <SectionWrapper className="min-h-[calc(100vh-5.5rem)] items-start justify-start">
      <div className="w-full space-y-10">
        <Skeleton className="bg-secondary-550 h-4 w-full sm:w-1/2" />

        <div className="mt-4 space-y-6">
          <Skeleton className="bg-secondary-550 h-10 w-3/4" />
          <div className="space-y-3">
            <Skeleton className="bg-secondary-550 h-4 w-1/2" />
            <Skeleton className="bg-secondary-550 h-4 w-1/2" />
            <Skeleton className="bg-secondary-550 h-4 w-1/2" />
            <Skeleton className="bg-secondary-550 h-4 w-1/3" />
          </div>
        </div>

        <Skeleton className="bg-secondary-550 h-10 w-32" />
      </div>
    </SectionWrapper>
  );
}
