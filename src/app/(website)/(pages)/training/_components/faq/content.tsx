"use client";

import { motion } from "framer-motion";

import Quote from "@/app/(website)/_components/quote";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { accordionCard, description, quote, title } from "./variants";

export default function TrainingFaqContent() {
  return (
    <SectionWrapper className="bg-transparent">
      <motion.div
        variants={quote}
        initial="hidden"
        whileInView="show"
        viewport={quote.viewport}
      >
        <Quote quote="“Answers to your questions, clarity for your journey”" />
      </motion.div>

      {/* Title */}
      <div className="flex flex-col items-center gap-2">
        <motion.h2
          variants={title}
          initial="hidden"
          whileInView="show"
          viewport={title.viewport}
          className="from-primary-900 to-primary-750 font-bebas bg-gradient-to-r bg-clip-text text-center text-4xl tracking-wider text-transparent sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl"
        >
          Frequently Asked Questions
        </motion.h2>

        {/* Description */}
        <p className="text-secondary-700 text-center text-sm sm:text-base md:text-lg">
          {`Frequently asked questions about training classes, covering schedules, course content, certification details, and everything you need to know to get started with PPE’s professional training programs.`
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

      <Accordion
        type="single"
        collapsible
        className="flex w-full flex-col gap-3"
        defaultValue="q1"
      >
        {[
          {
            question: "Do the trainers have field experience?",
            answer:
              "Yes. All of our instructors are highly experienced professionals who have worked extensively in the field. They bring real-world case studies, hands-on expertise, and practical insights into every training session.",
          },
          {
            question: "What are the average class sizes?",
            answer:
              "We keep our classes small, usually ranging from 10 to 20 participants. This ensures personalized attention, interactive learning, and plenty of time for questions and discussions.",
          },
          {
            question: "Can you come to my facility for a class?",
            answer:
              "Absolutely. We offer on-site training programs that can be tailored to your team's specific needs, equipment, and schedule.",
          },
          {
            question:
              "Do you have a contract with a Hotel in the area? Or do you have a suggested Hotel in the area?",
            answer:
              "While we don't have formal contracts with hotels, we do provide recommendations for nearby hotels that previous participants have found convenient and comfortable.",
          },
          {
            question: "What certifications do you offer?",
            answer:
              "We provide internationally recognized certifications, including ISO-compliant Vibration Analysis (CAT I-IV) and other reliability-focused training credentials. Certificates are awarded upon successful completion of the course and exam.",
          },
          {
            question: "When is payment due?",
            answer:
              "Payment is due before the start of the course to confirm your seat. We'll provide an invoice and payment options once you register.",
          },
          {
            question:
              "When should I register and pay for the Vibration CAT-I and/or CAT-II courses?",
            answer:
              "We recommend registering and completing payment at least 3 to 4 weeks before the course begins. This ensures your spot is reserved and gives you time to prepare for the class materials.",
          },
        ].map((item, idx) => (
          <AccordionCard key={idx} data={item} idx={idx} />
        ))}
      </Accordion>
    </SectionWrapper>
  );
}

type AccordionCardProps = {
  data: {
    question: string;
    answer: string;
  };
  idx: number;
};
// Accordion card
function AccordionCard({ data, idx }: AccordionCardProps) {
  return (
    <motion.div
      variants={accordionCard(idx)}
      initial="hidden"
      whileInView="show"
      viewport={accordionCard(idx).viewport}
      className="flex-1"
    >
      <AccordionItem
        value={`q${idx + 1}`}
        className="bg-secondary-450 hover:bg-secondary-500 w-full rounded-lg px-4 py-2 transition"
      >
        <AccordionTrigger className="cursor-pointer text-base font-medium hover:no-underline">
          {data.question}
        </AccordionTrigger>
        <AccordionContent className="text-secondary-950 flex w-full flex-col gap-4 text-base leading-relaxed tracking-normal">
          <p>{data.answer}</p>
        </AccordionContent>
      </AccordionItem>
    </motion.div>
  );
}
