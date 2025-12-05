"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import { Course } from "../../../_components/courses/types";
import TrainingReserveForm from "./form";
import { contactCard, description, quote, title } from "./variants";

// Props
type Props = {
  courses: Course[];
};

export default function TrainingReserveSeatContent({ courses }: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      <motion.div
        variants={reduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“The best investment you can make is in yourself. Take the first step — your future is waiting”" />
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
          Ready to Boost Your Skills?
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`If you have any questions or would like more information about our training courses, please contact us at`
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

      <div className="mt-8 grid w-full gap-6 md:grid-cols-3 lg:gap-10.5">
        {/* Contact */}
        <div className="grid w-full gap-2">
          {/* Phone */}
          <motion.div
            variants={reduceMotion ? {} : contactCard(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(0.8).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="tel:+9647833202333"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 grid h-full place-items-center gap-2 py-4 text-center"
            >
              <Image
                src="/icons/phone.svg"
                width={52}
                height={52}
                alt="Contact: +964783320 2333"
              />
              <div className="space-y-1">
                <h2 className="font-medium">Phone</h2>
                <span>+964 783 320 2333</span>
              </div>
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={reduceMotion ? {} : contactCard(1)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(1).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="mailto:info@ppe-iq.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 grid h-full place-items-center gap-2 py-4 text-center"
            >
              <Image
                src="/icons/mail.svg"
                width={52}
                height={52}
                alt="Mailto: info@ppe-iq.com"
              />
              <div className="space-y-1">
                <h2 className="font-medium">Email</h2>
                <span>info@ppe-iq.com</span>
              </div>
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={reduceMotion ? {} : contactCard(1.2)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(1.2).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="https://maps.app.goo.gl/HFFJicbBQ92Qkvdr5"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 grid h-full place-items-center gap-2 py-4 text-center"
            >
              <Image
                src="/icons/pin.svg"
                width={52}
                height={52}
                alt="Location: Al-Mansour, Baghdad, Iraq"
              />
              <div className="space-y-1">
                <h2 className="font-medium">Location</h2>
                <span>Al-Mansour, Baghdad, Iraq</span>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Form */}
        <TrainingReserveForm courses={courses} />
      </div>
    </SectionWrapper>
  );
}
