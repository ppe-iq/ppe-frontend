"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { ProductDetails, ProductDetailsFeature } from "../types";
import { featureCard, title } from "./variants";

// Props
type Props = {
  product: ProductDetails;
};

export default function ProductDetailsFeatures({ product }: Props) {
  // Reduce motion
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <div className="flex w-full justify-center sm:justify-start">
        <motion.h1
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="font-bebas from-primary-900 to-primary-750 w-fit bg-gradient-to-r bg-clip-text text-5xl tracking-wide text-transparent"
        >
          Features
        </motion.h1>
      </div>

      <div className="3xl:grid-cols-4 grid w-full gap-4 sm:grid-cols-2 md:grid-cols-3">
        {product.features.map((feature, idx) => (
          <FeatureCard
            key={idx}
            feature={feature}
            idx={idx}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

// Feature card props
type FeatureCardProps = {
  feature: ProductDetailsFeature;
  idx: number;
  reduceMotion: boolean | null;
};

function FeatureCard({ feature, idx, reduceMotion }: FeatureCardProps) {
  console.log({ feature });
  return (
    <motion.div
      variants={reduceMotion ? {} : featureCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={featureCard(idx).viewport}
      className="flex flex-col items-center gap-4 rounded-sm px-6 py-3 sm:items-start"
    >
      <figure className="size-20 overflow-hidden">
        <Image
          src={`/icons/${feature.icon}.svg`}
          width={82}
          height={82}
          alt={`${feature.title} - ${feature.icon}`}
          className="size-full object-cover"
        />
      </figure>

      <div className="space-y-1 text-center sm:text-left">
        <h2 className="font-bebas text-xl">{feature.title}</h2>
        <p className="text-secondary-750 text-center text-balance sm:text-left sm:text-wrap">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}
