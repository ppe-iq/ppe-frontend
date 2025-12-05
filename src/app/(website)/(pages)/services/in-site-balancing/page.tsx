// app/(website)/services/in-site-balancing/page.tsx
import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import InSiteBalancingBenefitsContent from "./_components/benefits/content";
import InSiteBalancingHeroContent from "./_components/hero/content";
import InSiteBalancingResultsContent from "./_components/results/content";
import InSiteBalancingWhatContent from "./_components/what/content";
import InSiteBalancingWorksContent from "./_components/works/content";

// ---- Metadata ----
export const metadata: Metadata = {
  title: "In-Site Balancing | PPE | Proactive Premium Engineering",
  description:
    "Balance rotating equipment on-site without disassembly. Reduce vibration, extend asset life, and cut downtime with live, data-driven adjustments.",
  alternates: {
    canonical: "https://ppe-iq.com/services/in-site-balancing",
  },
  openGraph: {
    type: "website",
    url: "https://ppe-iq.com/services/in-site-balancing",
    siteName: "PPE Website",
    title: "In-Site Balancing | PPE | Proactive Premium Engineering",
    description:
      "On-site, real-time balancing to minimize vibration and downtime—no teardown required. Improve reliability and efficiency immediately.",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/in-site-balancing.png",
        width: 1200,
        height: 630,
        alt: "In-Site Balancing Service Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Site Balancing | PPE | Proactive Premium Engineering",
    description:
      "Real-time, in-place balancing to reduce vibration and downtime—boost reliability without disassembly.",
    images: ["https://ppe-iq.com/images/meta/in-site-balancing.png"],
  },
};

// ---- JSON-LD Schema (Service + OfferCatalog snippet) ----
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "In-Site Balancing",
  url: "https://ppe-iq.com/services/in-site-balancing",
  description:
    "On-site balancing of rotating machinery to reduce vibration, prevent failures, and extend asset life — performed without disassembly using precision measurement and correction.",
  provider: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  serviceType: [
    "In-Site Balancing",
    "Vibration Reduction",
    "Reliability Improvement",
  ],
  areaServed: { "@type": "Country", name: "Iraq" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "In-Site Balancing Offers",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Standard On-Site Balancing",
        url: "https://ppe-iq.com/services/in-site-balancing#standard",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Comprehensive On-Site Balancing & Report",
        url: "https://ppe-iq.com/services/in-site-balancing#comprehensive",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  inLanguage: ["en", "ar"],
  audience: {
    "@type": "Audience",
    audienceType: "Industrial / Plant Maintenance",
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
        name: "Services",
        item: "https://ppe-iq.com/services",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "In-Site Balancing",
        item: "https://ppe-iq.com/services/in-site-balancing",
      },
    ],
  },
};

export default function InSiteBalancingPage() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      <InSiteBalancingHeroContent />
      <InSiteBalancingWhatContent />
      <InSiteBalancingBenefitsContent />
      <InSiteBalancingWorksContent />
      <InSiteBalancingResultsContent />

      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
