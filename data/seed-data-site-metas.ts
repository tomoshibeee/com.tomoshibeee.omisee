import { randomUUID } from "crypto";
import { SiteMetas } from "../models/siteMetas";

export function dummySiteMetaData(siteIds: string[]) {
    const now = new Date().toISOString();

    const dummySiteMetas = [
        {
            id: randomUUID(),
            site_id: "uuid-site-1",
            slug: "shizuoka-jonan-church",
            name: "静岡城南教会",
            tel: "054-111-1111",
            email: `info@shizuoka-jonan-church.com`,
            postal_code: "421-0000",
            address: `静岡県静岡市葵区城南町${Math.floor(Math.random() * 10) + 1}丁目${Math.floor(Math.random() * 10) + 1}番地`,
            building: `城南町ビル${Math.floor(Math.random() * 10) + 1}F`,
            access: `JR静岡駅から徒歩${Math.floor(Math.random() * 10) + 1}分`,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: "uuid-site-2",
            slug: "organic-apple-store",
            name: "オーガニック・アップル・ストア",
            tel: "054-222-2222",    
            email: `info@organic-apple-store.com`,
            postal_code: "421-0000",
            address: `静岡県静岡市葵区鷹匠町${Math.floor(Math.random() * 10) + 1}丁目${Math.floor(Math.random() * 10) + 1}番地`,
            building: `ハイソビル${Math.floor(Math.random() * 10) + 1}F`,
            access: `JR静岡駅から徒歩${Math.floor(Math.random() * 10) + 1}分`,
            created_at: now,
            updated_at: now,
        },
        {
            id: randomUUID(),
            site_id: "uuid-site-3",
            slug: "hitoyado-55-megane",
            name: "人宿55メガネ",
            tel: "054-333-3333",
            email: `info@hitoyado-55-megane.com`,
            postal_code: "421-0000",
            address: `静岡県静岡市葵区人宿町${Math.floor(Math.random() * 10) + 1}丁目${Math.floor(Math.random() * 10) + 1}番地`,
            building: `無限相乗ビル${Math.floor(Math.random() * 10) + 1}F`,
            access: `JR静岡駅から徒歩${Math.floor(Math.random() * 10) + 1}分`,
            created_at: now,
            updated_at: now,
        },
    ]
    return siteIds.map((siteId, i) => {
        return {
            ...dummySiteMetas[i % dummySiteMetas.length],
            site_id: siteId
        };
    }) as SiteMetas[];
}