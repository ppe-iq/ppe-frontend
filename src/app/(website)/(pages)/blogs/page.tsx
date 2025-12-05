import { type Metadata } from "next";
import { Suspense } from "react";

import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import JsonLd from "../../_components/jsonld";
import BlogsAllSkeleton from "./_components/all-blogs/skeleton";
import BlogsAllWrapper from "./_components/all-blogs/wrapper";
import BlogsHeroContent from "./_components/hero/content";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// SEO Metadata
export const metadata: Metadata = {
  title: "Engineering Insights & Reliability Articles | PPE Blogs",
  description:
    "Explore expert-written articles on vibration analysis, shaft alignment, condition monitoring, motion amplification, and industrial reliability from Proactive Premium Engineering (PPE).",
  keywords: [
    "PPE Blogs",
    "ppe-iq",
    "PPE IQ",
    "ppe iq",
    "Empowering Rotating Reliability",
    "Proactive Premium Engineering Iraq",
    "vibration analysis articles",
    "shaft alignment",
    "motion amplification",
    "condition monitoring",
    "reliability engineering blogs",
    "industrial maintenance tips",
  ],

  openGraph: {
    title: "PPE Blog | Engineering Insights & Reliability Articles",
    description:
      "Get the latest engineering insights, how-tos, and case studies from PPE — helping you optimize machinery performance and reduce downtime.",
    url: "https://ppe-iq.com/blogs",
    siteName: "Proactive Premium Engineering",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/course-details.png",
        width: 1200,
        height: 630,
        alt: "PPE Blog Page Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "PPE Blog | Engineering Insights & Reliability Articles",
    description:
      "Proactive Premium Engineering shares expert knowledge on precision maintenance, vibration analysis, and reliability optimization.",
    images: ["https://ppe-iq.com/images/meta/course-details.png"],
    creator: "@ppe_iq",
  },

  alternates: {
    canonical: "https://ppe-iq.com/blogs",
  },
};

// JSON-LD Schema
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "Proactive Premium Engineering Blog",
  url: "https://ppe-iq.com/blogs",
  description:
    "The official blog of Proactive Premium Engineering (PPE), featuring educational articles, case studies, and insights on vibration analysis, shaft alignment, and reliability engineering.",
  publisher: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/course-details.png",
    },
  },
  inLanguage: "en",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://ppe-iq.com/blogs",
  },
  sameAs: [
    "https://www.linkedin.com/company/ppe-iq",
    "https://www.facebook.com/ppe.iq",
    "https://www.instagram.com/ppe.iq",
    "https://x.com/ppe_iq",
    "https://www.youtube.com/@ppeiq",
  ],
};

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export default function BlogsPage({ searchParams }: Props) {
  return (
    <>
      {/* Rich Schema for SEO */}
      <JsonLd data={blogSchema} />

      {/* Hero Section */}
      <BlogsHeroContent />

      {/* All Blog Section */}
      <Suspense fallback={<BlogsAllSkeleton />}>
        <BlogsAllWrapper searchParams={searchParams} />
      </Suspense>

      {/* Newsletter Section */}
      <NewsletterContent />
    </>
  );
}
