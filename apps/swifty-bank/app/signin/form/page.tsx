"use client";

import React, { useState } from "react";
import styles from "../form/page.css";
import { Button, Heading, Input, Select } from "@swifty/ui";
import { useInput } from "@swifty/hooks";
import validatePN from "../../../_lib/validate/validatePN";
import { motion } from "framer-motion";

function SigninForm() {
  // stage 0 -> 1 -> 2 -> 3 -> submit
  const [signinStage, setSigninStage] = useState(0);
  const phoneNumber = useInput("", validatePN);
  const [telecomProvider, setTelecomProvider] = useState("");
  const idNumberFront = useInput("");
  const idNumberBack = useInput("");
  const username = useInput("");

  const telecomProviderOptions = [
    // TODO: 통신사 옵션을 서버에서 받아오도록 수정 or 상수화 논의 필요
    { value: "SKT", label: "SKT" },
    { value: "KT", label: "KT" },
    { value: "LG", label: "LG" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSigninStage((prev) => prev + 1);
    if (signinStage === 3) {
      console.log(
        phoneNumber.value,
        telecomProvider,
        idNumberFront.value,
        idNumberBack.value,
        username.value,
      );
    }
  };

  return (
    <>
      <header>
        <div className={signinStage === 0 ? "" : styles.hideElement}>
          <Heading type="h2">휴대폰 번호를 알려주세요</Heading>
        </div>
        <div className={signinStage === 1 ? "" : styles.hideElement}>
          <Heading type="h2">통신사를 알려주세요</Heading>
        </div>
        <div className={signinStage === 2 ? "" : styles.hideElement}>
          <Heading type="h2">주민등록번호 앞 7자리를 알려주세요</Heading>
        </div>
        <div className={signinStage === 3 ? "" : styles.hideElement}>
          <Heading type="h2">성명을 알려주세요</Heading>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <motion.div
          className={signinStage >= 3 ? "" : styles.hideElement}
          initial={{ opacity: 0 }}
          animate={{ opacity: signinStage >= 2 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <Input label="이름" {...username}>
            <Input.Text />
          </Input>
        </motion.div>

        <motion.div
          className={
            signinStage >= 2 ? styles.idInputContainer : styles.hideElement
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: signinStage >= 2 ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          <p className={styles.idLabel}>주민등록번호 앞 7자리</p>
          <div className={styles.idInputFrontBox}>
            <Input {...idNumberFront}>
              <Input.Text maxLength={6} />
            </Input>
          </div>
          <span className={styles.idInputHyphen}>-</span>
          <div className={styles.idInputBackBox}>
            <Input {...idNumberBack}>
              <Input.Text maxLength={1} />
            </Input>
          </div>
        </motion.div>

        <motion.div
          className={signinStage >= 1 ? "" : styles.hideElement}
          initial={{ opacity: 0 }} // 초기 상태 설정
          animate={{ opacity: signinStage >= 1 ? 1 : 0 }} // 특정 상태로 변경될 때 애니메이션 적용
          transition={{ duration: 1 }} // 애니메이션 지속 시간 설정
        >
          <Select
            label="통신사"
            options={telecomProviderOptions}
            placeholder="통신사 선택"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setTelecomProvider(e.target.value)
            }
          />
        </motion.div>

        <motion.div className={styles.inputContainer}>
          <Input label="휴대폰번호" {...phoneNumber}>
            <Input.Text maxLength={11} />
          </Input>
        </motion.div>

        {/* TODO: Button 컴포넌트 타입 경고 해결 */}
        <Button className={styles.nextButton} type="submit">
          다음
        </Button>
      </form>
    </>
  );
}

export default SigninForm;
