import Image from "next/image";
import React, { Suspense } from "react";

import SectionWrapper from "@/app/(website)/_components/section-wrapper";
import TiptapRenderer from "@/app/(website)/(pages)/editor/_components/tiptap-render";
import ShareBtn from "@/components/global/share-btn";
import { Separator } from "@/components/ui/separator";
import { SOCIAL_PLATFORMS } from "@/lib/constants";

import { BlogDetailsResponse } from "../types";
import RelevantBlogs from "./related-blogs";
import RelatedBlogsSkeleton from "./related-blogs-skeleton";

// Props
type Props = {
  blog: BlogDetailsResponse;
};

export default function BlogDetailsArticle({ blog }: Props) {
  return (
    <SectionWrapper className="grid items-start gap-4 md:grid-cols-3">
      <div className="border-secondary-550 space-y-8 rounded-lg border p-3.5 md:col-span-2">
        <figure className="relative aspect-[845/500] w-full overflow-hidden rounded-lg">
          <Image
            src={`${process.env.NEXT_PUBLIC_CDN_URL}${blog.main_image}`}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            alt={blog.title}
            placeholder="blur"
            blurDataURL="/images/products/placeholder.jpg"
            className="object-cover object-center"
          />
        </figure>

        <div className="space-y-1">
          <h2 className="text-2xl font-semibold">{blog.title}</h2>
        </div>

        {/* Tiptap Renderer - Rich Text Content */}
        <TiptapRenderer content={blog.long_description} />

        <Separator className="bg-secondary-550 my-12 w-full" />

        <div className="flex flex-col items-center gap-3">
          <h3 className="font-medium">Share this post on</h3>
          <div className="flex items-center gap-1">
            {SOCIAL_PLATFORMS.map((platform, idx) => (
              <ShareBtn key={idx} idx={idx} platformUrl={platform.url}>
                {platform.icon}
              </ShareBtn>
            ))}
          </div>
        </div>
      </div>

      {/* Related Blogs Section */}
      <Suspense fallback={<RelatedBlogsSkeleton />}>
        <RelevantBlogs slug={blog.slug} tagSlug={blog.tags.at(0)?.slug || ""} />
      </Suspense>
    </SectionWrapper>
  );
}
