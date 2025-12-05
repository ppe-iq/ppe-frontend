"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Loader2Icon, SearchIcon, XIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NativeSelect,
  NativeSelectOption,
} from "@/components/ui/native-select";
import useDebounce from "@/hooks/use-debounce";
import { cn } from "@/lib/utils";

import { BlogTag } from "./types";
import { filterItem, searchInput } from "./variants";

// Props
type Props = {
  tags: BlogTag[];
};

export default function BlogsAllFilter({ tags }: Props) {
  // Naviation router
  const router = useRouter();

  // Search params
  const searchParams = useSearchParams();

  // Transition effect
  const [isPending, startTransition] = useTransition();

  // Reduce motion
  const reduceMotion = useReducedMotion();

  // Get current values from URL
  const tagQuery = searchParams.get("tag") || "All";
  const searchQuery = searchParams.get("search") || "";

  // Local state
  const [tag, setTag] = useState<string>(tagQuery);
  const [search, setSearch] = useState<string>(searchQuery);

  // Debounced search
  const { debouncedValue: debouncedSearch } = useDebounce({
    value: search,
    ms: 200,
  });

  // Update URL when filters change
  useEffect(() => {
    // Build search params
    const params = new URLSearchParams(searchParams);

    // Handle tag filter
    if (tag === "All") {
      params.delete("tag");
    } else {
      params.set("tag", tag);
    }

    // Handle search filter
    if (!debouncedSearch) {
      params.delete("search");
    } else {
      params.set("search", debouncedSearch);
    }

    // Compare the URLs
    const newUrl = `?${params.toString()}`;
    const currentUrl = `?${searchParams.toString()}`;

    // Only update if URL actually changed
    if (newUrl !== currentUrl) {
      startTransition(() => {
        router.replace(newUrl, { scroll: false });
      });
    }
  }, [tag, debouncedSearch, router, searchParams]);

  // Clear filters handler
  function clearFilters() {
    setTag("All");
    setSearch("");
    startTransition(() => {
      router.replace(window.location.pathname, { scroll: false });
    });
  }

  return (
    <div className="flex w-full flex-col">
      <div className="flex flex-col gap-2">
        <div className="w-full flex-1 grid-cols-4 items-center gap-2 sm:grid">
          {tags &&
            tags.map((item, idx) => (
              <motion.div
                key={item.id}
                onClick={() => setTag(item.slug)}
                variants={reduceMotion ? {} : filterItem(idx)}
                initial="hidden"
                animate="show"
                viewport={filterItem(idx).viewport}
                className={cn(
                  "bg-secondary-500 hover:bg-secondary-550 hidden cursor-pointer rounded-full px-6 py-2 text-center font-medium transition-colors duration-300 sm:block",
                  item.slug === tag && "bg-secondary-950 text-secondary-400",
                )}
              >
                <span className="text-sm">{item.name}</span>
              </motion.div>
            ))}

          {/* Select for Mobile View */}
          <motion.div
            variants={reduceMotion ? {} : searchInput}
            initial="hidden"
            animate="show"
            viewport={searchInput.viewport}
            className="relative col-span-4 mb-2 sm:hidden"
          >
            <NativeSelect
              id="tags-select"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="min-w-full"
            >
              {tags &&
                [{ id: 0, slug: "All", name: "All" }, ...tags].map((item) => (
                  <NativeSelectOption key={item.id} value={item.slug}>
                    {item.name}
                  </NativeSelectOption>
                ))}
            </NativeSelect>
          </motion.div>

          <motion.div
            variants={reduceMotion ? {} : searchInput}
            initial="hidden"
            animate="show"
            viewport={searchInput.viewport}
            className={cn(
              "relative col-span-2 w-full",
              tags.length < 2 && "col-span-3",
            )}
          >
            <Input
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search"
              className="w-full pl-8 !text-base"
            />

            <SearchIcon
              size={16}
              className="text-secondary-650 absolute top-1/2 left-2 -translate-y-1/2"
            />
          </motion.div>
        </div>

        {(tag !== "All" || search !== "") && (
          <Button
            variant="ghost"
            onClick={clearFilters}
            disabled={isPending}
            className="flex items-center gap-1 bg-rose-50 text-rose-600 hover:bg-rose-100 hover:text-rose-600"
          >
            <XIcon /> <span>Clear filters</span>
          </Button>
        )}
      </div>

      {/* Active filters indicator */}
      {isPending && (
        <p
          className={cn(
            "text-secondary-800 col-span-2 mt-4 flex items-center justify-center gap-2 text-sm",
          )}
        >
          <Loader2Icon className="size-3 animate-spin" />
          <span>Updating results...</span>
        </p>
      )}
    </div>
  );
}
