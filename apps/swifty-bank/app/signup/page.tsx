import Image from "next/image";
import { styles } from "@/signup/page.css";
import { title } from "@/signup/layout.css";
import AgreementBtn from "@/signup/_component/agreement-button/AgreementButton";
import MainIcon from "@/_component/MainIcon";

export default function AgreementPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={title}>
          Swifty를 사용하기 위해 <br /> 약관에 동의 해주세요.
        </h1>
        <span className={styles.explain}>
          설명 및 약관을 이해하였음을 확인합니다.
        </span>
      </div>
      <MainIcon>
        <Image
          src="/img/agreement/Symbol_Agree.webp"
          height={450}
          width={300}
          alt="Symbol_Agree"
          className={styles.img}
          priority
        />
      </MainIcon>
      <AgreementBtn />
    </main>
  );
}
