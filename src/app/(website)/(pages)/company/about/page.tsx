import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";

import CompanyAboutDedicationContent from "./_components/dedication/content";
import CompanyAboutDiscoverContent from "./_components/discover/content";
import CompanyAboutHeroContent from "./_components/hero/content";
import CompanyAboutNewsEventsSkeleton from "./_components/news-events/skeleton";
import CompanyAboutNewsEventsWrapper from "./_components/news-events/wrapper";
import CompanyAboutPoweredContent from "./_components/powered/content";
import CompanyAboutUpcomingTrainingsSkeleton from "./_components/upcoming/skeleton";
import CompanyAboutUpcomingTrainingsWrapper from "./_components/upcoming/wrapper";

// Lazy load
const NewsletterContent = dynamic(
  () => import("@/app/(website)/_sections/newsletter/content"),
);
const CompanyAboutNextStepContent = dynamic(
  () => import("./_components/next-step/content"),
);

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Metadata
export const metadata: Metadata = {
  title: "About Us | PPE | Proactive Premium Engineering",
  description:
    "Learn more about PPE (Proactive Premium Engineering). Discover our mission, values, and commitment to delivering innovative reliability and maintenance solutions across industries.",
  alternates: {
    canonical: "https://ppe-iq.com/company/about",
  },
  openGraph: {
    title: "About Us | PPE | Proactive Premium Engineering",
    description:
      "At PPE, we're dedicated to engineering excellence. Explore our story, values, and expertise in condition monitoring, vibration analysis, laser alignment, and reliability improvement.",
    url: "https://ppe-iq.com/company/about",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "About PPE - Proactive Premium Engineering",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | PPE | Proactive Premium Engineering",
    description:
      "Discover who we are at PPE. Our team is committed to delivering innovative engineering services and training that improve reliability, efficiency, and performance.",
    images: ["https://ppe-iq.com/images/meta/logo.png"],
  },
};

// ----- JSON-LD Schema -----
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Proactive Premium Engineering (PPE)",
  url: "https://ppe-iq.com/company/about",
  description:
    "Proactive Premium Engineering (PPE) is a reliability-focused engineering company providing condition monitoring, vibration analysis, laser alignment, and industrial maintenance training solutions.",
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
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: process.env.CONTACT_NUMBER || "+9647833202333",
        contactType: "Customer Support",
        areaServed: "IQ",
        availableLanguage: ["English", "Arabic"],
      },
    ],
    foundingDate: "2018",
    founder: {
      "@type": "Person",
      name: "Proactive Premium Engineering Team",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IQ",
    },
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
        name: "About Us",
        item: "https://ppe-iq.com/company/about",
      },
    ],
  },
};

// Page
export default function AboutUsPage() {
  return (
    <>
      <JsonLd data={aboutSchema} />
      <CompanyAboutHeroContent />
      <CompanyAboutPoweredContent />
      <CompanyAboutDiscoverContent />
      <CompanyAboutDedicationContent />

      {/* News & Events Wrapper */}
      <Suspense fallback={<CompanyAboutNewsEventsSkeleton />}>
        <CompanyAboutNewsEventsWrapper />
      </Suspense>

      {/* Upcoming Trainings */}
      <Suspense fallback={<CompanyAboutUpcomingTrainingsSkeleton />}>
        <CompanyAboutUpcomingTrainingsWrapper  />
      </Suspense>

      <CompanyAboutNextStepContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
