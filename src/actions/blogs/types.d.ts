export type GetBlogsParams = {
  limit: number;
};

export type Blog = {
  id: string;
  imgUrl: string;
  createdAt: Date;
  title: string;
  subTitle: string;
  description: string;
};
