import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import Filter from "@/components/global/filter";
import {
  CATEGORY_PRODUCTS_QUERY,
  PRODUCT_TYPE_QUERY,
  PRODUCTS,
} from "@/lib/endpoints";

import { getCategories } from "../../../categories/_components/all/wrapper";
import { getProductTypes } from "../../../categories/[slug]/page";
import { ProductResponse } from "../types";
import AllProductsContent from "./content";

// ISR with 1-hour revalidation
export const revalidate = 3600;

// Fetch all products with filters
async function getAllProducts(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<ProductResponse | null> {
  try {
    const params = new URLSearchParams();

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

    // Add type filter
    if (searchParams.type && typeof searchParams.type === "string") {
      params.set(PRODUCT_TYPE_QUERY, searchParams.type);
    }

    // Add category filter
    if (searchParams.category && searchParams.category !== "All") {
      params.set(CATEGORY_PRODUCTS_QUERY, searchParams.category as string);
    }

    const url = `${process.env.API_URL}${PRODUCTS}?${params.toString()}`;

    const res = await fetch(url, {
      next: { revalidate, tags: ["all-products"] },
      headers: { "Content-Type": "appliaction/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all products: ${res.statusText}`);
    }

    const data: ProductResponse = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch all products:", error);
    return null;
  }
}

// Wrapper props
type WrapperProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Wrapper
export default async function AllProductsWrapper({
  searchParams,
}: WrapperProps) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get product types and all products in parallel
  const [productTypes, categories, productsResponse] = await Promise.all([
    getProductTypes(),
    getCategories(),
    getAllProducts(resolvedSearchParams),
  ]);

  // Handle error
  if (!productsResponse) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load products. Please try again.
        </p>
      </div>
    );
  }

  const products = productsResponse.results || [];

  // Empty state
  if (products.length === 0) {
    const hasFilters = Object.keys(resolvedSearchParams).length > 0;

    return (
      <SectionWrapper>
        {/* Filter Component */}
        <Filter
          productTypes={productTypes}
          categories={categories || []}
          showCategoryFilter={true}
        />
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
      </SectionWrapper>
    );
  }

  // Get current page
  const currentPage = resolvedSearchParams.page
    ? parseInt(resolvedSearchParams.page as string)
    : 1;

  return (
    <SectionWrapper>
      {/* Filter */}
      <Filter
        productTypes={productTypes}
        categories={categories || []}
        showCategoryFilter={true}
      />

      {/* Products Content */}
      <AllProductsContent
        products={products}
        currentPage={currentPage}
        pageSize={parseInt(resolvedSearchParams.page_size as string) || 10}
        totalCount={productsResponse.count}
      />
    </SectionWrapper>
  );
}
