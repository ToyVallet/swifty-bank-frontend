import { HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./header.css";

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
}

export function Header({ className, children, ...props }: HeaderProps) {
  return (
    <header
      className={clsx(styles.header, className)}
      {...props}
    >
      {children}
    </header>
  );
}
