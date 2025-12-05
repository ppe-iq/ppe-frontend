export type StudentFeedback = {
  id: number;
  course_title: string;
  full_name: string;
  company: string;
  message: string;
  rating: number;
  is_featured: boolean;
  created_at: Date | string;
};

export type StudentsFeedbackResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: STUDENT_FEEDBACK[];
};
