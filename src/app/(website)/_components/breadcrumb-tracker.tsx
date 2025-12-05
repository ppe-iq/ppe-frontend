import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";

// Props
type Props = {
  prevPages: {
    label: string;
    href: string;
  }[];
  currPage: string;
  prevPagesClassNames?: string;
  currPageClassNames?: string;
  separatorClassNames?: string;
  dotClassNames?: string;
};

export default function BreadcrumbTracker({
  prevPages,
  currPage,
  prevPagesClassNames,
  currPageClassNames,
  separatorClassNames,
  dotClassNames,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <span
        className={cn("bg-secondary-400 size-1.5 rounded-full", dotClassNames)}
      />

      <div className="flex items-center gap-1">
        {prevPages.map((page) => (
          <React.Fragment key={page.href}>
            <Link
              href={page.href}
              className={cn(
                "text-secondary-400 hover:text-primary-650 text-xs transition duration-300 sm:text-sm",
                prevPagesClassNames,
              )}
            >
              {page.label}
            </Link>

            <span className={cn("text-secondary-400", separatorClassNames)}>
              /
            </span>
          </React.Fragment>
        ))}
        <span
          className={cn(
            "text-primary-650 line-clamp-1 text-xs font-medium sm:text-sm",
            currPageClassNames,
          )}
        >
          {currPage}
        </span>
      </div>
    </div>
  );
}
