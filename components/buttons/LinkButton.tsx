import { SNSItem } from "@/types/sns";

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

const BUTTON_SIZE = 20;
const COLOR = "gray";

export default function LinkButton({item}: {item: SNSItem}) {
  const Icon = SNS_ICON_MAP[item.type];
  if (!Icon) return null;
  return (
    <a
      href={item.url}
      className={`flex h-9 w-9 border border-${COLOR}-600 items-center justify-center rounded-full text-${COLOR}-600 transition-colors hover:bg-slate-100 hover:text-${COLOR}-500`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon size={BUTTON_SIZE} />
    </a>
  );
}
