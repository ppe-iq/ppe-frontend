"use client";

import { motion } from "framer-motion";
import { MailIcon } from "lucide-react";
import Link from "next/link";

import Logo from "@/components/global/logo";

import { FOOTER_NAV_LINKS, SOCIAL_LINKS } from "./constants";
import { container } from "./variants";

export default function FooterContent() {
  return (
    <motion.footer
      variants={container()}
      initial="hidden"
      whileInView="show"
      viewport={container().viewport}
      className="from-primary-950 via-primary-950 to-primary-900 flex flex-col items-center gap-10 bg-gradient-to-r px-2 py-10 pb-2 sm:px-6 md:px-8 lg:px-10"
    >
      <motion.div
        variants={container(0.2)}
        className="z-10 flex w-full items-center justify-between"
      >
        {/* Logo */}
        <Link
          href="/"
          className="transition-all duration-300 ease-in-out hover:scale-105"
        >
          <Logo mode="light" />
        </Link>

        <div className="item-start flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-8">
          {/* Mobile */}
          {/* <Link
            href="tel:+9647833202333"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary-400 flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <PhoneCallIcon className="size-4" />
            <span>+9647833202333</span>
          </Link> */}

          {/* Email */}
          <Link
            href="mailto:info@ppe-iq.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary-400 flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <MailIcon className="size-4" />
            <span>info@ppe-iq.com</span>
          </Link>
        </div>
      </motion.div>

      {/* Nav links */}
      <motion.div
        variants={container(0.4)}
        className="grid w-full grid-cols-2 items-start gap-6 sm:grid-cols-3 md:grid-cols-5"
      >
        {FOOTER_NAV_LINKS.map((group) => (
          <div
            key={group.title}
            className="flex flex-col items-start justify-center gap-2"
          >
            <Link
              href={group.href}
              className="font-bebas text-primary-700 text-2xl tracking-wider"
            >
              {group.title}
            </Link>

            <div className="flex flex-col gap-px">
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-secondary-600 hover:text-primary-600 text-sm transition-all duration-300 ease-in-out hover:scale-[1.02]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Separator */}
      <div className="bg-secondary-850 h-px w-full rounded-full" />

      {/* Copyright */}
      <motion.div
        variants={container(0.6)}
        className="text-secondary-600 grid w-full grid-cols-1 items-center gap-4 text-center text-xs sm:grid-cols-3 sm:text-left"
      >
        <Link
          href="/privacy-policy"
          className="hover:text-primary-600 transition-all duration-300 hover:scale-[1.02]"
        >
          Privacy Policy
        </Link>

        <span className="ml-0 sm:ml-14">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-primary-600 font-medium">PPE-IQ&nbsp;</span>.
          All rights reserved.
        </span>

        <div className="relative z-10 mb-1 flex items-center justify-center gap-4 sm:justify-end">
          {SOCIAL_LINKS.map((social) => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              rel="noreferrer noopener"
              className="text-secondary-600 hover:text-primary-600 group transition-all duration-300 hover:scale-105"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </motion.div>
    </motion.footer>
  );
}
