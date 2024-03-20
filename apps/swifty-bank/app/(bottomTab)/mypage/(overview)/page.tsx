"use client";
import { MyPageBoard } from "@/(bottomTab)/mypage/_component/mypage-board/MyPageBoard";
import styles from "./page.css";

export default function MyPageOfPage() {
  return (
    <>
      <div className={styles.notDefinition} aria-label="아직 기획 구상중인 부분" />
      <MyPageBoard />
    </>
  );
}
