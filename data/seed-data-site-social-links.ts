import { randomUUID } from "crypto";
import { SiteSocialLink } from "../models/siteSocialLink";

export function dummySiteSocialLinks(siteIds: string[]) {
    const now = new Date().toISOString();

    const dummySiteSocialLinks = [
        {
            id: randomUUID(),
            site_id: "uuid-site-1",
            type: "facebook",
            url: "https://www.facebook.com/shizuoka.jonan.church",
            display_order: 1,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: "uuid-site-1",
            type: "twitter",
            url: "https://twitter.com/shizuoka_jonan",
            display_order: 2,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: "uuid-site-2",
            type: "instagram",
            url: "https://www.instagram.com/organic.apple.store",
            display_order: 1,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: "uuid-site-3",
            type: "facebook",
            url: "https://www.facebook.com/hitoyado55megane",
            display_order: 1,
            created_at: now,
            updated_at: now,
        },      
        {
            id: randomUUID(),
            site_id: "uuid-site-3",
            type: "youtube",
            url: "https://www.youtube.com/c/ShizuokaJonanChurch",
            display_order: 1,
            created_at: now,
            updated_at: now,
        },
    ]
    return siteIds.map((siteId, i) => {
        return {
            ...dummySiteSocialLinks[i % dummySiteSocialLinks.length],
            site_id: siteId
        };
    }) as SiteSocialLink[];
}