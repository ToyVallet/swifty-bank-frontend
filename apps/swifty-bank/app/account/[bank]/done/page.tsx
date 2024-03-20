import Template from "@/_component/Template";
import AccountDetail from "@/account/[bank]/done/_component/AccountDetail";
import DoneButton from "@/account/[bank]/done/_component/DoneButton";

export default async function AccountDonePage() {
  return (
    <Template>
      <Template.Header
        main={"계좌 개설이\n완료되었습니다"}
        sub="새롭게 개설된 나의 계좌를 확인해보세요"
        type="center"
      />
      <AccountDetail />
      <DoneButton />
    </Template>
  );
}
