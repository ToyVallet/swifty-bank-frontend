"use client";

import { Heading } from "@swifty/ui";
import styles from "./detail.css";
import Image from "next/image";
import { TypeOfDetailInfo } from "../type";
import { termsOfDeatils } from "./detail-type";
import { motion, AnimatePresence } from "framer-motion";
import { variants } from "./motion";
import { HTMLAttributes } from "react";

interface Button extends HTMLAttributes<HTMLButtonElement> {}

interface Prop {
  onClick: Button["onClick"];
  detailInfoType: TypeOfDetailInfo;
  isOpened: boolean;
}

export default function Detail({ onClick, detailInfoType, isOpened }: Prop) {
  const data = termsOfDeatils.filter(({ type }) => type === detailInfoType!);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        variants={variants.container}
        initial={"initial"}
        animate={isOpened ? "open" : "close"}
        exit={"close"}
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
            <Heading type="h2">{data[0]?.title}</Heading>
            <p className={styles.content}>{data[0]?.content}</p>
          </header>
          <main>
            <ul className={styles.list}>
              {data[0]?.list.map((detailTerm) => (
                <li key={detailTerm.id}>
                  <Heading type="h3">{detailTerm.title}</Heading>
                  <span className={styles.listContent}>
                    {detailTerm.content}
                  </span>
                  {detailTerm.detail && (
                    <span className={styles.listDetail}>
                      {detailTerm.detail}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </main>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
