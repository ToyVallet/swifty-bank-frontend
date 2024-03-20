"use client";

import styles from "@/account/[bank]/done/_component/accountDetail.css";
import Image from "next/image";
import Calender from "@icon/account/Icon_Schedule.svg";
import Exchange from "@icon/account/Icon_Exchange.svg";
import RightIcon from "@icon/account/Icon_Right.svg";
import BottomIcon from "@icon/account/Icon_Bottom.svg";
import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function AccountDetail() {
  const [stage, setStage] = useState<"main" | "exchange">("main");
  const onClick = () => {
    setStage((prev) => (prev === "main" ? "exchange" : "main"));
  };
  const exchanges = [
    "한국 원화",
    "일본 엔화",
    "중국 위안화",
    "미국 달러화",
    "유럽 유로화",
  ];

  const variants: Variants = {
    initial: { y: 10, opacity: 0, height: 0 },
    animate: { y: 0, opacity: 1, height: "auto" },
    exit: { y: 10, height: 0 },
  };
  return (
    <section className={styles.container}>
      <AnimatePresence>
        {stage === "main" && (
          <motion.div
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className={styles.contentContaine}>
              <Image
                src="/img/account/bank.png"
                alt="bank"
                width={57}
                height={57}
              />
              <h1>내일의 씨앗 수시 입출금 통장</h1>
              <span className={styles.span}>352-127-1234</span>
            </div>
            <div className={styles.contentContaine}>
              <Calender />
              <h3>계좌 개설 일자</h3>
              <span className={styles.span}>2023 . 02 . 09</span>
            </div>
          </motion.div>
        )}

        <div className={styles.contentContaine}>
          <Exchange />
          <h3>가능한 환의 종류</h3>
          <button className={styles.exchangeBtn} onClick={onClick}>
            <span>한국 원화 외 5개 환</span>
            {stage === "main" && <RightIcon />}
            {stage === "exchange" && <BottomIcon />}
          </button>
        </div>

        {stage === "exchange" && (
          <motion.ul
            className={styles.exchangeList}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {exchanges.map((exchange) => (
              <li key={exchange}>{exchange}</li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </section>
  );
}
