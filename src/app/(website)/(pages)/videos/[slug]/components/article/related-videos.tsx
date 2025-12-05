import { VIDEO_TAG_SLUG, VIDEOS } from "@/lib/endpoints";

import { AllVideosResponse } from "../../../components/all-videos/types";
import VideoCard from "../../../components/all-videos/video-card";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get related videos
async function getRelatedVideos(
  tagSlug: string,
): Promise<AllVideosResponse | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${VIDEOS}?${VIDEO_TAG_SLUG}=${tagSlug}&page_size=3`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return null;

    // Data
    const data: AllVideosResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch relevant videos:", error);
    return null;
  }
}

// Props
type Props = {
  slug: string;
  tagSlug: string;
};

export default async function RelevantVideos({ slug, tagSlug }: Props) {
  // Get related videos
  const response = await getRelatedVideos(tagSlug);

  // Handle error
  if (!response) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load releated videos. Please try again later.
        </p>
      </div>
    );
  }

  const videos = response.results.filter((video) => video.slug !== slug) || [];

  return (
    <div className="w-full space-y-4">
      <h1 className="font-bebas text-3xl">Relevant Videos</h1>

      {videos.length === 0 ? (
        <p>No related videos yet.</p>
      ) : (
        <div className="grid w-full gap-3">
          {videos.map((video, idx) => (
            <VideoCard key={video.id} data={video} idx={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
