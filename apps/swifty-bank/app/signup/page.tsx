import { Heading } from "@swifty/ui";
import Image from "next/image";
import { styles } from "./page.css";
import AgreementBtn from "./_component/agreement-button/AgreementButton";

export default function AgreementPage() {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <Heading type="h2">Swifty를 사용하기 위해</Heading>
        <Heading type="h2">약관에 동의 해주세요</Heading>
        <span className={styles.explain}>
          설명 및 약관을 이해하였음을 확인합니다.
        </span>
      </div>
      <div className={styles.imgContainer}>
        <div className={styles.imgBackDropCircle} />
        <Image
          src="/img/agreement/Symbol_Agree.webp"
          height={250}
          width={250}
          alt="Symbol_Agree"
          className={styles.img}
          priority
        />
      </div>
      <AgreementBtn />
    </main>
  );
}