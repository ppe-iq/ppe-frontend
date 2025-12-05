import { Skeleton } from "@/components/ui/skeleton";

export default function AllProductsSkeleton() {
  return (
    <div className="grid w-full gap-3 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 3 }).map((_, idx) => (
        <div key={idx} className="bg-secondary-450 size-full rounded-xl p-4">
          <Skeleton className="h-72 w-full" />
          <Skeleton className="my-4 h-10 w-1/2" />
          <Skeleton className="h-6 w-full rounded-full" />
        </div>
      ))}
    </div>
  );
}
