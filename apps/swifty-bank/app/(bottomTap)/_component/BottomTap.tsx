"use client";

import styles from "@/(bottomTap)/_component/bottomTap.css";
import Home from "@/(bottomTap)/_component/HomeIcon";
import MyPage from "@/(bottomTap)/_component/MypageIcon";
import Exchange from "@/(bottomTap)/_component/ExchangeIcon";
import { useTheme } from "next-themes";

import { useSelectedLayoutSegment } from "next/navigation";
export default function BottomTap() {
  const segment = useSelectedLayoutSegment();
  const { theme } = useTheme();
  console.log(theme);
  return (
    <section>
      <MyPage isStroke darkmode={"light"} />
      <Exchange isStroke darkmode={"light"} />
      <Home isStroke darkmode={"light"} />
      {theme}
    </section>
  );
}
