"use client";

import { motion, useReducedMotion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { Course } from "../../../training/_components/courses/types";
import { formContainer } from "../../../training/reserve/_components/boost/variants";
import FeedbackForm from "./form";
import { description, quote, title } from "./variants";

// Props
type Props = {
  courses: Course[];
};

export default function FeedbackFormContent({ courses }: Props) {
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
        <Quote quote="“A great learning journey begins with honest reflections”" />
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
          We Value Your voice
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Your feedback helps us improve and inspire others. Share your thoughts and let future students know what to expect.`
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

      {/* Form */}
      <motion.div
        variants={reduceMotion ? {} : formContainer}
        initial="hidden"
        whileInView="show"
        viewport={formContainer.viewport}
        className="w-full max-w-3xl"
      >
        <FeedbackForm courses={courses} />
      </motion.div>
    </SectionWrapper>
  );
}
