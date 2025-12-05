"use client";

import { motion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { conditionMonitoringCardsData } from "./constants";
import { ConditionMonitoringCardType } from "./types";
import { card, description, quote, title } from "./variants";

export default function ConditionMonitoring() {
  return (
    <SectionWrapper className="bg-transparent">
      {/* Quote */}
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Knowledge is the first step to reliability”" />
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
          Condition Monitoring Resources
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Unlock expert insights, guides, and tools designed to help you monitor asset health, prevent failures, and extend equipment life with confidence."
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

      {/* Cards */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        {conditionMonitoringCardsData.map((card, idx) => (
          <ConditionMonitoringCard key={card.href} data={card} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type CardProps = {
  data: ConditionMonitoringCardType;
  idx: number;
};
// Card
function ConditionMonitoringCard({ data, idx }: CardProps) {
  return (
    <motion.div
      variants={card(idx)}
      initial="hidden"
      whileInView="show"
      viewport={card(idx).viewport}
    >
      <Link
        href={data.href}
        className="bg-secondary-400 hover:bg-secondary-500 group flex h-full flex-col gap-7 rounded-[12px] px-4 py-2.5 shadow-black/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm"
      >
        <div className="flex items-start justify-between">
          <Image
            src={data.image}
            width={64}
            height={64}
            alt={data.title}
            className="object-cover"
          />

          <MoveRightIcon
            strokeWidth={1.5}
            className="text-secondary-650 group-hover:text-secondary-800 transition-all duration-300 ease-in-out group-hover:-rotate-14"
          />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg font-medium">{data.title}</h2>
          <p className="text-secondary-750 text-sm">{data.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
