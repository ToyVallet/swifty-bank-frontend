import { Header } from "@/my-page/_component/header/Header";
import { Logo } from "@/my-page/_component/logo/Logo";

export default function MyPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header>
        <Logo />
      </Header>
      <main>{children}</main>
    </>
  );
}

