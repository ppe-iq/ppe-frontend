"use client";

import { motion } from "framer-motion";
import { PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function MotionAmplificationWhatContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“The smallest motions hold the biggest clues—see beyond the visible" />
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
          What Is Motion Amplification?
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Motion Amplification uses high-speed video and software processing to visualize machine movement beyond the capability of the human eye. It converts subtle vibrations into visible motion, providing engineers with powerful insights into equipment behavior.`
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

      <motion.figure
        variants={image}
        initial="hidden"
        whileInView="show"
        viewport={image.viewport}
        className="relative grid aspect-[1348/460] w-full place-items-center overflow-hidden rounded-xl"
      >
        <Image
          src="/images/services/motion-amplification-what.svg"
          fill
          sizes="(min-width: 1024px) 300px, 40vw"
          alt="What is In-Site Balancing?"
          className="size-full object-cover object-center"
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
    </SectionWrapper>
  );
}
