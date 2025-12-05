import { type Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";
import { BLOG } from "@/lib/endpoints";

import { AllBlogsResponse } from "../_components/all-blogs/types";
import BlogDetailsArticle from "./components/article/content";
import BlogArticleSkeleton from "./components/article/skeleton";
import BlogDetailsHeroContent from "./components/hero/content";
import BlogDetailsSkeleton from "./components/skeleton";
import { BlogDetailsResponse } from "./components/types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get blog by slug
async function getBlogBySlug(
  slug: string,
): Promise<BlogDetailsResponse | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${BLOG}${slug}/`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: [`blog-details-${slug}`] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch blog - ${slug}: ${res.statusText}`);
    }

    // Data
    const data: BlogDetailsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch blog details:", error);
    return null;
  }
}

// Metadata props
type MetadataProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata(
  { params }: MetadataProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // Resolved params - get slug
  const { slug } = await params;

  // Blog
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "This blog you are looking for does not exist.",
    };
  }

  // Parent images
  const parentOpenGraph = (await parent).openGraph?.images || [];

  return {
    title: `${blog.title} | Blogs | PPE`,
    description:
      blog.meta_description ||
      "Expert insights and technical blogs from Proactive Premium Engineering — covering reliability, vibration analysis, and precision maintenance.",

    openGraph: {
      ...parentOpenGraph,
      title: `${blog.title} | Blogs | PPE`,
      description:
        blog.meta_description ||
        "Explore technical blogs and articles from PPE engineers. Learn best practices in vibration analysis, condition monitoring, and reliability optimization.",
      url: `https://ppe-iq.com/blogs/${slug}`,
      images: [
        {
          url: blog.main_image
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${blog.main_image}`
            : "https://ppe-iq.com/images/meta/products.png",
          width: 1200,
          height: 630,
          alt: `${blog.title} image`,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | PPE | Proactive Premium Engineering`,
      description:
        blog.short_description || `Learn more about ${blog.title} from PPE.`,
      images: [
        blog.main_image
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${blog.main_image}`
          : "https://ppe-iq.com/images/meta/news-events-details.png",
      ],
    },

    alternates: { canonical: `https://ppe-iq.com/blogs/${slug}` },
  };
}

// Generate static params for all blogs
export async function generateStaticParams() {
  try {
    // Get all blogs
    const url = `${process.env.API_URL}${BLOG}?page_size=100`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return [];

    // Data
    const data: AllBlogsResponse = await res.json();
    const blogs = data.results || [];

    return blogs.map((blog) => ({
      slug: blog.slug,
    }));
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

// Page props
type Props = {
  params: Promise<{ slug: string }>;
};

export default function BlogDetailsPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<BlogDetailsSkeleton />}>
        <BlogDetailsContent params={params} />
      </Suspense>

      {/* Newsletter Section */}
      <NewsletterContent />
    </>
  );
}

// Content component
async function BlogDetailsContent({ params }: Props) {
  // Resolve params - get slug
  const { slug } = await params;

  // Get blog
  const blog = await getBlogBySlug(slug);

  // Handle 404
  if (!blog) {
    return notFound();
  }

  // JSON-LD schema
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: blog.title,
    description: blog.short_description || blog.long_description,
    image: blog.main_image
      ? `${process.env.NEXT_PUBLIC_CDN_URL}${blog.main_image}`
      : "https://ppe-iq.com/images/meta/products.png",
    brand: {
      "@type": "Brand",
      name: "Proactive Premium Engineering",
    },
    offers: {
      "@type": "Offer",
      url: `https://ppe-iq.com/news-events/${blog.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
    },
    category: blog.slug,
    manufacturer: {
      "@type": "Organization",
      name: "Proactive Premium Engineering",
      url: "https://ppe-iq.com",
    },
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      {/* Hero Section */}
      <BlogDetailsHeroContent blog={blog} />

      {/* Article Section */}
      <Suspense fallback={<BlogArticleSkeleton />}>
        <BlogDetailsArticle blog={blog} />
      </Suspense>
    </>
  );
}
