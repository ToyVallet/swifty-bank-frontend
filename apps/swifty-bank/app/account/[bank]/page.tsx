import CancelButton from "@/_component/CancelButton";
import Template from "@/_component/Template";
import Image from "next/image";
import styles from "@/account/[bank]/page.css";
import OpeningAccountButton from "@/account/[bank]/_component/OpeningAccountButton";

export type ParamsProps = {
  params: { bank: string };
};
export default function BankPage({ params: { bank } }: ParamsProps) {
  const baseExchange = [
    {
      image: "/img/account/won.png",
      name: "한국 원환",
    },
    {
      image: "/img/account/dollar.png",
      name: "미국 달러화",
    },
    {
      image: "/img/account/yen.png",
      name: "일본 엔화",
    },
    {
      image: "/img/account/yuan.png",
      name: "중국 위완환",
    },
  ];
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
        {baseExchange.map((exchange) => (
          <div className={styles.imageContainer}>
            <Image
              src={exchange.image}
              alt={exchange.name}
              width={135}
              height={105}
              className={styles.exchangeImg}
            />
            <span>{exchange.name}</span>
          </div>
        ))}
      </section>
      <OpeningAccountButton bank={bank} />
    </Template>
  );
}
