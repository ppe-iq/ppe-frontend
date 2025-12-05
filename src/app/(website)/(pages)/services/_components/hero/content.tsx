"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";
import useScrollToTop from "@/hooks/use-scroll-to-top";

import {
  breadcrumbTracker,
  description,
  gradientDesktop,
  gradientMobile,
  image,
  title,
} from "./variants";

export default function ServicesHeroContent() {
  // Custom hook to scroll to top
  useScrollToTop();

  return (
    <section className="relative flex min-h-[calc(100vh-5.5rem)] w-full flex-col overflow-hidden rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-10 flex flex-1 flex-col justify-center gap-14">
        <motion.div
          variants={breadcrumbTracker}
          initial="hidden"
          animate="show"
          className="mx-auto sm:mx-0"
        >
          <BreadcrumbTracker
            prevPages={[{ label: "Home", href: "/" }]}
            currPage="Services"
          />
        </motion.div>
        <div className="space-y-4">
          <motion.h1
            variants={title}
            initial="hidden"
            animate="show"
            exit="exit"
            className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-full max-w-xl bg-gradient-to-r bg-clip-text text-center text-7xl tracking-wide text-balance text-transparent sm:text-left sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Services
          </motion.h1>
          <motion.p
            variants={description}
            initial="hidden"
            animate="show"
            exit="exit"
            className="text-secondary-600 max-w-2xl text-center text-sm leading-relaxed sm:text-left sm:text-base md:text-lg"
          >
            From expert consultation to hands-on implementation, our services
            are designed to deliver precision, reliability, and user-centric
            solutions tailored for every industrial environment.
          </motion.p>
        </div>
      </div>

      <motion.figure
        variants={image}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute inset-0 -z-10 size-full"
      >
        <Image
          src="/images/services/hero.jpg"
          fill
          priority
          alt="Hero image"
          className="size-full object-cover object-center md:object-left"
        />
      </motion.figure>

      {/* Desktop */}
      <motion.span
        variants={gradientDesktop}
        initial="hidden"
        animate="show"
        className="to-primary-950/90 from-primary-950 absolute -top-18 -left-32 -z-10 hidden h-[calc(100vh+4rem)] w-full bg-gradient-to-r blur-3xl sm:block"
      />

      {/* Mobile */}
      <motion.span
        variants={gradientMobile}
        initial="hidden"
        animate="show"
        className="to-primary-950/90 from-primary-950 absolute -top-18 -left-32 -z-10 h-[calc(100vh+4rem)] w-full bg-gradient-to-r blur-3xl sm:hidden"
      />
    </section>
  );
}
