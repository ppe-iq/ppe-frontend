export type Category = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  created_at: string | Date;
};

export type CategoriesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Category[];
};
