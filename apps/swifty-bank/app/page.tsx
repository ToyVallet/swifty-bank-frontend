"use client";

import { container } from "./page.css";
import { BottomSheet } from "@swifty/ui";
import { useBottomSheet } from "@swifty/hooks";

export default function Page() {
  const { isOpen, open, close } = useBottomSheet();

  return (
    <main className={container}>
      <button onClick={open}>시트 열기</button>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
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
