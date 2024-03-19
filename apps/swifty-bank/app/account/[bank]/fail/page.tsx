import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import BackButton from "@/account/[bank]/fail/_component/BackButton";
import Image from "next/image";

export default function AccountFailPage() {
  return (
    <Template>
      <CancelButton href="/account" />
      <Template.Header
        main={"계좌 개설에\n오류가 발생했습니다."}
        sub="계좌 개설 과정을 다시 한번 확인해주세요"
        type="center"
      />
      <Template.MainIcon type="fail">
        <Image src={"/img/error.png"} alt="error" width={180} height={180} />
      </Template.MainIcon>
      <BackButton />
    </Template>
  );
}
