"use client";
import { Button } from "@swifty/ui";
import { styles } from "./agreementBtn.css";

export default function AgreementBtn() {
  // 버튼 관련 로직을 정의합니다.
  return (
    <div className={styles.container}>
      <Button variant={"active"}>약관 보기</Button>
    </div>
  );
}
