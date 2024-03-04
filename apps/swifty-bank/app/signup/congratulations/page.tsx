"use client";

import Image from "next/image";
import { styles } from "@/signup/congratulations/page.css";
import { title } from "@/signup/layout.css";
import MainIcon from "@/_component/MainIcon";
import { Toast } from "@swifty/ui";
import clsx from "clsx";
import { useEffect } from "react";

export default function CongratulationsPage() {
  useEffect(() => {
    // 일정 시간 이후 페이지 전환
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={clsx(title, styles.headerTitle)}>
          김성명님, <br /> Swifty와 함께해요!
        </h1>
        <span className={styles.explain}>회원가입이 완료되었습니다.</span>
      </div>
      <MainIcon>
        <Image
          src="/img/congratulation/congratulation.webp"
          height={208.5}
          width={190}
          alt="congratulations"
          className={styles.img}
          priority
        />
      </MainIcon>
      <Toast
        type="sucess"
        content="24년 6월 1일 Swifty 계정이 생성되었습니다."
      />
    </main>
  );
}
