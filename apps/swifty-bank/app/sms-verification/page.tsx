"use client";

import { useSearchParams } from "next/navigation";
import SmsVerificationInput from "./_component/SmsVerificationInput";
import styles from "./page.css";
import { Heading } from "@swifty/ui";
import { useState, Suspense } from "react";

function SmsVerificationPage() {
  const [verificationCode, setVerifictionCode] = useState("");
  const searchParams = useSearchParams();

  if (!searchParams.has("name"))
    throw new Error("'name' 파라미터가 필요합니다.");
  return (
    <main className={styles.container}>
      <div className={styles.headers}>
        <Heading type="h1">{searchParams.get("name")}님의 문자로</Heading>
        <Heading type="h1">인증번호 6자리를 보냈어요!</Heading>
      </div>
      <SmsVerificationInput
        value={verificationCode}
        onChange={setVerifictionCode}
      />
      <button className={styles.info}>문자를 못 받았나요?</button>
    </main>
  );
}

const SuspenseProvider = () => {
  return (
    <Suspense fallback={<div>loading</div>}>
      <SmsVerificationPage />
    </Suspense>
  );
};

export default SuspenseProvider;
