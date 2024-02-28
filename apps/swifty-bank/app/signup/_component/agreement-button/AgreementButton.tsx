"use client";

import { BottomSheet, Button } from "@swifty/ui";
import styles from "./agreementButton.css";
import { useBottomSheet } from "@swifty/hooks";
import CheckForm from "../check-form/CheckForm";

export default function AgreementBtn() {
  const { isOpen, open, close } = useBottomSheet();
  const title = "Swifty를 쓰려면 동의가 필요해요";

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
        header={title}
        height="1/3"
        expandTo="full"
      >
        <CheckForm onClose={close} />
      </BottomSheet>
    </>
  );
}
