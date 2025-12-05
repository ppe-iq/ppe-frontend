import { PRODUCTS } from "@/lib/endpoints";

import ProductsContent from "./content";
import { ProductsResponse } from "./types";

// ISR with 1 hour revalidation
export const revalidate = 3600;

// Get latest products
async function getLatestProducts() {
  try {
    const response = await fetch(
      `${process.env.API_URL}${PRODUCTS}?page_size=3`,
      {
        next: {
          revalidate,
          tags: ["latest-products"],
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch latest products: ${response.statusText}`,
      );
    }

    const data: ProductsResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching latest products:", error);
    return null;
  }
}

// Wrapper
export default async function ProductsWrapper() {
  const products = await getLatestProducts();

  // Graceful fallback
  if (!products || products.length === 0) {
    return (
      <section className="bg-secondary-400 flex min-h-[400px] items-center justify-center rounded-2xl">
        <div className="text-center">
          <h2 className="font-bebas text-primary-900 mb-2 text-4xl">
            Products Coming Soon
          </h2>
          <p className="text-secondary-700">
            Check back later for our latest offerings
          </p>
        </div>
      </section>
    );
  }

  return <ProductsContent products={products} />;
}
