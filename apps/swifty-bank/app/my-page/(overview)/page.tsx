"use client";
import { MyPageBoard } from "@/my-page/_component/my-page-board/MyPageBoard";
import styles from "./page.css";

export default function MyPageOfPage() {
  return (
    <>
      <div className={styles.NotDefinition} aria-label="아직 기획 구상중인 부분" />
      <MyPageBoard />
    </>
  );
}
