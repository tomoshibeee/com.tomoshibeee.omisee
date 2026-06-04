import { randomUUID } from "crypto";
import { getSiteId } from "@/services/siteService";
import { SiteSection, SectionType } from "@/models/siteSection";

type BlockTemplates = {
    [key in SectionType]?: {
        [variant: string]: {
            [tpl in Template]?: any;
        };
    };
};

type Template = "church" | "store" | "glasses";

export function dummySiteBlockData(sections: SiteSection[]) {
    // const now = new Date().toISOString();

    // const sites = [
    //     { id: getSiteId(1), template: "shizuoka-jonan-church" },
    //     { id: getSiteId(2), template: "organic-apple-store" },
    //     { id: getSiteId(3), template: "hitoyado-55-megane" }
    // ];

    // const sectionTemplates = {
    //     "shizuoka-jonan-church": ["hero", "news", "about", "access"],
    //     "organic-apple-store": ["hero", "products", "about", "contact"],
    //     "hitoyado-55-megane": ["hero", "products", "features", "access"]
    // };


    // const blocks = sections.flatMap((section) => {
    //     if (!variants) return [];

    //     // 👇 sectionからsiteを特定
    //     const site = sites.find(s => s.id === section.site_id);
    //     if (!site) return [];

    //     return Object.entries(variants).map(([variant, byTemplate], i) => {
    //         const data = byTemplate[site.template];
    //         if (!data) return null;

    //         return {
    //             id: randomUUID(),
    //             section_id: section.id,
    //             type: section.type,
    //             variant,
    //             data, // ←ここが正しい形になる🔥
    //             display_order: i,
    //             created_at: now,
    //             updated_at: now,
    //         };
    //     }).filter(Boolean);
    // });

    // return blocks;
}