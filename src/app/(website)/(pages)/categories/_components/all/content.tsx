"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";

import { Category } from "./types";
import { categoryCard, container, description, title } from "./variants";

type Props = {
  categories: Category[];
};
export default function AllCategoriesContent({ categories }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="bg-secondary-450 flex flex-col gap-8">
      <motion.div
        variants={shouldReduceMotion ? {} : container}
        initial="hidden"
        whileInView="show"
        viewport={container.viewport}
        className="w-full space-y-1"
      >
        <motion.h2
          variants={shouldReduceMotion ? {} : title}
          className="from-primary-900 to-primary-800 font-bebas mx-auto w-fit bg-gradient-to-r bg-clip-text text-3xl tracking-wide text-transparent sm:mx-0"
        >
          All Categories
        </motion.h2>
        <motion.p
          variants={shouldReduceMotion ? {} : description}
          className="text-secondary-750 text-center sm:text-left"
        >
          We divide our products into multiple categories. Check them out!{" "}
        </motion.p>
      </motion.div>

      <div className="grid w-full gap-3 lg:grid-cols-2 2xl:grid-cols-3">
        {categories.map((category, idx) => (
          <CategoryCard
            key={category.id}
            category={category}
            idx={idx}
            reduceMotion={shouldReduceMotion}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

type CategoryCardProps = {
  category: Category;
  idx: number;
  reduceMotion: boolean | null;
};

function CategoryCard({ category, idx, reduceMotion }: CategoryCardProps) {
  return (
    <motion.div
      key={category.id}
      variants={reduceMotion ? {} : categoryCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={categoryCard(idx).viewport}
      className="border-border/50 h-full overflow-hidden rounded-[12px] border"
    >
      <Link
        href={`/categories/${category.slug}`}
        scroll={true}
        className="group bg-secondary-400 hover:bg-secondary-450 flex h-full flex-col items-stretch gap-2 transition-all duration-300 sm:flex-row"
      >
        <figure className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[200/120] sm:w-[250px] sm:shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${category.image}`}
            alt={category.name}
            fill
            loading="lazy"
            sizes="(min-width:1536px) 300px, (min-width:1024px) 300px, 100vw"
            placeholder="blur"
            blurDataURL="/images/products/placeholder.jpg"
            className="size-full object-cover object-center transition-all duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="flex w-full flex-col justify-between gap-4 px-3 py-3.5">
          <div className="space-y-1">
            <h3 className="text-primary-950 text-lg font-medium">
              {category.name}
            </h3>
            <p className="text-secondary-700 line-clamp-3 text-sm">
              {category.description}
            </p>
          </div>

          <div className="flex flex-1 items-end justify-between">
            <SecondaryButton className="hover:bg-secondary-550 hover:text-secondary-900 group-hover:bg-secondary-550 text-secondary-750 group-hover:text-secondary-900 h-fit px-3 py-2 text-sm">
              View Category
            </SecondaryButton>

            <MoveRightIcon
              strokeWidth={1.5}
              className="text-secondary-650 group-hover:text-secondary-750 transition-all duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
