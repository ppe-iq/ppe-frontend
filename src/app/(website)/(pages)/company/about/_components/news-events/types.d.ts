export type NewsEventsTag = {
  id: number;
  slug: string;
  name: string;
};

export type NewEvent = {
  id: number;
  slug: string;
  title: string;
  item_type: string;
  author: string;
  main_image: string;
  short_description: string;
  date_published: string | Date;
  tags: NewsEventsTag;
};

export type NewsEventsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: NewEvent[];
};
