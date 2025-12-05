"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SecondaryButton from "@/components/global/button/secondary-button";
import Pagination from "@/components/global/pagination";

import { Course } from "./types";
import { courseCard, description, quote, title } from "./variants";

// Props
type Props = {
  courses: Course[];
  currentPage: number;
  totalCount: number;
};
export default function TrainingCoursesContent({
  courses,
  currentPage,
  totalCount,
}: Props) {
  // Reduce motion
  const shouldReduceMotion = useReducedMotion();

  // Page size
  const pageSize = 9; // 3 columns x 3 row;

  // Total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Empowering your skills today to shape tomorrow's success”" />
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
          Training Courses
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Comprehensive programs designed to equip you with the latest skills, knowledge, and practical experience to excel in maintenance and reliability.`
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

      {/* Results count */}
      {/* Info: Uncomment this if we needed to add filters later */}
      {/* <div className="mb-4">
        <p className="text-secondary-700 text-sm">
          Showing <span className="font-medium">{courses.length}</span> of{" "}
          <span className="font-medium">{totalCount}</span> courses
        </p>
      </div> */}

      {/* Courses grid */}
      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course, idx) => (
          <CourseCard
            key={course.id}
            course={course}
            idx={idx}
            reduceMotion={shouldReduceMotion || undefined}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8">
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}

type CourseCardProps = {
  course: Course;
  idx: number;
  reduceMotion?: boolean;
};

function CourseCard({ course, idx, reduceMotion }: CourseCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : courseCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Link
        href={`/training/${course.slug}`}
        aria-label={`Learn more about ${course.title}`}
        className="bg-secondary-450 hover:bg-secondary-500 focus-visible:ring-primary-600 group flex h-full flex-col items-center gap-4 overflow-hidden rounded-lg transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-offset-2"
      >
        <figure className="aspect-[433/240] w-full overflow-hidden">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${course.image}`}
            width={433}
            height={240}
            alt={`${course.title} course thumbnail`}
            loading="lazy"
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </figure>

        <div className="flex flex-1 flex-col space-y-2 px-4 pb-4">
          <h3 className="text-primary-950 text-lg font-medium">
            {course.title}
          </h3>
          <p className="text-secondary-800 line-clamp-2 flex-1">
            {course.short_description}
          </p>
          <div className="mt-4 flex items-end justify-between">
            <SecondaryButton containerClassName="pointer-events-none">
              Learn more
            </SecondaryButton>
            <MoveRightIcon
              strokeWidth={1.2}
              className="text-secondary-700 transition group-hover:translate-x-1 group-hover:-rotate-45"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
