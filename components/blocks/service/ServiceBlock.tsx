import { ServiceData } from "@/types/block";

import { FaMapLocation } from "react-icons/fa6";

const SNS_ICON_MAP: { [key: string]: React.ComponentType } = {
  map: FaMapLocation,
};

export default function ServiceBlock(data: ServiceData) {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-3 gap-4">
      {data.items.map((item, i) => {
        const Icon = SNS_ICON_MAP[item.icon];

        return (
          <div
            key={i}
            className="border p-4 rounded-lg flex items-center justify-between"
          >
            <span>{item.text}</span>
            <div className="flex justify-end">
              <Icon />
            </div>{" "}
          </div>
        );
      })}
    </div>
  );
}
