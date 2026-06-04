import { randomUUID } from "crypto";
import { SiteSection } from "@/models/siteSection";

import site1 from "@/lib/data/site1/site.json";
import site2 from "@/lib/data/site2/site.json";
import site3 from "@/lib/data/site3/site.json";

export function dummySiteBlockModelData(
    siteIds: string[],
    insertedSections: SiteSection[]
) {
    const now = new Date().toISOString();

    const sectionList = [site1, site2, site3];

    const blocks = sectionList.flatMap((siteJson, siteIndex) => {
        return siteJson.layout.sections.flatMap((sectionJson, sectionIndex) => {

            const section = insertedSections.find(
                s =>
                    s.site_id === siteIds[siteIndex] &&
                    s.type === sectionJson.type &&
                    s.display_order === sectionIndex
            );

            if (!section) {
                throw new Error("section not found");
            }

                return sectionJson.blocks.map((block, blockIndex) => ({
                id: randomUUID(),
                section_id: section.id, // ←ここ🔥
                type: block.type,
                    variant: "variant" in block ? (block as any).variant ?? null : null,
                data: block.data ?? {},
                display_order: blockIndex,
                created_at: now,
                updated_at: now,
            }));
        });
    });

    return blocks;
}