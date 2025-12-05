export type Course = {
  id: number;
  slug: string;
  title: string;
  image: string;
  short_description: string;
  duration: string;
  location: string;
  created_at: string;
};

export type CoursesResponse = {
  count: number;
  next: string;
  previous: string | null;
  results: Course[];
};
