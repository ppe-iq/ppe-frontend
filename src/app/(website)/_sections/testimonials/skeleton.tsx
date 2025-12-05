import { Skeleton } from "@/components/ui/skeleton";

export default function TestimonialsSkeleton() {
  return (
    <div className="flex w-full justify-between gap-24">
      <Skeleton className="h-96 w-full flex-1" />
      <div className="flex flex-1 flex-col gap-3">
        <Skeleton className="h-4 w-10 rounded-full" />
        <div className="mt-8 space-y-2">
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-1/2 rounded-full" />
        </div>
        <div className="mt-24 flex items-center">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Skeleton key={idx} className="size-6 rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
}
