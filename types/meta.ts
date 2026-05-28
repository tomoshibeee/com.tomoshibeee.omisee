import { SNSItem } from "@/types/sns";

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
  sns: SNSItem[];
};
