"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { benefitsCard, description, quote, title } from "./variants";

export default function InSiteBalancingBenefitsContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Small adjustments make the biggest impact on performance”" />
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
          Key Benefits
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Our service covers every scenario from simple motor-pump pairs to complex multi-coupling machines.`
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
          {
            img: "/icons/clock.svg",
            title: "Minimize Downtime",
            description:
              "Quick on-site balancing reduces machine downtime, keeping your operations running smoothly.",
          },
          {
            img: "/icons/target.svg",
            title: "Real-World Accuracy",
            description:
              "Balances machines under actual operating conditions, ensuring optimal reliability.",
          },
          {
            img: "/icons/coin.svg",
            title: "Cost Savings",
            description:
              "Reduces the need for costly disassembly and reassembly, saving both time and money.",
          },
        ].map((text, idx) => (
          <BenefitsCard key={idx} data={text} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type BenefitsCardProps = {
  data: {
    img: string;
    title: string;
    description: string;
  };
  idx: number;
};
// Solution card
function BenefitsCard({ data, idx }: BenefitsCardProps) {
  return (
    <motion.div
      variants={benefitsCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={benefitsCard(idx).viewport}
      className="bg-secondary-450 flex flex-col items-center gap-7 rounded-lg p-2 sm:p-4"
    >
      <figure className="h-[80px] w-[80px] overflow-hidden">
        <Image
          src={data.img}
          width={100}
          height={100}
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
