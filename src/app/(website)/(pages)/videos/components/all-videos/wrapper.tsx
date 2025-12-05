import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { VIDEO_TAG_SLUG, VIDEOS, VIDEOS_TAGS } from "@/lib/endpoints";

import VideosAllContent from "./content";
import VideosAllFilter from "./filter";
import { AllVideosResponse, AllVideosTagsResponse, VideoTag } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get all videos
async function getAllVideos(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<AllVideosResponse | null> {
  try {
    // Build search params
    const params = new URLSearchParams();

    // Add page number
    const page =
      searchParams.page && typeof searchParams.page === "string"
        ? searchParams.page
        : "1";
    params.set("page", page);

    // Add page size
    const pageSize =
      searchParams.page_size && typeof searchParams.page_size === "string"
        ? searchParams.page_size
        : "10";
    params.set("page_size", pageSize);

    // Add search filter
    if (searchParams.search && typeof searchParams.search === "string") {
      params.set("search", searchParams.search);
    }

    // Add tag slug
    if (searchParams.tag && typeof searchParams.tag === "string") {
      params.set(VIDEO_TAG_SLUG, searchParams.tag);
    }

    // URL endpoint
    const url = `${process.env.API_URL}${VIDEOS}?${params.toString()}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["all-videos"] },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all videos: ${res.statusText}`);
    }

    // Data
    const data: AllVideosResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch all videos", error);
    return null;
  }
}

// Get videos tags
async function getVideoTags(): Promise<VideoTag[]> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${VIDEOS_TAGS}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["all-videos-tags"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch videos tags: ${res.statusText}`);
    }

    // Data
    const data: AllVideosTagsResponse = await res.json();

    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch video tags:", error);
    return [];
  }
}

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function VideosAllWrapper({ searchParams }: Props) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get all videos and videos tags in parallel
  const [videosTags, videosResponse] = await Promise.all([
    getVideoTags(),
    getAllVideos(resolvedSearchParams),
  ]);

  // Handle error
  if (!videosResponse) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load videos. Please try again later.
        </p>
      </div>
    );
  }

  // All videos
  const videos = videosResponse.results || [];

  // Empty state
  if (videos.length === 0) {
    const hasFilters = Object.keys(resolvedSearchParams).length > 0;

    return (
      <SectionWrapper>
        {/* Filter Component */}
        <VideosAllFilter tags={videosTags} />

        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <Image
            src="/images/empty-state/videos.svg"
            width={400}
            height={400}
            alt="No videos available"
            priority={false}
          />
          <div className="text-center">
            <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
              {hasFilters ? "No Videos Found" : "No Videos Yet"}
            </h3>
            <p className="text-secondary-700 text-sm">
              {hasFilters
                ? "Try adjusting your filters to find what you're looking for."
                : "Videos for this tag are coming soon."}
            </p>
          </div>
        </div>
      </SectionWrapper>
    );
  }

  // Get current page
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page as string)
    : 1;

  // Page size
  const pageSize = resolvedSearchParams.page_size
    ? parseInt(resolvedSearchParams.page_size as string)
    : 10;

  return (
    <SectionWrapper>
      {/* All Videos Section */}
      <VideosAllContent
        tags={videosTags}
        videos={videos}
        currentPage={currentPage}
        pageSize={pageSize}
        totalCount={videosResponse.count}
      />
    </SectionWrapper>
  );
}
