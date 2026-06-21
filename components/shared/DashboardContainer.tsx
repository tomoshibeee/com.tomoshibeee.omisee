"use client";

import {
  useState,
  //, useEffect
} from "react";
import Header from "@/components/shared/Header";
import { NewsDrawer } from "@/features/drawer/NewsDrawer";
import { NewsItem } from "@/features/block/news/types";
import { UserData } from "@/types/user";

type Props = {
  user: UserData;
  newsItems: NewsItem[];
};

export function DasgboardContainer({ user, newsItems }: Props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // useEffect(() => {
  //   console.log("🚦🚦🚦isDrawerOpen🚦🚦🚦", isDrawerOpen);
  // }, []);

  return (
    <>
      <Header user={user} onOpenNews={() => setIsDrawerOpen(true)} />
      <NewsDrawer
        newsItems={newsItems}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
