export type UpcomingTraining = {
  id: number;
  slug: string;
  title: string;
  takeoff_date: string;
  location: string;
  created_at: string;
};

export type UpcomingTrainingsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: UpcomingTraining[];
};
