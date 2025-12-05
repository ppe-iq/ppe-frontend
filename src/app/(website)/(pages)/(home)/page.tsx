import { Metadata } from "next";
import dynamic from "next/dynamic";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import BlogsSkeleton from "@/app/(website)/_sections/blog/skeleton";
import HeroSkeleton from "@/app/(website)/_sections/hero/skeleton";
import HeroWrapper from "@/app/(website)/_sections/hero/wrapper";
import ProductsContentSkeleton from "@/app/(website)/_sections/products/skeleton";
import ServicesContent from "@/app/(website)/_sections/services/content";
import TestimonialsSkeleton from "@/app/(website)/_sections/testimonials/skeleton";

// Lazy load
const ProductsWrapper = dynamic(
  () => import("@/app/(website)/_sections/products/wrapper"),
);
const BlogWrapper = dynamic(
  () => import("@/app/(website)/_sections/blog/wrapper"),
);
const TestimonialsWrapper = dynamic(
  () => import("@/app/(website)/_sections/testimonials/wrapper"),
);
const ContactContent = dynamic(
  () => import("@/app/(website)/_sections/contact/content"),
);
const NewsLetterContent = dynamic(
  () => import("@/app/(website)/_sections/newsletter/content"),
);

// SEO
export const metadata: Metadata = {
  title:
    "Proactive Premium Engineering | Industrial Reliability & Maintenance Solutions",
  description:
    "Proactive Premium Engineering (PPE) provides advanced solutions in vibration analysis, laser alignment, motion amplification, and reliability engineering across Iraq and the Middle East. Partner with us to improve performance, precision, and uptime.",
  keywords: [
    "Proactive Premium Engineering",
    "PPE Iraq",
    "ppe-iq",
    "ppe iq",
    "Empowering Rotating Reliability",
    "laser shaft alignment",
    "vibration analysis",
    "motion amplification",
    "condition monitoring",
    "machinery maintenance",
    "reliability engineering",
  ],

  openGraph: {
    title:
      "Proactive Premium Engineering | Industrial Reliability & Maintenance Solutions",
    description:
      "PPE delivers world-class precision maintenance tools, vibration analysis systems, and training programs to optimize industrial reliability.",
    url: "https://ppe-iq.com/",
    siteName: "Proactive Premium Engineering",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/logo.png",
        width: 1200,
        height: 630,
        alt: "PPE Iraq Home Page Preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Proactive Premium Engineering | Industrial Reliability & Maintenance Solutions",
    description:
      "Your trusted partner in reliability — delivering laser alignment, vibration analysis, and condition monitoring expertise across Iraq and the Middle East.",
    images: ["https://ppe-iq.com/images/meta/logo.png"],
    creator: "@ppe_iq",
  },

  alternates: {
    canonical: "https://ppe-iq.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: {
    google: "gT-h5aG21bDVUpI94xNDXG3ydHX4ERsDkxqnT8MACc0",
  },
};

// JSON-LD Schema — Company (Organization) with local presence and contact info
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Proactive Premium Engineering",
  alternateName: "PPE Iraq",
  url: "https://ppe-iq.com",
  logo: "https://ppe-iq.com/images/meta/logo.png",
  image: "https://ppe-iq.com/images/meta/og-image.png",
  description:
    "Leading provider of industrial reliability solutions in Iraq and the Middle East. Specializing in vibration analysis, laser alignment, motion amplification, and predictive maintenance.",
  foundingDate: "2020",
  slogan: "Empowering Rotating Reliability",
  areaServed: ["IQ", "Middle East"],

  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+964-783-320-2333",
    contactType: "Customer Service",
    areaServed: "IQ",
    availableLanguage: ["English", "Arabic"],
    contactOption: "TollFree",
  },

  address: {
    "@type": "PostalAddress",
    addressLocality: "Baghdad",
    addressCountry: "IQ",
  },

  sameAs: [
    "https://www.linkedin.com/company/ppe-premium-proactive-engineering/",
    "https://www.facebook.com/ppeiq/",
    "https://www.instagram.com/ppe_iraq",
    "https://www.youtube.com/@ppe-premiumproactiveengine7776",
    "https://www.tiktok.com/@ppe2259",
    "https://api.whatsapp.com/send/?phone=%2B9647833202333",
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={orgSchema} />

      <Suspense fallback={<HeroSkeleton />}>
        <HeroWrapper />
      </Suspense>

      <ServicesContent />

      {/* Loads lazily below the fold */}
      <Suspense fallback={<ProductsContentSkeleton />}>
        <ProductsWrapper />
      </Suspense>

      <Suspense fallback={<BlogsSkeleton />}>
        <BlogWrapper />
      </Suspense>

      <Suspense fallback={<TestimonialsSkeleton />}>
        <TestimonialsWrapper />
      </Suspense>

      <ContactContent />

      <NewsLetterContent />
    </>
  );
}
