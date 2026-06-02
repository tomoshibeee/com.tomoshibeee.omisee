import { SocialLink } from "@/types/socialLink";

import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaBlog,
} from "react-icons/fa6";

const SNS_ICON_MAP: Record<string, React.ComponentType<{ size?: number }>> = {
  x: FaTwitter,
  facebook: FaFacebook,
  instagram: FaInstagram,
  youtube: FaYoutube,
  note: FaBlog,
};

function LinkButton({
  item,
  className,
}: {
  item: SocialLink;
  className?: string;
}) {
  const SIZE = 20;
  const Icon = SNS_ICON_MAP[item.type];
  if (!Icon) return null;

  return (
    <a
      href={item.url}
      aria-label={`${item.type}を開く`}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <Icon size={SIZE} />
    </a>
  );
}

export function LinkButtonHeader({ item }: { item: SocialLink }) {
  const COLOR = "gray";
  return (
    <LinkButton
      item={item}
      className={`flex h-9 w-9 items-center justify-center rounded-full text-${COLOR}-600 transition hover:bg-slate-100 hover:text-${COLOR}-900`}
    />
  );
}

export function LinkButtonFooter({ item }: { item: SocialLink }) {
  const COLOR = "gray";
  return (
    <LinkButton
      item={item}
      className={`flex h-9 w-9 items-center justify-center rounded-md bg-white/10 text-${COLOR}-200 transition hover:bg-${COLOR}-600 hover:text-white`}
    />
  );
}