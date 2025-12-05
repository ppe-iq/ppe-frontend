"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title, toolsCard } from "./variants";

export default function LaserAlignmentToolsContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Where cutting-edge technology meets proven expertise”" />
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
          Advanced Tools, Trusted Technicians
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`We leverage cutting-edge alignment tools and software backed by years of field experience to bring your machines to optimal operating condition.`
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

      <div className="grid w-full gap-2 sm:gap-3 md:grid-cols-2">
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Smart sensor technology",
            "Bluetooth-connected",
            "Live guidance & adjustment",
            "Alignment performance check",
          ].map((text, idx) => (
            <ToolsCard key={idx} text={text} idx={idx} />
          ))}
        </div>

        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative aspect-[650/430] w-full overflow-hidden"
        >
          <Image
            src="/images/services/laser-alignment-tools.jpg"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            alt="Laser Alignment Tools and Technicians"
            className="object-cover"
          />
        </motion.figure>
      </div>
    </SectionWrapper>
  );
}

type ToolsCardProps = {
  text: string;
  idx: number;
};
// Tools card
function ToolsCard({ text, idx }: ToolsCardProps) {
  return (
    <motion.div
      variants={toolsCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={toolsCard(idx).viewport}
      className="bg-secondary-400 flex flex-col items-center justify-center gap-7 rounded-lg p-2 sm:p-4"
    >
      <figure className="h-[50px] w-[50px] overflow-hidden">
        <Image
          src="/images/services/laser-alignment-tools.svg"
          width={50}
          height={50}
          alt={text}
          className="size-full object-cover"
        />
      </figure>

      <div className="space-y-2 text-center text-balance">
        <h2 className="text-primary-950 font-medium">{text}</h2>
      </div>
    </motion.div>
  );
}
