"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "../form/page.css";
import { Button, Heading, Input, Select } from "@swifty/ui";
import { useInput } from "@swifty/hooks";
import telecomServiceProvider from "../_lib/constants/tsp";
import isActiveButton, {
  FormData,
  SigninStage,
} from "../_lib/validate/isActiveButton";

function SigninForm() {
  // stage : 0 -> 1 -> 2 -> 3 -> submit
  const [signinStage, setSigninStage] = useState<SigninStage>(0);
  const phoneNumber = useInput("");
  const [telecomProvider, setTelecomProvider] = useState("");
  const idNumberFront = useInput("");
  const idNumberBack = useInput("");
  const username = useInput("");

  const router = useRouter();

  const formData: FormData = {
    phoneNumber: phoneNumber.value,
    telecomProvider,
    idNumberFront: idNumberFront.value,
    idNumberBack: idNumberBack.value,
    username: username.value,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSigninStage((prev) => (prev + 1 > 3 ? 3 : prev + 1) as SigninStage);
    // TODO : 마지막 stage에 도달하면 API에 해당 정보를 담아 인증번호 요청
    if (signinStage === 3) {
      console.log("submit", formData);
      console.log(navigator.userAgent);
      // Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1
      // 인증번호 요청 페이지로 이동 (정확한 경로 확인 필요)
      // router.push("/signin/verify");
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
          <Heading type="h2">이름을 알려주세요</Heading>
        </div>
      </header>

      <form onSubmit={handleSubmit}>
        <motion.div
          className={
            signinStage >= 3 ? styles.inputContainer : styles.hideElement
          }
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
              <span className={styles.idInputBlind}>······</span>
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
            placeholder="통신사"
            value={telecomProvider}
            optionLabel={"통신사를 선택해주세요"}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTelecomProvider(e.target.value)
            }
          />
        </motion.div>

        <motion.div className={styles.inputContainer}>
          <Input label="휴대폰번호" {...phoneNumber}>
            <Input.Text maxLength={11} />
          </Input>
        </motion.div>

        <p className={styles.noticeMessage}>
          입력한 정보는 7일동안 회원가입 시 쓰일 수 있어요
        </p>

        <section className={styles.nextButton}>
          {/* TODO: Button 컴포넌트 타입 경고 해결 */}
          <Button
            variant={
              isActiveButton(signinStage, formData) ? "active" : "disabled"
            }
            type="submit"
          >
            {signinStage === 3 ? "본인인증 하기" : "다음"}
          </Button>
        </section>
      </form>
    </>
  );
}

export default SigninForm;
