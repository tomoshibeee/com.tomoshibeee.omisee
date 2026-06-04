import { randomUUID } from "crypto";
import { SiteSocialLink } from "../models/siteSocialLink";
import socialLink1 from "@/lib/data/site1/social-accounts.json";
import socialLink2 from "@/lib/data/site2/social-accounts.json";
import socialLink3 from "@/lib/data/site3/social-accounts.json";

export function dummySiteSocialLinkModelData(siteIds: string[]) {
    const now = new Date().toISOString();

    const socialLinkList = [socialLink1, socialLink2, socialLink3];

    return socialLinkList.flatMap((s, i) => {
        return s.map((a) => {
            return {
                id: randomUUID(),
                site_id: siteIds[i],
                type: a.type, // ←これも修正🔥
                url: a.url,
                display_order: a.priority,
                created_at: now,
                updated_at: now,
            };
        });
    });;
}