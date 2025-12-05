import { type Metadata } from "next";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import AllProductsSkeleton from "./_components/all/skeleton";
import AllProductsWrapper from "./_components/all/wrapper";
import ConditionMonitoring from "./_components/condition-monitoring/content";
import AllProductsHeroContent from "./_components/hero/content";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// Metadata
export const metadata: Metadata = {
  title: "Products | PPE | Proactive Premium Engineering",
  description:
    "Explore PPE's full range of industrial maintenance and reliability engineering products — from alignment and balancing tools to motion amplification and condition monitoring systems.",
  alternates: {
    canonical: "https://ppe-iq.com/products",
  },
  openGraph: {
    title: "Products | PPE | Proactive Premium Engineering",
    description:
      "Discover cutting-edge tools and technologies for precision alignment, vibration analysis, and reliability monitoring by Proactive Premium Engineering.",
    url: "https://ppe-iq.com/products",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/products.png",
        width: 1200,
        height: 630,
        alt: "PPE Products Overview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Products | PPE | Proactive Premium Engineering",
    description:
      "Explore PPE's product catalog — advanced vibration analysis tools, alignment systems, balancing devices, and motion amplification solutions.",
    images: ["https://ppe-iq.com/images/meta/products.png"],
  },
};

// JSON-LD Schema
const productsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Products - Proactive Premium Engineering",
  description:
    "A complete product catalog of Proactive Premium Engineering, offering professional-grade tools and systems for precision alignment, condition monitoring, and reliability maintenance.",
  url: "https://ppe-iq.com/products",
  mainEntity: {
    "@type": "ItemList",
    name: "PPE Product List",
  },
  publisher: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
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
        name: "Products",
        item: "https://ppe-iq.com/products",
      },
    ],
  },
};

// Page
type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default function AllProductsPage({ searchParams }: PageProps) {
  return (
    <>
      <JsonLd data={productsSchema} />
      <AllProductsHeroContent />

      <Suspense fallback={<AllProductsSkeleton />}>
        <AllProductsWrapper searchParams={searchParams} />
      </Suspense>

      <ConditionMonitoring />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
