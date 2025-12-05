"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function MotionAmplificationUsedContent() {
  return (
    <SectionWrapper className="">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“See what the eye can't — visualize problems before they escalate”" />
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
          Where It&apos;s Used
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Motion Amplification supports a wide range of industries, from manufacturing and power generation to water treatment and oil & gas.`
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

      <div className="grid w-full gap-2 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, idx) => (
          <motion.figure
            key={idx}
            variants={image(idx)}
            initial="hidden"
            whileInView="show"
            viewport={image(idx).viewport}
            className="relative aspect-[660/257] w-full overflow-hidden rounded-lg"
          >
            <Image
              src={`/images/services/motion-amplification-used-${idx + 1}.jpg`}
              alt={`Motion Amplification Used `}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={idx === 0}
            />
          </motion.figure>
        ))}
      </div>
    </SectionWrapper>
  );
}
