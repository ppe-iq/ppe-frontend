/* eslint-disable @typescript-eslint/no-explicit-any */

export type NewsletterFormData = {
  email: string;
};

export type NewsletterResponse = {
  success: boolean;
  message: string;
  data?: any;
};
