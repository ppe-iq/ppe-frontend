import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsSkeleton() {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-2">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Skeleton
          key={idx}
          className="grid h-[30rem] w-full place-items-center p-4"
        >
          <Skeleton className="bg-secondary-600 mb-4 h-54 w-full rounded-[6px]" />
          <Skeleton className="bg-secondary-600 mb-4 h-6 w-full rounded-full" />
          <div className="w-full space-y-2">
            <Skeleton className="bg-secondary-600 mb-4 h-6 w-full rounded-full" />
            <Skeleton className="bg-secondary-600 mb-4 h-6 w-1/2 rounded-full" />
          </div>
        </Skeleton>
      ))}
    </div>
  );
}
