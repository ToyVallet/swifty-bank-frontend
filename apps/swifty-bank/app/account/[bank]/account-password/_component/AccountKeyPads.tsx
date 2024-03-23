"use client";

import Template from "@/_component/Template";
import KeyPad from "@/_component/keypad/KeyPad";
import useKeyPad from "@/_hook/useKeyPad";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Back from "@icon/Icon_Back_Black.svg";
import styles from "@/signup/password/_component/keyPadLayout.css";
import CancelButton from "@/_component/CancelButton";

export default function AccountKeyPads({ length }: { length: number }) {
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const [stage, setStage] = useState<"password" | "check">("password");
  const [password, setPassword, handleClick] = useKeyPad(length);
  const [check, setCheck, checkClick] = useKeyPad(length);

  const onClickStageBack = () => {
    setCheck([]);
    setPassword([]);
    setStage("password");
  };

  useEffect(() => {
    let id: string | number | undefined;
    if (password.length === length) {
      id = window.setTimeout(() => {
        setStage("check");
      }, 400);
    }
    return () => {
      clearTimeout(id);
    };
  }, [password]);

  useEffect(() => {
    if (check.length === length && password.join("") === check.join("")) {
      // 일치
    }
    if (check.length === length && password.join("") !== check.join("")) {
      // 불일치
      setCheck([]);
    }
  }, [password, check]);

  return (
    <>
      {stage === "password" && (
        <motion.div
          layout
          key="password"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <CancelButton />
            <Template.Header main="계좌 비밀번호를 입력해주세요" />
            <KeyPad len={length} password={password} onClick={handleClick} />
          </Template>
        </motion.div>
      )}
      {stage === "check" && (
        <motion.div
          layout
          key="check"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <Back onClick={onClickStageBack} className={styles.headerIcon} />
            <Template.Header main="계좌 비밀번호를 확인해주세요" />
            <KeyPad len={length} password={check} onClick={checkClick} />
          </Template>
        </motion.div>
      )}
    </>
  );
}
