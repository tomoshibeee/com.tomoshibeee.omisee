import { randomUUID } from "crypto";
import { getSiteId } from "@/services/siteService";
import { SiteSection, SectionType } from "@/models/siteSection";

type BlockTemplates = {
    [key in SectionType]?: {
        [variant: string]: {
            [tpl in Template]?: any;
        };
    };
};

type Template = "church" | "store" | "glasses";

export function dummySiteBlockModelData(sections: SiteSection[]) {
   // return blocks;
}