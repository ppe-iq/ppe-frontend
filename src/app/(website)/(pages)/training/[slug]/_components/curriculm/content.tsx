"use client";

import { motion, useReducedMotion } from "framer-motion";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { CourseDetailsCurriculum, CourseDetailsResponse } from "../types";
import { accordionCard, title } from "./variants";

// Props
type Props = {
  course: CourseDetailsResponse;
};

export default function TrainingCourseDetailsCurriculmContent({
  course,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="bg-transparent">
      <div className="w-full text-left">
        <motion.h1
          variants={reduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="font-bebas from-primary-900 to-primary-750 bg-gradient-to-r bg-clip-text text-5xl tracking-wide text-transparent sm:w-fit"
        >
          Curriculum
        </motion.h1>
      </div>

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-3"
        defaultValue="d1"
      >
        {course.curriculum.map((item, idx) => (
          <AccordionCard
            key={item.id}
            data={item}
            idx={idx}
            reduceMotion={reduceMotion}
          />
        ))}
      </Accordion>
    </SectionWrapper>
  );
}

// Accordion card props
type AccordionCardProps = {
  data: CourseDetailsCurriculum;
  idx: number;
  reduceMotion: boolean | null;
};
function AccordionCard({ data, idx, reduceMotion }: AccordionCardProps) {
  return (
    <motion.div
      variants={reduceMotion ? {} : accordionCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={accordionCard(idx).viewport}
      className="flex-1"
    >
      <AccordionItem
        value={`d${idx + 1}`}
        className="bg-secondary-450 hover:bg-secondary-500 w-full rounded-lg px-4 py-2 transition"
      >
        <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
          {data.session_title}
        </AccordionTrigger>
        <AccordionContent className="text-secondary-950 flex w-full flex-col gap-4 text-base leading-relaxed tracking-normal whitespace-pre">
          <p>{data.details}</p>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
