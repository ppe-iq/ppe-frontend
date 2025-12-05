"use client";

import { motion } from "framer-motion";
import { MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import SecondaryButton from "@/components/global/button/secondary-button";

import { ServiceType } from "./types";
import { categoryCard, container, description, title } from "./variants";

type Props = {
  services: ServiceType[];
};
export default function AllCategoriesContent({ services }: Props) {
  return (
    <SectionWrapper className="bg-secondary-450 flex flex-col gap-8">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={container.viewport}
        className="w-full space-y-1"
      >
        <motion.h2
          variants={title}
          className="from-primary-900 to-primary-800 font-bebas mx-auto w-fit bg-gradient-to-r bg-clip-text text-3xl tracking-wide text-transparent sm:mx-0"
        >
          All Services
        </motion.h2>
        <motion.p
          variants={description}
          className="text-secondary-750 text-center sm:text-left"
        >
          We offer multiple services. Check them out!{" "}
        </motion.p>
      </motion.div>

      <div className="grid w-full gap-3 md:grid-cols-2 2xl:grid-cols-3">
        {services.map((service, idx) => (
          <motion.div
            key={service.id}
            variants={categoryCard(idx)}
            initial="hidden"
            whileInView="show"
            viewport={categoryCard(idx).viewport}
            className="border-border/50 h-full overflow-hidden rounded-[12px] border"
          >
            <Link
              href={`/services/${service.slug}`}
              scroll={true}
              className="group bg-secondary-400 hover:bg-secondary-450 flex h-full flex-col items-stretch gap-2 transition-all duration-300 sm:flex-row"
            >
              <figure className="relative aspect-[16/11] w-full overflow-hidden sm:aspect-[200/120] sm:w-[250px] sm:shrink-0">
                <Image
                  src={service.imgUrl}
                  alt={service.title}
                  fill
                  sizes="(min-width:1536px) 300px, (min-width:1024px) 300px, 100vw"
                  placeholder="blur"
                  blurDataURL="/images/products/placeholder.jpg"
                  className="size-full object-cover object-center transition-all duration-500 group-hover:scale-105"
                />
              </figure>

              <div className="flex flex-col justify-between gap-4 px-3 py-3.5">
                <div className="space-y-1">
                  <h3 className="text-primary-950 text-lg font-medium">
                    {service.title}
                  </h3>
                  <p className="text-secondary-750 line-clamp-3 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-end justify-between">
                  <SecondaryButton className="hover:bg-secondary-550 hover:text-secondary-900 group-hover:bg-secondary-550 text-secondary-750 group-hover:text-secondary-900 h-fit px-3 py-2 text-sm">
                    View Service
                  </SecondaryButton>

                  <MoveRightIcon
                    strokeWidth={1.5}
                    className="text-secondary-650 group-hover:text-secondary-750 transition-all duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
