import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import AllServicesWrapper from "./_components/all/wrapper";
import ServicesHeroWrapper from "./_components/hero/wrapper";
import PartnerContent from "./_components/partner/content";

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Services | PPE | Proactive Premium Engineering",
  description:
    "Explore PPE's professional engineering services including diagnostics, maintenance, reliability consulting, and training. We help you enhance machinery performance and operational efficiency.",
  alternates: {
    canonical: "https://ppe-iq.com/services",
  },
  openGraph: {
    title: "Services | PPE | Proactive Premium Engineering",
    description:
      "Comprehensive reliability and maintenance services from PPE — diagnostics, vibration analysis, alignment, and predictive maintenance consulting.",
    url: "https://ppe-iq.com/services",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/services.png",
        width: 1200,
        height: 630,
        alt: "PPE Engineering Services Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | PPE | Proactive Premium Engineering",
    description:
      "Discover PPE's specialized engineering services designed to improve reliability, reduce downtime, and optimize performance.",
    images: ["https://ppe-iq.com/images/meta/services.png"],
  },
};

// ---- JSON-LD Schema ----
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Engineering Services - Proactive Premium Engineering",
  description:
    "Professional engineering and reliability services by PPE, offering diagnostics, vibration analysis, laser alignment, and condition monitoring consulting.",
  url: "https://ppe-iq.com/services",
  provider: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PPE Service Offerings",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Vibration Analysis & Diagnostics",
          url: "https://ppe-iq.com/services/vibration-analysis",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Laser Alignment Services",
          url: "https://ppe-iq.com/services/laser-alignment",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Motion Amplification",
          url: "https://ppe-iq.com/services/motion-amplification",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "In-Site Balancing",
          url: "https://ppe-iq.com/services/in-site-balancing",
        },
      },
    ],
  },
  areaServed: {
    "@type": "Country",
    name: "Iraq",
  },
  serviceType: [
    "Diagnostics",
    "Vibration Analysis",
    "Laser Alignment",
    "Consulting",
    "Training",
  ],
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
    ],
  },
};

// ---- Page ----
export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesSchema} />
      <ServicesHeroWrapper />
      <AllServicesWrapper />
      <PartnerContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
