"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { parnterData } from "./constants";
import { Partner } from "./types";
import { description, quote, serviceCard, title } from "./variants";

export default function PartnerContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Consistency is the foundation of trust — we build both”" />
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          The Reliability Partner
        </motion.h2>
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Empowering precision and trust in every solution we deliver."
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

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {parnterData.map((service, idx) => (
          <ServiceCard key={service.title} partner={service} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type PartnerCardProps = {
  partner: Partner;
  idx: number;
};
function ServiceCard({ partner, idx }: PartnerCardProps) {
  return (
    <motion.div
      variants={serviceCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={serviceCard(idx).viewport}
    >
      <div className="bg-secondary-450 flex h-full flex-col items-center gap-7 rounded-[12px] px-4 py-2.5 shadow-black/5 transition-all duration-300 ease-in-out sm:items-start">
        <Image
          src={partner.img}
          width={64}
          height={64}
          alt={partner.title}
          className="object-cover"
        />

        <div className="space-y-1.5 text-center sm:text-left">
          <h2 className="text-lg font-medium">{partner.title}</h2>
          <p className="text-secondary-750 text-sm">{partner.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
