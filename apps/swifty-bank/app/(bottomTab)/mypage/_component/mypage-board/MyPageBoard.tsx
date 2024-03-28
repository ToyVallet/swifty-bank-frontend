"use client";
import { HTMLAttributes } from "react";
import { InfoList } from "@/(bottomTab)/mypage/_component/info-list/InfoList";
import { MypageNav } from "@/(bottomTab)/mypage/_component/mypage-nav/MypageNav";
import { Avatar } from "@/(bottomTab)/mypage/_component/avatar/Avatar";
import { User as ResponseUser } from "@/_api/type";
import clsx from "clsx";
import styles from "./mypage-board.css";

interface MyPageBoardProps extends HTMLAttributes<HTMLDivElement> {
  customerInfo: ResponseUser;
}

export function MyPageBoard({ customerInfo, className, ...props }: MyPageBoardProps) {
  const { name, birthDate, phoneNumber } = customerInfo;
  return (
    <section className={clsx(styles.board, className)} {...props}>
      <Avatar src='/icon/mypage/ellipse25.png' />
      <InfoList
        name={name}
        birthDate={birthDate}
        phoneNumber={phoneNumber}
      />
      <MypageNav />
    </section>
  );
}
