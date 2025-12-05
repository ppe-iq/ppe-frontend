/* eslint-disable @typescript-eslint/no-explicit-any */

export type StudentFeedbackFormData = {
  course: string;
  fullName: string;
  company: string;
  email: string;
  message: string;
  rate: string;
};

export type StudentFeedbackResponse = {
  success: boolean;
  message: string;
  data?: any;
};
