"use client";

import { motion } from "framer-motion";
import { PlayIcon, XIcon } from "lucide-react";
import Image from "next/image";
import { Dispatch, useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { VideoDetailsResponse } from "../types";
import { videoPlayer } from "./variants";

type Props = {
  video: VideoDetailsResponse;
};

export default function VideoPlayer({ video }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.figure
        onClick={() => setIsOpen(true)}
        variants={videoPlayer}
        initial="hidden"
        animate="show"
        exit="exit"
        className="group relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg before:absolute before:inset-0 before:z-[1] before:bg-black/40"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}${video.thumbnail}`}
          fill
          sizes="(max-width: 768px) 100vw, 1200px"
          alt={video.title}
          placeholder="blur"
          blurDataURL="/images/products/placeholder.jpg"
          className="object-cover object-center"
        />
        <div className="border-primary-450 bg-primary-650 absolute top-1/2 left-1/2 z-10 grid size-16 -translate-x-1/2 -translate-y-1/2 cursor-pointer place-items-center rounded-full border-4 transition duration-300 group-hover:scale-110">
          <PlayIcon className="fill-primary-400 stroke-primary-400 size-7" />
        </div>
      </motion.figure>

      <YoutubeVideoModal isOpen={isOpen} onOpen={setIsOpen} video={video} />
    </>
  );
}

// Props
type ModalProps = {
  isOpen: boolean;
  onOpen: Dispatch<boolean>;
  video: VideoDetailsResponse;
};

function YoutubeVideoModal({ isOpen, onOpen, video }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpen}>
      <DialogContent className="border-primary-500 aspect-auto min-h-[calc(100%-10rem)] max-w-[calc(100%-1rem)] min-w-[calc(100%-12rem)] overflow-hidden rounded-xl p-0 sm:max-w-[calc(100%-12rem)]">
        <DialogClose className="bg-secondary-500/80 absolute top-2 right-2 z-10 cursor-pointer rounded-full p-2 backdrop-blur-2xl">
          <XIcon strokeWidth={1.8} />
        </DialogClose>
        <DialogHeader className="sr-only">
          <DialogTitle>{video.title}</DialogTitle>
          <DialogDescription>{video.short_description}</DialogDescription>
        </DialogHeader>

        <iframe
          src={video.youtube_url.replace("watch?v=", "embed/")}
          title={video.title}
          className="absolute inset-0 h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </DialogContent>
    </Dialog>
  );
}
