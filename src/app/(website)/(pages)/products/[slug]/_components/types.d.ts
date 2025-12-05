import {
  Category,
  ProductType,
} from "../../../categories/[slug]/_components/types";

export type ProductDetailsImage = {
  id: number;
  image: string;
  alt_text: string;
  order: number;
};

export type ProductDetailsHighlight = {
  id: number;
  title: string;
  description: string;
  order: number;
};

export type ProductDetailsFeature = {
  id: number;
  title: string;
  description: string;
  icon: string;
  order: number;
};

export type ProductDetailsResource = {
  id: number;
  text: string;
  order: number;
};

export type ProductDetailsPdf = {
  id: number;
  title: string;
  pdf_type: "brochure" | "manual" | "datasheet" | "report" | "guide" | "other";
  file: string; // Cloudinary path (not used directly)
  file_url: string; // Signed URL for download
  file_size?: string;
  order: number;
};

export type ProductDetails = {
  id: number;
  slug: string;
  title: string;
  product_type: ProductType;
  category: Category;
  main_image: string;
  highlight_image: string;
  short_description: string;
  long_description: string;
  meta_description: string;
  images: ProductDetailsImage[];
  highlights: ProductDetailsHighlight[];
  features: ProductDetailsFeature[];
  resources: ProductDetailsResource[];
  pdfs: ProductDetailsPdf[];
  is_published: boolean;
  published_at: Date | string;
  created_at: Date | string;
  updated_at: Date | string;
};
