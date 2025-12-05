"use client";

import { motion, useReducedMotion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { CourseDetailsReason, CourseDetailsResponse } from "../types";
import { description, quote, title, whoCard } from "./variants";

// Props
type Props = {
  course: CourseDetailsResponse;
};

export default function TrainingCourseDetailsWhoContent({ course }: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <motion.div
        variants={reduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Master the skills that drive lasting reliability and performance”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={reduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Who Should Take This Class?
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`We offer training classes for every level of maintenance professional which cover relevant subjects such as shaft alignment, vibration data collection and analysis, efficient maintenance strategies, and beyond.`
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={reduceMotion ? {} : description(idx)}
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

      <div className="grid w-full gap-2 md:grid-cols-2">
        {course.reasons.map((item, idx) => (
          <WhoCard
            key={item.id}
            data={item}
            idx={idx}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

// Who card props
type WhoCardProps = {
  data: CourseDetailsReason;
  idx: number;
  reduceMotion: boolean | null;
};

function WhoCard({ data, idx, reduceMotion }: WhoCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : whoCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={whoCard(idx).viewport}
      className="bg-secondary-400 realtive lg:last:col-span- flex flex-col items-center gap-7 rounded-lg p-2 sm:p-4 md:last:col-span-1"
    >
      <div className="w-full space-y-2 text-center sm:text-start">
        <h2 className="text-primary-950 font-medium">{data.title}</h2>
        <p className="text-secondary-800">{data.description}</p>
      </div>
    </motion.div>
  );
}
