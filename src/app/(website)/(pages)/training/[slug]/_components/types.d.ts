export type CourseDetailsHighlight = {
  id: number;
  title: string;
  description: string;
  order: number;
};

export type CourseDetailsReason = {
  id: number;
  title: string;
  description: string;
  order: number;
};

export type CourseDetailsCurriculum = {
  id: number;
  session_number: number;
  session_title: string;
  details: string;
  order: number;
};

export type CourseDetailsResources = {
  id: number;
  text: string;
  order: number;
};

export type CourseDetailsPDF = {
  id: number;
  title: string;
  pdf_type: string;
  file: string;
  file_url: string;
  file_size: string | null;
  order: number;
};

export type CourseDetailsResponse = {
  id: number;
  slug: string;
  title: string;
  image: string;
  short_description: string;
  duration: string;
  class_size: string;
  location: string;
  certificate_type: string;
  meta_description: string;
  highlights: CourseDetailsHighlight[];
  reasons: CourseDetailsReason[];
  curriculum: CourseDetailsCurriculum[];
  resources: CourseDetailsResources[];
  pdfs: CourseDetailsPDF[];
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};
