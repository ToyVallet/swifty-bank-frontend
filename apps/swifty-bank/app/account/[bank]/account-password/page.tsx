import AccountKeyPads from "@/account/[bank]/account-password/_component/AccountKeyPads";

// 키패드 데이터 server component에서 받아오기
export default async function AccountPasswordPage() {
  return <AccountKeyPads length={4} />;
}
