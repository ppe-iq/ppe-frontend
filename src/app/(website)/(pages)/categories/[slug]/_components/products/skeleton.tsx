import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryProductsSkeleton() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {Array.from({ length: 3 }).map((_, idx) => (
                <div key={idx} className="size-full bg-secondary-450 p-4 rounded-xl">
                    <Skeleton className="h-72 w-full" />
                    <Skeleton className="h-10 w-1/2 my-4" />
                    <Skeleton className="h-6 w-full rounded-full" />
                </div>
            ))}
        </div>
    )
}