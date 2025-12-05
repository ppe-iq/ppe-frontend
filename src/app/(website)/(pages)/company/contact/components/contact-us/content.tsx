"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { SOCIAL_PLATFORMS } from "@/lib/constants";

import CompanyContactForm from "./form";
import { contactCard, contactForm, description, title } from "./variants";

export default function CompanyContactContent() {
  return (
    <SectionWrapper className="grid items-start lg:grid-cols-2">
      <div className="space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <motion.h2
            variants={title}
            initial="hidden"
            whileInView="show"
            viewport={title.viewport}
            className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-left sm:text-3xl md:text-5xl lg:text-7xl xl:text-6xl"
          >
            Find your Solution today
          </motion.h2>

          {/* Description */}
          <p className="text-secondary-700 text-center text-sm sm:text-left sm:text-base md:text-lg">
            {`A space for thoughtful conversations, fresh ideas, and the plans we're shaping for a better future.`
              .split(" ")
              .map((word, idx) => (
                <motion.span
                  key={idx}
                  variants={description(idx)}
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

        {/* Contact */}
        <div className="grid w-full gap-2">
          {/* Phone */}
          <motion.div
            variants={contactCard(0.8)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(0.8).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="tel:+9647833202333"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 hover:bg-secondary-500 flex h-full place-items-center items-center gap-8 px-4 py-4 text-center transition duration-300 hover:scale-[1.01]"
            >
              <Image
                src="/icons/phone.svg"
                width={52}
                height={52}
                alt="Contact: +964783320 2333"
              />
              <div className="space-y-1 text-left">
                <h2 className="font-medium">Phone</h2>
                <span>+964 783 320 2333</span>
              </div>
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={contactCard(1)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(1).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="mailto:info@ppe-iq.com"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 hover:bg-secondary-500 flex h-full place-items-center items-center gap-8 px-4 py-4 text-center transition duration-300 hover:scale-[1.01]"
            >
              <Image
                src="/icons/mail.svg"
                width={52}
                height={52}
                alt="Mailto: info@ppe-iq.com"
              />
              <div className="space-y-1 text-left">
                <h2 className="font-medium">Email</h2>
                <span>info@ppe-iq.com</span>
              </div>
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={contactCard(1.2)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(1.2).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <Link
              href="https://maps.app.goo.gl/HFFJicbBQ92Qkvdr5"
              target="_blank"
              rel="noreferrer noopener"
              className="bg-secondary-400 hover:bg-secondary-500 flex h-full place-items-center items-center gap-8 px-4 py-4 text-center transition duration-300 hover:scale-[1.01]"
            >
              <Image
                src="/icons/pin.svg"
                width={52}
                height={52}
                alt="Location: Al-Mansour, Baghdad, Iraq"
              />
              <div className="space-y-1 text-left">
                <h2 className="font-medium">Location</h2>
                <span>Al-Mansour, Baghdad, Iraq</span>
              </div>
            </Link>
          </motion.div>

          {/* Follow us */}
          <motion.div
            variants={contactCard(1.4)}
            initial="hidden"
            whileInView="show"
            viewport={contactCard(1.4).viewport}
            className="w-full overflow-hidden rounded-lg"
          >
            <div className="bg-secondary-400 flex h-full place-items-center items-center gap-8 px-4 py-4 text-center">
              <Image
                src="/icons/camera.svg"
                width={52}
                height={52}
                alt="Location: Al-Mansour, Baghdad, Iraq"
              />
              <div className="space-y-1 text-left">
                <h2 className="font-medium">Follow Us</h2>
                <div className="flex items-center gap-3">
                  {SOCIAL_PLATFORMS.map((platform, idx) => (
                    <Link
                      key={idx}
                      href={platform.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="transition duration-300 hover:scale-110"
                    >
                      {platform.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Contact Form */}
      <motion.div
        variants={contactForm}
        initial="hidden"
        whileInView="show"
        viewport={contactForm.viewport}
        className="w-full"
      >
        <CompanyContactForm />
      </motion.div>
    </SectionWrapper>
  );
}
