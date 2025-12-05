/* eslint-disable @typescript-eslint/no-explicit-any */

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  companyName: string;
  interest: string;
  message: string;
};

export type ContactResponse = {
  success: boolean;
  message: string;
  data?: any;
};
