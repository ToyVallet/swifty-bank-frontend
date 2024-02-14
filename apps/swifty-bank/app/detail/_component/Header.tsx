"use client";

import { useTheme } from "next-themes";
import styles from "./header.css";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "@swifty/ui";

export default function Header() {
  const { theme } = useTheme();

  return (
    <header
      className={styles.header({
        borderBottom: theme === "light" ? "light" : "dark",
      })}
    >
      <Link href="/agreement" className={styles.link}>
        <Image
          src={"/icon/Icon_Cancellation.svg"}
          alt="Icon_Cancellation"
          width={30}
          height={30}
        />
      </Link>
      <Heading type="h2">[필수] 개인정보 처리방침 동의</Heading>
      <p className={styles.content}>
        개인정보의 수집·이용에 관한 동의를 거부하실 수 있습니다. 다만, 본 동의는
        '인증서 등록'을 위한 필수적인 사항이므로 동의를 거부하시는 경우 업무
        수행이 불가능 할 수 있습니다.
      </p>
    </header>
  );
}
