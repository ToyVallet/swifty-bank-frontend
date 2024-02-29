"use client";

import { useState, useEffect } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import clsx from "clsx";
import styles from "./toast.css";

export type ToastType = "sucess" | "error";
export type ToastValue = {
  type: ToastType;
  content: string;
  time?: number;
};

type Prop = ToastValue & HTMLMotionProps<"div">;

const ANIMATION_DURATION = 1000;

export default function Toast({
  time = 1,
  type,
  content,
  className,
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

  if (!isShow) return null;

  return (
    <motion.div
      className={clsx(
        styles.toast,
        type === "error" && styles.errorToast,
        type === "sucess" && styles.sucessToast,
        className,
      )}
      {...props}
    >
      {content}
    </motion.div>
  );
}
