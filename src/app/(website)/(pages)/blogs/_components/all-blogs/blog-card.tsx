"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SecondaryButton from "@/components/global/button/secondary-button";
import { formatDate } from "@/lib/utils";

import { Blog } from "./types";
import { blogCard } from "./variants";

type Props = {
  data: Blog;
  idx: number;
};
export default function BlogCard({ data, idx }: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? {} : blogCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={blogCard(idx).viewport}
    >
      <Link
        href={`/blogs/${data.slug}`}
        className="bg-secondary-400 group flex min-h-full flex-col gap-5 overflow-hidden rounded-lg"
      >
        <figure className="relative aspect-[430/270] w-full overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${data.main_image}`}
            fill
            alt={data.title}
            className="object-cover object-center transition duration-300 group-hover:scale-[1.05]"
          />
        </figure>

        <div className="flex min-h-full flex-1 flex-col space-y-4 px-3 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              {data.tags.map((tag) => (
                <span
                  key={tag.id}
                  className="bg-primary-450 rounded-full px-4 py-2 text-center text-sm"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <span className="text-secondary-750 text-sm">
              {formatDate(data.date_published)}
            </span>
          </div>

          <h2 className="flex-1 font-medium">{data.title}</h2>

          <div className="flex items-end justify-between">
            <SecondaryButton className="text-sm">Read More</SecondaryButton>
            <MoveRightIcon
              strokeWidth={1.2}
              className="text-secondary-700 group-hover:text-secondary-900 transition duration-300 group-hover:translate-x-1 group-hover:-rotate-4"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
