import { type Metadata } from "next";
import { Suspense } from "react";

import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import JsonLd from "../../_components/jsonld";
import VideosAllSkeleton from "./components/all-videos/skeleton";
import VideosAllWrapper from "./components/all-videos/wrapper";
import VideosHeroContent from "./components/hero/content";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// SEO Metadata
export const metadata: Metadata = {
  title: "Videos | PPE | Proactive Premium Engineering",
  description:
    "Watch technical insights, product demonstrations, and engineering tutorials from PPE—helping you master alignment, vibration analysis, and reliability.",

  alternates: {
    canonical: "https://ppe-iq.com/videos",
  },

  openGraph: {
    title: "Videos | PPE | Proactive Premium Engineering",
    description:
      "Discover PPE's video library featuring hands-on engineering lessons, field demos, and expert breakdowns on precision maintenance and machinery reliability.",
    url: "https://ppe-iq.com/videos",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/course-details.png",
        width: 1200,
        height: 630,
        alt: "PPE Videos Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Videos | PPE | Proactive Premium Engineering",
    description:
      "Expert-led videos on vibration analysis, alignment tools, and reliability practices — from the PPE engineering team.",
    images: ["https://ppe-iq.com/images/meta/course-details.png"],
  },
};

// JSON-LD Schema
const videosSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "PPE Engineering Videos",
  description:
    "A collection of video resources from PPE showcasing maintenance insights, vibration analysis demos, and reliability training.",
  url: "https://ppe-iq.com/videos",
  publisher: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  hasPart: [
    {
      "@type": "VideoObject",
      name: "Thermal Growth in Machine Shaft Alignment",
      description:
        "Learn how temperature changes affect shaft alignment and precision maintenance strategies.",
      uploadDate: "2025-03-18",
      thumbnailUrl: "https://ppe-iq.com/images/blogs/card-1.jpg",
      contentUrl:
        "https://www.youtube.com/watch?v=dummy-thermal-growth-alignment",
      embedUrl: "https://www.youtube.com/embed/dummy-thermal-growth-alignment",
    },
    {
      "@type": "VideoObject",
      name: "Choosing the Best Laser Shaft Alignment Tool",
      description:
        "Explore how to choose the right laser alignment tool for your maintenance needs.",
      uploadDate: "2024-10-10",
      thumbnailUrl: "https://ppe-iq.com/images/blogs/card-6.jpg",
      contentUrl: "https://www.youtube.com/watch?v=dummy-laser-shaft-alignment",
      embedUrl: "https://www.youtube.com/embed/dummy-laser-shaft-alignment",
    },
  ],
};

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Page
export default function VideosPage({ searchParams }: Props) {
  return (
    <>
      {/* Rich Schema for SEO */}
      <JsonLd data={videosSchema} />

      {/* Hero Section */}
      <VideosHeroContent />

      {/* All Videos Section */}
      <Suspense fallback={<VideosAllSkeleton />}>
        <VideosAllWrapper searchParams={searchParams} />
      </Suspense>

      <NewsletterContent />
    </>
  );
}
