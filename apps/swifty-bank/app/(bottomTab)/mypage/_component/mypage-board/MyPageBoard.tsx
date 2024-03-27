"use client";
import { HTMLAttributes } from "react";
import { InfoList } from "@/(bottomTab)/mypage/_component/info-list/InfoList";
import { MypageNav } from "@/(bottomTab)/mypage/_component/mypage-nav/MypageNav";
import { Avatar } from "@/(bottomTab)/mypage/_component/avatar/Avatar";
import clsx from "clsx";
import styles from "./mypage-board.css";

interface MyPageBoardProps extends HTMLAttributes<HTMLDivElement> {
}

export function MyPageBoard({ className, ...props }: MyPageBoardProps) {
  return (
    <section className={clsx(styles.board, className)} {...props}>
      <Avatar
        src='/icon/mypage/ellipse25.png'
      />
      <InfoList
        name='김성명'
        birthDay="20000101"
        phone='+821012345678'
      />
      <MypageNav />
    </section>
  );
}
