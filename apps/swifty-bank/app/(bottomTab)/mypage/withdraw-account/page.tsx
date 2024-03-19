"use client";
import Image from "next/image";
import Template from "@/_component/Template";
import { Toast } from "@swifty/ui";
import styles from "./page.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function WithdrawAccountPage() {
  const { replace } = useRouter();

  useEffect(() => {
    const timeId = setTimeout(() => {
      replace(`/home`);
    }, 2000);
    return () => { clearTimeout(timeId) }
  }, []);

  return (
    <Template className={styles.template}>
      <Template.Header
        main="탈퇴가 완료되었습니다."
        sub="지금까지 Swifty를 이용해주셔서 감사합니다."
        type='center' />
      <Template.MainIcon>
        <Image src='/icon/layer_1.svg' width={120} height={183.36} alt='swifty logo image' />
      </Template.MainIcon>
      <Toast>
        메인페이지로 이동합니다.
      </Toast>
    </Template>
  );
}
