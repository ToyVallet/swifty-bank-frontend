"use client";
import { Button } from "@swifty/ui";
import styles from "@/signup/_component/check-form/checkForm.css";
import CheckDetail from "@/signup/_component/checkDetail/CheckDetail";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { AccountProps } from "@/_utils/type";

interface FormData {
  complexity1: boolean;
  complexity2: boolean;
}

export default function AccountCheckForm({ bank }: AccountProps) {
  const { register, handleSubmit, setValue, formState } = useForm<FormData>({});
  const router = useRouter();

  const onSubmit: SubmitHandler<FormData> = () => {
    console.log("click");
    router.push(`/account/${bank}/foreign-exchange`);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      <div className={styles.termsSection}>
        <CheckDetail
          detailInfoType="personalInfo"
          labelContent={"[필수] 복잡한 약관 정의1"}
          inputref={register("complexity1", { required: true })}
          setValue={setValue}
          uniqueResiter="complexity1"
        />
        <CheckDetail
          detailInfoType="service"
          labelContent={"[필수] 복잡한 약관 정의2"}
          inputref={register("complexity2", { required: true })}
          setValue={setValue}
          uniqueResiter="complexity2"
        />
      </div>

      <div className={styles.buttonSection}>
        <Button
          variant={!formState.isValid ? "disabled" : "active"}
          isShadow
          type="submit"
        >
          동의하기
        </Button>
      </div>
    </form>
  );
}
