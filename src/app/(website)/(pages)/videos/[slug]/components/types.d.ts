import { VideoTag } from "../../components/all-videos/types";

export type VideoDetailsResponse = {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  youtube_url: string;
  short_description: string;
  long_description: JSON;
  date_published: string;
  meta_description: string;
  tags: VideoTag[];
  is_published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
};
