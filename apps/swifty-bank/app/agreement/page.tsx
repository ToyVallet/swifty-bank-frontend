import { Heading } from "@swifty/ui";
import Image from "next/image";
import {
  container,
  explain,
  header,
  img,
  imgCircle,
  imgContainer,
} from "./page.css";
import AgreementBtn from "./_component/AgreementBtn";
export default function AgreementPage() {
  return (
    <main className={container}>
      <div className={header}>
        <Heading type="h2">Swifty를 사용하기 위해</Heading>
        <Heading type="h2">약관에 동의 해주세요</Heading>
        <span className={explain}>설명 및 약관을 이해하였음을 확인합니다.</span>
      </div>
      <div className={imgContainer}>
        <div className={imgCircle}></div>
        <Image
          src="/img/agreement/Symbol_Agree.webp"
          height={50}
          width={50}
          alt="Symbol_Agree"
          className={img}
        />
      </div>
      <AgreementBtn />
    </main>
  );
}
