import React from "react";

import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  id?: string;
};

export default function SectionWrapper({
  children,
  className,
  ref,

  id,
}: Props) {
  return (
    <section
      id={id}
      ref={ref}
      className={cn(
        "bg-secondary-450 relative w-full max-w-full overflow-hidden",
        "flex flex-col items-center justify-center gap-10 rounded-[24px]",
        "py-2 sm:py-6 md:py-8 lg:py-10",
        "px-2 sm:px-6 md:px-8 lg:px-10",
        "pl-[max(theme(spacing.2),env(safe-area-inset-left))]",
        "pr-[max(theme(spacing.2),env(safe-area-inset-right))]",
        className,
      )}
    >
      {children}
    </section>
  );
}
