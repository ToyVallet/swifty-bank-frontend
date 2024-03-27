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
  consentTocollection: boolean;
  consentToUse: boolean;
  consentToProvide: boolean;
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
          labelContent={"[필수] 수집 동의 철회"}
          inputref={register("consentTocollection", { required: true })}
          setValue={setValue}
          uniqueResiter="consentTocollection"
        />
        <CheckDetail
          detailInfoType="service"
          labelContent={"[필수] 이용 동의 철회"}
          inputref={register("consentToUse", { required: true })}
          setValue={setValue}
          uniqueResiter="consentToUse"
        />
        <CheckDetail
          detailInfoType="promotion"
          labelContent={"[필수] 제공 동의 철회"}
          inputref={register("consentToProvide", { required: true })}
          setValue={setValue}
          uniqueResiter="consentToProvide"
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
