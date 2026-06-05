import { SocialType } from "../models/socialType";

import { getRandomDate } from "@/utils/date/getRandomDate";

import { dummySocialTypes } from "@/lib/data";

export function dummySocialTypeModelData(): SocialType[] {
    return dummySocialTypes.map((d) => {
        return {
            ...d,
            created_at: getRandomDate()
        }
    })
}
