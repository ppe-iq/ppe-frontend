export type Blog = {
  id: number;
  slug: string;
  title: string;
  author: string;
  tags: string[];
  main_image: string;
  short_description: string;
  date_published: string;
  meta_description: string;
};
export type BlogsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Blog[];
};
