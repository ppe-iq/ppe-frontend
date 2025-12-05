"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";

import {
  breadcrumbTracker,
  gradientDesktop,
  gradientMobile,
  image,
  title,
} from "./variants";

export default function VideosHeroContent() {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100vh-20rem)] w-full flex-col overflow-hidden rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-14">
        <motion.div
          variants={reduceMotion ? {} : breadcrumbTracker}
          initial="hidden"
          animate="show"
          className="mx-auto sm:mx-0"
        >
          <BreadcrumbTracker
            prevPages={[{ label: "Home", href: "/" }]}
            currPage="Videos"
          />
        </motion.div>
        <div className="space-y-4">
          <motion.h1
            variants={reduceMotion ? {} : title}
            initial="hidden"
            animate="show"
            exit="exit"
            className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-full max-w-2xl bg-gradient-to-r bg-clip-text text-center text-7xl tracking-wide text-balance text-transparent sm:text-left sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Videos
          </motion.h1>
        </div>
      </div>

      <motion.figure
        variants={reduceMotion ? {} : image}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute inset-0 -z-10 size-full"
      >
        <Image
          src="/images/company/about-hero.jpg"
          fill
          priority
          alt="Hero image"
          className="size-full object-cover object-center md:object-left"
        />
      </motion.figure>

      {/* Desktop */}
      <motion.span
        variants={reduceMotion ? {} : gradientDesktop}
        initial="hidden"
        animate="show"
        className="to-primary-950/90 from-primary-950 absolute -bottom-24 -left-32 -z-10 hidden w-[calc(100vw+10rem)] bg-gradient-to-t blur-3xl sm:block"
      />

      {/* Mobile */}
      <motion.span
        variants={reduceMotion ? {} : gradientMobile}
        initial="hidden"
        animate="show"
        className="to-primary-950/90 from-primary-950 absolute -bottom-24 -left-24 -z-10 w-[calc(100vw+12rem)] bg-gradient-to-t blur-3xl sm:hidden"
      />
    </section>
  );
}
