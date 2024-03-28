import { Header } from "@/(bottomTab)/mypage/_component/header/Header";
import { Logo } from "@/(bottomTab)/mypage/_component/logo/Logo";
import { Metadata } from "next";
import { styles } from "./layout.css";

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
      <main className={styles.main}>{children}</main>
    </>
  );
}

