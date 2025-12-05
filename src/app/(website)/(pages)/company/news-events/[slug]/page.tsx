import { type Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";
import { NEWSEVENTS } from "@/lib/endpoints";

import { NewsEventsResponse } from "../../about/_components/news-events/types";
import CompanyNewsEventsDetailsContent from "./_components/article/content";
import CompanyNewsEventsDetailsHeroContent from "./_components/hero/content";
import CompanyNewsEventsDetailsSkeleton from "./_components/skeleton";
import { NewEventDetailsResponse } from "./_components/types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get new | event by slug
async function getNewEventBySlug(
  slug: string,
): Promise<NewEventDetailsResponse | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${NEWSEVENTS}${slug}/`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: [`new-event-${slug}`] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(
        `Failed to fetch new | event - ${slug}: ${res.statusText}`,
      );
    }

    // Data
    const data: NewEventDetailsResponse = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch new | event details:", error);
    return null;
  }
}

// Metadata props
type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Dynamic metadata
export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Resolve params - get slug
  const { slug } = await params;

  // New|event
  const newEvent = await getNewEventBySlug(slug);

  if (!newEvent) {
    return {
      title: "New | Event Not Found",
      description: "This new or event you are looking for does not exist.",
    };
  }

  // Parent images
  const parentOpenGraph = (await parent).openGraph?.images || [];

  return {
    title: `${newEvent.title} | News & Events | PPE`,
    description:
      newEvent.meta_description ||
      "Latest news and events from Proactive Premium Engineering. Read announcements, product launches and event recaps.",

    openGraph: {
      ...parentOpenGraph,
      title: `${newEvent.title} | News & Events | PPE`,
      description:
        newEvent.short_description ||
        `Learn more about ${newEvent.title} at PPE.`,
      url: `https://ppe-iq.com/company/news-events/${slug}`,
      images: [
        {
          url: newEvent.main_image
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${newEvent.main_image}`
            : "https://ppe-iq.com/images/meta/products.png",
          width: 1200,
          height: 630,
          alt: `${newEvent.title} ${newEvent.item_type} image`,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${newEvent.title} | PPE | Proactive Premium Engineering`,
      description:
        newEvent.short_description ||
        `Learn more about ${newEvent.title} from PPE.`,
      images: [
        newEvent.main_image
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${newEvent.main_image}`
          : "https://ppe-iq.com/images/meta/news-events-details.png",
      ],
    },

    alternates: { canonical: `https://ppe-iq.com/company/news-events/${slug}` },
  };
}

// Generate static params for all news & events
export async function generateStaticParams() {
  try {
    // Get all news & events
    const url = `${process.env.API_URL}${NEWSEVENTS}?page_size=100`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return [];

    // Data
    const data: NewsEventsResponse = await res.json();
    const newsEvents = data.results || [];

    return newsEvents.map((newEvent) => ({
      slug: newEvent.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch news & events:", error);
    return [];
  }
}

// Page props
type Props = {
  params: Promise<{ slug: string }>;
};

// Page component
export default function NewsEventsDetailsPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<CompanyNewsEventsDetailsSkeleton />}>
        <NewsEventsDetailsContent params={params} />
      </Suspense>

      {/* Newsletter Section */}
      <NewsletterContent />
    </>
  );
}

// Content component
async function NewsEventsDetailsContent({ params }: Props) {
  // Resolve params - get slug
  const { slug } = await params;

  // Get news & events
  const newEvent = await getNewEventBySlug(slug);

  // Handle 404
  if (!newEvent) {
    return notFound();
  }

  // JSON-LD schema
  const newEventSchema = {
    "@context": "https://schema.org",
    "@type": "NewEvent",
    name: newEvent.title,
    description: newEvent.short_description || newEvent.long_description,
    image: newEvent.main_image
      ? `${process.env.NEXT_PUBLIC_CDN_URL}${newEvent.main_image}`
      : "https://ppe-iq.com/images/meta/products.png",
    brand: {
      "@type": "Brand",
      name: "Proactive Premium Engineering",
    },
    offers: {
      "@type": "Offer",
      url: `https://ppe-iq.com/news-events/${newEvent.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
    },
    category: newEvent.item_type,
    manufacturer: {
      "@type": "Organization",
      name: "Proactive Premium Engineering",
      url: "https://ppe-iq.com",
    },
  };

  return (
    <>
      <JsonLd data={newEventSchema} />

      {/* Hero Section */}
      <CompanyNewsEventsDetailsHeroContent newEvent={newEvent} />

      {/* Article Section */}
      <CompanyNewsEventsDetailsContent newEvent={newEvent} />
    </>
  );
}
