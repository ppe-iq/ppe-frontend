import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import { COURSES } from "@/lib/endpoints";

import { CoursesResponse } from "../_components/courses/types";
import TrainingCourseDetailsCurriculmContent from "./_components/curriculm/content";
import TrainingCourseDetailsDescriptionContent from "./_components/description/content";
import TrainingCourseDetailsHeroContent from "./_components/hero/content";
import TrainingCourseDetailsResourcesContent from "./_components/resources/content";
import TrainingCourseDetailsSkeleton from "./_components/skeleton";
import { CourseDetailsResponse } from "./_components/types";
import TrainingCourseDetailsWhoContent from "./_components/who/content";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get course by slug
async function getCourseBySlug(
  slug: string,
): Promise<CourseDetailsResponse | null> {
  try {
    // Endpoint
    const url = `${process.env.API_URL}${COURSES}${slug}/`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: [`course-${slug}-details`] },
      headers: { "Contenty-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch course - ${slug}: ${res.statusText}`);
    }

    // Data
    const data: CourseDetailsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch course details:", error);
    return null;
  }
}

// Metadata props
type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Dynamic metadata
export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Resolve params - get slug
  const { slug } = await params;

  // Course
  const course = await getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found",
      description: "This course you are looking for does not exist.",
    };
  }

  // Parent images
  const parentOpenGraph = (await parent).openGraph?.images || [];

  return {
    title: `${course.title} | Training | PPE | Proactive Premium Engineering`,
    description:
      course.meta_description ||
      "Sharpen your precision maintenance and reliability skills through PPE's professional training courses—hands-on learning from certified experts.",

    openGraph: {
      ...parentOpenGraph,
      title: `${course.title} | PPE Training Course`,
      description:
        course.short_description ||
        "Enhance your knowledge with PPE's professional courses covering vibration analysis, alignment, and reliability maintenance practices.",
      url: `https://ppe-iq.com/training/${slug}`,
      images: [
        {
          url: course.image
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${course.image}`
            : "https://ppe-iq.com/images/meta/course-details.png",
          width: 1200,
          height: 630,
          alt: `${course.title} course image`,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${course.title} | PPE | Proactive Premium Engineering`,
      description:
        course.short_description ||
        `Learn more about ${course.title} from PPE.`,
      images: [
        course.image
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${course.image}`
          : "https://ppe-iq.com/images/meta/products.png",
      ],
    },
  };
}

// Generate static params for all courses
export async function generateStaticParams() {
  try {
    // Get all courses
    const url = `${process.env.API_URL}${COURSES}?page_size=100`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return [];

    // Data
    const data: CoursesResponse = await res.json();
    const courses = data.results || [];

    // Return array of courses slug
    return courses.map((course) => ({
      slug: course.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Page props
type Props = {
  params: Promise<{ slug: string }>;
};

// Page component
export default function TrainingCourseDetailsPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<TrainingCourseDetailsSkeleton />}>
        <TrainingCourseDetailsContent params={params} />
      </Suspense>
    </>
  );
}

// Content component
async function TrainingCourseDetailsContent({ params }: Props) {
  // Resolve params - get slug
  const { slug } = await params;

  // Get course
  const course = await getCourseBySlug(slug);

  // Handle 404
  if (!course) {
    return notFound();
  }

  // ---- JSON-LD Schema ----
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.short_description,
    image: course.image
      ? `${process.env.NEXT_PUBLIC_CDN_URL}${course.image}`
      : "https://ppe-iq.com/images/meta/courses.png",

    provider: {
      "@type": "Organization",
      name: "Proactive Premium Engineering",
      url: "https://ppe-iq.com",
      logo: {
        "@type": "ImageObject",
        url: "https://ppe-iq.com/images/meta/logo.png",
      },
    },

    offers: {
      "@type": "Offer",
      url: `https://ppe-iq.com/courses/${course.slug}`,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
    },

    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      endDate: course.duration,
      location: {
        "@type": "Place",
        name:
          course.location || "Proactive Premium Engineering Training Center",
        address: {
          "@type": "PostalAddress",
          addressCountry: "IQ",
        },
      },
    },

    inLanguage: ["en", "ar"],
    url: "https://ppe-iq.com",
  };

  return (
    <>
      <JsonLd data={courseSchema} />

      {/* Hero Section */}
      <TrainingCourseDetailsHeroContent course={course} />

      {/* Course Description */}
      <TrainingCourseDetailsDescriptionContent course={course} />

      {/* Course Reasons */}
      <TrainingCourseDetailsWhoContent course={course} />

      {/* Course Curriculum */}
      <TrainingCourseDetailsCurriculmContent course={course} />

      {/* Course Resources */}
      <TrainingCourseDetailsResourcesContent course={course} />
    </>
  );
}
