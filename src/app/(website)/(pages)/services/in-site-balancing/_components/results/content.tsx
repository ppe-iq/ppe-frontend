"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, descriptionImage, image, quote, title } from "./variants";

export default function InSiteBalancingResultsContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Let the numbers speak — proof of performance in every service”" />
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
          Data-Driven Results You Can Rely On
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Every in-site balancing service includes a comprehensive report detailing vibration readings before and after correction. You'll receive precise documentation that confirms alignment success, helping you make informed maintenance decisions and comply with audit or safety requirements.`
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

      <div className="relative grid h-[500px] w-full place-items-center overflow-hidden rounded-xl bg-transparent px-4 sm:px-10 md:px-24">
        <motion.p
          variants={descriptionImage}
          initial="hidden"
          whileInView="show"
          viewport={descriptionImage.viewport}
          className="text-primary-400 text-center text-lg leading-relaxed text-balance"
        >
          <b>In-Site Balancing</b> is a precision field service that provides{" "}
          <b>measurable proof</b> of improved machine performance, helping you{" "}
          <b>validate results</b> and <b>drive confident</b>
          maintenance decisions.
        </motion.p>

        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="absolute inset-0 -z-10 size-full overflow-hidden"
        >
          <Image
            src="/images/services/vibration-analysis-advisor.jpg"
            fill
            sizes="500px, 50vw"
            alt="Meet Advisor"
            className="object-cover object-center"
          />
        </motion.figure>
      </div>
    </SectionWrapper>
  );
}
