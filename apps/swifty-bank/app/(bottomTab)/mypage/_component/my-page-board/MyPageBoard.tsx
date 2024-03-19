"use client";
import { HTMLAttributes } from "react";
import { InfoList } from "../info-list/InfoList";
import { ButtonList } from "../button-list/ButtonList";
import clsx from "clsx";
import styles from "./my-page-board.css";
import agreements from "../../_lib/constants/agreement";

interface MyPageBoardProps extends HTMLAttributes<HTMLDivElement> {
}

export function MyPageBoard({ className, ...props }: MyPageBoardProps) {
  return (
    <section className={clsx(styles.board, className)} {...props}>
      <InfoList
        name='김성명'
        birthDay="20000101"
        phone='+821012345678'
      />
      <ButtonList
        agreements={agreements}
      />
    </section>
  );
}
