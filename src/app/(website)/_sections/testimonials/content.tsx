"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import { Testimonial } from "./types";
import {
  companyBadge,
  description,
  quote,
  testimonialContainer,
  testimonialImage,
  testimonialName,
  testimonialNextButton,
  testimonialPrevButton,
  testimonialQuote,
  testimonialRating,
  title,
} from "./variants";

type Props = {
  testimonials: Testimonial[];
};
export default function TestimonialsContent({ testimonials }: Props) {
  const shouldReduceMotion = useReducedMotion();

  // Current Testimonial
  const [currentTestimonial, setCurrentTestimonial] = useState<number>(0);

  // Ref to track first render
  const isFirstLoadRef = useRef<boolean | null>(true);

  // Effect for tracking first mount
  useEffect(() => {
    isFirstLoadRef.current = false;
  }, []);

  // Next testimonial handler
  function handleNextTestimonial() {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  }

  // Prev testimonial handler
  function handlePrevTestimonial() {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }

  return (
    <SectionWrapper className="bg-secondary-400">
      {/* Quote */}
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Great ideas deserve great words — here's where they begin”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          What Other Companies Say About Us
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Stay in the loop with insights, stories, and inspiration straight from our blog."
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={shouldReduceMotion ? {} : description(idx)}
                initial="hidden"
                whileInView="show"
                viewport={description(idx).viewport}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
        </p>
      </div>

      {/* Testimonial Card */}
      <TestimonialCard
        testimonial={testimonials[currentTestimonial]}
        onNext={handleNextTestimonial}
        onPrev={handlePrevTestimonial}
        isFirstLoad={isFirstLoadRef.current}
        reduceMotion={shouldReduceMotion}
        count={testimonials.length}
      />
    </SectionWrapper>
  );
}

// Testimonial Card
type TestimonialCardProps = {
  testimonial: Testimonial;
  onNext: () => void;
  onPrev: () => void;
  isFirstLoad: boolean | null;
  reduceMotion: boolean | null;
  count: number;
};
function TestimonialCard({
  testimonial,
  onNext,
  onPrev,
  isFirstLoad,
  reduceMotion,
  count,
}: TestimonialCardProps) {
  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={testimonial.id}
        variants={reduceMotion ? {} : testimonialContainer}
        initial="hidden"
        whileInView="show"
        exit="exit"
        viewport={testimonialContainer.viewport}
        className="grid w-full gap-4 overflow-hidden rounded-[12px] sm:grid-cols-2 sm:gap-8"
      >
        <AnimatePresence>
          <motion.figure
            key={testimonial.id}
            variants={reduceMotion ? {} : testimonialImage}
            custom={isFirstLoad}
            initial="hidden"
            whileInView="show"
            exit="exit"
            viewport={testimonialImage.viewport}
            className="relative aspect-[521/300] overflow-hidden rounded-[12px]"
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_URL}${testimonial.image}`}
              fill
              sizes="(min-width: 1024) 500px, 80vw"
              alt={`What ${testimonial.company_name} say about us`}
              className="size-full object-cover"
            />
          </motion.figure>
        </AnimatePresence>

        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-4 sm:gap-8">
            <motion.p
              variants={reduceMotion ? {} : companyBadge}
              custom={isFirstLoad}
              className="bg-secondary-550/40 w-fit rounded-[6px] px-2 py-1 text-xs font-medium"
            >
              {testimonial.company_name}
            </motion.p>

            <div className="space-y-1.5">
              <motion.h2
                variants={reduceMotion ? {} : testimonialName}
                custom={isFirstLoad}
                className="text-primary-950 font-bebas text-lg tracking-wider sm:text-2xl"
              >
                {testimonial.full_name}
              </motion.h2>
              <p className="text-secondary-800 font-medium italic">
                {`“${testimonial.description}”`.split(" ").map((word, idx) => (
                  <motion.span
                    key={idx}
                    variants={reduceMotion ? {} : testimonialQuote(idx)}
                    custom={isFirstLoad}
                    className="inline-block"
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
              </p>
            </div>

            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, idx) => (
                <motion.div
                  key={idx}
                  variants={reduceMotion ? {} : testimonialRating(idx)}
                  initial="hidden"
                  whileInView="show"
                  exit="exit"
                  viewport={testimonialRating(idx).viewport}
                >
                  <StarIcon
                    key={idx}
                    strokeWidth={1.5}
                    className={cn(
                      "stroke-primary-700 fill-transparent",
                      Number(testimonial.rating) > idx && "fill-primary-700",
                    )}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Next and Prev Buttons */}
          {count > 1 && (
            <div className="flex items-center justify-end gap-4">
              <motion.div variants={reduceMotion ? {} : testimonialPrevButton}>
                <Button
                  onClick={onPrev}
                  variant="secondary"
                  size="icon"
                  className="hover:bg-secondary-550 grid place-items-center rounded-full transition-all duration-150 ease-in"
                >
                  <ChevronLeftIcon strokeWidth={1.5} className="size-5" />
                </Button>
              </motion.div>
              <motion.div variants={reduceMotion ? {} : testimonialNextButton}>
                <Button
                  onClick={onNext}
                  size="icon"
                  className="bg-primary-950 text-primary-400 grid place-items-center rounded-full transition-all duration-150 ease-in"
                >
                  <ChevronRightIcon strokeWidth={1.5} className="size-5" />
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
