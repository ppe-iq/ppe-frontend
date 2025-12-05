"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, quote, solutionCard, title } from "./variants";

export default function VibrationAnalysisAdvisorSolutionContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Empowering your operations with insight, precision, and lasting confidence”" />
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
          Advisor Is the Total Reliability Solution
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Complete solutions to optimize asset reliability and performance.`
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

      <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            img: "/images/services/solution-1.svg",
            title: "Increase Asset Integrity and Availability",
            description: `Receive machine fault diagnostics and advice on the "how, what, and when" to fix each problem. The result? Assets that are healthy and running.`,
          },
          {
            img: "/images/services/solution-2.svg",
            title: "Lower Life Cycle Costs",
            description:
              "Cut costs associated with inefficient operations, asset maintenance, and replacement parts.",
          },
          {
            img: "/images/services/solution-3.svg",
            title: "Implement a Sustainable CBM Program",
            description:
              "Eliminate the guesswork in your maintenance program and allow your team to accomplish more through the support of actionable machine data.",
          },
          {
            img: "/images/services/solution-4.svg",
            title: "Partner with Machinery & Reliability Experts",
            description:
              "Benefit from our unrivaled expertise in maintenance, machinery, vibration, and reliability. We supply you with the insights to promote uptime.",
          },
          {
            img: "/images/services/solution-5.svg",
            title: "Get 24/7 Support and On-Demand Guidance",
            description:
              "Talk to us whenever you need a hand. Your assets run around the clock and so does our team of experts.",
          },
          {
            img: "/images/services/solution-6.svg",
            title: "Utilize Multiple Methods of Data Collection",
            description:
              "Capture vibration data through portable, wireless, and/or continuous methods. We'll determine the best options based on machine specific characteristics.",
          },
        ].map((item, idx) => (
          <SolutionCard key={item.img} data={item} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type SolutionCardProps = {
  data: {
    img: string;
    title: string;
    description: string;
  };
  idx: number;
};
// Solution card
function SolutionCard({ data, idx }: SolutionCardProps) {
  return (
    <motion.div
      variants={solutionCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={solutionCard(idx).viewport}
      className="bg-secondary-450 flex flex-col items-center gap-7 rounded-lg p-2 sm:items-start sm:p-6"
    >
      <figure className="h-[154px] w-[174px] overflow-hidden">
        <Image
          src={data.img}
          width={174}
          height={154}
          alt={data.title}
          className="size-full object-cover"
        />
      </figure>

      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-primary-950 font-medium">{data.title}</h2>
        <p className="text-secondary-800">{data.description}</p>
      </div>
    </motion.div>
  );
}
