import { Header } from "@/my-page/_component/header/Header";
import { Logo } from "@/my-page/_component/logo/Logo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: '마이 페이지',
};

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

