import Image from "next/image";
import { styles } from "@/signup/congratulations/page.css";
import { Toast } from "@swifty/ui";
import Template from "@/_component/Template";
import user from "@/_api/user";
import PageSwitching from "@/signup/congratulations/_component/PageSwitching";

export default async function CongratulationsPage() {
  //const userInfo = await user.getUser("");
  return (
    <Template>
      <Template.Header
        main={`${"회원"}님, \n Swifty와 함께해요!`}
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
