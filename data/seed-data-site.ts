import { Site } from "../models/site";
import { randomUUID } from "crypto";

export const seedDataSites: Site[] = [
  {
    id: randomUUID(),
    name: "東京チャーチ",
    slug: "tokyo-biblical-church",
    description: "東京チャーチの公式サイト",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    slug: "organic-apple",
    name: "オーガニックアップル",
    description: "オーガニックアップルの公式サイト",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: randomUUID(),
    slug: "takajo-glasses-store",
    name: "メガネの鷹匠",
    description: "メガネの鷹匠の公式サイト",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];
