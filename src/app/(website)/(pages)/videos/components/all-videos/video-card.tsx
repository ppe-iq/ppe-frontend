"use client";
import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon, PlayIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SecondaryButton from "@/components/global/button/secondary-button";
import { formatDate } from "@/lib/utils";

import { Video } from "./types";
import { videoCard } from "./variants";

type Props = {
  data: Video;
  idx: number;
};

export default function VideoCard({ data, idx }: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={reduceMotion ? {} : videoCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={videoCard(idx).viewport}
    >
      <Link
        href={`/videos/${data.slug}`}
        className="bg-secondary-400 group flex flex-col gap-5 overflow-hidden rounded-lg"
      >
        <figure className="relative aspect-[430/270] w-full overflow-hidden before:absolute before:inset-0 before:z-[1] before:bg-black/40">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${data.thumbnail}`}
            fill
            alt={data.title}
            className="object-cover object-center transition duration-300 group-hover:scale-[1.05]"
          />

          <div className="border-primary-450 bg-primary-650 absolute top-1/2 left-1/2 z-10 grid size-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-4 transition duration-300 group-hover:scale-110">
            <PlayIcon className="fill-primary-400 stroke-primary-400 size-7" />
          </div>
        </figure>

        <div className="space-y-4 px-3 pb-4">
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

          <h2 className="font-medium">{data.title}</h2>

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
