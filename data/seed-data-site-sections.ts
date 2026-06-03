import { randomUUID } from "crypto";

export function dummySectionsData(siteIds: string[]) {
    const now = new Date().toISOString();

    return siteIds.flatMap((siteId) => [
        {
            id: randomUUID(),
            site_id: siteId,
            type: "hero",
            display_order: 0,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: siteId,
            type: "news",
            display_order: 1,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: siteId,
            type: "about",
            display_order: 2,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: siteId,
            type: "service",
            display_order: 3,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: siteId,
            type: "access",
            display_order: 4,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: siteId,
            type: "contact",
            display_order: 5,
            created_at: now,
            updated_at: now,
        },
    ]);
}