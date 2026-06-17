import Link from "next/link";

import { SiteMeta } from "@/models/siteMeta";

export function SiteLink(props: SiteMeta) {
  const { name, slug } = props;
  return (
    <Link
      href={`/p/${slug}`}
      className="block border rounded-xl p-4 hover:shadow-md hover:-translate-y-0.5 transition bg-white"
    >
      <div className="space-y-2">
        {/* タイトル */}
        <p className="font-semibold text-lg">{name}</p>

        {/* スラッグ */}
        <p className="text-sm text-gray-500">/p/{slug}</p>

        {/* CTA */}
        <div className="pt-2">
          <span className="text-sm text-blue-600 font-medium hover:underline">
            Visit →
          </span>
        </div>
      </div>
    </Link>
  );
}
