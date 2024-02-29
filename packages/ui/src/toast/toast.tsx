"use client";

import { HTMLAttributes, useEffect } from "react";
import { Type } from ".";
import clsx from "clsx";
import styles from "./toast.css";

type ToastProp = {
  type: Type;
  content: string;
  setToast: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        time: number;
        content: string;
        type: Type;
      }[]
    >
  >;
  time?: number;
};

type Prop = ToastProp & HTMLAttributes<HTMLDivElement>;

export default function Toast({
  time,
  type,
  content,
  setToast,
  id,
  className,
  ...props
}: Prop) {
  useEffect(() => {
    if (typeof window !== undefined) {
      const timeId = setTimeout(() => {
        setToast((prev) => {
          const newArr = prev.filter((item) => item.id !== id);
          return [...newArr];
        });
      }, time);
    }
  }, []);

  return (
    <div
      className={clsx(
        styles.toast,
        type === "error" && styles.errorToast,
        type === "sucess" && styles.sucessToast,
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}
