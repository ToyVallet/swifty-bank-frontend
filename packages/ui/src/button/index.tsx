'use client';

import styles from './button.css'

type ButtonVariant = "disabled" | "active";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
   variant: ButtonVariant;
}

export default function Button({children, className ...props}: ButtonProps) {
   // variant 따라 처리
  return (
    <button
    className={className}
    {...props}
    >{children}</button>
  )
}
