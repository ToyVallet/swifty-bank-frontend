import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import KeyPads from "@/user-password/_component/KeyPads";

export default function UserPasswordPage() {
  return (
    <Template>
      <CancelButton />
      <Template.Header main="비밀번호를 입력해주세요" />
      <KeyPads />
    </Template>
  );
}
