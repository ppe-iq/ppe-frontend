"use client";

import { Loader2Icon, SearchIcon, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Category } from "@/app/(website)/(pages)/categories/_components/all/types";
import { ProductType } from "@/app/(website)/(pages)/categories/[slug]/_components/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useDebounce from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

// Props
type Props = {
  productTypes: ProductType[];
  categories?: Category[];
  showCategoryFilter?: boolean;
};

// Component
export default function Filter({
  productTypes,
  categories,
  showCategoryFilter,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  // Get current values from URL
  const typeQuery = searchParams.get("type") || "All";
  const searchQuery = searchParams.get("search") || "";
  const categoryQuery = searchParams.get("category") || "All";

  // Local state
  const [type, setType] = useState<string>(typeQuery);
  const [search, setSearch] = useState<string>(searchQuery);
  const [category, setCategory] = useState<string>(categoryQuery);

  // Debounced search
  const { debouncedValue } = useDebounce({ value: search, ms: 200 });

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    // Handle type filter
    if (type === "All") {
      params.delete("type");
    } else {
      params.set("type", type);
    }

    // Handle search filter
    if (debouncedValue) {
      params.set("search", debouncedValue);
    } else {
      params.delete("search");
    }

    // Handle category filter
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    const newUrl = `?${params.toString()}`;
    const currentUrl = `?${searchParams.toString()}`;

    // Only update if URL actually changed
    if (newUrl !== currentUrl) {
      startTransition(() => {
        router.replace(newUrl, { scroll: false });
      });
    }
  }, [type, category, debouncedValue, router, searchParams]);

  // Clear filters handler
  function clearFilters() {
    setType("All");
    setCategory("All");
    setSearch("");
    startTransition(() => {
      router.replace(window.location.pathname, { scroll: false });
    });
  }

  return (
    <div
      className={cn(
        "grid w-full gap-3 sm:grid-cols-2",
        showCategoryFilter && "sm:grid-cols-3",
      )}
    >
      {/* Product Type Filter */}
      <div className="flex-1 space-y-2">
        <Label htmlFor="type">Filter by Type</Label>
        <Select value={type} onValueChange={setType}>
          <SelectTrigger id="type" className="w-full cursor-pointer">
            <SelectValue placeholder="Select product type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel className="font-medium">Product Type</SelectLabel>
              <SelectItem value="All" className="cursor-pointer">
                All Types
              </SelectItem>
              {productTypes.map((productType) => (
                <SelectItem
                  key={productType.id}
                  value={productType.slug}
                  className="cursor-pointer"
                >
                  {productType.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Categoty Filter */}
      {showCategoryFilter && categories && (
        <div className="flex-1 space-y-2">
          <Label htmlFor="type">Filter by Category</Label>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger id="category" className="w-full cursor-pointer">
              <SelectValue placeholder="Select product category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel className="font-medium">
                  Product category
                </SelectLabel>
                <SelectItem value="All" className="cursor-pointer">
                  All Categories
                </SelectItem>
                {categories.map((category) => (
                  <SelectItem
                    key={category.id}
                    value={category.slug}
                    className="cursor-pointer"
                  >
                    {category.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}

      {/* Search */}
      <div className="flex flex-1 items-center gap-2">
        <div className="flex flex-1 flex-col gap-2">
          <Label htmlFor="search">Search Products</Label>
          <div className="relative w-full">
            <Input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
              placeholder="Search by product name..."
            />
            <SearchIcon
              strokeWidth={1.5}
              className="text-secondary-650 absolute top-1/2 left-3 size-4 -translate-y-1/2"
              aria-hidden="true"
            />
          </div>
        </div>

        {(type !== "All" || search !== "" || category !== "All") && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            disabled={isPending}
            className="mt-6 flex items-center gap-1 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-600"
          >
            <XIcon /> <span>Clear filters</span>
          </Button>
        )}
      </div>

      {/* Active filters indicator */}
      {isPending && (
        <p
          className={cn(
            "text-secondary-800 col-span-2 flex items-center justify-center gap-2 text-sm",
            showCategoryFilter && "col-span-3",
          )}
        >
          <Loader2Icon className="size-3 animate-spin" />
          <span>Updating results...</span>
        </p>
      )}
    </div>
  );
}
