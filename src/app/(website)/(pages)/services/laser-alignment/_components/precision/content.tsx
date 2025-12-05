"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function LaserAlignmentPrecisionContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Precision alignment today prevents costly failures tomorrow”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Precision That Prevents Breakdowns
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Improper shaft alignment is one of the most common and costly issues in rotating equipment. Our laser-based approach ensures accuracy to the micron, minimizing downtime and extending equipment lifespan.`
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={description(idx)}
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

      <div className="grid w-full gap-8 md:grid-cols-2">
        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative aspect-[800/450] w-full overflow-hidden rounded-md"
        >
          <Image
            src="/images/services/laser-alignment-precision.jpg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="Laser Alignment Precision That Prevents Breakdowns"
            className="size-full object-cover"
          />
        </motion.figure>
        <div className="flex flex-col gap-6">
          {[
            "High-precision laser measurement",
            "Live alignment corrections",
            "Thermal growth compensation",
            "Alignment history reports",
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
