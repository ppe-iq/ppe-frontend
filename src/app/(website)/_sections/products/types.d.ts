export type Product = {
  id: number;
  slug: string;
  title: string;
  product_type: string;
  category: string;
  main_image: string;
  highlight_image: string;
  short_description: string;
  long_description: string;
  meta_description: string;
  created_at: string;
};

export type ProductsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Product[];
};
