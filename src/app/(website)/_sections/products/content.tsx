"use client";

import { motion, useReducedMotion } from "framer-motion";

import ProductCard from "@/app/(website)/_components/product-card";
import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";

import { Product } from "./types";
import {
  description,
  primaryButton,
  quote,
  secondaryButton,
  title,
} from "./variants";

type Props = {
  products: Product[];
};

export default function ProductsContent({ products }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="bg-secondary-400">
      {/* Quote */}
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Trust only in quality”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Explore our products
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Discover a collection built on precision, performance, and a promise to exceed your expectations every time."
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

      {/* Buttons */}
      <div className="my-8 flex w-full items-center gap-4 sm:w-fit sm:gap-6">
        <motion.div
          variants={shouldReduceMotion ? {} : primaryButton}
          initial="hidden"
          whileInView="show"
          viewport={primaryButton.viewport}
          className="flex-1"
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
          <SecondaryButton href="/products" className="bg-secondary-550">
            Explore our products
          </SecondaryButton>
        </motion.div>
      </div>

      {/* Products */}
      <div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3">
        {products.slice(0, 3).map((product, idx) => (
          <ProductCard
            key={product.id}
            product={product}
            idx={idx + 1.2}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
