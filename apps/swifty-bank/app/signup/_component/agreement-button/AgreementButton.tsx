"use client";

import { BottomSheet } from "@swifty/ui";
import Button from "@/_component/Button";
import styles from "./agreementButton.css";
import { useBottomSheet } from "@swifty/hooks";
import CheckForm from "../check-form/CheckForm";

export default function AgreementBtn() {
  const { isOpen, open, close } = useBottomSheet();
  const title = "Swifty를 쓰려면 동의가 필요해요";

  return (
    <>
      <div className={styles.container}>
        <Button
          variant={"active"}
          position="fixed"
          onClick={open}
          vibrateOnPress
        >
          약관 보기
        </Button>
      </div>
      <BottomSheet open={isOpen} onDismiss={close} header={title}>
        <CheckForm onClose={close} />
      </BottomSheet>
    </>
  );
}
