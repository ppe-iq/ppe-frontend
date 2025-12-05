"use client";

import { motion } from "framer-motion";
import { QuoteIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quoteIcon } from "./variants";

export default function VibrationAnalysisAdvisorQuoteContent() {
  return (
    <SectionWrapper className="relative h-[560px] bg-transparent">
      <div className="grid place-items-center gap-13">
        <div className="flex items-start gap-2">
          <motion.div
            variants={quoteIcon("left")}
            initial="hidden"
            whileInView="show"
            viewport={quoteIcon("left").viewport}
          >
            <QuoteIcon className="text-secondary-400 size-10" />
          </motion.div>

          <motion.p
            variants={description}
            initial="hidden"
            whileInView="show"
            viewport={description.viewport}
            className="text-primary-400 max-w-2xl text-center text-lg leading-relaxed font-medium"
          >
            Advisor is a big benefit to our reliability program. By outsourcing
            analysis of vibration data we are able to take advantage of high
            level expertise that would otherwise would not be affordable to us.
          </motion.p>

          <motion.div
            variants={quoteIcon("right")}
            initial="hidden"
            whileInView="show"
            viewport={quoteIcon("right").viewport}
          >
            <QuoteIcon className="text-secondary-400 size-10" />
          </motion.div>
        </div>

        <motion.p
          variants={description}
          initial="hidden"
          whileInView="show"
          viewport={description.viewport}
          className="text-primary-550 font-medium"
        >
          {" "}
          - Jose Rabell, Maintenance Supervisor
        </motion.p>
      </div>

      <motion.figure
        variants={image}
        initial="hidden"
        whileInView="show"
        viewport={image.viewport}
        className="absolute inset-0 -z-10 size-full overflow-hidden"
      >
        <Image
          src="/images/services/vibration-analysis-advisor-quote.jpg"
          fill
          sizes="500px, 50vw"
          alt="Meet Advisor"
          className="object-cover object-center"
        />
      </motion.figure>
    </SectionWrapper>
  );
}
