import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import { VIDEOS } from "@/lib/endpoints";

import { AllVideosResponse } from "../components/all-videos/types";
import VideoDetailsArticle from "./components/article/content";
import VideoArticleSkeleton from "./components/article/skeleton";
import VideoDetailsHeroContent from "./components/hero/content";
import VideoDetailsSkeleton from "./components/skeleton";
import { VideoDetailsResponse } from "./components/types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get video by slug
async function getVideoBySlug(
  slug: string,
): Promise<VideoDetailsResponse | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${VIDEOS}${slug}/`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: [`video-details-${slug}`] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch video - ${slug}: ${res.statusText}`);
    }

    // Data
    const data: VideoDetailsResponse = await res.json();
    return data;
  } catch (error) {
    console.error(`Failed to fetch video - ${slug} details:`, error);
    return null;
  }
}

// Metadata props
type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Resolve params - get slug
  const { slug } = await params;

  // Video
  const video = await getVideoBySlug(slug);

  if (!video) {
    return {
      title: "Video Not Found",
      description: "This video you are looking for does not exist.",
    };
  }

  // Parent images
  const parentOpenGraph = (await parent).openGraph?.images || [];

  return {
    title: `${video.title} | Videos | PPE`,
    description:
      video.meta_description ||
      "Expert insights and technical videos from Proactive Premium Engineering — covering reliability, vibration analysis, and precision maintenance.",

    openGraph: {
      ...parentOpenGraph,
      title: `${video.title} | Videos | PPE`,
      description:
        video.meta_description ||
        "Explore technical videos and articles from PPE engineers. Learn best practices in vibration analysis, condition monitoring, and reliability optimization.",
      url: `https://ppe-iq.com/videos/${slug}`,
      images: [
        {
          url: video.thumbnail
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${video.thumbnail}`
            : "https://ppe-iq.com/images/meta/products.png",
          width: 1200,
          height: 630,
          alt: `${video.title} image`,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${video.title} | PPE | Proactive Premium Engineering`,
      description:
        video.short_description || `Learn more about ${video.title} from PPE.`,
      images: [
        video.thumbnail
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${video.thumbnail}`
          : "https://ppe-iq.com/images/meta/news-events-details.png",
      ],
    },

    alternates: { canonical: `https://ppe-iq.com/videos/${slug}` },
  };
}

// Generate static params for all videos
export async function generateStaticParams() {
  try {
    // Get all videos
    const url = `${process.env.API_URL}${VIDEOS}?page_size=100`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return [];

    // Data
    const data: AllVideosResponse = await res.json();
    const videos = data.results || [];

    // Return array of slug objects
    return videos.map((video) => ({
      slug: video.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch all videos:", error);
    return [];
  }
}

// Page props
type Props = {
  params: Promise<{ slug: string }>;
};

export default function VideoDetailsPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<VideoDetailsSkeleton />}>
        <VideoDetailsContent params={params} />
      </Suspense>
    </>
  );
}

// Content component
async function VideoDetailsContent({ params }: Props) {
  // Resolve params - get slug
  const { slug } = await params;

  // Get video
  const video = await getVideoBySlug(slug);

  // Handle 404
  if (!video) {
    return notFound();
  }

  // JSON-LD schema
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "Video",
    name: video.title,
    description: video.short_description || video.long_description,
    image: video.thumbnail
      ? `${process.env.NEXT_PUBLIC_CDN_URL}${video.thumbnail}`
      : "https://ppe-iq.com/images/meta/news-events-details.png",
    brand: {
      "@type": "Brand",
      name: "Proactive Premium Engineering",
    },
    offers: {
      "@type": "Offer",
      url: `https://ppe-iq.com/news-events/${video.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
    },
    category: video.slug,
    manufacturer: {
      "@type": "Organization",
      name: "Proactive Premium Engineering",
      url: "https://ppe-iq.com",
    },
  };

  return (
    <>
      <JsonLd data={videoSchema} />

      {/* Hero Section */}
      <VideoDetailsHeroContent video={video} />

      {/* Article Section */}
      <Suspense fallback={<VideoArticleSkeleton />}>
        <VideoDetailsArticle video={video} />
      </Suspense>
    </>
  );
}
