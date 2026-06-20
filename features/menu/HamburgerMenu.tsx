import { SiteData } from "@/types/site";

type Props = {
  site?: SiteData;
};

export function HamburgerMenu(props: Props) {
  return (
    <button className="text-gray-600 transition hover:text-gray-900">
      ☰
    </button>

  );
}
