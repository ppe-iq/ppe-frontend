"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { description, image, quote, title } from "./variants";

export default function CompanyAboutDedicationContent() {
  return (
    <SectionWrapper>
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Progress is built over decades — but it’s powered every day by people like you”" />
      </motion.div>

      {/* Title */}
      <motion.h2
        variants={title}
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
      >
        Decades of Dedication to You
      </motion.h2>

      <div className="grid w-full gap-8 md:grid-cols-2">
        <motion.figure
          variants={image}
          initial="hidden"
          whileInView="show"
          viewport={image.viewport}
          className="relative aspect-[800/450] w-full overflow-hidden rounded-md"
        >
          <Image
            src="/images/company/about-dedication.jpg"
            fill
            sizes="(min-width: 1024px) 300px, 40vw"
            alt="Decades of Dedication to You"
            className="size-full object-cover"
          />
        </motion.figure>
        <div className="flex flex-col gap-6">
          {[
            {
              title: "Evolving with Innovation",
              description:
                "Over the past 30+ years, our products have changed and improved to meet the evolving needs of industry — but our core mission to empower you has remained the same.",
            },
            {
              title: "Building a Lasting Legacy",
              description:
                "Our journey of growth and success didn't happen overnight. It has been built over decades with hard work, dedication, and a commitment to excellence.",
            },
            {
              title: "Empowering Your Future",
              description:
                "Our legacy is incomplete without you. We're here to provide the tools support, and innovation you need to overcome challenges and achieve new heights.",
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
              <div className="bg-secondary-400 grid aspect-square size-13 place-items-center rounded-full p-2 text-xl font-medium">
                {idx + 1}
              </div>
              <div className="w-full space-y-1">
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-secondary-850 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
