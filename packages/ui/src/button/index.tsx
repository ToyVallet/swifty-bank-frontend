"use client";

import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./button.css";
import { HTMLMotionProps, motion } from "framer-motion";
import { tap } from "./motion";

type ButtonVariant = "disabled" | "active" | "transparent";

type Position = "fixed" | "relative";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: ButtonVariant;
  children: ReactNode;
  position?: Position;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  variant = "active",
  children,
  position = "relative",
  type = "button",

  ...props
}: ButtonProps) {
  return (
    <motion.button
      className={clsx(
        styles.base,
        variant === "disabled" && styles.disabled,
        variant === "transparent" && styles.transparent,
        position === "fixed" && styles.fixed,
        props.className,
      )}
      type={type}
      disabled={variant === "disabled"}
      whileTap={tap}
      {...props}
    >
      {children}
    </motion.button>
  );
}
