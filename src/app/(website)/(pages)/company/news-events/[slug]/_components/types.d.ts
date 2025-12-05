export type NewEventDetailsTag = {
  id: number;
  name: string;
  slug: string;
};

export type NewEventDetailsResponse = {
  id: number;
  slug: string;
  title: string;
  item_type: string;
  author: string;
  main_image: string;
  short_description: string;
  long_description: string | JSON;
  date_published: string;
  meta_description: string;
  tags: NewEventDetailsTag[];
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};
