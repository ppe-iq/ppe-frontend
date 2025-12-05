"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { HeroSlide } from "./types";
import {
  container,
  description,
  dot,
  gradientDesktop,
  gradientMobile,
  image,
  nextButton,
  previousButton,
  primaryButton,
  secondaryButton,
  subTitle,
  title,
} from "./variants";

type Props = {
  slides: HeroSlide[];
};

export default function HeroContent({ slides }: Props) {
  // Active slide
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const activeSlide = slides[currentSlide];
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Prev slide handler
  function handlePrevSlide() {
    setIsPaused(true); // Pause auto sliding on manual interaction
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }

  // Next slide handler
  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return; // Skip if paused

    const interval = setInterval(() => {
      handleNextSlide();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentSlide, handleNextSlide, isPaused]);

  // Resume auto sliding after 10 seconds of inactivity
  useEffect(() => {
    if (!isPaused) return;
    const timeout = setTimeout(() => {
      setIsPaused(false);
    }, 10000); // 10 seconds

    return () => clearTimeout(timeout);
  }, [isPaused]);

  return (
    <section className="relative flex min-h-[calc(100vh-5.5rem)] w-full flex-col overflow-hidden rounded-3xl px-4 sm:px-6 md:px-8 lg:px-10">
      <div className="mt-10 flex flex-1 flex-col justify-center gap-14">
        <div className="space-y-4">
          <div className="flex max-w-3xl flex-col items-center space-y-2 sm:items-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={`title-${currentSlide}`}
                variants={title}
                initial="hidden"
                animate="show"
                exit="exit"
                className="font-bebas from-primary-700 via-primary-600 to-primary-450 w-fit max-w-xl bg-gradient-to-r bg-clip-text text-center text-6xl tracking-wide text-balance text-transparent sm:text-left sm:text-7xl md:text-8xl lg:text-9xl"
              >
                {activeSlide.title}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.h3
                key={`subtitle-${currentSlide}`}
                variants={subTitle}
                initial="hidden"
                animate="show"
                exit="exit"
                className="font-bebas text-primary-550 text-center text-2xl tracking-wider sm:text-left sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
              >
                {activeSlide.subtitle}
              </motion.h3>
            </AnimatePresence>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${currentSlide}`}
              variants={description}
              initial="hidden"
              animate="show"
              exit="exit"
              className="text-secondary-600 max-w-2xl text-center text-sm text-balance sm:text-left sm:text-base sm:leading-relaxed md:text-lg lg:text-xl xl:text-xl"
            >
              {activeSlide.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          exit="exit"
          className="flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`contact-${currentSlide}`}
              variants={primaryButton}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full sm:w-fit"
            >
              <PrimaryButton
                href={activeSlide.cta_link}
                className="w-full px-14"
              >
                {activeSlide.cta_text}
              </PrimaryButton>
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={`learn-${currentSlide}`}
              variants={secondaryButton}
              initial="hidden"
              animate="show"
              exit="exit"
              className="w-full sm:w-fit"
            >
              <SecondaryButton href="/services" className="w-full px-14">
                Learn More
              </SecondaryButton>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Prev and Next buttons */}
      {slides.length > 1 && (
        <div className="z-20 mt-4 flex items-center justify-between gap-2 pb-8 sm:justify-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={`prev-${currentSlide}`}
              variants={previousButton}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Button
                onClick={handlePrevSlide}
                variant="secondary"
                size="icon"
                aria-label="Previous slide"
                className="bg-primary-450 grid place-items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110"
              >
                <ChevronLeftIcon strokeWidth={1.5} className="size-6" />
              </Button>
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={`next-${currentSlide}`}
              variants={nextButton}
              initial="hidden"
              animate="show"
              exit="exit"
            >
              <Button
                onClick={handleNextSlide}
                size="icon"
                aria-label="Next slide"
                className="bg-primary-650 grid place-items-center rounded-full transition-all duration-300 ease-in-out hover:scale-110"
              >
                <ChevronRightIcon strokeWidth={1.5} className="size-6" />
              </Button>
            </motion.div>
          </AnimatePresence>
        </div>
      )}

      {/* Screen readers friendly */}
      <div
        className="sr-only"
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        Slide {currentSlide + 1} of {slides.length}: {activeSlide.title}
      </div>

      <AnimatePresence mode="sync">
        <div
          className="absolute right-1/2 bottom-4 z-50 flex translate-x-1/2 items-center justify-end gap-2"
          key={`dots-${currentSlide}`}
        >
          {slides.length > 0 &&
            slides.map((item, idx) => (
              // Slide indicators
              <motion.span
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setCurrentSlide(idx);
                  }
                }}
                variants={dot(idx)}
                initial="hidden"
                animate="show"
                exit="exit"
                className={cn(
                  "bg-primary-450 h-1.5 w-12 cursor-pointer rounded-full",
                  activeSlide.title === item.title && "bg-primary-650",
                )}
              />
            ))}
        </div>
      </AnimatePresence>

      <AnimatePresence mode="sync">
        <motion.figure
          key={`image-${currentSlide}`}
          variants={image}
          initial="hidden"
          animate="show"
          exit="exit"
          className="absolute inset-0 -z-10 size-full"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${activeSlide.image}`}
            fill
            priority={currentSlide === 0}
            alt={activeSlide.title}
            sizes="100vw"
            className={cn("size-full object-cover object-center")}
          />
        </motion.figure>
      </AnimatePresence>

      {/* Desktop */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activeSlide.image}
          variants={gradientDesktop}
          initial="hidden"
          animate="show"
          exit={gradientDesktop.exit}
          className="to-primary-950/90 from-primary-950 absolute -top-18 -left-32 -z-10 hidden h-[calc(100vh+4rem)] w-full bg-gradient-to-r blur-3xl sm:block sm:w-3/4"
        />
      </AnimatePresence>

      {/* Mobile */}
      <AnimatePresence mode="wait">
        <motion.span
          key={activeSlide.image}
          variants={gradientMobile}
          initial="hidden"
          animate="show"
          exit={gradientMobile.exit}
          className="to-primary-950/90 from-primary-950 absolute -bottom-18 -left-32 -z-10 h-[calc(65vh+4rem)] w-[calc(100vw+20rem)] bg-gradient-to-r blur-3xl sm:hidden"
        />
      </AnimatePresence>
    </section>
  );
}
