"use client";

import { container } from "./page.css";
import { BottomSheet, Toast } from "@swifty/ui";
import { useBottomSheet } from "@swifty/hooks";

export default function Page() {
  const { isOpen, open, close } = useBottomSheet();

  return (
    <main className={container}>
      <Toast
        type={"sucess"}
        time={10}
        content={"2024년 6월 1일 Swifty의 새로운 계정이 생성되었습니다."}
      />
      <button onClick={() => {}}>메시지</button>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
        header="Swifty를 쓰려면 동의가 필요해요."
        expandTo="2/3"
      >
        asd
      </BottomSheet>
    </main>
  );
}
