"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import PrimaryButton from "@/components/global/button/primary-button";
import Logo from "@/components/global/logo";
import { cn } from "@/lib/utils";

import MobileNavMenu from "./mobo-nav-menu";
import { NavMenu } from "./nav-menu";

export default function Header() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    const previousValue = scrollY.getPrevious() ?? 0;
    if (latestValue < previousValue) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <motion.header
      className={cn(
        "border-secondary-550 bg-primary-450/50 fixed top-2 left-1/2 z-50 flex w-[calc(100%-19px)] max-w-[1480px] -translate-x-1/2 items-center justify-between rounded-full border px-5 py-2 backdrop-blur-md sm:w-[calc(100%-32px)] xl:w-[calc(100%-4px)]",
      )}
      variants={{
        hidden: { opacity: 0, y: "-100%", scale: 0.9 },
        visible: { opacity: 1, y: 0, scale: 1 },
      }}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <Link href="/">
        <Logo />
      </Link>

      {/* Desktop Nav Menu  */}
      <NavMenu />

      <PrimaryButton
        href="/company/contact"
        className="from-primary-700 via-primary-550 to-primary-700 upper-md:grid hidden rounded-full bg-gradient-to-r py-1 text-sm tracking-wide uppercase"
      >
        Contact Us
      </PrimaryButton>

      {/* Mobile Nav Menu */}
      <MobileNavMenu />
    </motion.header>
  );
}
