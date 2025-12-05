import { Skeleton } from "@/components/ui/skeleton";

export default function RelatedBlogsSkeleton() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="mb-4 h-10 w-1/2" />
      {Array.from({ length: 3 }).map((_, idx) => (
        <Skeleton key={idx} className="h-72 w-full" />
      ))}
    </div>
  );
}
