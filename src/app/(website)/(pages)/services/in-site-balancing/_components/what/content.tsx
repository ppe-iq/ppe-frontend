"use client";

import { motion } from "framer-motion";
import { CheckIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function InSiteBalancingWhatContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Fix imbalance at its source, not after the damage is done”" />
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
          What Is In-Site Balancing?
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`In-site balancing eliminates the need for disassembly or transporting machinery, minimizing downtime and ensuring accuracy under real operating conditions.`
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

      <div className="grid w-full items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Real-Time, No Disassembly",
              description:
                "Balance machines in place using live data—no teardown, minimal downtime.",
            },
            {
              title: "Smart, In-Place Precision",
              description:
                "Advanced tech enables fast, non-invasive adjustments with high accuracy.",
            },
            {
              title: "Maximize Uptime",
              description:
                "Smooth performance with on-site balancing—fast, cost-effective, and efficient.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              variants={description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex items-start gap-3 p-1 md:p-3"
            >
              <div className="bg-secondary-400 text-primary-800 grid aspect-square size-13 place-items-center rounded-full p-2 text-xl font-medium">
                <CheckIcon strokeWidth={1.5} />
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-primary-950 font-medium">{item.title}</h2>
                <p className="text-secondary-800">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative grid aspect-[658/406] w-full place-items-center overflow-hidden"
        >
          <Image
            src="/images/services/in-site-balancing-what.svg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="What is In-Site Balancing?"
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
      </div>
    </SectionWrapper>
  );
}
