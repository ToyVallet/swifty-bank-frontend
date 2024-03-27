"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";

import { toastVariants } from "./motion";
import styles from "./toast.css";

export type ToastType = "success" | "error";
export type ToastValue = {
  children: string | JSX.Element;
  type?: ToastType;
};

type Prop = ToastValue & HTMLMotionProps<"div">;

export default function Toast({
  type = "success",
  className,
  children,
  ...props
}: Prop) {
  return (
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
  );
}
