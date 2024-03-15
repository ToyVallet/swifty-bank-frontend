"use client";

import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

import styles from "./button.css";
import tap from "./motion";

type ButtonVariant = "disabled" | "active" | "transparent";

type Position = "fixed" | "relative";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: ReactNode;
  position?: Position;
  type?: "button" | "submit" | "reset";
  isShadow?: boolean;
  isPale?: boolean;
}

export default function Button({
  children,
  isShadow,
  position = "relative",
  type = "button",
  variant = "active",
  isPale = false,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={clsx(
        styles.base,
        variant === "disabled" && styles.disabled,
        variant === "transparent" && styles.transparent,
        position === "fixed" && styles.fixed,
        isShadow && styles.shadow,
        { [styles.pale]: isPale },
        props.className,
      )}
      type={type}
      disabled={variant === "disabled"}
      whileTap={variant === "active" ? tap : undefined}
      {...props}
    >
      {children}
    </motion.button>
  );
}
