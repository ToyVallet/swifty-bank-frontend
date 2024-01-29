'use client';

import styles from './button.css'

interface ConfirmButtonProps {
  isDisabled: boolean;
  type: 'button' | 'submit'| 'reset';
  children: string;
  handleClick: () => void;
}

export default function ConfirmButton({
  isDisabled,
  type,
  children,
  handleClick,
}: ConfirmButtonProps) {

  return (
    <button
    className={isDisabled ? styles.disable : styles.able}
    type={type}
    onClick={handleClick}
    disabled={isDisabled}
    >{children}</button>
  )
}
