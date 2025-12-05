"use client";

import { motion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, poweredCard,quote, title } from "./variants";

export default function CompanyAboutPoweredContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Built by hard work, driven by innovation, and dedicated to empowering those who move the world forward”" />
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
          Driven by Innovation, Powered by You
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`At PPE, innovation fuels everything we do. With your trust and partnership, we deliver cutting-edge engineering solutions that empower industries to thrive.`
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

      <div className="bg-secondary-400 grid w-full gap-1 md:grid-cols-2">
        {[
          {
            title: "Humble Beginnings",
            description:
              "PPP started as a one-man operation, driven by a passion for serving the industrial sector with dedication and expertise.",
          },
          {
            title: "Growth Through Service",
            description:
              "From those early days, we expanded into a globally backed service and sales operation, supporting multiple lines of business.",
          },
          {
            title: "Trusted Technology Solutions",
            description:
              "Today, we are a leading supplier of efficient and reliable technology solutions for industrial, environmental, and security applications.",
          },
          {
            title: "Empowering Hardworking Hands",
            description:
              "We believe in equipping our customers with not just products, but the skills and support needed to maximize their capabilities.",
          },
          {
            title: "Innovation and Education at Our Core",
            description:
              "Staying at the forefront of industry advancements fuels our commitment to helping you tackle everyday challenges with confidence.",
          },
        ].map((item, idx) => (
          <PoweredCard key={idx} data={item} idx={idx} />
        ))}
      </div>
    </SectionWrapper>
  );
}

type WhoCardProps = {
  data: {
    title: string;
    description: string;
  };
  idx: number;
};
// Powered card
function PoweredCard({ data, idx }: WhoCardProps) {
  return (
    <motion.div
      variants={poweredCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={poweredCard(idx).viewport}
      className="bg-secondary-400 realtive flex flex-col items-center gap-7 rounded-lg p-2 sm:p-4 md:last:col-span-2 lg:last:col-span-1"
    >
      <div className="space-y-2 text-center sm:text-left">
        <h2 className="text-primary-950 font-medium">{data.title}</h2>
        <p className="text-secondary-800">{data.description}</p>
      </div>
    </motion.div>
  );
}
