import { randomUUID } from "crypto";
import { SiteMetas } from "../models/siteMetas";

export function dummySiteMetasData(siteIds: string[]) {
    const now = new Date().toISOString();

    return siteIds.map((siteId, i) => {
        const storeId = i + 1;
        return {
            id: randomUUID(),
            site_id: siteId,
            slug: `site-${storeId}-metas`,
            name: `Site ${storeId} Metas`,
            tel: "03-1234-5678",
            email: `info@site${storeId}.com`,
            postalCode: "421-0000",
            address: `静岡県静岡市葵区呉服町${Math.floor(Math.random() * 10) + 1}丁目${Math.floor(Math.random() * 10) + 1}番地`,
            building: `呉服町ビル${Math.floor(Math.random() * 10) + 1}F`,
            access: `JR静岡駅から徒歩${Math.floor(Math.random() * 10) + 1}分`,
            created_at: now,
            updated_at: now,
        }
    }) as SiteMetas[];
}