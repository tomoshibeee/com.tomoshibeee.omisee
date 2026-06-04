import { randomUUID } from "crypto";
import { SiteMeta } from "../models/siteMeta";

import meta1 from "@/lib/data/site1/meta.json";
import meta2 from "@/lib/data/site2/meta.json";
import meta3 from "@/lib/data/site3/meta.json";

export function dummySiteMetaModelData(siteIds: string[]) {
    const now = new Date().toISOString();
    const metaJson = [meta1, meta2, meta3];
    const dummySiteMetas =
        metaJson.map((m, i) => {
            return {
                id: randomUUID(),
                site_id: siteIds[i],
                slug: m.slug,
                name: m.name,
                tel: m.tel,
                email: m.email,
                postal_code: m.postalCode,
                address: m.address,
                building: m.bldg,
                access: m.access,
                created_at: now,
                updated_at: now,
            };
        });
    return siteIds.map((siteId, i) => {
        return {
            ...dummySiteMetas[i % dummySiteMetas.length],
            site_id: siteId
        };
    }) as SiteMeta[];
}