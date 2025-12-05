"use client";

import { motion, useReducedMotion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { cn } from "@/lib/utils";

import NewsletterForm from "./form";
import { description, quote, testimonialsForm, title } from "./variants";

type Props = {
  className?: string;
};

export default function NewsletterContent({ className }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper className={cn("bg-secondary-400", className)}>
      {/* Quote */}
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Knowledge grows when shared”" />
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Stay in the Loop
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Get the latest updates, product launches, and expert insights—delivered straight to your inbox.`
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

      {/* Form */}
      <motion.div
        variants={shouldReduceMotion ? {} : testimonialsForm}
        initial="hidden"
        whileInView="show"
        viewport={testimonialsForm.viewport}
        className="w-full max-w-sm"
      >
        <NewsletterForm />
      </motion.div>
    </SectionWrapper>
  );
}
