// app/(website)/services/motion-amplification/page.tsx
import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import MotionAmplificationHeroContent from "./_components/hero/content";
import MotionAmplificationMattersContent from "./_components/matters/content";
import MotionAmplificationUsedContent from "./_components/used/content";
import MotionAmplificationWhatContent from "./_components/what/content";
import MotionAmplificationWorksContent from "./_components/works/content";

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Motion Amplification | PPE | Proactive Premium Engineering",
  description:
    "See the invisible with PPE's Motion Amplification service. Transform subtle vibrations into clear visual data to quickly diagnose and solve machine issues.",
  alternates: {
    canonical: "https://ppe-iq.com/services/motion-amplification",
  },
  openGraph: {
    type: "website",
    url: "https://ppe-iq.com/services/motion-amplification",
    siteName: "PPE Website",
    title: "Motion Amplification | PPE | Proactive Premium Engineering",
    description:
      "Visualize vibrations like never before. PPE's Motion Amplification makes hidden motion visible to detect faults, improve accuracy, and reduce downtime.",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/motion-amplification.png",
        width: 1200,
        height: 630,
        alt: "Motion Amplification Service Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Motion Amplification | PPE | Proactive Premium Engineering",
    description:
      "Turn invisible vibrations into clear visuals. PPE's Motion Amplification helps you spot issues instantly and keep assets reliable.",
    images: ["https://ppe-iq.com/images/meta/motion-amplification.png"],
  },
};

// ---- JSON-LD Schema (Service) ----
const motionAmplificationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Motion Amplification",
  url: "https://ppe-iq.com/services/motion-amplification",
  description:
    "PPE's Motion Amplification visualizes subtle machinery vibrations and structural motion, helping engineers diagnose faults faster and improve reliability.",
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
    "Motion Amplification",
    "Vibration Visualization",
    "Condition Monitoring",
  ],
  areaServed: { "@type": "Country", name: "Iraq" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Motion Amplification Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "On-Site Motion Amplification Analysis",
        url: "https://ppe-iq.com/services/motion-amplification#on-site",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Video Report and Root Cause Diagnostics",
        url: "https://ppe-iq.com/services/motion-amplification#report",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    ],
  },
  inLanguage: ["en", "ar"],
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
        name: "Motion Amplification",
        item: "https://ppe-iq.com/services/motion-amplification",
      },
    ],
  },
};

// ---- Page ----
export default function MotionAmplificationPage() {
  return (
    <>
      <JsonLd data={motionAmplificationSchema} />
      <MotionAmplificationHeroContent />
      <MotionAmplificationWhatContent />
      <MotionAmplificationMattersContent />
      <MotionAmplificationWorksContent />
      <MotionAmplificationUsedContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
