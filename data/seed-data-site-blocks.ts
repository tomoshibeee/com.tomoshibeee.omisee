import { randomUUID } from "crypto";
import { SiteMeta } from "@/models/siteMeta";
import { SiteSection } from "@/models/siteSection";
// import { BlockType } from "@/models/siteBlock";


export function dummySiteBlockModelData(
    metas: SiteMeta[],
    sections: SiteSection[]) {
    const now = new Date().toISOString();

    const siteMetas = Array.from(
        new Map(
            metas.map(m => [m.site_id, { siteId: m.site_id, slug: m.slug }])
        ).values()
    );
    // (site_id, section_section_type, display_order)でデータを作成していく
    const siteSectionMap = sections.map((s, i) => {
        return {
            site_id: s.site_id,
            // slug(目視確認用)
            slug: "",
            section_id: s.id,
            section_type: s.type,
            display_order: 1
        }
    })
    console.log("siteSectionMap", siteSectionMap);
    const blocks = sections.map((s, i) => {
        return {
            id: randomUUID(),
            // siteId: s.site_id,
            section_id: s.id,
            display_order: i,
            type: "hero",   // TODO : →(section_id, display_order)で可変。後で変更。
            variant: "",    // TODO : →(section_id, display_order)で可変。後で変更。
            data: {},
            created_at: now,
            updated_at: now,
        }
    });

    // console.log(blocks);

    return blocks;
}