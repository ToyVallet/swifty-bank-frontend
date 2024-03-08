"use client";

import styles from "@/_component/keypad/keypad.css";
import {
  motion,
  HTMLMotionProps,
  AnimatePresence,
  Variants,
} from "framer-motion";
import { MouseEvent, useState } from "react";
import clsx from "clsx";

type KeyProps = {
  children: React.ReactNode;
} & HTMLMotionProps<"button">;

export default function Key({
  children,
  className,
  onClick,
  ...props
}: KeyProps) {
  const [isClick, setIsClick] = useState(false);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClick(true);
    onClick?.(e);
  };

  const variantsOuter: Variants = {
    initial: { backgroundColor: "transparent" },
    animate: { backgroundColor: "#EFEAFF", transition: { duration: 0.3 } },
    exit: { scale: 0, transition: { duration: 0.2 } },
  };
  const variantsInner: Variants = {
    initial: { backgroundColor: "transparent", scale: 0 },
    animate: {
      backgroundColor: "#E4DDFF",
      scale: 0.9,
      transition: { duration: 0.3 },
    },
  };
  return (
    <motion.button
      {...props}
      className={clsx(styles.button, isClick && styles.stroke, className)}
      onClick={handleClick}
    >
      <AnimatePresence>
        {isClick && (
          <motion.div
            className={styles.outerCircle}
            variants={variantsOuter}
            initial="initial"
            animate="animate"
            exit="exit"
            onAnimationComplete={() => setIsClick(false)}
          >
            <motion.div
              variants={variantsInner}
              initial="initial"
              animate="animate"
              className={styles.innerCircle}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.priority}>{children}</div>
    </motion.button>
  );
}
