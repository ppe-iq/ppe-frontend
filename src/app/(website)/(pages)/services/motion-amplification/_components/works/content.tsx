"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, flow, quote, title } from "./variants";

export default function MotionAmplificationWorksContent() {
  return (
    <SectionWrapper className="">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Clarity through motion—one frame at a time”" />
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
          How Motion Amplification Works
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`We use high-speed cameras and advanced software to detect and visualize subtle machine movements, transforming invisible vibrations into clear, actionable data.`
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

      <div className="mt-8 grid w-full items-center gap-10 md:grid-cols-2 md:items-start">
        {/* 1  */}
        <motion.div
          variants={flow(1)}
          initial="hidden"
          whileInView="show"
          viewport={flow(1).viewport}
          className="flex w-full flex-col items-center gap-3 lg:flex-row"
        >
          <span className="bg-secondary-400 border-secondary-500 grid size-[52px] place-items-center rounded-full border font-semibold">
            1
          </span>
          <p className="text-center text-lg lg:text-left">
            <span className="font-medium">Record </span>
            <span>high-speed video of the machinery.</span>
          </p>
          <Image
            src="/images/services/motion-amplification-arrow-right.svg"
            width={172}
            height={33}
            alt="Record Arrow"
            className="mb-6 ml-10 hidden lg:inline"
          />
          <Image
            src="/images/services/motion-amplification-straight-arrow.svg"
            width={14}
            height={0}
            alt="Record Arrow"
            className="lg:hidden"
          />
        </motion.div>

        {/* 2 */}
        <motion.div
          variants={flow(1.2)}
          initial="hidden"
          whileInView="show"
          viewport={flow(1.2).viewport}
          className="flex flex-col items-start lg:ml-24"
        >
          <div className="flex w-full flex-col items-center gap-3 lg:flex-row">
            <span className="bg-secondary-400 border-secondary-500 grid size-[52px] place-items-center rounded-full border font-semibold">
              2
            </span>
            <p className="text-center text-lg lg:text-left">
              <span className="font-medium">Analyze </span>
              <span>displacement using software.</span>
            </p>
            <Image
              src="/images/services/motion-amplification-straight-arrow.svg"
              width={14}
              height={0}
              alt="Record Arrow"
              className="lg:hidden"
            />
          </div>
          <figure className="grid w-1/2 place-items-center">
            <Image
              src="/images/services/motion-amplification-arrow-bottom.svg"
              width={172}
              height={33}
              alt="Record Arrow"
              className="mb-6 ml-24 hidden max-h-[145px] max-w-[145px] lg:inline"
            />
          </figure>
        </motion.div>

        {/* 4 */}
        <motion.div
          variants={flow(1.4)}
          initial="hidden"
          whileInView="show"
          viewport={flow(1.4).viewport}
          className="relative hidden flex-col items-start lg:flex"
        >
          <Image
            src="/images/services/motion-amplification-arrow-top.svg"
            width={172}
            height={33}
            alt="Record Arrow"
            className="absolute -top-40 left-40 mb-6 hidden max-h-[145px] lg:inline"
          />
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <span className="bg-secondary-400 border-secondary-500 grid size-[52px] place-items-center rounded-full border font-semibold">
              4
            </span>
            <p className="text-center text-xl lg:text-left">
              <span className="font-medium">Report </span>
              <span>findings with annotated video and recommendations.</span>
            </p>
            <Image
              src="/images/services/motion-amplification-straight-arrow.svg"
              width={14}
              height={0}
              alt="Record Arrow"
              className="lg:hidden"
            />
          </div>
        </motion.div>

        {/* 3 */}
        <motion.div
          variants={flow(1.6)}
          initial="hidden"
          whileInView="show"
          viewport={flow(1.6).viewport}
          className="relative flex flex-col items-center gap-3 lg:ml-24 lg:flex-row"
        >
          <Image
            src="/images/services/motion-amplification-arrow-left.svg"
            width={172}
            height={33}
            alt="Record Arrow"
            className="absolute -bottom-6 -left-48 mt-4 hidden lg:inline"
          />
          <span className="bg-secondary-400 border-secondary-500 grid size-[52px] place-items-center rounded-full border font-semibold">
            3
          </span>
          <p className="text-center text-lg lg:text-left">
            <span className="font-medium">Amplify </span>
            <span>motion to visualize the root causes.</span>
          </p>

          <Image
            src="/images/services/motion-amplification-straight-arrow.svg"
            width={14}
            height={0}
            alt="Record Arrow"
            className="lg:hidden"
          />
        </motion.div>
      </div>

      {/* 4 */}
      <motion.div
        variants={flow(1.4)}
        initial="hidden"
        whileInView="show"
        viewport={flow(1.4).viewport}
        className="relative flex flex-col items-start lg:hidden"
      >
        <Image
          src="/images/services/motion-amplification-arrow-top.svg"
          width={172}
          height={33}
          alt="Record Arrow"
          className="absolute -top-40 left-40 mb-6 hidden max-h-[145px] lg:inline"
        />
        <div className="flex flex-col items-center gap-3 lg:flex-row">
          <span className="bg-secondary-400 border-secondary-500 grid size-[52px] place-items-center rounded-full border font-semibold">
            4
          </span>
          <p className="text-center text-xl lg:text-left">
            <span className="font-medium">Report </span>
            <span>findings with annotated video and recommendations.</span>
          </p>
        </div>
      </motion.div>
    </SectionWrapper>
  );
}
