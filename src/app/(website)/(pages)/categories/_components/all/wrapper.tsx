import { CATEGORIES } from "@/lib/endpoints";

import AllCategoriesContent from "./content";
import { CategoriesResponse } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get categories
export async function getCategories() {
  try {
    const res = await fetch(`${process.env.API_URL}${CATEGORIES}`, {
      next: {
        revalidate,
        tags: ["categories"],
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.statusText}`);
    }

    const data: CategoriesResponse = await res.json();

    return data.results || [];
  } catch (error) {
    console.error("Categories fetch error,", error);
    return null;
  }
}

export default async function AllCategoriesWrapper() {
  const categories = await getCategories();

  // Graceful fallback
  if (!categories || categories.length === 0) {
    return (
      <section className="bg-secondary-400 flex min-h-[400px] items-center justify-center rounded-2xl">
        <div className="text-center">
          <h2 className="font-bebas text-primary-900 mb-2 text-4xl">
            Categories Coming Soon
          </h2>
          <p className="text-secondary-700">
            Check back later for our latest offerings
          </p>
        </div>
      </section>
    );
  }

  return <AllCategoriesContent categories={categories} />;
}
