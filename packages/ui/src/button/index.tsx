"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

import styles from "./button.css";

type ButtonVariant = "disabled" | "active" | "transparent";

type Position = "fixed" | "relative";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  position?: Position;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "active",
  children,
  position = "relative",
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        styles.base,
        variant === "disabled" && styles.disabled,
        variant === "transparent" && styles.transparent,
        position === "fixed" && styles.fixed,
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
