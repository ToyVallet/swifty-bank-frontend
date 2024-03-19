import { InputHTMLAttributes } from "react";
import { useId } from "@swifty/hooks";
import clsx from "clsx";
import styles from "./checkbox.css";

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
}

export function Checkbox({ label, checked, className, children, ...props }: IProps) {
  const checkboxId = useId('checkbox-');
  return (
    <>
      <input
        type="checkbox"
        className={styles.checkboxInput}
        id={checkboxId}
        aria-hidden='true'
        {...props}
      />
      <label
        className={
          clsx(styles.checkboxLabel,
            { [styles.checked as string]: checked },
            className)}
        htmlFor={checkboxId}
        role='checkbox'
        aria-checked={checked}
      >
        {label}
      </label>
    </>
  );
}
