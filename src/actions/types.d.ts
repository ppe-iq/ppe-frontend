export type ActionResponse<T> = {
  data?: T;
  message: string;
  status: number;
};
