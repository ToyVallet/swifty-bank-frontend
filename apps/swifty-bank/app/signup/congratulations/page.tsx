import Image from "next/image";
import { styles } from "@/signup/congratulations/page.css";
import { Toast } from "@swifty/ui";
import Template from "@/_component/Template";
import PageSwitching from "@/signup/congratulations/_component/PageSwitching";
import URL from "@/_api/url";
import { User } from "@/_api/type";
import api from "@/_api/utilServer";

export default async function CongratulationsPage() {
  const userInfo = await api.getServer<User>(URL.USER.info);
  return (
    <Template>
      <Template.Header
        main={`${typeof userInfo === "object" && userInfo.name}님, \n Swifty와 함께해요!`}
        sub={"회원가입이 완료되었습니다."}
        type="center"
      />
      <Template.MainIcon>
        <Image
          src="/img/congratulation/congratulation.webp"
          height={208.5}
          width={190}
          alt="congratulations"
          className={styles.img}
          priority
        />
      </Template.MainIcon>
      <Toast time={2}>24년 6월 1일 Swifty 계정이 생성되었습니다.</Toast>
      <PageSwitching pageTransitionTime={2500} />
    </Template>
  );
}
