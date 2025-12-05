// app/(website)/services/laser-alignment/page.tsx
import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import LaserAlignmentHeroContent from "./_components/hero/content";
import LaserAlignmentPrecisionContent from "./_components/precision/content";
import LaserAlignmentServicesContent from "./_components/services/content";
import LaserAlignmentSupportContent from "./_components/support/content";
import LaserAlignmentToolsContent from "./_components/tools/content";

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Laser Alignment | PPE | Proactive Premium Engineering",
  description:
    "Achieve precise shaft and coupling alignment with PPE's advanced laser technology. Reduce wear, extend machine life, and improve energy efficiency with pinpoint accuracy.",
  alternates: {
    canonical: "https://ppe-iq.com/services/laser-alignment",
  },
  openGraph: {
    type: "website",
    url: "https://ppe-iq.com/services/laser-alignment",
    siteName: "PPE Website",
    title: "Laser Alignment | PPE | Proactive Premium Engineering",
    description:
      "Precision laser alignment for rotating machinery to reduce vibration, minimize wear, and maximize reliability and energy efficiency.",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/laser-alignment.png",
        width: 1200,
        height: 630,
        alt: "Laser Alignment Service Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Alignment | PPE | Proactive Premium Engineering",
    description:
      "Pinpoint shaft and coupling alignment with PPE's laser alignment service—improve reliability, extend asset life, and cut energy loss.",
    images: ["https://ppe-iq.com/images/meta/laser-alignment.png"],
  },
};

// ---- JSON-LD Schema (Service) ----
const laserAlignmentSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Laser Alignment",
  url: "https://ppe-iq.com/services/laser-alignment",
  description:
    "Precision laser shaft and coupling alignment delivered by PPE to minimize vibration, reduce wear, and improve machine efficiency.",
  provider: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  serviceType: ["Laser Alignment", "Shaft Alignment", "Coupling Alignment"],
  areaServed: { "@type": "Country", name: "Iraq" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Laser Alignment Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Standard Alignment",
        url: "https://ppe-iq.com/services/laser-alignment#standard",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Comprehensive Alignment & Report",
        url: "https://ppe-iq.com/services/laser-alignment#comprehensive",
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
        name: "Laser Alignment",
        item: "https://ppe-iq.com/services/laser-alignment",
      },
    ],
  },
};

export default function LaserAlignmentPage() {
  return (
    <>
      <JsonLd data={laserAlignmentSchema} />

      <LaserAlignmentHeroContent />
      <LaserAlignmentPrecisionContent />
      <LaserAlignmentServicesContent />
      <LaserAlignmentToolsContent />
      <LaserAlignmentSupportContent />

      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
