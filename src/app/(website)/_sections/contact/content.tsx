"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MailIcon, PhoneCallIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";

import ContactForm from "./form";
import {
  contactForm,
  contactImage,
  description,
  quote,
  title,
} from "./variants";

export default function ContactContent() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <SectionWrapper>
      {/* Quote */}
      <motion.div
        variants={shouldReduceMotion ? {} : quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Every great move starts with a simple conversation — let's begin ours today”" />
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
          Let&apos;s Talk Today
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`A space for thoughtful conversations, fresh ideas, and the plans we're shaping for a better future.`
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

      <div className="flex w-full flex-col gap-8 sm:flex-row">
        <motion.div
          variants={shouldReduceMotion ? {} : contactImage}
          initial="hidden"
          whileInView="show"
          viewport={contactImage.viewport}
          className="relative flex h-96 w-full flex-col justify-center overflow-hidden rounded-[12px] p-4"
        >
          {/* Image */}
          <figure className="absolute inset-0 size-full overflow-hidden">
            <Image
              src="/images/contact/contact.jpg"
              width={800}
              height={450}
              alt="Contact us"
              className="size-full object-cover"
            />
          </figure>

          {/* Overlay */}
          <span className="bg-primary-950/95 absolute -top-4 -left-6 size-full h-[200%] w-3/4 blur-xl sm:max-w-[60%]" />

          <div className="text-secondary-400 z-10 flex flex-col gap-6">
            <div className="z-10 space-y-px">
              <h3 className="font-bebas text-2xl tracking-wider">
                How can we help you?
              </h3>
              <p>Fill in the form or drop an email.</p>
            </div>

            <div className="space-y-2">
              <Link
                href="tel:+9647833202333"
                target="_blank"
                rel="noreferrer noopener"
                className="flex origin-left items-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                <PhoneCallIcon strokeWidth={1.5} className="size-4" />
                <span className="text-sm font-medium">+964 783 320 2333</span>
              </Link>

              <Link
                href="mailto:m.dursun@ppe-iq.com"
                target="_blank"
                rel="noreferrer noopener"
                className="flex origin-left items-center gap-2 transition-transform duration-300 hover:scale-105"
              >
                <MailIcon strokeWidth={1.5} className="size-4" />
                <span className="text-sm font-medium">m.dursun@ppe-iq.com</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={shouldReduceMotion ? {} : contactForm}
          initial="hidden"
          whileInView="show"
          viewport={contactForm.viewport}
          className="w-full max-w-xl"
        >
          <ContactForm />
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
