import { Site } from "@/models/site";
import { SiteMeta } from "@/models/siteMeta";
import { MetaData } from "@/types/meta";

export function toMetaData(site: Site, meta: SiteMeta) : MetaData {
    return {
        site_id: site.id,
        site_no: site.site_no,
        slug: meta.slug,
        name: meta.name,
        tel: meta.tel,
        email: meta.email,
        postalCode: meta.postal_code,
        address: meta.address,
        bldg: meta.building,
        access: meta.access,
        description: meta.description ?? "",
    }
}