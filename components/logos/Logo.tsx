import { SiteData } from "@/types/site";

export function Logo({site} : {site: SiteData}) {
  return (
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-base font-semibold">[LG]</span>
        <span className="text-base font-semibold text-gray-900">
          {site.meta.name}
        </span>
      </div>
  );
}
