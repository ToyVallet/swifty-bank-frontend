import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import Accounts from "@/account/_component/Accounts";

export default async function AccountPage() {
  return (
    <Template>
      <CancelButton />
      <Template.Header main="개설할 계좌를 선택해주세요" />
      <Accounts />
    </Template>
  );
}
