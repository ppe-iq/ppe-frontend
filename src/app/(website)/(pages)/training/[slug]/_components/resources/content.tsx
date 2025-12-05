"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CircleCheckIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";

import { CourseDetailsResponse } from "../types";
import { description, image, imagesContainer, title } from "./variants";
import { cn } from "@/lib/utils";

// Props
type Props = {
  course: CourseDetailsResponse;
};

export default function TrainingCourseDetailsResourcesContent({
  course,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  // Get file id
  function getFileId(url: string): string {
    const urlParts = url.split("/");

    return urlParts.at(-1) || "";
  }

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
        className={cn(
          "bg-secondary-450 grid gap-2 rounded-2xl p-2 sm:gap-6 sm:p-6",
          course.pdfs.length > 1 && "md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {course.pdfs.map((pdf) => (
          <motion.div
            key={pdf.id}
            variants={reduceMotion ? {} : image(1.4)}
            initial="hidden"
            whileInView="show"
            viewport={image(1.4).viewport}
            className="bg-secondary-400 flex flex-col gap-6 rounded-md p-3"
          >
            {/* PDF Icon/Logo */}
            <figure className="border-secondary-450 relative h-32 w-full overflow-hidden rounded-lg border">
              <Image
                src="/icons/favicon.svg"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt={pdf.title}
                loading="lazy"
                className="object-contain p-4"
              />
            </figure>

            <h2 className="text-center font-medium">{pdf.title}</h2>

            <div className="mt-auto flex w-full flex-col items-center gap-2 lg:flex-row">
              {/* Preview Button */}
              <SecondaryButton
                href={`${process.env.NEXT_PUBLIC_CDN_URL}${pdf.file}`}
                target="_blank"
                rel="noopener noreferrer"
                containerClassName="flex-1 w-full"
                className="w-full"
              >
                Preview
              </SecondaryButton>
              {/* Download Button */}
              <SecondaryButton
                href={`${process.env.NEXT_PUBLIC_CDN_URL}raw/upload/fl_attachment:${encodeURIComponent(pdf.title)}/v1/courses/pdfs/${getFileId(pdf.file)}`}
                containerClassName="w-full flex-1"
                className="w-full"
              >
                Download
              </SecondaryButton>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
