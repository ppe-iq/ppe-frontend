import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductDetailsSkeleton() {
  return (
    <SectionWrapper className="justify-between sm:flex-row">
      <div className="mt-10 flex w-full flex-col items-center gap-2 sm:mt-0 sm:items-start">
        <Skeleton className="bg-secondary-550 h-3 w-42" />
        <Skeleton className="bg-secondary-550 mt-10 h-5 w-52" />
        <Skeleton className="bg-secondary-550 h-4 w-1/2" />

        <Skeleton className="bg-secondary-550 mt-2 h-3 w-1/2" />
        <Skeleton className="bg-secondary-550 h-3 w-1/2" />
        <Skeleton className="bg-secondary-550 h-3 w-1/2" />
        <Skeleton className="bg-secondary-550 h-3 w-1/2" />
        <Skeleton className="bg-secondary-550 h-3 w-42" />
      </div>
      <div>
        <Skeleton className="bg-secondary-500 h-96 w-full" />
        <div className="mt-4 flex items-center gap-2">
          <Skeleton className="h-24 w-32 rounded-sm" />
          <Skeleton className="h-24 w-32 rounded-sm" />
          <Skeleton className="h-24 w-32 rounded-sm" />
          <Skeleton className="h-24 w-32 rounded-sm" />
        </div>
      </div>
    </SectionWrapper>
  );
}
