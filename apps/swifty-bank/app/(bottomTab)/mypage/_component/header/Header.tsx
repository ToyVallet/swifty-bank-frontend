import { HTMLAttributes } from "react";
import Link from "next/link";
import { Logo } from "@/(bottomTab)/mypage/_component/logo/Logo";
import clsx from "clsx";
import styles from "./header.css";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export function Header({ className, ...props }: HeaderProps) {
  return (
    <header
      className={clsx(styles.header, className)}
      {...props}
    >
      <Logo />
      <Link href={`mypage/edit`}>수정</Link>
    </header>
  );
}
