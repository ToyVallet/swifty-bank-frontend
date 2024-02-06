"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

import styles from "./button.css";

type ButtonVariant = "disabled" | "active";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: ReactNode;
}

export default function Button({
  variant = "active",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.base,
        variant === "disabled" && styles.disabled,
        props.className,
      )}
      type="button"
      disabled={variant === "disabled"}
      {...props}
    >
      {children}
    </button>
  );
}
