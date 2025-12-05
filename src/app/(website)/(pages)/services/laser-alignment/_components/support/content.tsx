"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, quote, supportCard, title } from "./variants";

export default function LaserAlignmentSupportContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Reliable expertise is only ever a call away”" />
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
          Expert Support When You Need It
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Our alignment specialists don't just deliver results—they educate, empower, and partner with your maintenance team to ensure long-term reliability.`
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

      <div className="grid w-full gap-2 sm:gap-3 md:grid-cols-2 lg:grid-cols-3">
        {[
          "Root cause analysis of misalignment issues",
          "Maintenance staff training",
          "Integration into CBM programs",
          "	On-demand technical support",
        ].map((text, idx) => (
          <SupportCard key={idx} text={text} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type SupportCardProps = {
  text: string;
  idx: number;
};
// Solution card
function SupportCard({ text, idx }: SupportCardProps) {
  return (
    <motion.div
      variants={supportCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={supportCard(idx).viewport}
      className="bg-secondary-450 flex flex-col items-center gap-7 rounded-lg p-2 sm:p-4 md:last:col-span-3"
    >
      <figure className="h-[50px] w-[50px] overflow-hidden">
        <Image
          src="/images/services/laser-alignment-support.svg"
          width={50}
          height={50}
          alt={text}
          className="size-full object-cover"
        />
      </figure>

      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-primary-950 font-medium">{text}</h2>
      </div>
    </motion.div>
  );
}
