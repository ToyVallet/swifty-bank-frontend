"use client";

import { useState } from "react";
import { container } from "./page.css";
import { BottomSheet } from "@swifty/ui";

export default function Page() {
  const [open, setOpen] = useState(false);
  const onDismiss = () => setOpen(false);
  return (
    <main className={container}>
      <button onClick={() => setOpen(true)}>시트 열기</button>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        header="Swifty를 쓰려면 동의가 필요해요."
        height="1/3"
        expandTo="2/3"
      >
        <ul>
          <li>항목 1</li>
          <li>항목 2</li>
          <li>항목 3</li>
        </ul>
      </BottomSheet>
    </main>
  );
}
