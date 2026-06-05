// TODO: データの管理方法を考える
import site1 from "@/lib/data/site1/site.json";
import site2 from "@/lib/data/site2/site.json";
import site3 from "@/lib/data/site3/site.json";

import meta1 from "@/lib/data/site1/meta.json";
import meta2 from "@/lib/data/site2/meta.json";
import meta3 from "@/lib/data/site3/meta.json";

import news1 from "@/lib/data/site1/news.json";
import news2 from "@/lib/data/site2/news.json";
import news3 from "@/lib/data/site3/news.json";

import socialTypes from "@/lib/data/master/social-types.json";

import socialAccountList1 from "@/lib/data/site1/social-accounts.json";
import socialAccountList2 from "@/lib/data/site2/social-accounts.json";
import socialAccountList3 from "@/lib/data/site3/social-accounts.json";

export const dummySocialTypes = socialTypes;

export const dummySites = [site1, site2, site3];

export const dummySiteMetas = [meta1, meta2, meta3];

export const dummySiteNews = [news1, news2, news3];

export const dummySiteSocialAccountLists = [
    socialAccountList1,
    socialAccountList2,
    socialAccountList3
];
