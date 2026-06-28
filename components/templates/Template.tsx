"use client";

import { useState } from "react";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import BaseSection from "@/features/section/components/BaseSection";
import { SectionData } from "@/features/section/types";
import { Block } from "@/features/block/index";
import { SiteData } from "@/types/site";

type Props = {
  site: SiteData;
  edit?: boolean;
  onEdit?: (b: Block) => void;
};

export default function Template(props: Props) {
  const { site, edit, onEdit } = props;
  const sections = site?.layout?.sections;

  // const [file, setFile] = useState<File | null>(null);

  // const uploadImage = async () => {
  //   if (!file) return;

  //   const formData = new FormData();
  //   formData.append("file", file);
  //   formData.append(
  //     "upload_preset",
  //     process.env.NEXT_PUBLIC_CLOUDIARY_PRESET_UPLOAD ?? "",
  //   );

  //   const res = await fetch(
  //     `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDIARY_CLOUD_NAME}/image/upload`,
  //     {
  //       method: "POST",
  //       body: formData,
  //     },
  //   );

  //   const data = await res.json();
  //   console.log("FULL RESPONSE:", data);
  //   // console.log("uploaded:", data.secure_url);

  //   // 👉 ここでDB保存 or state更新
  // };

  return (
    <div>
      <Header site={site} />

      {/* {edit && (
        <div>
          <input
            type="file"
            onChange={(e) => {
              if (e.target.files?.[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />

          <button onClick={uploadImage}>Upload Image</button>
        </div>
      )} */}

      {sections?.map((section: SectionData, sectionIndex: number) => (
        <BaseSection
          key={section.id ?? sectionIndex}
          meta={site.meta}
          section={{ ...section }}
          edit={edit}
          onEdit={onEdit}
        />
      ))}

      <Footer site={site} edit={edit} />
    </div>
  );
}
