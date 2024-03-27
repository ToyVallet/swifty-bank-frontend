"use client";
import { HTMLAttributes } from "react";
import { format } from "@/(bottomTab)/mypage/_utils/format";
import clsx from "clsx";
import styles from "./info-list.css";

interface InfoListProps extends HTMLAttributes<HTMLDListElement> {
  name: string;
  birthDate: string;
  phoneNumber: string;
}

export function InfoList({
  name,
  birthDate,
  phoneNumber,
  className,
  ...props
}: InfoListProps) {
  return (
    <dl className={clsx(styles.infoList, className)} {...props}>
      <dt className={styles.infoTerm}>이름</dt>
      <dl className={styles.infoDescription}>{name || '없음'}</dl>
      <dt className={styles.infoTerm}>생년월일</dt>
      <dl className={styles.infoDescription}>{format.birthday(birthDate) || '없음'}</dl>
      <dt className={styles.infoTerm}>휴대폰번호</dt>
      <dt className={styles.infoDescription}>{
        format.phone(format.international(phoneNumber)) || '없음'
      }</dt>
    </dl>
  );
}
