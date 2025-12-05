export type HeroSlide = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  order: number;
  cta_text: string;
  cta_link: string;
};

export type HeroSlidesResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: HeroSlide[];
};
