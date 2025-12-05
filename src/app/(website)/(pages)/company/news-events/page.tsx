import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import CompanyAboutNewsEventsSkeleton from "../about/_components/news-events/skeleton";
import CompanyNewsEventsHeroContent from "./_components/hero/content";
import CompanyAllNewsEventsWrapper from "./_components/news-events/wrapper";

// Lazy load
const CompanyAboutNextStepContent = dynamic(
  () => import("../about/_components/next-step/content"),
);

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// Metadata
export const metadata: Metadata = {
  title: "News & Events | PPE | Proactive Premium Engineering",
  description:
    "Stay updated with PPE's latest news and upcoming events. From product launches to industry insights, discover how we're shaping the future of reliability and maintenance engineering.",
  alternates: {
    canonical: "https://ppe-iq.com/company/news-events",
  },
  openGraph: {
    title: "News & Events | PPE | Proactive Premium Engineering",
    description:
      "Explore the latest updates, announcements, and events from PPE. Learn about our innovations, industry contributions, and training opportunities that drive engineering excellence.",
    url: "https://ppe-iq.com/company/news-events",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "PPE News & Events Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "News & Events | PPE | Proactive Premium Engineering",
    description:
      "Catch up on PPE's latest news and upcoming events — from innovations and partnerships to hands-on training opportunities.",
    images: ["https://ppe-iq.com/images/meta/logo.png"],
  },
};

// ----- JSON-LD Schema -----
const newsEventsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "PPE News & Events",
  description:
    "Discover the latest news, product announcements, and events from Proactive Premium Engineering (PPE).",
  url: "https://ppe-iq.com/company/news-events",
  mainEntity: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: "https://ppe-iq.com/images/meta/logo.png",
    sameAs: [
      "https://www.linkedin.com/ppe-iq",
      "https://www.facebook.com/ppe-iq",
      "https://www.instagram.com/ppe-iq",
      "https://www.x.com/ppe-iq",
      "https://www.youtube.com/ppe-iq",
    ],
  },
  hasPart: [
    {
      "@type": "NewsArticle",
      headline: "Announcing the AT-Series Trade-In Program",
      description:
        "PPE introduces the AT-Series Trade-In Program to help clients upgrade to the latest precision alignment tools.",
      image: "https://ppe-iq.com/images/meta/news-events-details.png",
      datePublished: "2024-09-24",
      author: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
      publisher: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
        logo: {
          "@type": "ImageObject",
          url: "https://ppe-iq.com/images/meta/logo.png",
        },
      },
    },
  ],
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://ppe-iq.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Company",
        item: "https://ppe-iq.com/company",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "News & Events",
        item: "https://ppe-iq.com/company/news-events",
      },
    ],
  },
};

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function NewsEventsPage({ searchParams }: Props) {
  return (
    <>
      <JsonLd data={newsEventsSchema} />
      <CompanyNewsEventsHeroContent />

      {/* All News & Events Section */}
      <Suspense fallback={<CompanyAboutNewsEventsSkeleton />}>
        <CompanyAllNewsEventsWrapper searchParams={searchParams} />
      </Suspense>

      <CompanyAboutNextStepContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
