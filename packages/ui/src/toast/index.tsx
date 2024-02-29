"use client";

import { useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./toast.css";

export type ToastType = "sucess" | "error";
export type ToastValue = {
  type: ToastType;
  content: string;
  time?: number;
};

type Prop = ToastValue & HTMLMotionProps<"div">;

const ANIMATION_DURATION = 500;

export default function Toast({
  time = 1,
  type,
  content,
  className,
  ...props
}: Prop) {
  const [isShow, setIsShow] = useState(true);

  const seconds = time * 1000;

  const toastVariants = {
    initial: { y: 10, opacity: 0, scale: 0.2 },
    animate: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.5 } },
    exit: { y: 10, opacity: 0, scale: 0.2 },
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsShow(false);
    }, seconds + ANIMATION_DURATION);
    return () => {
      clearTimeout(timeId);
    };
  }, []);

  return (
    <AnimatePresence>
      {isShow && (
        <motion.div className={styles.container}>
          <motion.div
            className={clsx(
              styles.toast,
              type === "error" && styles.errorToast,
              type === "sucess" && styles.sucessToast,
              className,
            )}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            {...props}
          >
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
