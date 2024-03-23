import Template from "@/_component/Template";
import Image from "next/image";

export default async function AccountLoadingPage() {
  return (
    <Template>
      <Template.Header
        type="center"
        main={"계좌 개설이\n 진행되고 있습니다"}
        sub="조금만 기다려 주세요"
      />
      <Template.MainIcon>
        <Image
          src={"/img/loading.png"}
          alt="loading"
          width={250}
          height={280}
        />
      </Template.MainIcon>
    </Template>
  );
}
