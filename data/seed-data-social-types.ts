import { SocialType } from "../models/socialType";

import { dummySocialTypes } from "@/lib/data";

// 過去1年のランダム日付を生成
function getRandomDate(): string {
    const now = new Date();
    const past = new Date();
    past.setFullYear(now.getFullYear() - 1);

    const randomTime =
        past.getTime() + Math.random() * (now.getTime() - past.getTime());

    return new Date(randomTime).toISOString();
}

export function dummySocialTypeModelData(): SocialType[] {
    return dummySocialTypes.map((d) => {
        return {
            ...d,
            created_at: getRandomDate()
        }
    })
}
