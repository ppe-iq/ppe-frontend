"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
} & (
  | ({ href: string } & Omit<
      React.ComponentPropsWithoutRef<typeof Link>,
      "href"
    >)
  | ({ href?: undefined } & React.ComponentPropsWithRef<typeof Button>)
);
export default function SecondaryButton({
  className,
  containerClassName,
  children,
  href,
  ...props
}: Props) {
  const sharedClasses = cn(
    "bg-secondary-500 text-secondary-950 h-10 cursor-pointer rounded-[8px] text-base font-medium hover:bg-secondary-600 transition-all duration-300 easeInOut",
    className,
  );

  return href ? (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      }}
      className={cn("", containerClassName)}
    >
      <Link
        href={href}
        className={buttonVariants({ className: sharedClasses })}
        {...(props as Omit<
          React.ComponentPropsWithoutRef<typeof Link>,
          "href"
        >)}
      >
        {children}
      </Link>
    </motion.div>
  ) : (
    <motion.div
      whileHover={{
        scale: 1.02,
        transition: {
          duration: 0.2,
          ease: "easeInOut",
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      }}
      whileTap={{
        scale: 0.98,
        transition: {
          duration: 0.1,
          ease: "easeInOut",
          type: "spring",
          stiffness: 300,
          damping: 12,
        },
      }}
      className={cn("", containerClassName)}
    >
      <Button
        variant="secondary"
        className={sharedClasses}
        {...(props as React.ComponentPropsWithoutRef<typeof Button>)}
      >
        {children}
      </Button>
    </motion.div>
  );
}
