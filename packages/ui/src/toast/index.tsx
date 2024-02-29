"use client";

import { HTMLAttributes, useState } from "react";
import Toast from "./toast";
import styles from "./toast.css";
import { useId } from "@swifty/hooks";
import { createPortal } from "react-dom";

export type Type = "sucess" | "error";
type ToastProp = {
  type: Type;
  content: string;
  time?: number;
};

type Prop = ToastProp & HTMLAttributes<HTMLDivElement>;

export default function Container({ time = 4, type, content, ...props }: Prop) {
  /*   if (content.length > 20) {
    throw new Error("toast text의 길이는 20자 이하입니다.");
  } */

  const id = useId("toast-");
  const toastClassification = { id, time, content, type };
  const [toasts, setToasts] = useState<(typeof toastClassification)[]>(() => {
    return [toastClassification];
  });

  return createPortal(
    <div className={styles.container}>
      {toasts.map((toast) => (
        <Toast
          type={toast.type}
          content={toast.content}
          time={toast.time}
          setToast={setToasts}
          id={toast.id}
          key={toast.id}
          {...props}
        />
      ))}
    </div>,
    document.body,
  );
}
