"use client";

import styles from "@/(bottomTab)/_component/bottomTab.css";
import Home from "@/(bottomTab)/_component/HomeIcon";
import MyPage from "@/(bottomTab)/_component/MypageIcon";
import Exchange from "@/(bottomTab)/_component/ExchangeIcon";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useSelectedLayoutSegment } from "next/navigation";

export default function BottomTab() {
  const segment = useSelectedLayoutSegment();
  const { theme } = useTheme();
  const menus = [
    {
      name: "home",
      title: "홈",
      link: "/home",
      icon: <Home isStroke={segment === "home"} darkmode={theme} />,
    },
    {
      name: "foreignExchange",
      title: "외환 관리",
      link: "/account",
      icon: <Exchange isStroke={segment === "account"} darkmode={theme} />,
    },
    {
      name: "mypage",
      title: "마이페이지",
      link: "/mypage",
      icon: <MyPage isStroke={segment === "mypage"} darkmode={theme} />,
    },
  ];
  return (
    <ul className={styles.container}>
      {menus.map((menu, idx) => (
        <Link href={menu.link} key={idx} className={styles.link}>
          <li
            className={
              segment === menu.name ? styles.emphasis : styles.unemphasis
            }
          >
            {menu.icon}
            <span>{menu.title}</span>
            {segment === menu.name && <div className={styles.emphasisCircle} />}
          </li>
        </Link>
      ))}
    </ul>
  );
}
