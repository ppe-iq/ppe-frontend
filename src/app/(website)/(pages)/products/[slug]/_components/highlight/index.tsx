"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { ProductDetails } from "../types";
import { description, image, title } from "./variants";

// Props
type Props = {
  product: ProductDetails;
};

export default function ProductDetailsHighlight({ product }: Props) {
  // Reduce motion
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="grid items-start bg-transparent sm:grid-cols-2">
      <div className="flex flex-col gap-12">
        <motion.h1
          variants={shouldReduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="font-bebas from-primary-900 to-primary-750 bg-gradient-to-r bg-clip-text text-center text-5xl tracking-wide text-transparent sm:w-fit"
        >
          Highlight
        </motion.h1>
        <div className="flex flex-col gap-6">
          {product.highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              variants={shouldReduceMotion ? {} : description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex items-start gap-3"
            >
              <span className="text-primary-850 mt-1">
                <CircleCheckIcon strokeWidth={1.5} className="size-6" />
              </span>
              <p className="text-secondary-800">
                <span className="text-secondary-950 font-medium">
                  {highlight.title}:
                </span>{" "}
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.figure
        variants={shouldReduceMotion ? {} : image}
        initial="hidden"
        whileInView="show"
        viewport={image.viewport}
        className="border-secondary-500 relative aspect-[653/413] w-full overflow-hidden rounded-md border"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}${product.highlight_image}`}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          alt="Product highlight image"
          loading="lazy"
          className="object-contain"
        />
      </motion.figure>
    </SectionWrapper>
  );
}
