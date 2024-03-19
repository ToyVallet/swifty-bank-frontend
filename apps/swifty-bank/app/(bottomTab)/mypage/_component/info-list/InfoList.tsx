"use client";
import { HTMLAttributes } from "react";
import { format } from "../../_utils/format";
import clsx from "clsx";
import styles from "./info-list.css";

interface InfoListProps extends HTMLAttributes<HTMLDListElement> {
  name: string;
  birthDay: string;
  phone: string;
}

export function InfoList({ name, birthDay, phone, className, ...props }: InfoListProps) {
  return (
    <dl className={clsx(styles.infoList, className)} {...props}>
      <dt className={styles.infoTerm}>이름</dt>
      <dl className={styles.infoDescription}>{name}</dl>
      <dt className={styles.infoTerm}>생년월일</dt>
      <dl className={styles.infoDescription}>{format.birthday(birthDay)}</dl>
      <dt className={styles.infoTerm}>휴대폰번호</dt>
      <dt className={styles.infoDescription}>{
        format.phone(format.international(phone))
      }</dt>
    </dl>
  );
}
