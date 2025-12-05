import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryDetailsSkeleton() {
    return (
        <div className="w-full overflow-hidden rounded-[24px]">
            <Skeleton className="bg-secondary-500 h-[calc(100vh-10rem)] w-full p-10">
                <div className="mt-24 space-y-4">
                    <Skeleton className="bg-secondary-550 h-5 w-44 rounded-full" />
                    <Skeleton className="bg-secondary-550 h-8 w-full rounded-full sm:w-96" />
                    <Skeleton className="bg-secondary-550 h-6 w-full rounded-full sm:w-1/2" />
                </div>
            </Skeleton>
        </div>
    );
}