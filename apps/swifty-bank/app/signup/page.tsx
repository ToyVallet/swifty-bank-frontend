import Image from "next/image";
import { styles } from "@/signup/page.css";
import AgreementBtn from "@/signup/_component/agreement-button/AgreementButton";
import ALL from "@icon/Icon_Cancellation.svg";
import Template from "@/_component/Template";

export default function AgreementPage() {
  return (
    <>
      <Template>
        <Template.Header
          main={"Swifty를 사용하기 위해 \n 약관에 동의 해주세요."}
          sub={"설명 및 약관을 이해하였음을 확인합니다."}
        />
        <Template.MainIcon>
          <Image
            src="/img/agreement/Symbol_Agree.webp"
            height={450}
            width={300}
            alt="Symbol_Agree"
            className={styles.img}
            priority
          />
          <ALL />
        </Template.MainIcon>
        <AgreementBtn />
      </Template>
    </>
  );
}
