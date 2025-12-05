"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";
import PrimaryButton from "@/components/global/button/primary-button";

import { CourseDetailsResponse } from "../types";
import {
  breadcrumbTracker,
  cta,
  description,
  gradientDesktop,
  gradientMobile,
  image,
  title,
} from "./variants";

// Props
type Props = {
  course: CourseDetailsResponse;
};
export default function TrainingCourseDetailsHeroContent({ course }: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[calc(100vh-5.5rem)] w-full flex-col overflow-hidden rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-10 flex flex-1 flex-col justify-center gap-14">
        <motion.div
          variants={reduceMotion ? {} : breadcrumbTracker}
          initial="hidden"
          animate="show"
          className="mx-auto sm:mx-0"
        >
          <BreadcrumbTracker
            prevPages={[
              { label: "Home", href: "/" },
              { label: "Training", href: "/training" },
            ]}
            currPage={course.title}
          />
        </motion.div>
        <div className="space-y-4">
          <motion.h1
            variants={reduceMotion ? {} : title}
            initial="hidden"
            animate="show"
            exit="exit"
            className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-fit max-w-2xl bg-gradient-to-r bg-clip-text text-center text-5xl tracking-wide text-balance text-transparent sm:text-left sm:text-7xl md:text-8xl lg:text-8xl"
          >
            {course.title}
          </motion.h1>

          {/* Description */}
          <p className="text-secondary-600 max-w-2xl text-center text-sm leading-relaxed sm:text-left sm:text-base md:text-lg">
            {course.short_description.split(" ").map((word, idx) => (
              <motion.span
                variants={reduceMotion ? {} : description(idx)}
                initial="hidden"
                animate="show"
                viewport={description(idx).viewport}
                key={idx}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>
        </div>

        {/* CTA */}
        <motion.div
          variants={reduceMotion ? {} : reduceMotion ? {} : cta}
          initial="hidden"
          animate="show"
          viewport={cta.viewport}
        >
          <PrimaryButton
            href="/training/reserve"
            containerClassNames="sm:w-fit"
            className="w-full"
          >
            Reserve a Seat
          </PrimaryButton>
        </motion.div>
      </div>

      <motion.figure
        variants={reduceMotion ? {} : image}
        initial="hidden"
        animate="show"
        exit="exit"
        className="absolute inset-0 -z-10 size-full"
      >
        <Image
          src={
            `${process.env.NEXT_PUBLIC_CDN_URL}${course.image}` ||
            "/images/training/course-details-hero.jpg"
          }
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
        className="to-primary-950/90 from-primary-950 absolute -top-18 -left-32 -z-10 hidden h-[calc(100vh+4rem)] w-full bg-gradient-to-r blur-3xl sm:block"
      />

      {/* Mobile */}
      <motion.span
        variants={reduceMotion ? {} : gradientMobile}
        initial="hidden"
        animate="show"
        className="to-primary-950/90 from-primary-950 absolute -top-18 -left-32 -z-10 h-[calc(100vh+4rem)] w-full bg-gradient-to-r blur-3xl sm:hidden"
      />
    </section>
  );
}
