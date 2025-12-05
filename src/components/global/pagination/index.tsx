"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  currentPage: number;
  totalPages: number;
  scrollToTop?: boolean;
};

export default function Pagination({
  currentPage,
  totalPages,
  scrollToTop = false,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();

  function goToPage(page: number) {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.push(`?${params.toString()}`, { scroll: scrollToTop });
  }

  // Generate page numbers to display
  function getPageNumbers() {
    const pages: (number | string)[] = [];
    const maxVisible = 5; // Show max 5 page numbers

    if (totalPages <= maxVisible) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      // Calculate range around current page
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      // Adjust if at boundaries
      if (currentPage <= 3) {
        end = 4;
      } else if (currentPage >= totalPages - 2) {
        start = totalPages - 3;
      }

      // Add ellipsis if needed
      if (start > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  }

  const pageNumbers = getPageNumbers();

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => goToPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-secondary-400 text-secondary-950 hover:bg-secondary-500 hover:text-secondary-950 size-10 cursor-pointer rounded-full"
        aria-label="Previous page"
      >
        <ChevronLeftIcon className="size-4" />
      </Button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {pageNumbers.map((page, idx) =>
          typeof page === "number" ? (
            <Button
              key={idx}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              onClick={() => goToPage(page)}
              className={cn(
                "size-10 rounded-full",
                currentPage === page &&
                  "bg-primary-600 text-primary-950 hover:bg-primary-700",
              )}
              aria-label={`Go to page ${page}`}
              aria-current={currentPage === page ? "page" : undefined}
            >
              {page}
            </Button>
          ) : (
            <span
              key={idx}
              className="text-secondary-600 px-2 text-sm"
              aria-hidden="true"
            >
              {page}
            </span>
          ),
        )}
      </div>

      {/* Next Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => goToPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-primary-950 hover:bg-primary-850 size-10 cursor-pointer rounded-full text-white hover:text-white"
        aria-label="Next page"
      >
        <ChevronRightIcon className="size-4" />
      </Button>
    </div>
  );
}
