import { randomUUID } from "crypto";
import { Site } from "../models/site";
import { dummySites } from "@/lib/data";

export function dummySiteModelData(): Site[] {
  const navigations = dummySites.map((s) => {
    return s.navigation.menu;
  });

  return dummySites.map((s, i) => {
    return {
      id: randomUUID(),
      site_no: i + 1,
      navigation: navigations[i],
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }) as Site[];
}
