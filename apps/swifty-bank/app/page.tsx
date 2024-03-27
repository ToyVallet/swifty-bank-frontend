"use client";

import { container } from "./page.css";
import { BottomSheet, ToastContext } from "@swifty/ui";
import { useBottomSheet } from "@swifty/hooks";
import { useContext } from "react";

export default function Page() {
  const { isOpen, open, close } = useBottomSheet();
  const { showToast } = useContext(ToastContext);
  const onClick = () => {
    showToast({ content: "text", timer: 1 });
  };

  return (
    <main className={container}>
      <button onClick={() => {}}>메시지</button>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
        header="Swifty를 쓰려면 동의가 필요해요."
        expandTo="2/3"
      >
        asd
      </BottomSheet>
      <button onClick={onClick}>Toast</button>
    </main>
  );
}
