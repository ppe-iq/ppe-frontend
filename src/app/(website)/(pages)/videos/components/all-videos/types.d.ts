export type VideoTag = {
  id: number;
  slug: string;
  name: string;
};

export type Video = {
  id: number;
  slug: string;
  title: string;
  thumbnail: string;
  youtube_url: string;
  short_description: string;
  date_published: string;
  tags: VideoTag[];
};

export type AllVideosResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Video[];
};

export type AllVideosTagsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: VideoTag[];
};
