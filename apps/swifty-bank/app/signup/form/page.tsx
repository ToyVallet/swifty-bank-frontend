"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.css";
import { useInput } from "@swifty/hooks";
import isActiveButton, {
  FormData,
  SignupStage,
} from "@/signup/form/_lib/validate/isActiveButton";
import { title } from "../layout.css";
import Button from "@/_component/Button";
import { josa } from "@toss/hangul";
import InputPhoneNumber from "@/signup/form/_component/InputPhoneNumber";
import InputTsp from "@/signup/form/_component/InputTsp";
import InputID from "@/signup/form/_component/InputID";
import InputName from "@/signup/form/_component/InputName";
import auth from "@/_api/auth";
import sms from "@/_api/sms";
import { MobileCarrier } from "@/_api/type";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStage((prev) =>
      prev + 1 > SignupStage["이름"]
        ? SignupStage["이름"]
        : ((prev + 1) as SignupStage),
    );

    if (stage === SignupStage["이름"]) {
      const data = {
        name: username.value,
        phoneNumber: "+82" + phoneNumber.value.slice(1),
        residentRegistrationNumber: idFront.value + idBack.value,
        mobileCarrier: telecomProvider as MobileCarrier,
      };

      const res = await auth.checkLoginAvailable(data);
      console.log("res", res);
      router.push(
        `/signup/sms-verification?name=${username.value}&phoneNumber=${phoneNumber.value}`,
      );
      if (res.isAvailable) {
        const res2 = await sms.sendSMSCode("+82" + phoneNumber.value.slice(1));
        console.log(res2);
      } else {
        // TODO: 가입이 불가능하다면, Toast로 에러 메시지 표시
        alert("가입이 불가능합니다. 다시 시도해주세요.");
      }
    }
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
          <InputName
            className={styles.inputContainer}
            stage={stage}
            username={username}
          />
        )}

        {stage >= SignupStage["주민등록번호"] && (
          <InputID
            className={styles.idInputContainer}
            stage={stage}
            idFront={idFront}
            idBack={idBack}
          />
        )}

        {stage >= SignupStage["통신사"] && (
          <InputTsp
            className={styles.inputContainer}
            stage={stage}
            telecomProvider={telecomProvider}
            setTelecomProvider={setTelecomProvider}
            handleChange={handleChange}
            onSelect={onSelect}
          />
        )}

        <InputPhoneNumber
          className={styles.inputContainer}
          phoneNumber={phoneNumber}
        />

        <p className={styles.noticeMessage}>
          입력한 정보는 7일동안 회원가입 시 쓰일 수 있어요
        </p>

        <section className={styles.nextButton}>
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
