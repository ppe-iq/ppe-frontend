"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function VibrationAnalysisGuideContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“True reliability begins with the right understanding — not assumptions”" />
      </motion.div>

      <motion.h2
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-2xl tracking-wider text-transparent sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Do You Have a Misguided Vibration Analysis Strategy?
      </motion.h2>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative aspect-[400/300] w-full overflow-hidden"
        >
          <Image
            src="/images/services/vibration-analysis-guide.svg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="Vibration Analysis Guide"
            className="size-full object-contain"
          />
        </motion.figure>
        <div className="flex flex-col gap-6">
          {[
            "Most industrial plants struggle with machine downtime, skill gaps, and unexpected maintenance costs—all while lacking real-time insight into machine condition.",
            "Without foundational knowledge and clear strategy, many maintenance programs fall short in their efforts to achieve even basic asset reliability.",
            "Implementing predictive maintenance technologies can significantly improve operational efficiency by reducing unplanned downtime and extending the lifespan of machinery.",
            "Leveraging data analytics and IoT solutions empowers organizations to make informed decisions, optimizing maintenance schedules and enhancing overall productivity.",
          ].map((text, idx) => (
            <motion.div
              key={idx}
              variants={description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex items-start gap-3 p-1 text-balance md:p-3"
            >
              <div className="bg-secondary-400 grid aspect-square size-13 place-items-center rounded-full p-2 text-xl font-medium">
                {idx + 1}
              </div>
              <p className="text-secondary-850 leading-relaxed font-medium">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
