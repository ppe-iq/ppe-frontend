import Image from "next/image";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import { BLOG, BLOG_TAG_SLUG, BLOG_TAGS } from "@/lib/endpoints";

import BlogsAllContent from "./content";
import BlogsAllFilter from "./filter";
import { AllBlogsResponse, AllBlogTagsResponse, BlogTag } from "./types";

// ISR with 24-hour revalidation
export const revalidate = 86400;

// Get all blogs
async function getAllBlogs(searchParams: {
  [key: string]: string | string[] | undefined;
}): Promise<AllBlogsResponse | null> {
  try {
    // Build search params
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

    // Add tag slug
    if (searchParams.tag && typeof searchParams.tag === "string") {
      params.set(BLOG_TAG_SLUG, searchParams.tag);
    }

    // URL endpoint
    const url = `${process.env.API_URL}${BLOG}?${params.toString()}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["all-blogs"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all blogs: ${res.statusText}`);
    }

    // Data
    const data: AllBlogsResponse = await res.json();

    return data;
  } catch (error) {
    console.error("Failed to get all blogs:", error);
    return null;
  }
}

// Get blog tags
async function getBlogTags(): Promise<BlogTag[]> {
  try {
    // URL endpoint
    const url = `${process.env.API_URL}${BLOG_TAGS}`;

    // Response
    const res = await fetch(url, {
      next: { revalidate, tags: ["all-blog-tags"] },
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch all blog tags: ${res.statusText}`);
    }

    // Data
    const data: AllBlogTagsResponse = await res.json();

    return data.results || [];
  } catch (error) {
    console.error("Failed to fetch all blog tags:", error);
    return [];
  }
}

// Props
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function BlogsAllWrapper({ searchParams }: Props) {
  // Resolve search params
  const resolvedSearchParams = await searchParams;

  // Get all blogs and blog tags in parallel
  const [blogTags, allBlogsResponse] = await Promise.all([
    getBlogTags(),
    getAllBlogs(resolvedSearchParams),
  ]);

  // Handle error
  if (!allBlogsResponse) {
    return (
      <div className="flex min-h-[400px] flex-col items-center justify-center gap-6">
        <p className="text-secondary-700 text-lg">
          Failed to load blogs. Please try again.
        </p>
      </div>
    );
  }

  // All blogs
  const blogs = allBlogsResponse.results || [];

  // Empty state
  if (blogs.length === 0) {
    const hasFilters = Object.keys(resolvedSearchParams).length > 0;

    return (
      <SectionWrapper>
        {/* Filter Component */}
        <BlogsAllFilter tags={blogTags} />

        <div className="flex min-h-[400px] flex-col items-center justify-center gap-4">
          <Image
            src="/images/empty-state/blogs.svg"
            width={400}
            height={400}
            alt="No blogs available"
            priority={false}
          />
          <div className="text-center">
            <h3 className="font-bebas text-primary-900 mb-2 text-2xl">
              {hasFilters ? "No Blogs Found" : "No Blogs Yet"}
            </h3>
            <p className="text-secondary-700 text-sm">
              {hasFilters
                ? "Try adjusting your filters to find what you're looking for."
                : "Blogs for this tag are coming soon."}
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
      {/* All Blogs Section */}
      <BlogsAllContent
        tags={blogTags}
        blogs={blogs}
        currentPage={currentPage}
        pageSize={parseInt(resolvedSearchParams.page_size as string) || 10}
        totalCount={allBlogsResponse.count}
      />
    </SectionWrapper>
  );
}
