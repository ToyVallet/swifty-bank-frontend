"use client";

import styles from "@/_component/keypad/keypad.css";
import { HTMLAttributes } from "react";

type KeyProps = {
  children: React.ReactNode;
} & HTMLAttributes<HTMLButtonElement>;

export default function Key({ children, ...props }: KeyProps) {
  return (
    <button {...props} className={styles.button}>
      {children}
    </button>
  );
}
