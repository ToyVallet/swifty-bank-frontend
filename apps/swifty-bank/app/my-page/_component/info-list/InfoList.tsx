"use client";
import { HTMLAttributes } from "react";
import { format } from "@/my-page/_utils/format";
import clsx from "clsx";
import styles from "./info-list.css";

interface InfoListProps extends HTMLAttributes<HTMLDListElement> {
  name: string;
  birthDay: string;
  phone: string;
}

export function InfoList({ name, birthDay, phone, className, ...props }: InfoListProps) {
  return (
    <dl className={clsx(styles.InfoList, className)} {...props}>
      <dt className={styles.InfoTerm}>이름</dt>
      <dl className={styles.InfoDescription}>{name}</dl>
      <dt className={styles.InfoTerm}>생년월일</dt>
      <dl className={styles.InfoDescription}>{format.birthday(birthDay)}</dl>
      <dt className={styles.InfoTerm}>휴대폰번호</dt>
      <dt className={styles.InfoDescription}>{
        format.phone(format.international(phone))
      }</dt>
    </dl>
  );
}
