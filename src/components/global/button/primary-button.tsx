import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  containerClassNames?: string;
  children: React.ReactNode;
} & (
  | ({ href: string } & Omit<
      React.ComponentPropsWithoutRef<typeof Link>,
      "href"
    >)
  | ({ href?: undefined } & React.ComponentPropsWithRef<typeof Button>)
);
export default function PrimaryButton({
  className,
  containerClassNames,
  href,
  children,
  ...props
}: Props) {
  const sharedClasses = cn(
    "bg-primary-650 text-primary-950 h-10 cursor-pointer rounded-[8px] text-base hover:bg-primary-750 font-medium transition-all duration-300 ease-in-out w-full",
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
      className={cn(containerClassNames)}
    >
      <Link
        href={href}
        className={cn(
          buttonVariants({
            className: sharedClasses,
          }),
        )}
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
      className={cn(containerClassNames)}
    >
      <Button
        className={sharedClasses}
        {...(props as React.ComponentPropsWithRef<typeof Button>)}
      >
        {children}
      </Button>
    </motion.div>
  );
}
