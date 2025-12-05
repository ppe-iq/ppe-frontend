"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, experienceCard, quote, title } from "./variants";

export default function TrainingExperienceContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Master the skills that drive lasting reliability and performance”" />
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
          Elevate Your Maintenance Expertise
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`We offer training classes for every level of maintenance professional which cover relevant subjects such as shaft alignment, vibration data collection and analysis, efficient maintenance strategies, and beyond.`
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

      <div className="mt-10 grid w-full gap-13 md:grid-cols-2 md:gap-10 lg:grid-cols-3 lg:gap-2">
        {[
          {
            img: "/icons/spanner.svg",
            title: "Hands-On",
            description:
              "Significant hands-on training time, building both competence and confidence",
          },
          {
            img: "/icons/trainer.svg",
            title: "Expert Trainers",
            description:
              "Expert trainers with decades of maintenance experience on all types of industrial equipment.",
          },
          {
            img: "/icons/trainees.svg",
            title: "Small Class Sizes",
            description:
              "Small class size with an excellent student to instructor ratio.",
          },
        ].map((text, idx) => (
          <ExperienceCard key={idx} data={text} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type ExperienceCardProps = {
  data: {
    img: string;
    title: string;
    description: string;
  };
  idx: number;
};
// Solution card
function ExperienceCard({ data, idx }: ExperienceCardProps) {
  return (
    <motion.div
      variants={experienceCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={experienceCard(idx).viewport}
      className="bg-secondary-400 realtive flex flex-col items-center gap-7 rounded-lg p-2 sm:p-4 md:last:col-span-2 lg:last:col-span-1"
    >
      <figure className="bg-primary-650 absolute -top-10 left-1/2 h-[80px] w-[80px] -translate-x-1/2 overflow-hidden rounded-full p-4">
        <Image
          src={data.img}
          width={100}
          height={100}
          alt={data.title}
          className="size-full object-cover"
        />
      </figure>

      <div className="mt-13 space-y-2 text-center">
        <h2 className="text-primary-950 font-medium">{data.title}</h2>
        <p className="text-secondary-800">{data.description}</p>
      </div>
    </motion.div>
  );
}
