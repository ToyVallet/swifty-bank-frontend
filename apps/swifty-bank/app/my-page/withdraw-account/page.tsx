import { Metadata } from "next";
import Image from "next/image";
import Button from "@/_component/Button";
import styles from "./page.css";

export const metadata: Metadata = {
  title: '탈퇴가 완료되었습니다.',
};

export default function WithdrawAccountPage() {
  return (
    <>
      <main className={styles.main}>
        <span className={styles.topWrapper}>
          <h1>탈퇴가 완료되었습니다.</h1>
          <p className={styles.paragraph}>지금까지 Swifty를 이용해주셔서 감사합니다.</p>
        </span>
        <figure className={styles.figure}>
          <Image className={styles.img} src='/icon/layer_1.svg' width={120} height={183.36} alt='swifty logo image' />
        </figure>
        <Button isPale>
          메인페이지로 이동합니다.
        </Button>
      </main >
    </>
  );
}
