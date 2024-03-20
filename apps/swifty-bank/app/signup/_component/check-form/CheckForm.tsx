import { Button } from "@swifty/ui";
import { FormHTMLAttributes, HTMLAttributes } from "react";
import styles from "@/signup/_component/check-form/checkForm.css";
import CheckDetail from "@/signup/_component/checkDetail/CheckDetail";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";

type Button = HTMLAttributes<HTMLButtonElement>;

interface Prop extends FormHTMLAttributes<HTMLFormElement> {
  submit: SubmitHandler<FormData>;
}

export interface FormData {
  service: boolean;
  promotion: boolean;
  personalInfo: boolean;
}

export default function CheckForm({ submit, className, ...props }: Prop) {
  const { register, handleSubmit, setValue, formState } = useForm<FormData>({});

  /*
    const onSubmit: SubmitHandler<FormData> = (data) => {
    };
  */

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={clsx(styles.container, className)}
      {...props}
    >
      <div className={styles.termsSection}>
        <CheckDetail
          detailInfoType="personalInfo"
          labelContent={"[필수] 개인정보 처리방침 동의"}
          inputref={register("personalInfo", { required: true })}
          setValue={setValue}
          uniqueResiter="personalInfo"
        />
        <CheckDetail
          detailInfoType="service"
          labelContent={"[필수] 서비스 이용약관 동의"}
          inputref={register("service", { required: true })}
          setValue={setValue}
          uniqueResiter="service"
        />
        <CheckDetail
          detailInfoType="promotion"
          labelContent={"[선택] 프로모션 등 안내 동의"}
          inputref={register("promotion", { required: false })}
          setValue={setValue}
          uniqueResiter="promotion"
        />
      </div>

      <div className={styles.buttonSection}>
        <Button
          type='submit'
          variant={!formState.isValid ? "disabled" : "active"}
          isShadow
        >
          동의하기
        </Button>
        {/* <Button variant="transparent" onClick={onClose}>
          닫기
        </Button> */}
      </div>
    </form>
  );
}
