"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./page.css";
import { Input, Select } from "@swifty/ui";
import { useInput } from "@swifty/hooks";
import telecomServiceProvider from "@/signup/_lib/constants/tsp";
import isActiveButton, {
  FormData,
  SignupStage,
} from "@/signup/_lib/validate/isActiveButton";
import { title } from "../layout.css";
import Ellipsis from "@icon/signup/ellipsis.svg";
import Hyphen from "@icon/signup/hyphen.svg";
import Button from "@/_component/Button";
import { josa } from "@toss/hangul";

function SignupForm() {
  const [stage, setStage] = useState(SignupStage["휴대폰번호"]);
  const phoneNumber = useInput("");
  const [telecomProvider, setTelecomProvider] = useState("");
  const idFront = useInput("");
  const idBack = {
    ref: useRef<HTMLInputElement>(null),
    ...useInput(""),
  };
  const username = useInput("");
  const router = useRouter();

  const formData: FormData = {
    phoneNumber: phoneNumber.value,
    telecomProvider,
    idFront: idFront.value,
    idBack: idBack.value,
    username: username.value,
  };

  const inputMotion = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 1 },
    exit: { opacity: 0, y: -20 },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStage((prev) =>
      prev + 1 > SignupStage["이름"]
        ? SignupStage["이름"]
        : ((prev + 1) as SignupStage),
    );
    console.log("stage", stage, formData);

    // TODO : 마지막 stage에 도달하면 API에 해당 정보를 담아 인증번호 요청
    if (stage === SignupStage["이름"]) {
      console.log("submit", formData);
      // 인증번호 요청 페이지로 이동
      router.push(`/signup/sms-verification?name=${username.value}`);
    }

    // TODO : 요청 실패 시 토스트로 에러 메시지 표시
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTelecomProvider(e.target.value);
    setStage((prev) => prev + 1);
  };

  const onSelect = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (stage === SignupStage["통신사"]) {
      setStage((prev) => prev + 1);
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (idFront.value.length === 6) {
      e.preventDefault();
      idBack.ref.current?.focus();
    }
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <h1 className={title}>
            {josa(SignupStage[stage], "을/를")} 알려주세요
          </h1>
        </div>
      </header>

      <form className={styles.formContainer} onSubmit={handleSubmit}>
        {stage >= SignupStage["이름"] && (
          <motion.div
            key={"이름"}
            className={styles.inputContainer}
            initial={inputMotion.initial}
            animate={{ opacity: stage >= SignupStage["이름"] ? 1 : 0 }}
            transition={inputMotion.transition}
            exit={inputMotion.exit}
          >
            <Input label="이름">
              <Input.Text
                autoComplete="name"
                pattern="^[^\d]*$"
                title="숫자는 입력할 수 없습니다."
                defaultValue={username.value}
                autoFocus
                {...username}
              />
            </Input>
          </motion.div>
        )}

        {stage >= SignupStage["주민등록번호"] && (
          <motion.div
            key="주민등록번호"
            className={styles.idInputContainer}
            initial={inputMotion.initial}
            animate={{
              opacity: stage >= SignupStage["주민등록번호"] ? 1 : 0,
            }}
            transition={inputMotion.transition}
            exit={inputMotion.exit}
          >
            <label htmlFor="personalId" className={styles.idLabel}>
              주민등록번호
            </label>
            <div className={styles.idInputBox}>
              <div className={styles.idInputFront}>
                <Input {...idFront}>
                  <Input.Text
                    id="personalId"
                    maxLength={6}
                    inputMode="numeric"
                    placeholder="생년월일"
                    pattern="\d*"
                    title="숫자만 입력해주세요."
                    defaultValue={idFront.value}
                    autoFocus
                    onKeyUp={onKeyUp}
                  />
                </Input>
              </div>

              <div className={styles.idInputHyphen}>
                <Hyphen />
              </div>

              <div className={styles.idInputBackBox}>
                <motion.input
                  className={styles.idInputBack}
                  {...idBack}
                  maxLength={1}
                  inputMode="numeric"
                  placeholder="0"
                  pattern="\d*"
                  title="숫자만 입력해주세요."
                  defaultValue={idBack.value}
                  ref={idBack.ref}
                  whileTap={{ scale: 0.95, transition: { duration: 0.08 } }}
                />
                <Ellipsis />
              </div>
            </div>
          </motion.div>
        )}

        <motion.div
          key="통신사"
          className={
            stage >= SignupStage["통신사"]
              ? styles.inputContainer
              : styles.hideElement
          }
          initial={inputMotion.initial}
          animate={{
            opacity: stage >= SignupStage["통신사"] ? 1 : 0,
          }}
          transition={inputMotion.transition}
          exit={inputMotion.exit}
        >
          <Select
            label="통신사"
            options={telecomServiceProvider}
            placeholder="통신사"
            value={telecomProvider}
            setValue={setTelecomProvider}
            optionLabel={"통신사를 선택해주세요"}
            onChange={handleChange}
            onSelect={onSelect}
          />
        </motion.div>

        <div key={"휴대폰번호"} className={styles.inputContainer}>
          <Input label="휴대폰번호">
            <Input.Text
              {...phoneNumber}
              autoComplete="tel"
              inputMode="tel"
              maxLength={11}
              pattern="\d*"
              title="숫자만 입력해주세요."
              autoFocus
              defaultValue={phoneNumber.value}
            />
          </Input>
        </div>

        <p className={styles.noticeMessage}>
          입력한 정보는 7일동안 회원가입 시 쓰일 수 있어요
        </p>

        <section className={styles.nextButton}>
          {/* TODO: Button 컴포넌트 타입 경고 해결 */}
          <Button
            variant={isActiveButton(stage, formData) ? "active" : "disabled"}
            position="fixed"
            type="submit"
            isShadow
          >
            {stage === SignupStage["이름"] ? "본인인증 하기" : "다음"}
          </Button>
        </section>
      </form>
    </>
  );
}

export default SignupForm;
