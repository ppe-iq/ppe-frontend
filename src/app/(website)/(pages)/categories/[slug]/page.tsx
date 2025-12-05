import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";
import CategoryProductsWrapper from "@/app/(website)/(pages)/categories/[slug]/_components/products/wrapper";
import Filter from "@/components/global/filter";
import { CATEGORIES, PRODUCT_TYPES } from "@/lib/endpoints";

import CategoryDetailsHeroContent from "./_components/hero/content";
import CategoryProductsSkeleton from "./_components/products/skeleton";
import CategoryDetailsSkeleton from "./_components/skeleton";
import {
  Category,
  ProductType,
  ProductTypeResponse,
} from "./_components/types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get category
async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const res = await fetch(`${process.env.API_URL}${CATEGORIES}${slug}/`, {
      next: { revalidate, tags: [`category-${slug}`] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch category: ${res.statusText}`);
    }

    const data: Category = await res.json();

    return data;
  } catch (error) {
    console.error(`Error fetching category ${slug}:`, error);
    return null;
  }
}

// Fetch product types for filtering
export async function getProductTypes(): Promise<ProductType[]> {
  try {
    const res = await fetch(`${process.env.API_URL}${PRODUCT_TYPES}`, {
      next: { revalidate, tags: ["product-types"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product types: ${res.statusText}`);
    }

    const data: ProductTypeResponse = await res.json();

    return data.results || [];
  } catch (error) {
    console.error("Error fetching product types:", error);
    return [];
  }
}

// Metadata props
type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Metadata
export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    return {
      title: "Category Not Found",
      description: "The category you are looking for does not exist.",
    };
  }

  const parentOpenGraph = (await parent).openGraph ?? {};

  return {
    title: `${category.name} | PPE | Proactive Premium Engineering`,
    description:
      category.description ??
      `Explore ${category.name} products, insights, and resources from PPE.`,

    openGraph: {
      ...parentOpenGraph,
      title: `${category.name} | PPE`,
      description:
        category.description ??
        `Browse products under ${category.name} at PPE.`,
      url: `https://ppe-iq.com/categories/${category.slug}`,
      images: [
        {
          url: category.image
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${category.image}`
            : "https://ppe-iq.com/images/meta/categories.png",
          width: 1200,
          height: 630,
          alt: `${category.name} preview image`,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${category.name} | PPE | Proactive Premium Engineering`,
      description:
        category.description ??
        `Learn more about ${category.name} and related engineering solutions from PPE.`,
      images: [
        category.image
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${category.image}`
          : "https://ppe-iq.com/images/meta/categories.png",
      ],
    },
    alternates: {
      canonical: `https://ppe-iq.com/categories/${category.slug}`,
    },
  };
}

// Generate static params
export async function generateStaticParams() {
  try {
    const res = await fetch(`${process.env.API_URL}${CATEGORIES}`, {
      next: { revalidate },
    });

    if (!res.ok) return [];

    const data = await res.json();
    const categories = data.results || [];

    return categories.map((category: Category) => ({
      slug: category.slug,
    }));
  } catch (error) {
    console.log("Error generating static params:", error);
    return [];
  }
}

// Page
export default function CategoryDetailsPage({
  params,
  searchParams,
}: PageProps) {
  return (
    <>
      <Suspense fallback={<CategoryDetailsSkeleton />}>
        <CategoryDetailsContent params={params} searchParams={searchParams} />
      </Suspense>

      <NewsletterContent />
    </>
  );
}

// Content
async function CategoryDetailsContent({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  // Handle 404
  if (!category) {
    return notFound();
  }

  // Get product types
  const productTypes = await getProductTypes();

  // Get search params
  const resolvedSearchParams = searchParams ? await searchParams : {};

  // JSON-LD schema
  const categorySchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: category.name,
    description:
      category.description ||
      `Explore ${category.name} resources and products from PPE.`,
    url: `https://ppe-iq.com/categories/${category.slug}`,
    mainEntity: {
      "@type": "ItemList",
      name: `${category.name} Products`,
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
  };

  return (
    <>
      <JsonLd data={categorySchema} />
      <CategoryDetailsHeroContent category={category} />

      <SectionWrapper>
        <Filter productTypes={productTypes} />

        <Suspense fallback={<CategoryProductsSkeleton />}>
          <CategoryProductsWrapper
            categorySlug={category.slug}
            productTypes={productTypes}
            searchParams={resolvedSearchParams}
          />
        </Suspense>
      </SectionWrapper>
    </>
  );
}
