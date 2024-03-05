"use client";

import Image from "next/image";
import { styles } from "@/signup/congratulations/page.css";
import { Toast } from "@swifty/ui";
import { useEffect } from "react";
import Template from "@/_component/Template";

export default function CongratulationsPage() {
  useEffect(() => {
    // 일정 시간 이후 페이지 전환
  }, []);

  return (
    <Template>
      <Template.Header
        main={"김성명님, \n Swifty와 함께해요!"}
        sub={"회원가입이 완료되었습니다."}
        type="center"
      />
      <Template.MainIcon>
        <Image
          src="/img/congratulation/congratulation.webp"
          height={208.5}
          width={190}
          alt="congratulations"
          className={styles.img}
          priority
        />
      </Template.MainIcon>
      <Toast time={3}>24년 6월 1일 Swifty 계정이 생성되었습니다.</Toast>
    </Template>
  );
}
