import { SocialType } from "../models/socialType";

// 過去1年のランダム日付を生成
function getRandomDate(): string {
    const now = new Date();
    const past = new Date();
    past.setFullYear(now.getFullYear() - 1);

    const randomTime =
        past.getTime() + Math.random() * (now.getTime() - past.getTime());

    return new Date(randomTime).toISOString();
}

export function dummySocialTypeData(): SocialType[] {
    return [
        {
            id: "facebook",
            label: "Facebook",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
            created_at: getRandomDate(),
        },
        {
            id: "x",
            label: "X (旧Twitter)",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
            created_at: getRandomDate(),
        },
        {
            id: "instagram",
            label: "Instagram",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
            created_at: getRandomDate(),
        },
        {
            id: "line",
            label: "LINE",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733561.png",
            created_at: getRandomDate(),
        }, {
            id: "youtube",
            label: "YouTube",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733646.png",
            created_at: getRandomDate(),
        }, {
            id: "tiktok",
            label: "TikTok",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733635.png",
            created_at: getRandomDate(),
        }, {
            id: "note",
            label: "Note",
            icon: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
            created_at: getRandomDate(),
        }
    ]
}
