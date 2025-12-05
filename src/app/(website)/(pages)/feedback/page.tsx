import { type Metadata } from "next";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";

import FeedbackFormSkeleton from "./components/form/skeleton";
import FeedbackFormWrapper from "./components/form/wrapper";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// Metadata
export const metadata: Metadata = {
  title: "Feedback | PPE | Proactive Premium Engineering",
  description:
    "We value your feedback! Share your thoughts, experiences, or suggestions with PPE to help us improve our services and serve you better.",
  alternates: {
    canonical: "https://ppe-iq.com/feedback",
  },
  openGraph: {
    title: "Feedback | PPE | Proactive Premium Engineering",
    description:
      "Your voice matters to us. Let PPE know how we're doing and help us enhance our products, training, and customer experience.",
    url: "https://ppe-iq.com/feedback",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/course-details.png",
        width: 1200,
        height: 630,
        alt: "PPE Feedback Page Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feedback | PPE | Proactive Premium Engineering",
    description:
      "We'd love to hear from you! Share your feedback with PPE and help us continue delivering reliability and engineering excellence.",
    images: ["https://ppe-iq.com/images/meta/course-details.png"],
  },
};

// JSON-LD Schema
const feedbackSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Feedback - Proactive Premium Engineering",
  description:
    "Provide your feedback to Proactive Premium Engineering. Let us know your thoughts, experiences, and suggestions for improving our services and support.",
  url: "https://ppe-iq.com/feedback",
  mainEntity: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: "https://ppe-iq.com/images/meta/logo.png",
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Customer Support",
        email: "info@ppe-iq.com",
        availableLanguage: ["English", "Arabic"],
        areaServed: "IQ",
      },
    ],
  },
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
        name: "Feedback",
        item: "https://ppe-iq.com/feedback",
      },
    ],
  },
};

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Page
export default function FeedbackPage({ searchParams }: Props) {
  return (
    <>
      <JsonLd data={feedbackSchema} />

      <Suspense fallback={<FeedbackFormSkeleton />}>
        <FeedbackFormWrapper searchParams={searchParams} />
      </Suspense>
    </>
  );
}
