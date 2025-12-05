"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";
import Pagination from "@/components/global/pagination";
import { formatDate } from "@/lib/utils";

import { NewEvent } from "../../../about/_components/news-events/types";
import { cta, description, newsEventsCard, quote, title } from "./variants";

// Props
type Props = {
  newsEvents: NewEvent[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
};

export default function CompanyAllNewsEventsContent({
  newsEvents,
  currentPage,
  pageSize,
  totalCount,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  // Total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={reduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Stay informed. Stay connected. Be part of every moment that shapes our journey”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={reduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          All News & Events
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Stay informed with the latest insights, updates, and innovations from PPP, your trusted partner in enhancing industrial reliability and precision.`
            .split(" ")
            .map((word, idx) => (
              <motion.span
                key={idx}
                variants={reduceMotion ? {} : description(idx)}
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

      <div className="grid w-full gap-4 md:grid-cols-2">
        {newsEvents.map((item, idx) => (
          <NewsEventCard
            key={idx}
            data={item}
            idx={idx}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <motion.div
          variants={reduceMotion ? {} : cta}
          initial="hidden"
          whileInView="show"
          viewport={cta.viewport}
        >
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </motion.div>
      )}
    </SectionWrapper>
  );
}

type WhoCardProps = {
  data: NewEvent;
  idx: number;
  reduceMotion: boolean | null;
};
// NewsEvent card
function NewsEventCard({ data, idx, reduceMotion }: WhoCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : newsEventsCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={newsEventsCard(idx).viewport}
    >
      <Link
        href={`/company/news-events/${data.slug}`}
        className="bg-secondary-450 hover:border-secondary-550 hover:bg-secondary-400 group grid size-full gap-1.5 overflow-hidden rounded-lg border border-transparent transition duration-300 hover:scale-[1.01] md:grid-cols-3"
      >
        <figure className="relative aspect-[280/200] size-full overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${data.main_image}`}
            fill
            alt={data.title}
            loading="lazy"
            className="object-cover object-center"
          />
        </figure>
        <div className="mt-auto flex h-full flex-col p-3 text-center sm:text-left md:col-span-2">
          <div className="flex items-center justify-between">
            <span className="bg-primary-500 text-primary-900 grid place-items-center rounded-full px-3 py-1 text-xs font-medium capitalize">
              {data.item_type}
            </span>
            <span className="text-secondary-800 text-xs font-medium">
              {formatDate(data.date_published)}
            </span>
          </div>
          <div className="my-4 space-y-1 text-left">
            <h2 className="text-primary-950 font-medium">{data.title}</h2>
            <p className="text-secondary-800 line-clamp-2 flex-1 text-sm">
              {data.short_description.split("").at(-1) === "."
                ? data.short_description
                : `${data.short_description}.`}
            </p>
          </div>

          <div className="mt-auto flex items-end justify-between">
            <SecondaryButton className="text-sm">Read More</SecondaryButton>
            <span className="transition duration-300 group-hover:translate-x-1 group-hover:-rotate-10">
              <MoveRightIcon strokeWidth={1.2} className="text-secondary-700" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
