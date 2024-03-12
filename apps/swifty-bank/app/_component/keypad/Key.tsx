"use client";

import styles from "@/_component/keypad/keypad.css";
import { motion, AnimatePresence, useAnimate, stagger } from "framer-motion";
import { HTMLAttributes, MouseEvent } from "react";
import clsx from "clsx";

type KeyProps = {
  children: React.ReactNode;
  value: number | string;
} & HTMLAttributes<HTMLButtonElement>;

export default function Key({
  children,
  className,
  onClick,
  ...props
}: KeyProps) {
  const [circleRef, circleAnimate] = useAnimate();

  const handleClick = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onClick?.(e);
    await circleAnimate([
      ["ul", { scale: [0, 1, 0] }, { duration: 0.6 }],
      ["li", { scale: [1, 0] }, { duration: 0.3, delay: stagger(0.3) }],
      ["div", { stroke: ["#6552FE", "#B4B4B4"] }, { duration: 0.4 }],
    ]);
  };

  return (
    <button
      {...props}
      className={clsx(styles.button, className)}
      onClick={handleClick}
      ref={circleRef}
    >
      <AnimatePresence>
        <motion.ul className={styles.outerCircle} initial={{ scale: 0 }}>
          <motion.li className={styles.innerCircle}></motion.li>
        </motion.ul>
      </AnimatePresence>
      <div className={styles.priority}>{children}</div>
    </button>
  );
}
