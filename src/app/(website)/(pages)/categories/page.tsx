import { type Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";

import AllCategoriesSkeleton from "./_components/all/skeleton";
import AllCategoriesWrapper from "./_components/all/wrapper";
import CategoriesHeroContent from "./_components/hero/content";

// Lazy load
const NewsletterContent = dynamic(
  () => import("@/app/(website)/_sections/newsletter/content"),
);

// Metadata
export const metadata: Metadata = {
  title: "Categories | PPE | Proactive Premium Engineering",
  description:
    "Browse PPE's knowledge base by category — covering shaft alignment, vibration analysis, maintenance, condition monitoring, and more expert insights.",
  alternates: {
    canonical: "https://ppe-iq.com/categories",
  },
  openGraph: {
    title: "Categories | PPE | Proactive Premium Engineering",
    description:
      "Explore all PPE blog categories including shaft alignment, machinery maintenance, motion amplification, and reliability engineering.",
    url: "https://ppe-iq.com/categories",
    siteName: "Proactive Premium Engineering",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/categories.png",
        width: 1200,
        height: 630,
        alt: "PPE Blog Categories Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Categories | PPE | Proactive Premium Engineering",
    description:
      "Discover PPE's blog categories for engineering insights in maintenance, reliability, and vibration analysis.",
    images: ["https://ppe-iq.com/images/meta/categories.png"],
  },
};

// ---- JSON-LD Schema ----
const categoriesSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blog Categories - Proactive Premium Engineering",
  description:
    "A categorized collection of articles and resources from PPE focused on machinery reliability, shaft alignment, and condition monitoring.",
  url: "https://ppe-iq.com/categories",
  publisher: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  hasPart: [
    {
      "@type": "ItemList",
      name: "Vibration Analysis",
      url: "https://ppe-iq.com/categories/vibration-analysis",
    },
    {
      "@type": "ItemList",
      name: "Laser Alignment",
      url: "https://ppe-iq.com/categories/laser-alignment",
    },
    {
      "@type": "ItemList",
      name: "Balancing",
      url: "https://ppe-iq.com/categories/balancing",
    },
    {
      "@type": "ItemList",
      name: "Infrared Thermography",
      url: "https://ppe-iq.com/categories/infrared-thermography",
    },
    {
      "@type": "ItemList",
      name: "Ultrasound",
      url: "https://ppe-iq.com/categories/ultrasound",
    },
    {
      "@type": "ItemList",
      name: "Lubrication Management",
      url: "https://ppe-iq.com/categories/lubrication-management",
    },
    {
      "@type": "ItemList",
      name: "CMS Turbo Machinery",
      url: "https://ppe-iq.com/categories/cms-turbo-machinery",
    },
    {
      "@type": "ItemList",
      name: "Motion Amplification",
      url: "https://ppe-iq.com/categories/motion-amplification",
    },
  ],
};

// Page
export default function CategoriesPage() {
  return (
    <>
      <JsonLd data={categoriesSchema} />
      <CategoriesHeroContent />

      <Suspense fallback={<AllCategoriesSkeleton />}>
        <AllCategoriesWrapper />
      </Suspense>

      <NewsletterContent />
    </>
  );
}
