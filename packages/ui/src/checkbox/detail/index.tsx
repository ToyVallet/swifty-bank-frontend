"use client";

import { Heading } from "@swifty/ui";
import styles from "./detail.css";
import Image from "next/image";
import { TypeOfDetailInfo } from "../type";
import { termsOfDeatils } from "./detail-type";

interface Prop {
  onClick: () => void;
  detailInfoType: TypeOfDetailInfo;
}

export default function Detail({ onClick, detailInfoType }: Prop) {
  const data = termsOfDeatils.filter(({ type }) => type === detailInfoType!);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.button} onClick={onClick}>
          <Image
            src={"/icon/Icon_Cancellation.svg"}
            alt="Icon_Cancellation"
            width={30}
            height={30}
          />
        </button>
        <Heading type="h2">[필수] 개인정보 처리방침 동의</Heading>
        <p className={styles.content}>
          개인정보의 수집·이용에 관한 동의를 거부하실 수 있습니다. 다만, 본
          동의는 '인증서 등록'을 위한 필수적인 사항이므로 동의를 거부하시는 경우
          업무 수행이 불가능 할 수 있습니다.
        </p>
      </header>
      <main>
        <ul className={styles.list}>
          {data[0]?.data.map((detailTerm) => (
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
