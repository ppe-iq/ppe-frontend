// app/(website)/services/vibration-analysis/page.tsx
import { type Metadata } from "next";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import VibrationAnalysisAdvisorContent from "./_components/advisor/content";
import VibrationAnalysisAdvisorQuoteContent from "./_components/advisor-quote/content";
import VibrationAnalysisAdvisorSolutionContent from "./_components/advisor-solution/content";
import VibrationAnalysisAdvisorWorkContent from "./_components/advisor-work/content";
import VibrationAnalysisGuideContent from "./_components/guide/content";
import VibrationAnalysisHeroContent from "./_components/hero/content";
import VibrationAnalysisOperationsContent from "./_components/operations/content";
import VibrationAnalysisPartnerContent from "./_components/partner/content";
import VibrationAnalysisVisualiseContent from "./_components/visualise/content";

// ---- Metadata ----
export const metadata: Metadata = {
  title: "Vibration Analysis | PPE | Proactive Premium Engineering",
  description:
    "Identify hidden faults before they escalate. PPE's vibration analysis service detects imbalance, misalignment, and bearing defects early to keep your machinery running smoothly.",
  alternates: {
    canonical: "https://ppe-iq.com/services/vibration-analysis",
  },
  openGraph: {
    type: "website",
    url: "https://ppe-iq.com/services/vibration-analysis",
    siteName: "PPE Website",
    title: "Vibration Analysis | PPE | Proactive Premium Engineering",
    description:
      "PPE's vibration analysis service provides early detection of imbalance, misalignment, and bearing defects to maximize reliability and performance.",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/vibration-analysis.png",
        width: 1200,
        height: 630,
        alt: "Vibration Analysis Service Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vibration Analysis | PPE | Proactive Premium Engineering",
    description:
      "Detect issues early with PPE's advanced vibration analysis — keeping your machinery reliable and efficient.",
    images: ["https://ppe-iq.com/images/meta/vibration-analysis.png"],
  },
};

// ---- JSON-LD Schema (Service) ----
const vibrationAnalysisSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Vibration Analysis",
  url: "https://ppe-iq.com/services/vibration-analysis",
  description:
    "PPE's vibration analysis detects early-stage machinery faults including imbalance, misalignment, and bearing wear to prevent failures and increase operational uptime.",
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
    "Vibration Analysis",
    "Condition Monitoring",
    "Predictive Maintenance",
  ],
  areaServed: { "@type": "Country", name: "Iraq" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vibration Analysis Services",
    itemListElement: [
      {
        "@type": "Offer",
        name: "On-Site Vibration Analysis",
        url: "https://ppe-iq.com/services/vibration-analysis#on-site",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      {
        "@type": "Offer",
        name: "Remote Vibration Diagnostics",
        url: "https://ppe-iq.com/services/vibration-analysis#remote",
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
        name: "Vibration Analysis",
        item: "https://ppe-iq.com/services/vibration-analysis",
      },
    ],
  },
};

// ---- Page ----
export default function VibrationAnalysisPage() {
  return (
    <>
      <JsonLd data={vibrationAnalysisSchema} />
      <VibrationAnalysisHeroContent />
      <VibrationAnalysisGuideContent />
      <VibrationAnalysisAdvisorContent />
      <VibrationAnalysisAdvisorWorkContent />
      <VibrationAnalysisOperationsContent />
      <VibrationAnalysisVisualiseContent />
      <VibrationAnalysisAdvisorSolutionContent />
      <VibrationAnalysisAdvisorQuoteContent />
      <VibrationAnalysisPartnerContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
