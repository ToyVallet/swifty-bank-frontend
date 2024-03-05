"use client";

import { useState, useEffect } from "react";
import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import styles from "./toast.css";
import { toastVariants } from "./motion";

export type ToastType = "success" | "error";
export type ToastValue = {
  children: string | JSX.Element;
  type?: ToastType;
  time?: number;
};

type Prop = ToastValue & HTMLMotionProps<"div">;

const ANIMATION_DURATION = 500;

export default function Toast({
  time = 1,
  type = "success",
  className,
  children,
  ...props
}: Prop) {
  const [isShow, setIsShow] = useState(true);

  const seconds = time * 1000;

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
              type === "error" && styles.errorToast,
              type === "success" && styles.successToast,
              className,
            )}
            variants={toastVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            {...props}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
