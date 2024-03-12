"use client";

import Template from "@/_component/Template";
import KeyPad from "@/_component/keypad/KeyPad";
import useKeyPad from "@/_hook/useKeyPad";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Back from "@icon/Icon_Back_Black.svg";
import styles from "@/signup/password/_component/keyPadLayout.css";

const PASSWORD_LENGTH = 6;

export default function AmimateLayout() {
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const [stage, setStage] = useState<"password" | "check">("password");
  const [password, setPassword, handleClick] = useKeyPad(PASSWORD_LENGTH);
  const [check, setCheck, checkClick] = useKeyPad(PASSWORD_LENGTH);

  const onClickStageBack = () => {
    setCheck([]);
    setPassword([]);
    setStage("password");
  };

  useEffect(() => {
    let id: string | number | undefined;
    if (password.length === PASSWORD_LENGTH) {
      id = window.setTimeout(() => {
        setStage("check");
      }, 400);
    }
    return () => {
      clearTimeout(id);
    };
  }, [password]);

  useEffect(() => {
    if (
      check.length === PASSWORD_LENGTH &&
      password.join("") === check.join("")
    ) {
      // 일치
    }
    if (
      check.length === PASSWORD_LENGTH &&
      password.join("") !== check.join("")
    ) {
      setCheck([]);
      setPassword([]);
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
            <Back className={styles.headerIcon} />
            <Template.Header
              main="비밀번호를 입력해주세요"
              sub={
                "3자리 이상 반복되거나 연속되지 않도록 \n 생년월일, 전화번호가 포함되지 않도록 입력해주세요."
              }
            />
            <KeyPad
              len={PASSWORD_LENGTH}
              password={password}
              onClick={handleClick}
            />
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
            <Template.Header
              main="비밀번호를 확인해주세요"
              sub={"설정한 비밀번호를 한번 더 입력해주세요"}
            />
            <KeyPad
              len={PASSWORD_LENGTH}
              password={check}
              onClick={checkClick}
            />
          </Template>
        </motion.div>
      )}
    </>
  );
}
