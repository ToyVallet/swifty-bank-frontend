"use client";

import styles from "@/(bottomTap)/_component/bottomTap.css";
import Home from "@/(bottomTap)/_component/HomeIcon";
import MyPage from "@/(bottomTap)/_component/MypageIcon";
import Exchange from "@/(bottomTap)/_component/ExchangeIcon";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";

export default function BottomTap() {
  const segment = useSelectedLayoutSegment();
  const { theme } = useTheme();
  return (
    <ul className={styles.container}>
      <Link href={"/home"}>
        <li
          className={segment === "home" ? styles.emphasis : styles.unemphasis}
        >
          <Home isStroke={segment === "home"} darkmode={theme} />
          <span>홈</span>
          {segment === "home" && <div className={styles.emphasisCircle} />}
        </li>
      </Link>
      <Link href={"/account"}>
        <li
          className={
            segment === "account" ? styles.emphasis : styles.unemphasis
          }
        >
          <Exchange isStroke={segment === "account"} darkmode={theme} />
          <span>외환 관리</span>
          {segment === "account" && <div className={styles.emphasisCircle} />}
        </li>
      </Link>
      <Link href={"/mypage"}>
        <li
          className={segment === "mypage" ? styles.emphasis : styles.unemphasis}
        >
          <MyPage isStroke={segment === "mypage"} darkmode={theme} />
          <span>마이페이지</span>
          {segment === "mypage" && <div className={styles.emphasisCircle} />}
        </li>
      </Link>
    </ul>
  );
}
