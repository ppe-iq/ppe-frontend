import { BLOG } from "@/lib/endpoints";

import BlogContent from "./content";
import { BlogsResponse } from "./types";

// ISR with 1 hour revalidation
export const revalidate = 3600;

async function getLatestBlogs() {
  try {
    const response = await fetch(
      `${process.env.API_URL}${BLOG}?page=1&page_size=3`,
      {
        next: {
          revalidate,
          tags: ["latest-blogs"],
        },
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch latest blogs: ${response.statusText}`);
    }

    const data: BlogsResponse = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Error fetching latest blogs:", error);
    return null;
  }
}

export default async function BlogWrapper() {
  const blogs = await getLatestBlogs();

  // Graceful fallback
  if (!blogs || blogs.length === 0) {
    return (
      <section className="flex min-h-[400px] items-center justify-center rounded-2xl">
        <div className="text-center">
          <h2 className="font-bebas text-primary-900 mb-2 text-4xl">
            Blog Coming Soon
          </h2>
          <p className="text-secondary-700">
            Check back later for our latest articles
          </p>
        </div>
      </section>
    );
  }

  return <BlogContent blogs={blogs} />;
}
