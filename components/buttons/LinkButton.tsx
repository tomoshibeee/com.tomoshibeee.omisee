import { SiteSocialLink } from "@/models/siteSocialLink";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
  FaTiktok,
} from "react-icons/fa6";

const SNS_ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  facebook: FaFacebook,
  x: FaTwitter,
  instagram: FaInstagram,
  youtube: FaYoutube,
  tiktok: FaTiktok,
  note: FaBlog,
};

function LinkButton({
  item,
  className,
}: {
  item: SiteSocialLink;
  className?: string;
}) {
  const SIZE = 20;
  const key = item.type_id.toLowerCase();
  const Icon = SNS_ICON_MAP[key];

  return (
    <a
      href={item.url}
      aria-label={`${key}を開く`} // TODO : item.labelにしたい
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon size={SIZE} />
    </a>
  );
}

export function LinkButtonHeader({ item }: { item: SiteSocialLink }) {
  const COLOR = "gray";
  return (
    <LinkButton
      item={item}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-${COLOR}-600 transition hover:bg-slate-100 hover:text-${COLOR}-900`}
    />
  );
}

export function LinkButtonFooter({ item }: { item: SiteSocialLink }) {
  const COLOR = "gray";
  return (
    <LinkButton
      item={item}
      className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-${COLOR}-200 transition hover:bg-${COLOR}-600 hover:text-white`}
    />
  );
}
