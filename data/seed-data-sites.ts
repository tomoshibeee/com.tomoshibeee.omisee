import { randomUUID } from "crypto";
import { Site } from "../models/site";

export function dummySiteData(): Site[] {
  return [
    {
      id: randomUUID(),
      name: "東京チャーチ",
      description: "東京チャーチの公式サイト",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      name: "オーガニックアップル",
      description: "オーガニックアップルの公式サイト",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: randomUUID(),
      name: "メガネの鷹匠",
      description: "メガネの鷹匠の公式サイト",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ] as Site[];
}
