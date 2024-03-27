"use client";

import Template from "@/_component/Template";
import KeyPad from "@/_component/keypad/KeyPad";
import useKeyPad from "@/_hook/useKeyPad";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Back from "@icon/Icon_Back_Black.svg";
import styles from "@/signup/password/_component/keyPadLayout.css";
import auth from "@/_api/auth";

const PASSWORD_LENGTH = 6;

export default function AmimateLayout() {
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const [stage, setStage] = useState<"password" | "check">("password");
  const [password, setPassword, handleClick, keyPads] = useKeyPad(
    PASSWORD_LENGTH,
    true,
  );
  const [check, setCheck, checkClick] = useKeyPad(PASSWORD_LENGTH);
  const router = useRouter();

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
      auth.signwithForm(password, "test").then((data) => {
        if (data.availablePassword && data.success) {
          router.replace("/signup/congratulations");
        }
        if (!data.availablePassword) {
          window.alert("유효하지 않은 비밀번호입니다.");
          onClickStageBack();
        }
      });
    }
    if (
      check.length === PASSWORD_LENGTH &&
      password.join("") !== check.join("")
    ) {
      setCheck([]);
      window.alert("비밀번호가 동일하지 않습니다.");
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
              keypads={keyPads}
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
              keypads={keyPads}
            />
          </Template>
        </motion.div>
      )}
    </>
  );
}
