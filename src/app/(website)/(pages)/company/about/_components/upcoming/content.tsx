"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";
import { formatDate } from "@/lib/utils";

import { UpcomingTraining } from "./types";
import { cta, description, quote, title, upComingCard } from "./variants";

// Props
type Props = {
  upcomingTrainings: UpcomingTraining[];
  hasNext: boolean;
};

export default function CompanyAboutUpComingContent({
  upcomingTrainings,
  hasNext,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="bg-secondary-450">
      <motion.div
        variants={reduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Sharpen your skills today to lead with confidence tomorrow”" />
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
          Upcoming Trainings
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Stay ahead in your career with our upcoming training sessions. Explore hands-on classes designed to enhance your skills in vibration analysis, alignment, motion amplification, and reliability best practices.`
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
        {upcomingTrainings.map((item, idx) => (
          <UpComingCard
            key={item.slug}
            data={item}
            idx={idx}
            reduceMotion={reduceMotion}
          />
        ))}
      </div>

      <motion.div
        variants={reduceMotion ? {} : cta}
        initial="hidden"
        whileInView="show"
        viewport={cta.viewport}
      >
        {hasNext && (
          <SecondaryButton href="/company/news-events">
            See More
          </SecondaryButton>
        )}
      </motion.div>
    </SectionWrapper>
  );
}

// UpComing card props
type UpComingCardProps = {
  data: UpcomingTraining;
  idx: number;
  reduceMotion: boolean | null;
};

function UpComingCard({ data, idx, reduceMotion }: UpComingCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : upComingCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={upComingCard(idx).viewport}
    >
      <Link
        href={`/company/news-events/${data.slug}`}
        className="bg-secondary-400 hover:border-secondary-550 flex size-full items-center gap-3 overflow-hidden rounded-lg border border-transparent px-3 transition duration-300 hover:scale-[1.01]"
      >
        <div className="text-primary-800 flex flex-col items-center gap-1 text-lg font-medium">
          <p>{formatDate(data.takeoff_date).split(",")[0]}</p>
          <p>{formatDate(data.takeoff_date).split(",")[1]}</p>
        </div>
        <div className="my-4 space-y-1 text-left">
          <h2 className="text-primary-950 font-medium">{data.title}</h2>
          <p className="text-secondary-800 line-clamp-2 flex-1">
            {data.location}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
