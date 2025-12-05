"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, operationCard, quote, title } from "./variants";

const OPERATION_CARDS_DATA: {
  img: string;
  title: string;
  description: string;
}[] = [
  {
    img: "/images/services/operation-1.svg",
    title: "Data Collection",
    description:
      "After we determine the most effective method of monitoring for each asset (handheld route-based, wireless sensors, and/or continuous monitoring), vibration data is collected.",
  },
  {
    img: "/images/services/operation-2.svg",
    title: "Vibration Analysis",
    description:
      "Once vibration data is collected, our remote team of level 3 and 4 vibration experts analyze the data and report findings within 24 hours.",
  },
  {
    img: "/images/services/operation-3.svg",
    title: "Actionable Data",
    description:
      "The results of each machinery analysis are immediately available to view in the Advisor Dashboard, our secure, web-based, data visualization tool. We advise on the how, what, and when to fix each problem.",
  },
  {
    img: "/images/services/operation-4.svg",
    title: "Corrective Action",
    description:
      "If machine faults are identified, maintenance becomes the next logical step. We will be by the client's side throughout the process to help troubleshoot any roadblocks that are encountered.",
  },
];
export default function VibrationAnalysisOperationsContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Reliability isn't a destination — it's a journey we walk together”" />
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
          Your Path to Reliable Operations
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Step-by-step strategies to maximize machine health and uptime.`
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

      <div className="grid w-full gap-6 lg:grid-cols-2">
        {OPERATION_CARDS_DATA.map((item, idx) => (
          <OperationCard key={item.title} data={item} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type OperationCardProps = {
  data: {
    img: string;
    title: string;
    description: string;
  };
  idx: number;
};
// Operation card
function OperationCard({ data, idx }: OperationCardProps) {
  return (
    <motion.div
      variants={operationCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={operationCard(idx).viewport}
      className="bg-secondary-450 flex flex-col items-center gap-7 rounded-lg p-2 sm:p-6 md:flex-row md:items-start"
    >
      <figure className="overflow-hidden">
        <Image
          src={data.img}
          alt={data.title}
          width={200}
          height={87}
          className="h-[80px] w-[90px] object-contain md:h-[87px] md:w-[200px]"
        />
      </figure>

      <div className="space-y-2 text-center md:text-left">
        <h3 className="text-primary-950 font-medium">{data.title}</h3>
        <p className="text-secondary-800">{data.description}</p>
      </div>
    </motion.div>
  );
}
