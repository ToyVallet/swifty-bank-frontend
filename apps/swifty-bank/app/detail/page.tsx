import { Heading } from "@swifty/ui";
import styles from "./page.css";
import Header from "./_component/Header";

type TermsOfDetail = {
  title: string;
  content: string;
  id: number;
  detail?: string;
};

export default function DetailPage() {
  const termsOfDeatils: TermsOfDetail[] = [
    {
      title: "1. 수집·이용 목적",
      content: "• Swify 홈페이지/모바일 서비스 이용을 위한 인증서 등록",
      id: 1,
    },
    {
      title: "2. 보유 및 이용기간",
      content: "• 서비스 목적 달성시 즉시 파기",
      detail:
        "(단, 관련법령에 따라 보존의무가 있는 경우는 해당 보존기간까지 보관)",
      id: 2,
    },
    {
      title: "3. 수집·이용 항목 개인(신용)정보",
      content: "• 일반개인정보 : 성명, 생년월일, 휴대전화번호",
      id: 3,
    },
  ];
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <ul className={styles.list}>
          {termsOfDeatils.map((detailTerm) => (
            <li key={detailTerm.id}>
              <Heading type="h3">{detailTerm.title}</Heading>
              <span className={styles.listContent}>{detailTerm.content}</span>
              {detailTerm.detail && (
                <span className={styles.listDetail}>{detailTerm.detail}</span>
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
