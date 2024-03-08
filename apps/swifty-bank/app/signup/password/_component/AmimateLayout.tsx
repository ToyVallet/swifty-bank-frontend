"use client";

import Template from "@/_component/Template";
import KeyPad from "@/_component/keypad/KeyPad";
import useKeyPad from "@/_hook/useKeyPad";
import { motion, Variants } from "framer-motion";
import { useEffect, useState } from "react";
import Back from "@icon/Icon_Back_Black.svg";

const LENGTH = 6;

export default function AmimateLayout() {
  const variants: Variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };
  const [stage, setStage] = useState<"password" | "check">("password");
  const { password, setPassword, handleClick } = useKeyPad(LENGTH);
  const {
    password: check,
    setPassword: setCheck,
    handleClick: checkClick,
  } = useKeyPad(LENGTH);

  const onCliCkStageBack = () => {
    setCheck([]);
    setPassword([]);
    setStage("password");
  };

  useEffect(() => {
    if (password.length === LENGTH) {
      setStage("check");
    }
  }, [password]);

  useEffect(() => {
    if (check.length === LENGTH && password.join("") === check.join("")) {
      console.log("check");
    }
    if (check.length === LENGTH && password.join("") !== check.join("")) {
      console.log("dismiss");
      setCheck([]);
      setPassword([]);
    }
  }, [password, check]);

  return (
    <>
      {stage === "password" && (
        <motion.div
          key="password"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <Back />
            <Template.Header
              main="비밀번호를 입력해주세요"
              sub={
                "3자리 이상 반복되거나 연속되지 않도록 \n 생년월일, 전화번호가 포함되지 않도록 입력해주세요."
              }
            />
            <KeyPad len={LENGTH} password={password} onClick={handleClick} />
          </Template>
        </motion.div>
      )}
      {stage === "check" && (
        <motion.div
          key="check"
          variants={variants}
          initial="initial"
          animate="animate"
        >
          <Template>
            <Back onClick={onCliCkStageBack} />
            <Template.Header
              main="비밀번호를 확인해주세요"
              sub={"설정한 비밀번호를 한번 더 입력해주세요"}
            />
            <KeyPad len={LENGTH} password={check} onClick={checkClick} />
          </Template>
        </motion.div>
      )}
    </>
  );
}
