import { randomUUID } from "crypto";
import { getSiteIdBySlug } from "@/services/siteService";
import { SiteSection } from "@/models/siteSection";

export async function dummySiteSectionModelData() : Promise<SiteSection[]> {
    const now = new Date().toISOString();

    const siteIds = await Promise.all([
        getSiteIdBySlug("shizuoka-jonan-church"),
        getSiteIdBySlug("organic-apple-store"),
        getSiteIdBySlug("hitoyado-55-megane"),
    ]);

    siteIds.forEach((id, i) => {
        if (!id) {
            throw new Error(`siteId not found at index ${i}`);
        }
    });

    console.log(siteIds);

    const sites = [
        { siteId: siteIds[0], sectionTypes: ["hero", "news", "about", "service", "access", "contact"] },
        { siteId: siteIds[1], sectionTypes: ["hero", "news", "about", "service", "access", "contact"] },
        { siteId: siteIds[2], sectionTypes: ["hero", "news", "about", "service", "access", "contact"] },
    ];

    return sites.flatMap((site) => {
        return site.sectionTypes.map((type, i) => {
            return {
                id: randomUUID(),
                site_id: site.siteId,
                type: type,
                display_order: i,
                created_at: now,
                updated_at: now,
            };
        });
    });
}