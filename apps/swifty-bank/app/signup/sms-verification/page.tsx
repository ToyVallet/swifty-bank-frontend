"use client";

import { useSearchParams } from "next/navigation";
import SmsVerificationInput from "./_component/SmsVerificationInput";
import styles from "./page.css";
import { Heading } from "@swifty/ui";
import { useCallback, useEffect, useState } from "react";
import sms from "@/_api/sms";
import { useRouter } from "next/router";

export default function SmsVerificationPage() {
  const [verificationCode, setVerifictionCode] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  const checkSMSCode = useCallback(async () => {
    if (verificationCode.length === 6) {
      const res = await sms.checkSMSCode(verificationCode, "", true);
      if (res.isSuccess) router.push("/signup/password");
    }
  }, [verificationCode]);

  useEffect(() => {
    // TODO : 인증번호 확인 API 요청
    console.log("인증번호 확인 API 요청", verificationCode);

    checkSMSCode();
  }, [verificationCode]);

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
