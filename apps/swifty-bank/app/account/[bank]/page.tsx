import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import Image from "next/image";
import styles from "@/account/[bank]/page.css";

type Props = {
  params: { bank: string };
};
export default function BankPage({ params: { bank } }: Props) {
  return (
    <Template>
      <CancelButton />
      <Template.Header
        main="Swifty는 이러한 환을 지원해요"
        sub={
          "swifty는 기본적으로 아래의 네 가지 환을 지원해요.\n 이외의 다양한 환을 관리해보세요."
        }
      />
      <section className={styles.imageSection}>
        <div className={styles.imageContainer}>
          <Image
            src="/img/account/won.png"
            alt="won"
            width={135}
            height={105}
          />
          <span>한국 원화</span>
        </div>
        <div>일본 엔화</div>
        <div>중국 위완화</div>
        <div>미국 달러</div>
      </section>
    </Template>
  );
}
