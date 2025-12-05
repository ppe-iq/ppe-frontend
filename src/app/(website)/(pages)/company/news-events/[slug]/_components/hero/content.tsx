"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";
import { chips } from "@/app/(website)/(pages)/blogs/[slug]/components/hero/variants";
import { formatDate } from "@/lib/utils";

import { NewEventDetailsResponse } from "../types";
import {
  breadcrumbTracker,
  gradientDesktop,
  gradientMobile,
  image,
  title,
} from "./variants";

// Props
type Props = {
  newEvent: NewEventDetailsResponse;
};
export default function CompanyNewsEventsDetailsHeroContent({
  newEvent,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100vh-20rem)] w-full flex-col overflow-hidden rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-10 flex flex-1 flex-col items-center justify-center gap-14">
        <div className="flex flex-col gap-4 sm:items-start">
          <motion.div
            variants={reduceMotion ? {} : breadcrumbTracker}
            initial="hidden"
            animate="show"
            className=""
          >
            <BreadcrumbTracker
              prevPages={[
                { label: "Home", href: "/" },
                { label: "Company", href: "/company/about" },
                { label: "News & Events", href: "/company/news-events" },
              ]}
              currPage={newEvent.title}
            />
          </motion.div>
          <motion.h1
            variants={reduceMotion ? {} : title}
            initial="hidden"
            animate="show"
            className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-full bg-gradient-to-r bg-clip-text text-3xl tracking-wide text-balance text-transparent sm:text-left sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {newEvent.title}
          </motion.h1>

          <div className="space-y-5">
            <motion.p
              variants={title}
              initial="hidden"
              animate="show"
              className="text-secondary-550"
            >
              {formatDate(newEvent.published_at)}
            </motion.p>

            <div className="flex w-full flex-wrap items-center gap-2 sm:justify-start">
              {newEvent.tags.map((tag, idx) => (
                <motion.span
                  key={tag.id}
                  variants={reduceMotion ? {} : chips(idx)}
                  initial="hidden"
                  whileInView="show"
                  viewport={chips(idx).viewport}
                  className="text-secondary-400 bg-secondary-400/10 border-primary-450/50 rounded-full border px-2 py-1 text-sm backdrop-blur-xl sm:px-4 sm:py-2 sm:text-base"
                >
                  {tag.name}
                </motion.span>
              ))}
            </div>
          </div>
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
          src="/images/company/about-Hero.jpg"
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
          alt={`${newEvent.title} - hero image`}
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
