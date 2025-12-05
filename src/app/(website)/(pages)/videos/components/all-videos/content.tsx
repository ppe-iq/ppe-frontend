"use client";

import { motion, useReducedMotion } from "framer-motion";

import Pagination from "@/components/global/pagination";

import VideosAllFilter from "./filter";
import { Video, VideoTag } from "./types";
import { btn, title } from "./variants";
import VideoCard from "./video-card";

// Props
type Props = {
  tags: VideoTag[];
  videos: Video[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
};

export default function VideosAllContent({
  tags,
  videos,
  currentPage,
  pageSize,
  totalCount,
}: Props) {
  // Reduce motion
  const reduceMotion = useReducedMotion();

  // Total pages
  const totalPages = Math.ceil(totalCount / pageSize);

  return (
    <>
      <motion.div
        variants={
          reduceMotion ? {} : reduceMotion ? {} : reduceMotion ? {} : title
        }
        initial="hidden"
        whileInView="show"
        viewport={title.viewport}
        className="w-full text-left"
      >
        <h1 className="font-bebas text-3xl sm:text-4xl">All Videos</h1>
      </motion.div>

      <div className="flex w-full items-center justify-between gap-10">
        <VideosAllFilter tags={tags} />
      </div>

      <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {videos.map((video, idx) => (
          <VideoCard key={idx} data={video} idx={idx} />
        ))}
      </div>

      <motion.div
        variants={reduceMotion ? {} : btn}
        initial="hidden"
        whileInView="show"
        viewport={btn.viewport}
      >
        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-8">
            <Pagination currentPage={currentPage} totalPages={totalPages} />
          </div>
        )}
      </motion.div>
    </>
  );
}
