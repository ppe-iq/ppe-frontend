// app/(website)/training/reserve-seat/page.tsx
import { type Metadata } from "next";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import TrainingReserveSeatSkeleton from "./_components/boost/skeleton";
import TrainingReserveSeatWrapper from "./_components/boost/wrapper";
import TrainingReserveHeroContent from "./_components/hero/content";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Reserve Your Seat | PPE | Proactive Premium Engineering",
  description:
    "Secure your spot in PPE's professional training programs. Reserve your seat today and gain hands-on expertise in vibration analysis, alignment, motion amplification, and reliability best practices.",

  alternates: {
    canonical: "https://ppe-iq.com/training/reserve-seat",
  },

  openGraph: {
    title: "Reserve Your Seat | PPE | Proactive Premium Engineering",
    description:
      "Book your place in PPE's upcoming training sessions. Limited seats available for hands-on learning in vibration analysis, laser alignment, motion amplification, and reliability excellence.",
    url: "https://ppe-iq.com/training/reserve-seat",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/reserve-seat.png",
        width: 1200,
        height: 630,
        alt: "Reserve Your Seat at PPE Training",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Reserve Your Seat | PPE | Proactive Premium Engineering",
    description:
      "Register now to secure your seat in PPE's training programs. Hands-on sessions in vibration analysis, laser alignment, motion amplification, and reliability best practices.",
    images: ["https://ppe-iq.com/images/meta/reserve-seat.png"],
  },
};

// ---- JSON-LD Schema ----
const reserveSeatSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "PPE Training Program Registration",
  description:
    "Reserve your seat for PPE’s specialized training programs in vibration analysis, laser alignment, motion amplification, and reliability maintenance.",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  organizer: {
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
  startDate: "2025-02-01",
  endDate: "2025-02-05",
  location: {
    "@type": "Place",
    name: "PPE Training Facility",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IQ",
    },
  },
  offers: {
    "@type": "Offer",
    url: "https://ppe-iq.com/training/reserve",
    price: "0.00",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
    validFrom: "2024-12-01",
  },
};

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function TrainingReservePage({ searchParams }: Props) {
  return (
    <>
      <JsonLd data={reserveSeatSchema} />
      <TrainingReserveHeroContent />

      {/* Reserve Seat Section */}
      <Suspense fallback={<TrainingReserveSeatSkeleton />}>
        <TrainingReserveSeatWrapper searchParams={searchParams} />
      </Suspense>
      <NewsletterContent />
    </>
  );
}
