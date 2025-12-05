"use client";

import { motion } from "framer-motion";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function VibrationAnalysisAdvisorWorkContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Precision today ensures performance tomorrow”" />
      </motion.div>

      <motion.h2
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
      >
        How Advisor Works
      </motion.h2>

      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative grid aspect-[658/406] w-full place-items-center overflow-hidden"
        >
          <Image
            src="/images/services/vibration-analysis-advisor-work.svg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="Vibration Analysis Guide"
            className="size-full object-contain"
          />

          <Link
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="bg-secondary-700/40 group grid size-[60px] place-items-center rounded-full p-1.5 backdrop-blur-xs sm:size-[80px] sm:p-3"
          >
            <span className="border-secondary-400 grid size-9 place-items-center rounded-full border-2 sm:size-12">
              <PlayIcon className="text-secondary-400 size-4 stroke-3 transition group-hover:scale-120 sm:size-6 sm:stroke-2" />
            </span>
          </Link>
        </motion.figure>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Asset Assessment",
              description:
                "We start by reviewing the list of critical rotating assets provided by the client to understand their operational priorities.",
            },
            {
              title: "Custom Strategy Development",
              description:
                "Our maintenance experts design a tailored condition monitoring plan using vibration analysis and other predictive technologies.",
            },
            {
              title: "Implementation and Monitoring",
              description:
                "The customized plan is implemented, continuously monitoring machine conditions to detect potential issues early.",
            },
            {
              title: "Ongoing Support and Optimization",
              description:
                "We adjust and optimize the strategy over time based on real-world machine performance and the client's evolving needs.",
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
