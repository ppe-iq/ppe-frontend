"use client";

import { motion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SecondaryButton from "@/components/global/button/secondary-button";
import { cn } from "@/lib/utils";

import { Product } from "../(pages)/categories/[slug]/_components/products/types";
import { productCard } from "./variants";

type ProductCardProps = {
  product: Product;
  idx: number;
  className?: string;
  reduceMotion?: boolean | null;
  isLazy?: boolean;
};

export default function ProductCard({
  product,
  idx,
  className,
  reduceMotion,
  isLazy,
}: ProductCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : productCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={productCard(idx).viewport}
      className={cn(
        "bg-secondary-450 group size-full w-full cursor-pointer rounded-[12px] p-3.5 transition-colors duration-300",
        className,
      )}
    >
      <Link
        href={`/products/${product.slug}`}
        className="flex size-full flex-col gap-6"
      >
        <figure className="size-full flex-1 overflow-hidden rounded-[6px] p-3">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${product.main_image}`}
            alt={product.title}
            width={400}
            height={400}
            loading={isLazy ? "lazy" : "eager"}
            className="size-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="space-y-6">
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <h2 className="font-bebas text-primary-950 text-3xl">
                {product.title}
              </h2>
              <p className="text-secondary-750 line-clamp-2 text-sm">
                {product.short_description}
              </p>
            </div>
            <div className="bg-primary-450 text-primary-900 rounded-full px-3 py-1 text-xs font-medium">
              {product.product_type}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <SecondaryButton
              containerClassName="w-fit"
              className="group-hover:bg-secondary-550 hover:bg-secondary-550"
            >
              Learn More
            </SecondaryButton>
            <MoveRightIcon
              strokeWidth={1.5}
              className="text-secondary-650 group-hover:text-secondary-800 size-6 -translate-x-2 transition-all duration-300 group-hover:translate-x-1 group-hover:-rotate-6"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
