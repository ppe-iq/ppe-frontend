import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function BlogArticleSkeleton() {
  return (
    <SectionWrapper>
      <Skeleton className="h-10 w-full" />

      <Skeleton className="h-96 w-full" />

      <div className="w-full space-y-2">
        {Array.from({ length: 10 }).map((_, idx) => (
          <Skeleton
            key={idx}
            className={cn("h-5", idx % 2 === 0 ? "w-1/2" : "w-full")}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
