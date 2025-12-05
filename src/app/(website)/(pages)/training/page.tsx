import { type Metadata } from "next";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";

import TrainingCoursesSkeleton from "./_components/courses/skeleton";
import TrainingCoursesWrapper from "./_components/courses/wrapper";
import TrainingExperienceContent from "./_components/experience/content";
import TrainingFaqContent from "./_components/faq/content";
import TrainingHeroContent from "./_components/hero/content";
import TrainingTestimonialsWrapper from "./_components/testimonials/wrapper";

// ISR approach with 1-hour revalidation
export const revalidate = 3600;

// Metadata
export const metadata: Metadata = {
  title: "Training | PPE | Proactive Premium Engineering",
  description:
    "Enhance your team's expertise with PPE's professional training programs. We provide hands-on learning in vibration analysis, laser alignment, motion amplification, and reliability best practices to maximize machinery performance.",
  alternates: { canonical: "https://ppe-iq.com/training" },
  openGraph: {
    title: "Training | PPE | Proactive Premium Engineering",
    description:
      "Join PPE's training programs to master condition monitoring, precision maintenance, and advanced diagnostic techniques. Build the skills your team needs to keep operations reliable and efficient.",
    url: "https://ppe-iq.com/training",
    siteName: "PPE Website",
    images: [
      {
        url: "https://ppe-iq.com/images/meta/training.png",
        width: 1200,
        height: 630,
        alt: "PPE Training Programs Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Training | PPE | Proactive Premium Engineering",
    description:
      "Hands-on training in vibration analysis, alignment, motion amplification, and reliability practices—empowering your team with practical expertise.",
    images: ["https://ppe-iq.com/images/meta/training.png"],
  },
};

// JSON-LD Schema (Courses / Educational Offering)
const trainingSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOccupationalProgram",
  name: "Professional Engineering Training",
  description:
    "Hands-on engineering training provided by PPE in vibration analysis, laser alignment, motion amplification, and maintenance reliability best practices.",
  provider: {
    "@type": "Organization",
    name: "Proactive Premium Engineering",
    url: "https://ppe-iq.com",
    logo: {
      "@type": "ImageObject",
      url: "https://ppe-iq.com/images/meta/logo.png",
    },
  },
  audience: {
    "@type": "Audience",
    audienceType: "Engineers, Maintenance Technicians, Plant Managers",
  },
  inLanguage: ["en", "ar"],
  educationalCredentialAwarded: "Certificate of Completion",
  timeOfDay: "Daytime",
  educationalLevel: "Professional Development",
  url: "https://ppe-iq.com/training",
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
        name: "Training",
        item: "https://ppe-iq.com/training",
      },
    ],
  },
};

// Page props
type PageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Page
export default function TrainingPage({ searchParams }: PageProps) {
  return (
    <>
      <JsonLd data={trainingSchema} />
      <TrainingHeroContent />
      <TrainingExperienceContent />

      <Suspense fallback={<TrainingCoursesSkeleton />}>
        <TrainingCoursesWrapper searchParams={searchParams} />
      </Suspense>

      <Suspense fallback={"Loading..."}>
        <TrainingTestimonialsWrapper />
      </Suspense>

      <TrainingFaqContent />
      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}
