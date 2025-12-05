import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function AllCategoriesSkeleton() {
  return (
    <SectionWrapper className="bg-secondary-450 flex flex-col gap-8">
      {/* Header Skeleton */}
      <div className="space-y-1">
        <Skeleton className="bg-secondary-550 h-8 w-32 rounded-md" />
        <Skeleton className="bg-secondary-550 h-4 w-64 rounded-md" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid w-full gap-3 md:grid-cols-2 2xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div
            key={idx}
            className="border-border/50 flex h-full flex-col overflow-hidden rounded-[12px] border sm:flex-row"
          >
            {/* Image skeleton */}
            <Skeleton className="bg-secondary-550 aspect-[16/11] w-full sm:aspect-[200/120] sm:w-[250px]" />

            {/* Content skeleton */}
            <div className="flex flex-1 flex-col gap-4 px-3 py-3.5">
              <div className="space-y-2">
                <Skeleton className="bg-secondary-550 h-6 w-32 rounded-md" />
                <Skeleton className="bg-secondary-550 h-4 w-full rounded-md" />
                <Skeleton className="bg-secondary-550 h-4 w-3/4 rounded-md" />
              </div>
              <Skeleton className="bg-secondary-550 h-8 w-28 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
