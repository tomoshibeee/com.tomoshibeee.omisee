"use client";

import { useState } from "react";

export function NewsDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>お知らせ</button>
      {open && (
        <div>
          モーダル
          <button onClick={() => setOpen(false)}>閉じる</button>
        </div>
      )}
    </>
  );
}