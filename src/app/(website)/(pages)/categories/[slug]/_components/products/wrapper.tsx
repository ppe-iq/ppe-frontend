import Image from "next/image";

import {
  CATEGORY_PRODUCTS_QUERY,
  PRODUCT_TYPE_QUERY,
  PRODUCTS,
} from "@/lib/endpoints";

import { ProductType } from "../types";
import CategoryProductsContent from "./content";
import { CategoryProductsResponse } from "./types";

// ISR with 1-hour revalidattion
export const revalidate = 3600;

// Get category products
async function getCategoryProducts(
  categorySlug: string,
  searchParams: {
    search?: string;
    type?: string;
    page?: string;
    page_size?: string;
  },
) {
  try {
    // Build query params
    const params = new URLSearchParams({
      category: categorySlug,
    });

    // Add page number
    const page =
      searchParams.page && typeof searchParams.page === "string"
        ? searchParams.page
        : "1";
    params.set("page", page);

    // Add page size
    const pageSize =
      searchParams.page_size && typeof searchParams.page_size === "string"
        ? searchParams.page_size
        : "10";
    params.set("page_size", pageSize);

    // Add search filter
    if (searchParams.search && typeof searchParams.search === "string") {
      params.set("search", searchParams.search);
    }

    // Add product type filter
    if (searchParams.type && typeof searchParams.type === "string") {
      params.set(PRODUCT_TYPE_QUERY, searchParams.type);
    }

    const res = await fetch(
      `${process.env.API_URL}${PRODUCTS}?${CATEGORY_PRODUCTS_QUERY}=${categorySlug}&${params.toString()}`,
      {
        next: {
          revalidate,
          tags: [`category-products-${categorySlug}`],
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch category products: ${res.statusText}`);
    }

    const data: CategoryProductsResponse = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching  products for ${categorySlug}:`, error);
    return null;
  }
}

// Props
type Props = {
  categorySlug: string;
  productTypes: ProductType[];
  searchParams: {
    search?: string;
    type?: string;
    page?: string;
    page_size?: string;
  };
};

// Wrapper
export default async function CategoryProductsWrapper({
  categorySlug,
  searchParams,
  productTypes,
}: Props) {
  // Get category products
  const response = await getCategoryProducts(categorySlug, searchParams);

  // Handle error
  if (!response) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-2">
        <h1 className="font-bebas text-primary-900 text-3xl">Oops!</h1>
        <p className="text-secondary-700">
          Failed to load products. Please try again.
        </p>
      </div>
    );
  }

  const products = response.results || [];

  // Empty state
  if (!products || products.length === 0) {
    const hasFilters = Object.keys(searchParams).length > 0;

    return (
      <>
        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <Image
            src="/images/empty-state/products.svg"
            width={400}
            height={400}
            alt="No products available"
            priority={false}
          />
          <div className="text-center">
            <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
              {hasFilters ? "No Products Found" : "No Products Yet"}
            </h3>
            <p className="text-secondary-700 text-sm">
              {hasFilters
                ? "Try adjusting your filters to find what you're looking for."
                : "Products for this category are coming soon."}
            </p>
          </div>
        </div>
      </>
    );
  }

  // Get current page
  const currentPage = searchParams.page
    ? parseInt(searchParams.page as string)
    : 1;

  // Products component with pagination
  return (
    <CategoryProductsContent
      products={products}
      productTypes={productTypes}
      currentPage={currentPage}
      totalCount={response.count}
    />
  );
}
