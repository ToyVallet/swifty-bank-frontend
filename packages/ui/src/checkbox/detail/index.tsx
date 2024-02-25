"use client";

import { Heading } from "@swifty/ui";
import styles from "./detail.css";
import Image from "next/image";
import { TypeOfDetailInfo } from "@swifty/hooks";
import { termsOfDetails } from "./detail-type";
import { motion } from "framer-motion";
import { variants } from "./motion";
import { HTMLAttributes } from "react";

type Button = HTMLAttributes<HTMLButtonElement>;

interface Prop {
  onClick: Button["onClick"];
  detailInfoType: TypeOfDetailInfo;
  isOpened: boolean;
}

export default function Detail({ onClick, detailInfoType, isOpened }: Prop) {
  const terms = termsOfDetails.filter(({ type }) => type === detailInfoType);
  const term = terms[0];

  return (
    <motion.div
      className={styles.container}
      variants={variants.container}
      initial={"initial"}
      animate={"open"}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className={styles.contentContainer}
        variants={variants.content}
        initial={"initial"}
        animate={"open"}
        transition={{ duration: isOpened ? 1 : 0.5 }}
      >
        <header className={styles.header}>
          <button className={styles.button} onClick={onClick}>
            <Image
              src={"/icon/Icon_Cancellation.svg"}
              alt="Icon_Cancellation"
              width={30}
              height={30}
            />
          </button>
          <Heading type="h2">{term?.title}</Heading>
          <p className={styles.content}>{term?.content}</p>
        </header>
        <main>
          <ul className={styles.list}>
            {term?.list.map((detailTerm) => (
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
      </motion.div>
    </motion.div>
  );
}
