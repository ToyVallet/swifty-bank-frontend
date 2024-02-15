"use client";

import type { CheckBoxRef } from "@swifty/ui";
import { BottomSheet, Button, CheckBox } from "@swifty/ui";
import styles from "./agreementBtn.css";
import { useBottomSheet } from "@swifty/hooks";
import { useRef } from "react";

export default function AgreementBtn() {
  // 버튼 관련 로직을 정의합니다.
  const { isOpen, open, close } = useBottomSheet();
  const ref = useRef<CheckBoxRef>(null);

  return (
    <>
      <div className={styles.container}>
        <Button variant={"active"} onClick={open}>
          약관 보기
        </Button>
      </div>
      <BottomSheet
        open={isOpen}
        onDismiss={close}
        header="헤더"
        height="2/3"
        expandTo="full"
      >
        <CheckBox labelContent="[필수]" isDetail={true} ref={ref} />
      </BottomSheet>
    </>
  );
}
