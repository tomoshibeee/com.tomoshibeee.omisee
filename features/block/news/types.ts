export type NewsBlockData = {
  title: string;
  content?: string;
  eventDate: string;
  publishedAt: string;
  doc?: string;
  youtube?: string;
};

export type NewsBlockType = {
  id?: string;
  type: "news";
  data: NewsBlockData;
};