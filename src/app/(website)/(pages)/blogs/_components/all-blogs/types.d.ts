export type BlogTag = {
  id: number;
  name: string;
  slug: string;
};

export type Blog = {
  id: number;
  slug: string;
  title: string;
  author: string;
  main_image: string;
  short_description: string;
  date_published: string;
  tags: BlogTag[];
};

export type AllBlogsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
};

export type AllBlogTagsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: BlogTag[];
};
