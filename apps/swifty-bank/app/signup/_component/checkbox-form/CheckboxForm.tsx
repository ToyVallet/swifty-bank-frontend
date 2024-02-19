"use client";

import { Button, CheckBox, CheckBoxProp } from "@swifty/ui";
import { HTMLAttributes, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./checkboxForm.css";

interface Button extends HTMLAttributes<HTMLButtonElement> {}

interface Prop {
  onClose: Button["onClick"];
}

export default function CheckboxForm({ onClose }: Prop) {
  const router = useRouter();
  const [terms, setTerms] = useState<CheckBoxProp[]>([
    {
      labelContent: "[필수] 서비스 이용약과 동의",
      isCheck: false,
      isDetail: true,
      detailInfoType: "service",
    },
    {
      labelContent: "[필수] 개인정보 처리방침 동의",
      isCheck: false,
      isDetail: true,
      detailInfoType: "service",
    },
    {
      labelContent: "[필수] 프로모션 등 안내 동의",
      isCheck: false,
      isDetail: true,
      detailInfoType: "service",
    },
  ]);

  const handleChange = useCallback((isCheck: boolean, id: number) => {
    const cloneTerms = [...terms];
    cloneTerms[id]!.isCheck = !isCheck;
    setTerms(cloneTerms);
  }, []);

  const onClick = () => {
    if (terms.filter((term) => term.isCheck).length === terms.length) {
      router.replace("");
      return;
    }
    alert("모든 사항을 동의해주세요!");
  };

  return (
    <section className={styles.container}>
      <div>
        {terms.map((term, idx) => (
          <CheckBox
            key={idx}
            {...term}
            id={`${idx}`}
            onChange={() => handleChange(term.isCheck, idx)}
          />
        ))}
      </div>
      <div className={styles.buttonSection}>
        <Button onClick={onClick}>동의하기</Button>
        <Button onClick={onClose} className={styles.closeButton}>
          닫기
        </Button>
      </div>
    </section>
  );
}
