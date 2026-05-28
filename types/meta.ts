export type MetaData = {
  slug: string;
  name: string;
  tel: string;
  email: string;
  postalCode?: string;
  address: string;
  bldg?: string;
  access: string;
  message: string;
  sns: number; // TODO : 1, 2, 3... (site1, site2, site3...) からSNS情報を取得する形に変更予定
};
