import { Suspense } from "react";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import TiptapRenderer from "@/app/(website)/(pages)/editor/_components/tiptap-render";
import ShareBtn from "@/components/global/share-btn";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_PLATFORMS } from "@/lib/constants";

import { VideoDetailsResponse } from "../types";
import RelevantVideos from "./related-videos";
import RelatedVideosSkeleton from "./related-videos-skeleton";
import VideoPlayer from "./video-player";

// Props
type props = {
  video: VideoDetailsResponse;
};

export default function VideoDetailsArticle({ video }: props) {
  return (
    <SectionWrapper className="grid items-start gap-4 md:grid-cols-3">
      <div className="border-secondary-550 space-y-8 rounded-lg border p-3.5 md:col-span-2">
        {/* Video Palyer */}
        <VideoPlayer video={video} />

        {/* Tiptap Renderer - Rich Text Content */}
        <TiptapRenderer content={video.long_description} />

        <Separator className="bg-secondary-550 my-12 w-full" />

        <div className="flex flex-col items-center gap-3">
          <h3 className="font-medium">Share this post on</h3>
          <div className="flex items-center gap-1">
            {SOCIAL_PLATFORMS.map((platform, idx) => (
              <ShareBtn key={idx} idx={idx} platformUrl={platform.url}>
                {platform.icon}
              </ShareBtn>
            ))}
          </div>
        </div>
      </div>

      {/* Relevant videos */}
      <Suspense fallback={<RelatedVideosSkeleton />}>
        <RelevantVideos
          slug={video.slug}
          tagSlug={video.tags.at(0)?.slug || ""}
        />
      </Suspense>
    </SectionWrapper>
  );
}
