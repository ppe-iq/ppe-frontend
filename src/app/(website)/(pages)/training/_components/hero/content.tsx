"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";
import PrimaryButton from "@/components/global/button/primary-button";
import { useReducedMotion } from "framer-motion";

import {
  breadcrumbTracker,
  cta,
  description,
  gradientDesktop,
  gradientMobile,
  image,
  title,
} from "./variants";

export default function TrainingHeroContent() {
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
            prevPages={[{ label: "Home", href: "/" }]}
            currPage="Training"
          />
        </motion.div>
        <div className="space-y-4">
          <motion.h1
            variants={reduceMotion ? {} : title}
            initial="hidden"
            animate="show"
            exit="exit"
            className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-full max-w-xl bg-gradient-to-r bg-clip-text text-center text-7xl tracking-wide text-balance text-transparent sm:text-left sm:text-7xl md:text-8xl lg:text-9xl"
          >
            Training
          </motion.h1>
          {/* Description */}
          <p className="text-secondary-600 max-w-2xl text-center text-sm leading-relaxed sm:text-left sm:text-base md:text-lg">
            {"Take your career to the next level and receive the support that will ensure you excel in your field. Our tailored training programs combine theory with hands-on practice to build confidence and expertise. With PPE, you gain the knowledge, tools, and mentorship needed to succeed and lead in today's competitive industry."
              .split(" ")
              .map((word, idx) => (
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

          {/* CTA */}
          <motion.div
            variants={reduceMotion ? {} : cta}
            initial="hidden"
            animate="show"
            viewport={cta.viewport}
          >
            <PrimaryButton
              href="/training/reserve"
              containerClassNames="sm:w-fit mt-10"
              className="w-full"
            >
              Reserve a Seat
            </PrimaryButton>
          </motion.div>
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
          src="/images/training/hero.jpg"
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
