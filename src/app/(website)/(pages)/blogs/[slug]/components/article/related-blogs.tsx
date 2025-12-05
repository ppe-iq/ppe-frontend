import { BLOG, BLOG_TAG_SLUG } from "@/lib/endpoints";

import BlogCard from "../../../_components/all-blogs/blog-card";
import { AllBlogsResponse } from "../../../_components/all-blogs/types";

// ISR with 1-hour revalidate
export const revalidate = 3600;

// Get related blogs
async function getRelatedBlogs(
  tagSlug: string,
): Promise<AllBlogsResponse | null> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${BLOG}?${BLOG_TAG_SLUG}=${tagSlug}&page_size=3`;

    // Response
    const res = await fetch(url, {
      next: { revalidate },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) return null;

    // Data
    const data: AllBlogsResponse = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch relevant blogs:", error);
    return null;
  }
}

// Props
type Props = {
  slug: string;
  tagSlug: string;
};

export default async function RelevantBlogs({ slug, tagSlug }: Props) {
  // Get related blogs
  const response = await getRelatedBlogs(tagSlug);

  // Handle error
  if (!response) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load releated blogs. Please try again later.
        </p>
      </div>
    );
  }

  // Blogs
  const blogs = response.results.filter((blog) => blog.slug !== slug) || [];

  return (
    <div className="w-full space-y-4">
      <h1 className="font-bebas text-3xl">Relevant Blogs</h1>

      {blogs.length === 0 ? (
        <p>No related blogs yet.</p>
      ) : (
        <div className="grid w-full gap-3">
          {blogs.map((blog, idx) => (
            <BlogCard key={blog.id} data={blog} idx={idx} />
          ))}
        </div>
      )}
    </div>
  );
}
