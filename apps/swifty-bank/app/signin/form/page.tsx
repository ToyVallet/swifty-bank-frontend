"use client";

import React, { useState } from "react";
import styles from "../form/page.css";
import { Button, Heading, Input, Select } from "@swifty/ui";
import { useInput } from "@swifty/hooks";
import validatePN from "../../../_lib/validate/validatePN";
import validateID from "../../../_lib/validate/validateID";
import { motion } from "framer-motion";
import telecomServiceProvider from "../../../_lib/constants/tsp";
import { useRouter } from "next/navigation";

function SigninForm() {
  // stage : 0 -> 1 -> 2 -> 3 -> submit
  const [signinStage, setSigninStage] = useState(0);
  const phoneNumber = useInput("");
  const [telecomProvider, setTelecomProvider] = useState("");
  const idNumberFront = useInput("");
  const idNumberBack = useInput("");
  const username = useInput("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validatePN(phoneNumber.value)) {
      alert("잘못된 휴대폰번호 형식입니다.");
      return;
    }

    if (signinStage >= 1 && telecomProvider === "") {
      alert("통신사를 선택해주세요.");
      return;
    }

    if (
      signinStage >= 2 &&
      !validateID(idNumberFront.value, idNumberBack.value)
    ) {
      alert("잘못된 주민등록번호 형식입니다.");
      return;
    }

    if (signinStage >= 3 && username.value === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    setSigninStage((prev) => prev + 1);

    // TODO : 마지막 stage에 도달하면 API에 해당 정보를 담아 인증번호 요청
    if (signinStage === 3) {
      console.log(
        phoneNumber.value,
        telecomProvider,
        idNumberFront.value,
        idNumberBack.value,
        username.value,
      );
      // 인증번호 요청 페이지로 이동 (정확한 경로 확인 필요)
      router.push("/signin/verify");
    }
  };

  return (
    <>
      <header className={styles.header}>
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

          <div className={styles.idInputBox}>
            <div className={styles.idInputFront}>
              <Input {...idNumberFront}>
                <Input.Text maxLength={6} />
              </Input>
            </div>

            <span className={styles.idInputHyphen}>-</span>

            <div className={styles.idInputBackBox}>
              <input
                className={styles.idInputBack}
                {...idNumberBack}
                maxLength={1}
              />
              <span className={styles.idInputBlind}>******</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className={
            signinStage >= 1 ? styles.inputContainer : styles.hideElement
          }
          initial={{ opacity: 0 }} // 초기 상태 설정
          animate={{ opacity: signinStage >= 1 ? 1 : 0 }} // 특정 상태로 변경될 때 애니메이션 적용
          transition={{ duration: 1 }} // 애니메이션 지속 시간 설정
        >
          <Select
            label="통신사"
            options={telecomServiceProvider}
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

        <section className={styles.nextButton}>
          {/* TODO: Button 컴포넌트 타입 경고 해결 */}
          <Button type="submit">다음</Button>
        </section>
      </form>
    </>
  );
}

export default SigninForm;
