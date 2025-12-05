"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { CourseDetailsResponse } from "../types";
import { card, description, title } from "./variants";

// Props
type Props = {
  course: CourseDetailsResponse;
};
export default function TrainingCourseDetailsDescriptionContent({
  course,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper className="grid items-start bg-transparent sm:grid-cols-2">
      <div className="flex flex-col gap-12">
        <motion.h1
          variants={reduceMotion ? {} : title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="font-bebas from-primary-900 to-primary-750 bg-gradient-to-r bg-clip-text text-center text-5xl tracking-wide text-transparent sm:w-fit"
        >
          Course Highlights
        </motion.h1>
        <div className="flex flex-col gap-6">
          {course.highlights.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={reduceMotion ? {} : description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex items-start gap-3"
            >
              <span className="text-primary-850 mt-1">
                <CircleCheckIcon strokeWidth={1.5} className="size-6" />
              </span>
              <p className="text-secondary-850">
                <span className="font-medium">{item.title}</span> Gain deep
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid w-full gap-2 md:grid-cols-2">
        {[
          {
            img: "/icons/clock.svg",
            title: "Duration",
            description: course.duration,
          },
          {
            img: "/icons/person.svg",
            title: "Class Size",
            description: course.class_size,
          },
          {
            img: "/icons/pin.svg",
            title: "location",
            description: course.location,
          },
          {
            img: "/icons/medal.svg",
            title: "Certificate",
            description: course.certificate_type,
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            variants={card(idx)}
            initial="hidden"
            whileInView="show"
            viewport={card(idx).viewport}
            className="bg-secondary-450 grid place-items-center gap-4 rounded-lg p-4"
          >
            <Image
              src={item.img}
              width={52}
              height={52}
              alt={item.title}
              loading="lazy"
            />

            <div className="flex flex-col items-center gap-1">
              <span className="font-medium">{item.title}</span>
              <span>{item.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
