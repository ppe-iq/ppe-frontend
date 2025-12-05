"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";

import { servicesData } from "./constants";
import { Service } from "./types";
import {
  description,
  primaryButton,
  quote,
  secondaryButton,
  serviceCard,
  title,
} from "./variants";

export default function ServicesContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Excellence, Every Time”" />
      </motion.div>

      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Where Reliability Begins
        </motion.h2>
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Our products are engineered to support your toughest challenges, delivering unmatched reliability when it matters most."
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={shouldReduceMotion ? {} : description(idx)}
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

      <div className="my-8 flex w-full items-center gap-4 sm:w-fit sm:gap-6">
        <motion.div
          className="flex-1"
          variants={shouldReduceMotion ? {} : primaryButton}
          initial="hidden"
          whileInView="show"
          viewport={primaryButton.viewport}
        >
          <PrimaryButton
            href="/company/contact"
            className="hover:bg-primary-950 hover:text-primary-400 w-full"
          >
            Contact Us
          </PrimaryButton>
        </motion.div>
        <motion.div
          variants={shouldReduceMotion ? {} : secondaryButton}
          initial="hidden"
          whileInView="show"
          viewport={secondaryButton.viewport}
        >
          <SecondaryButton href="/services" className="bg-secondary-550">
            Explore our services
          </SecondaryButton>
        </motion.div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {servicesData.map((service, idx) => (
          <ServiceCard
            key={service.title}
            service={service}
            idx={idx}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

type ServiceCardProps = {
  service: Service;
  idx: number;
  reduceMotion: boolean | null;
};
function ServiceCard({ service, idx, reduceMotion }: ServiceCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : serviceCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={serviceCard(idx).viewport}
    >
      <Link
        href={service.href}
        aria-label={`Learn more about ${service.title}`}
        className="bg-secondary-400 hover:bg-secondary-500 focus-visible:ring-primary-600 group flex h-full flex-col gap-7 rounded-[12px] px-4 py-2.5 shadow-black/5 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <div className="flex items-start justify-between">
          <Image
            src={service.img}
            width={64}
            height={64}
            alt={`${service.title} icon`}
            loading="lazy"
            className="object-cover"
          />

          <MoveRightIcon
            strokeWidth={1.5}
            className="text-secondary-650 group-hover:text-secondary-800 transition-all duration-300 ease-in-out group-hover:-rotate-14"
          />
        </div>

        <div className="space-y-1.5">
          <h2 className="text-lg font-medium">{service.title}</h2>
          <p className="text-secondary-750 text-sm">{service.description}</p>
        </div>
      </Link>
    </motion.div>
  );
}
