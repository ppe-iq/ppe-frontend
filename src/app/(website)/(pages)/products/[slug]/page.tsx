import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import JsonLd from "@/app/(website)/_components/jsonld";
import NewsletterContent from "@/app/(website)/_sections/newsletter/content";
import { ProductsResponse } from "@/app/(website)/_sections/products/types";
import { PRODUCTS } from "@/lib/endpoints";

import ProductDetailsFeatures from "./_components/features";
import ProductDetailsHeroContent from "./_components/hero/content";
import ProductDetailsHighlight from "./_components/highlight";
import ProductDetailsResources from "./_components/resources";
import ProductDetailsSkeleton from "./_components/skeleton";
import { ProductDetails } from "./_components/types";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Get product by slug
async function getProductBySlug(slug: string): Promise<ProductDetails | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${PRODUCTS}${slug}/`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: [`product-${slug}`] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      if (res.status === 404) return null;
      throw new Error(`Failed to fetch product - ${slug}: ${res.statusText}`);
    }

    // Data
    const data: ProductDetails = await res.json();

    return data;
  } catch (error) {
    console.error(`Failed to fetch product - ${slug}:`, error);
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

  // Product
  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found",
      description: "This product you are looking for does not exist.",
    };
  }

  // Parent images
  const parentOpenGraph = (await parent).openGraph?.images || [];

  return {
    title: `${product.title} | PPE | Proactive Premium Engineering`,
    description:
      product.short_description ||
      `Explore ${product.title} from PPE - professional industrial maintenance and reliability solutions.`,

    openGraph: {
      ...parentOpenGraph,
      title: `${product.title} | PPE`,
      description:
        product.short_description ||
        `Learn more about ${product.title} at PPE.`,
      url: `https://ppe-iq.com/products/${product.slug}`,
      images: [
        {
          url: product.main_image
            ? `${process.env.NEXT_PUBLIC_CDN_URL}${product.main_image}`
            : "https://ppe-iq.com/images/meta/products.png",
          width: 1200,
          height: 630,
          alt: `${product.title} product image`,
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: `${product.title} | PPE | Proactive Premium Engineering`,
      description:
        product.short_description ||
        `Learn more about ${product.title} from PPE.`,
      images: [
        product.main_image
          ? `${process.env.NEXT_PUBLIC_CDN_URL}${product.main_image}`
          : "https://ppe-iq.com/images/meta/products.png",
      ],
    },

    alternates: {
      canonical: `https://ppe-iq.com/products/${product.slug}`,
    },
  };
}

// Generate static params for all products
export async function generateStaticParams() {
  try {
    // Get all products
    const url = `${process.env.API_URL}${PRODUCTS}?page_size=100`;
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return [];

    const data: ProductsResponse = await res.json();
    const products = data.results || [];

    return products.map((product) => ({
      slug: product.slug,
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
export default function ProductDetailsPage({ params }: Props) {
  return (
    <>
      <Suspense fallback={<ProductDetailsSkeleton />}>
        <ProductDetailsContent params={params} />
      </Suspense>

      <NewsletterContent className="bg-secondary-450" />
    </>
  );
}

// Content component
async function ProductDetailsContent({ params }: Props) {
  // Resolve params - get slug
  const { slug } = await params;

  // Get product
  const product = await getProductBySlug(slug);

  // Handle 404
  if (!product) {
    return notFound();
  }

  // JSON-LD schema for Product
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.short_description || product.long_description,
    image: product.main_image
      ? `${process.env.NEXT_PUBLIC_CDN_URL}${product.main_image}`
      : "https://ppe-iq.com/images/meta/products.png",
    brand: {
      "@type": "Brand",
      name: "Proactive Premium Engineering",
    },
    offers: {
      "@type": "Offer",
      url: `https://ppe-iq.com/products/${product.slug}`,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Proactive Premium Engineering",
      },
    },
    category: product.category?.name,
    manufacturer: {
      "@type": "Organization",
      name: "Proactive Premium Engineering",
      url: "https://ppe-iq.com",
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />

      {/* Hero Section */}
      <ProductDetailsHeroContent product={product} />

      {/* Highlight Section */}
      <ProductDetailsHighlight product={product} />

      {/* Features Section */}
      <ProductDetailsFeatures product={product} />

      {/* Resources Section */}
      <ProductDetailsResources product={product} />
    </>
  );
}
