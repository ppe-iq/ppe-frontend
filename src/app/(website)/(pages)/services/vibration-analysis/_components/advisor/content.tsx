"use client";

import { motion } from "framer-motion";
import { PlayIcon, XIcon } from "lucide-react";
import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { description, image, playBtn, title } from "./variants";

export default function VibrationAnalysisAdvisorContent() {
  return (
    <SectionWrapper className="relative h-[500px] bg-transparent">
      <div className="grid place-items-center gap-13">
        <div className="flex flex-col gap-6">
          <motion.h1
            variants={title}
            initial="hidden"
            whileInView="show"
            viewport={title.viewport}
            className="font-bebas text-center text-7xl"
          >
            <span className="text-primary-450">Meet </span>
            <span className="from-primary-650 to-primary-450 bg-gradient-to-r bg-clip-text text-transparent">
              Advisor
            </span>
          </motion.h1>
          <motion.p
            variants={description}
            initial="hidden"
            whileInView="show"
            viewport={description.viewport}
            className="text-primary-400 max-w-xl text-center"
          >
            Advisor is a <b>Vibration Analysis</b> Program that seamlessly
            integrates into an organization&apos;s maintenance strategy to{" "}
            <b>increase asset</b> <b>integrity</b> and <b>availability</b>.
          </motion.p>
        </div>

        <motion.div
          variants={playBtn}
          initial="hidden"
          whileInView="show"
          viewport={playBtn.viewport}
          className="border-primary-450 bg-primary-650 grid size-16 place-items-center rounded-full border-4"
        >
          <AdvisorDialog />
        </motion.div>
      </div>

      <motion.figure
        variants={image}
        initial="hidden"
        whileInView="show"
        viewport={image.viewport}
        className="absolute inset-0 -z-10 size-full overflow-hidden"
      >
        <Image
          src="/images/services/vibration-analysis-advisor.jpg"
          fill
          sizes="500px, 50vw"
          alt="Meet Advisor"
          className="object-cover object-center"
        />
      </motion.figure>
    </SectionWrapper>
  );
}

// Video dialog
function AdvisorDialog() {
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="cursor-pointer transition hover:scale-120"
      >
        <PlayIcon className="fill-primary-400 stroke-primary-400 size-7" />
      </DialogTrigger>
      <DialogContent className="border-primary-500 aspect-auto max-w-[calc(100%-1rem)] min-w-[calc(100%-12rem)] overflow-hidden rounded-xl p-0 sm:max-w-[calc(100%-12rem)]">
        <DialogClose className="bg-secondary-500/80 absolute top-2 right-2 z-10 cursor-pointer rounded-full p-2 backdrop-blur-2xl">
          <XIcon strokeWidth={1.8} />
        </DialogClose>
        <DialogHeader className="sr-only">
          <DialogTitle>Meet Advisor</DialogTitle>
          <DialogDescription>Meet Advisor</DialogDescription>
        </DialogHeader>

        <video
          onLoadedData={(e) => e.currentTarget.classList.add("opacity-100")}
          autoPlay
          muted
          playsInline
          controls
          preload="metadata"
          poster="/images/meta/vibration-analysis.png"
          className="bg-secondary-450 h-auto w-full object-cover opacity-0 transition-opacity duration-300"
        >
          <source src="/videos/advisor.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </DialogContent>
    </Dialog>
  );
}
