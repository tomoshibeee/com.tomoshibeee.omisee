import { randomUUID } from "crypto";
import { SiteSection, SectionType } from "@/models/siteSection";

import site1 from "@/lib/data/site1/site.json";
import site2 from "@/lib/data/site2/site.json";
import site3 from "@/lib/data/site3/site.json";

export function dummySiteSectionModelData(siteIds: string[]): SiteSection[] {
    const now = new Date().toISOString();

    const sectionList = [site1, site2, site3];
    
    return sectionList.flatMap((siteJson, siteIndex) => {
        const siteId = siteIds[siteIndex];

        return siteJson.layout.sections.map((s, i) => ({
            id: randomUUID(),
            site_id: siteId, 
            type: s.type as SectionType,
            display_order: i,
            created_at: now,
            updated_at: now,
        }));
    });
}