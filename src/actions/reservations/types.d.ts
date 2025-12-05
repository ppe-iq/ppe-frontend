/* eslint-disable @typescript-eslint/no-explicit-any */

export type CourseReservationFormData = {
  course: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  message?: string;
};

export type CourseReservationResponse = {
  success: boolean;
  message: string;
  data?: any;
};
