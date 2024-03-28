import { Button } from "@swifty/ui";
import { FormHTMLAttributes } from "react";
import styles from "@/signup/_component/check-form/checkForm.css";
import CheckDetail from "@/signup/_component/checkDetail/CheckDetail";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "clsx";

interface Prop extends FormHTMLAttributes<HTMLFormElement> {
  submit: SubmitHandler<FormData>;
}

export interface FormData {
  collection: boolean;
  use: boolean;
  provide: boolean;
}

export default function CheckForm({ submit, className, ...props }: Prop) {
  const { register, handleSubmit, setValue, formState } = useForm<FormData>({});

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className={clsx(styles.container, className)}
      {...props}
    >
      <div className={styles.termsSection}>
        <CheckDetail
          detailInfoType="collection"
          labelContent={"[필수] 수집 동의 철회"}
          inputref={register("collection", { required: true })}
          setValue={setValue}
          uniqueResiter="collection"
        />
        <CheckDetail
          detailInfoType="use"
          labelContent={"[필수] 이용 동의 철회"}
          inputref={register("use", { required: true })}
          setValue={setValue}
          uniqueResiter="use"
        />
        <CheckDetail
          detailInfoType="provide"
          labelContent={"[필수] 제공 동의 철회"}
          inputref={register("provide", { required: true })}
          setValue={setValue}
          uniqueResiter="provide"
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
      </div>
    </form>
  );
}
