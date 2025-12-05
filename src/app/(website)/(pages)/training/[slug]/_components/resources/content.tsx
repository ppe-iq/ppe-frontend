"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";

import { CourseDetailsResponse } from "../types";
import { description, image, imagesContainer, title } from "./variants";

// Props
type Props = {
  course: CourseDetailsResponse;
};

export default function TrainingCourseDetailsResourcesContent({
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
          className="font-bebas from-primary-900 to-primary-750 w-fit bg-gradient-to-r bg-clip-text text-5xl tracking-wide text-transparent"
        >
          Resources
        </motion.h1>
        <div className="flex flex-col gap-6">
          {course.resources.map((item, idx) => (
            <motion.div
              key={item.id}
              variants={reduceMotion ? {} : description(idx)}
              initial="hidden"
              whileInView="show"
              viewport={description(idx).viewport}
              className="flex items-start gap-3"
            >
              <span className="text-primary-850">
                <CircleCheckIcon strokeWidth={1.5} className="size-6" />
              </span>
              <p className="text-secondary-950 font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        variants={reduceMotion ? {} : imagesContainer}
        initial="hidden"
        whileInView="show"
        viewport={imagesContainer.viewport}
        className="bg-secondary-450 grid grid-cols-2 gap-2 rounded-2xl p-2 sm:gap-6 sm:p-6"
      >
        {course.pdfs.map((item) => (
          <motion.div
            key={item.id}
            variants={reduceMotion ? {} : image(1.4)}
            initial="hidden"
            whileInView="show"
            viewport={image(1.4).viewport}
            className="bg-secondary-400 flex flex-col gap-6 rounded-md p-3"
          >
            <figure className="border-secondary-450 relative aspect-[303/310] w-full overflow-hidden rounded-lg border">
              <Image
                src="/icons/favicon.svg"
                fill
                sizes="(min-width: 1024px) 100px, 19vw"
                alt="Brochure"
                loading="lazy"
                className="object-contain"
              />
            </figure>
            <h2 className="text-center font-medium">{item.title}</h2>
            <SecondaryButton
              href={item.file_url}
              target="_blank"
              containerClassName="mt-auto"
              className="w-full"
            >
              Preview
            </SecondaryButton>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
