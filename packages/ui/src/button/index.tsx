"use client";

import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

import styles from "./button.css";

type ButtonVariant = "disabled" | "active";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant: ButtonVariant;
  children: ReactNode;
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  variant,
  children,
  className,
  handleClick,
  ...props
}: ButtonProps) {
  // TODO: 추후 클릭이벤트에 따른 로직 처리
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleClick(e);
  };

  return (
    <button
      className={
        variant === "disabled"
          ? clsx(styles.disabled, className)
          : clsx(styles.base, className)
      }
      type="button"
      onClick={(e) => clickHandler(e)}
      disabled={variant === "disabled"}
      {...props}
    >
      {children}
    </button>
  );
}
