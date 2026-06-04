export type NewsBlockData = {
  items: NewsItem[];
};

export type NewsBlockType = {
  id?: string;
  type: "news";
  data: NewsBlockData;
};

export type NewsItem = {
  news_id: string,
  title: string;
  content?: string;
  eventDate: string;
  publishedAt: string;
  doc?: string;
  youtube?: string;
};