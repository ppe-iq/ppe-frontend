"use client";

import { motion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";

import { cta, description, quote, title } from "./variants";

export default function CompanyAboutNextStepContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Empower yourself with the right tools and the right knowledge”" />
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
          Your Next Step Starts Here
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Whether you're searching for the perfect solution or ready to sharpen your skills, we're here to help you move forward. Choose your path and start today.`
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

      <div className="flex items-center gap-2">
        <motion.div
          variants={cta}
          initial="hidden"
          whileInView="show"
          viewport={cta.viewport}
        >
          <PrimaryButton href="/training">Develop Your Skills</PrimaryButton>
        </motion.div>

        <motion.div
          variants={cta}
          initial="hidden"
          whileInView="show"
          viewport={cta.viewport}
        >
          <SecondaryButton href="/company/contact">
            Find Your Solution
          </SecondaryButton>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
