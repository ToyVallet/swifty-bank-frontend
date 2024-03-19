import { ButtonHTMLAttributes } from "react";
import RightIcon from "/public/icon/rightIcon.svg";
import styles from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function Button({
  label,
  className,
  ...props
}: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {label}
      <RightIcon />
    </button>
  );
}
