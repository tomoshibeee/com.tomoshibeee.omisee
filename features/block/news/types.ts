export type NewsBlockData = {
  source: string;
  limit?: number;
};

export type NewsBlockType = {
  id?: string;
  type: "news";
  data: NewsBlockData;
};
