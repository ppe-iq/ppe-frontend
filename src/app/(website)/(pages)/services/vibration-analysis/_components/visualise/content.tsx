"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image,quote, title } from "./variants";

export default function VibrationAnalysisVisualiseContent() {
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

      {/* Title */}
      <motion.h2
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
      >
        Visualise Your Vibration Analysis Data
      </motion.h2>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative aspect-[658/406] w-full overflow-hidden"
        >
          <Image
            src="/images/services/vibration-analysis-visualise.svg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="Vibration Analysis Guide"
            className="size-full object-contain"
          />
        </motion.figure>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Data Collection",
              description:
                "Gather high-quality vibration and thermal data from critical assets using advanced sensors, setting a strong foundation for accurate analysis.",
            },
            {
              title: "Vibration Analysis",
              description:
                "Expert analysts interpret the collected data to detect early signs of wear, imbalance, misalignment, or other potential issues.",
            },
            {
              title: "Actionable Data",
              description:
                "Comprehensive reports transform complex measurements into clear, actionable insights that guide your maintenance strategies.",
            },
            {
              title: "Corrective Action",
              description:
                "Based on insights, targeted maintenance actions are recommended and implemented, reducing downtime and extending equipment life.",
            },
          ].map((item, idx) => (
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
              <div className="flex flex-col gap-1">
                <h2 className="text-primary-950 font-medium">{item.title}</h2>
                <p className="text-secondary-800">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
