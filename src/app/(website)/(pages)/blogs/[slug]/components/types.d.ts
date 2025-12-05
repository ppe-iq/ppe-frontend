import { BlogTag } from "../../_components/all-blogs/types";

export type BlogDetailsResponse = {
  id: number;
  slug: string;
  title: string;
  author: string;
  main_image: string;
  short_description: string;
  long_description: string | JSON;
  date_published: string;
  meta_description: string;
  tags: BlogTag[];
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};
