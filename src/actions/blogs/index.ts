"use server";

import { ActionResponse } from "../types";
import { Blog, GetBlogsParams } from "./types";

export async function getBlogs(
  params: GetBlogsParams,
): Promise<ActionResponse<Blog[]>> {
  try {
    const { limit } = params;

    // TODO: fetch blogs from DB

    const blogs: Blog[] = [
      {
        id: "1",
        imgUrl: "/images/blogs/blog-1.jpg",
        createdAt: new Date("2025-08-27T11:45:00.123Z"),
        title: "Thermal Growth in Machine Shaft Alignment",
        subTitle:
          "Real-time insights to keep your equipment performing at its best.",
        description: "",
      },
      {
        id: "2",
        imgUrl: "/images/blogs/blog-2.jpg",
        createdAt: new Date("2025-08-27T11:45:00.123Z"),
        title: "Condition Monitoring",
        subTitle:
          "Real-time insights to keep your equipment performing at its best.",
        description: "",
      },
      {
        id: "3",
        imgUrl: "/images/blogs/blog-3.jpg",
        createdAt: new Date("2025-08-27T11:45:00.123Z"),
        title: "Condition Monitoring",
        subTitle:
          "Real-time insights to keep your equipment performing at its best.",
        description: "",
      },
    ];

    return {
      status: 200,
      message: "Blogs fetched successfully",
      data: blogs.slice(0, limit),
    };
  } catch (err) {
    console.error(err);
    return {
      status: 500,
      message: "Failed to fetch blogs",
    };
  }
}
