"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

import BreadcrumbTracker from "@/app/(website)/_components/breadcrumb-tracker";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";
import { cn } from "@/lib/utils";

import { ProductDetails, ProductDetailsImage } from "../types";
import {
  breadcrumb,
  ctaButtons,
  description,
  mainImage,
  subTitle,
  thumbnail,
  title,
} from "./variants";

// Props
type Props = {
  product: ProductDetails;
};

export default function ProductDetailsHeroContent({ product }: Props) {
  // Active image state
  const [activeImage, setActiveImage] = useState<string>(
    `${process.env.NEXT_PUBLIC_CDN_URL}${product.main_image}`,
  );

  // Track if it's first mount
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  // Reduce motion
  const shouldReduceMotion = useReducedMotion();

  // Effect for tracking the first load
  useEffect(() => {
    setIsFirstLoad(false);
  }, []);

  return (
    <SectionWrapper className="grid lg:grid-cols-2">
      {/* Product details */}
      <div className="flex flex-col gap-8">
        <motion.div
          variants={shouldReduceMotion ? {} : breadcrumb}
          initial="hidden"
          whileInView="show"
          viewport={breadcrumb.viewport}
        >
          <BreadcrumbTracker
            prevPages={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
            ]}
            currPage={product.title}
            prevPagesClassNames="text-neutral-500"
            currPageClassNames="text-primary-750"
            separatorClassNames="text-neutral-500"
            dotClassNames="bg-neutral-500"
          />
        </motion.div>

        <div className="space-y-4">
          <div className="font-bebas space-y-1 uppercase">
            <motion.h1
              variants={shouldReduceMotion ? {} : title}
              initial="hidden"
              whileInView="show"
              viewport={title.viewport}
              className="from-primary-900 via-primary-800 to-primary-750 w-fit bg-gradient-to-r bg-clip-text text-5xl text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
            >
              {product.title}
            </motion.h1>
            <motion.h3
              variants={shouldReduceMotion ? {} : subTitle}
              initial="hidden"
              whileInView="show"
              viewport={subTitle.viewport}
              className="from-primary-900 via-primary-800 to-primary-700 bg-gradient-to-r bg-clip-text text-2xl text-transparent sm:text-3xl md:text-4xl"
            >
              {product.short_description}
            </motion.h3>
          </div>

          <p className="leading-relaxed text-balance">
            {product.long_description.split(" ").map((word, idx) => (
              <motion.span
                key={idx}
                variants={shouldReduceMotion ? {} : description(idx)}
                initial="hidden"
                animate="show"
                viewport={description(idx).viewport}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </p>
        </div>

        <div className="flex w-full items-center gap-2">
          <motion.div
            variants={shouldReduceMotion ? {} : ctaButtons(1)}
            initial="hidden"
            animate="show"
            viewport={ctaButtons(1).viewport}
            className="w-full sm:w-auto"
          >
            <PrimaryButton
              href="/company/contact"
              containerClassNames="flex-1 sm:flex-0"
            >
              Contact Sales
            </PrimaryButton>
          </motion.div>

          <motion.div
            variants={shouldReduceMotion ? {} : ctaButtons(1.3)}
            initial="hidden"
            animate="show"
            viewport={ctaButtons(1.4).viewport}
            className="w-full sm:w-auto"
          >
            <SecondaryButton
              href="#resources"
              containerClassName="flex-1 sm:flex-0"
              className="w-full"
            >
              Resources
            </SecondaryButton>
          </motion.div>
        </div>
      </div>

      {/* Product images */}
      <div className="flex flex-col gap-1">
        {/* Active image */}
        <AnimatePresence mode="wait">
          <motion.figure
            key={activeImage}
            variants={shouldReduceMotion ? {} : mainImage}
            custom={isFirstLoad}
            initial="hidden"
            animate="show"
            exit="exit"
            viewport={mainImage.viewport}
            className="bg-secondary-400 relative aspect-[650/500] w-full rounded-xl"
          >
            <Image
              src={activeImage}
              fill
              sizes="(min-width: 1024px) 600px, 90vw"
              placeholder="blur"
              blurDataURL="/images/products/placeholder.jpg"
              alt={product.title}
              className="object-contain"
            />
          </motion.figure>
        </AnimatePresence>

        {/* Gallery */}
        <div className="mt-1 grid grid-cols-5 gap-2 sm:gap-3">
          {[
            {
              id: 1,
              image: product.main_image,
              alt_text: product.title,
              order: 0,
            } as ProductDetailsImage,
            ...product.images,
          ].map((image, idx) => (
            <motion.figure
              key={idx}
              onClick={() =>
                setActiveImage(
                  `${process.env.NEXT_PUBLIC_CDN_URL}${image.image}`,
                )
              }
              variants={shouldReduceMotion ? {} : thumbnail(idx)}
              custom={isFirstLoad}
              initial="hidden"
              animate="show"
              viewport={thumbnail(idx).viewport}
              whileHover={{ scale: 1.05 }}
              className={cn(
                "bg-secondary-400 ring-secondary-450 focus-visible:ring-primary-600 relative aspect-[180/111] w-full cursor-pointer overflow-hidden rounded-sm ring-1 focus:outline-none focus-visible:ring-2",
                activeImage ===
                  `${process.env.NEXT_PUBLIC_CDN_URL}${image.image}` &&
                  "ring-primary-600",
              )}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_CDN_URL}${image.image}`}
                fill
                sizes="(min-width: 1024px) 96px, 18vw"
                alt={image.alt_text}
                className="object-contain"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
