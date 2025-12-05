import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function CompanyAboutNewsEventsSkeleton() {
  return (
    <SectionWrapper className="bg-secondary-400">
      <Skeleton className="mb-4 h-8 w-1/2" />
      <div className="grid w-full gap-4 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, idx) => (
          <div
            key={idx}
            className="flex h-52 w-full gap-4 overflow-hidden rounded-lg border"
          >
            <Skeleton className="h-full w-full" />

            <div className="flex w-full flex-col gap-6 p-3">
              <div className="flex w-full items-center justify-between gap-10">
                <Skeleton className="h-8 w-full" />
                <Skeleton className="h-4 w-6" />
              </div>
              <div className="flex w-full flex-col gap-1">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
