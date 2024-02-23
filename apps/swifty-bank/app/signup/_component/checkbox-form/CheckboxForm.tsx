"use client";

import { Button, CheckBox } from "@swifty/ui";
import { HTMLAttributes } from "react";
import { useRouter } from "next/navigation";
import styles from "./checkboxForm.css";
import { useCheckBox } from "@swifty/hooks";

interface Button extends HTMLAttributes<HTMLButtonElement> {}

interface Prop {
  onClose: Button["onClick"];
}

export default function CheckboxForm({ onClose }: Prop) {
  const router = useRouter();
  const { terms, onChange } = useCheckBox([
    {
      labelContent: "[필수] 서비스 이용약관 동의",
      isCheck: false,
      optional: false,
      isDetail: true,
      detailInfoType: "service",
    },
    {
      labelContent: "[필수] 개인정보 처리방침 동의",
      isCheck: false,
      optional: false,
      isDetail: true,
      detailInfoType: "personalInfo",
    },
    {
      labelContent: "[선택] 프로모션 등 안내 동의",
      isCheck: false,
      optional: true,
      isDetail: true,
      detailInfoType: "promotion",
    },
  ]);

  const checkTerms = () =>
    terms.every(({ isCheck, optional }) => optional || isCheck);

  const onClick = () => {
    if (!checkTerms()) {
      return;
    }

    router.replace("");
  };

  return (
    <section className={styles.container}>
      <div className={styles.termsSection}>
        {terms.map((term, idx) => (
          <CheckBox
            key={idx}
            {...term}
            id={`${idx}`}
            onChange={() => onChange(term.isCheck, idx)}
            onClick={() => onChange(term.isCheck, idx)}
          />
        ))}
      </div>
      <div className={styles.buttonSection}>
        <Button
          onClick={onClick}
          variant={checkTerms() ? "active" : "disabled"}
        >
          동의하기
        </Button>
        <Button onClick={onClose} className={styles.closeButton}>
          닫기
        </Button>
      </div>
    </section>
  );
}
