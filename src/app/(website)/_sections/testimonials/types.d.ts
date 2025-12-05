export type Testimonial = {
  id: number;
  image: string;
  company_name: string;
  full_name: string;
  description: string;
  rating: string;
};

export type TestimonialsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Testimonial[];
};
