"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import PrimaryButton from "@/components/global/button/primary-button";
import SecondaryButton from "@/components/global/button/secondary-button";
import { cn, formatDate } from "@/lib/utils";

import { primaryButton } from "../products/variants";
import { Blog } from "./types";
import {
  blogCard,
  description,
  quote,
  secondaryButton,
  title,
} from "./variants";

type Props = {
  blogs: Blog[];
};

export default function BlogContent({ blogs }: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      {/* Quote */}
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Great ideas deserve great words — here's where they begin”" />
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
          Fresh Reads From Our Minds
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {"Stay in the loop with insights, stories, and inspiration straight from our blog."
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
          <SecondaryButton href="/blogs" className="bg-secondary-550">
            Explore our blogs
          </SecondaryButton>
        </motion.div>
      </div>

      <div className="grid w-full gap-6 sm:grid-cols-2">
        <div className="grid grid-cols-1">
          {blogs.length > 1 && (
            <BlogCard
              blog={blogs[1]}
              idx={0}
              reduceMotion={shouldReduceMotion}
            />
          )}

          {blogs.length > 2 && (
            <BlogCard
              blog={blogs[2]}
              idx={1}
              reduceMotion={shouldReduceMotion}
            />
          )}
        </div>
        {blogs.length > 0 && (
          <BlogCard blog={blogs[0]} idx={2} reduceMotion={shouldReduceMotion} />
        )}
      </div>
    </SectionWrapper>
  );
}

type BlogCardProps = {
  blog: Blog;
  idx: number;
  reduceMotion: boolean | null;
};
export function BlogCard({ blog, idx, reduceMotion }: BlogCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : blogCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={blogCard(idx).viewport}
      className="border-secondary-550/60 w-full rounded-[12px] border px-2 pt-1.5 pb-3"
    >
      <Link
        href={`/blogs/${blog.slug}`}
        aria-label={`Read article: ${blog.title}`}
        className="group flex h-full flex-col gap-4"
      >
        <div className="flex flex-1 flex-col gap-2">
          <figure
            className={cn(
              "w-full flex-1 overflow-hidden rounded-[6px]",
              idx === 2 ? "h-64" : "max-h-64",
            )}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog.main_image}`}
              alt={blog.title}
              width={500}
              height={500}
              loading="lazy"
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </figure>
          <p className="text-secondary-700 text-sm font-medium">
            {formatDate(blog.date_published)}
          </p>
          <div className="space-y-px">
            <h2 className="text-primary-950 font-bebas text-2xl tracking-wider">
              {blog.title}
            </h2>
            <h4 className="text-secondary-800 text-base font-medium">
              {blog.short_description}
            </h4>
          </div>
        </div>

        <SecondaryButton
          containerClassName="w-fit"
          className="text-secondary-700 group-hover:text-secondary-950 bg-transparent px-0 shadow-none group-hover:translate-x-2 hover:bg-transparent"
        >
          <span>Read More</span>
          <ArrowRightIcon strokeWidth={1.5} />
        </SecondaryButton>
      </Link>
    </motion.div>
  );
}
