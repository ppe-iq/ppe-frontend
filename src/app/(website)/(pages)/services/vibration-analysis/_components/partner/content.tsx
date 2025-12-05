"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";

import { description, image, quote, title } from "./variants";

export default function VibrationAnalysisPartnerContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Knowledge grows when shared”" />
      </motion.div>

      <motion.h2
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
      >
        We Are The Reliability Partner
      </motion.h2>

      <div className="grid w-full gap-8 md:grid-cols-3">
        <motion.div
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="bg-secondary-400 col-span-3 flex w-full flex-col items-center gap-6 rounded-lg p-3 md:col-span-1"
        >
          <figure className="size-52 overflow-hidden">
            <Image
              src="/images/services/vibration-analysis-brochure.svg"
              width={210}
              height={210}
              alt="Vibration Analysis Brochure"
              className="size-full object-cover"
            />
          </figure>

          <h2 className="text-primary-950 font-semibold">Brochure</h2>
          <SecondaryButton containerClassName="w-full" className="w-full">
            Download
          </SecondaryButton>
        </motion.div>
        <div className="col-span-2 flex w-full flex-col gap-6">
          {[
            "At PPE, we understand that implementing a vibration analysis program is not as simple as buying software or installing wireless sensors.",
            "Improving reliability requires an in-depth understanding of organizational pains, rotating machinery, available resources, and integration of multiple maintenance strategies.",
            "It's not easy to create a world-class vibration analysis maintenance program, but an Advisor can make it easier.",
          ].map((text, idx) => (
            <motion.div
              key={idx}
              variants={description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex w-full items-start gap-3 p-1 md:p-3"
            >
              <div className="bg-secondary-400 grid aspect-square size-13 flex-1 place-items-center rounded-full p-2 text-xl font-medium">
                {idx + 1}
              </div>
              <p className="text-secondary-850 w-full leading-relaxed font-medium">
                {text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
