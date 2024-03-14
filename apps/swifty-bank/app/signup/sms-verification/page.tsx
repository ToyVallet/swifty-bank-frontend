"use client";

import { useSearchParams } from "next/navigation";
import SmsVerificationInput from "./_component/SmsVerificationInput";
import styles from "./page.css";
import { Heading } from "@swifty/ui";
import { useCallback, useEffect, useState } from "react";
import sms from "@/_api/sms";
import { useRouter } from "next/navigation";

export default function SmsVerificationPage() {
  const [verificationCode, setVerifictionCode] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const phoneNumber = new URLSearchParams(searchParams.toString());

  const checkSMSCode = useCallback(
    async (phoneNumber: string) => {
      const res = await sms.checkSMSCode(verificationCode, phoneNumber);
      if (res.isSuccess) router.push("/signup/password");

      if (!res.isSuccess)
        throw new Error("인증번호가 일치하지 않습니다. 다시 확인해주세요.");

      return res;
    },
    [verificationCode],
  );

  useEffect(() => {
    // TODO : 인증번호 확인 API 요청
    if (verificationCode.length === 6) {
      console.log("인증번호 확인 API 요청", verificationCode);
      console.log("phoneNumber", phoneNumber);
      checkSMSCode(phoneNumber.toString() as string);
    }
  }, [verificationCode]);

  if (!searchParams.has("name"))
    throw new Error("'name' 파라미터가 필요합니다.");

  if (!searchParams.has("phoneNumber") || !phoneNumber)
    throw new Error("phoneNumber 파라미터가 필요합니다.");

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
