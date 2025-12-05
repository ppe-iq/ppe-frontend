"use client";

import { motion, useReducedMotion } from "framer-motion";
import { StarIcon } from "lucide-react";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

import { StudentFeedback } from "./types";
import {
  carouselContainer,
  carouselItem,
  description,
  quote,
  title,
} from "./variants";

// Props
type Props = {
  studentsFeedback: StudentFeedback[];
};

export default function TrainingTestimonialsContent({
  studentsFeedback,
}: Props) {
  // Reduce motion
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“The best proof of our impact comes from the voices of those we've helped grow”" />
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
          Hear from our trainees
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Real experiences from those who trained with us — discover how our programs empowered their maintenance and reliability journeys.`
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

      {/* Carousel */}
      <motion.div
        variants={shouldReduceMotion ? {} : carouselContainer}
        initial="hidden"
        whileInView="show"
        viewport={carouselContainer.viewport}
        className="w-full"
      >
        <TestimonialsCarousel
          data={studentsFeedback}
          reduceMotion={shouldReduceMotion}
        />
      </motion.div>
    </SectionWrapper>
  );
}

type TestimonialsProps = {
  data: StudentFeedback[];
  reduceMotion: boolean | null;
};

// Testimonials carousel
function TestimonialsCarousel({ data, reduceMotion }: TestimonialsProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((feedback, idx) => (
          <CarouselItem
            key={idx}
            className="min-h-full md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              variants={reduceMotion ? {} : carouselItem(idx)}
              initial="hidden"
              whileInView="show"
              viewport={carouselItem(idx).viewport}
              className="bg-secondary-400 flex min-h-full flex-col gap-3 rounded-lg p-3"
            >
              <Avatar>
                <AvatarImage
                  src={""}
                  alt={feedback.full_name}
                  className="size-10 rounded-full object-cover"
                />
                <AvatarFallback className="text-xs font-medium">
                  {feedback.full_name
                    .split(" ")
                    .slice(0, 2)
                    .map((fn) => fn[0])}
                </AvatarFallback>
              </Avatar>

              <div className="mt-3 flex items-center justify-between">
                <h2 className="font-medium">{feedback.full_name}</h2>
                <p className="bg-secondary-550/40 w-fit rounded-[6px] px-2 py-1 text-xs font-medium">
                  {feedback.company}
                </p>
              </div>

              <p className="flex-1 italic">&quot;{feedback.message}&quot;</p>

              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <StarIcon
                    key={idx}
                    className={cn(
                      "stroke-primary-700 size-5 fill-transparent",
                      idx < feedback.rating && "fill-primary-700",
                    )}
                  />
                ))}
              </div>
            </motion.div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <motion.div
        variants={reduceMotion ? {} : carouselItem(data.length - 1)}
        initial="hidden"
        whileInView="show"
        viewport={carouselItem(data.length - 1).viewport}
        className="relative mt-10 flex items-center justify-center gap-4"
      >
        <CarouselPrevious className="rounded-full border-none" />
        <CarouselNext className="bg-primary-950 text-primary-400 hover:bg-secondary-800 hover:text-primary-400 rounded-full border-none transition" />
      </motion.div>
    </Carousel>
  );
}
