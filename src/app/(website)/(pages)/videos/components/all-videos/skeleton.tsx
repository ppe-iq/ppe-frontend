import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function VideosAllSkeleton() {
  return (
    <SectionWrapper className="flex w-full flex-col">
      <div className="flex w-full items-start">
        <Skeleton className="h-8 w-36" />
      </div>

      <div className="flex w-full flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          {Array.from({ length: 3 }).map((_, idx) => (
            <Skeleton key={idx} className="h-6 w-32 rounded-full" />
          ))}
        </div>

        <Skeleton className="h-8 w-52 rounded-full" />
      </div>

      <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Skeleton key={idx} className="h-[26rem] w-full" />
        ))}
      </div>
    </SectionWrapper>
  );
}
