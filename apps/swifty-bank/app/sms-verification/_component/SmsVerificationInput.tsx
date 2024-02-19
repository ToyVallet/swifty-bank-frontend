import React, { useRef } from "react";
import styles from "./SmsVerification.css";

interface SmsVerificationInputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function SmsVerificationInput({
  value,
  onChange,
}: SmsVerificationInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value.length > 6) return;

    const isNumber = /^\d*$/.test(value);
    if (!isNumber) return;

    onChange(value);
  };

  return (
    <div className={styles.display} onClick={() => inputRef.current?.focus()}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={index} className={styles.digit}>
          {value[index] || ""}
        </div>
      ))}
      <input
        ref={inputRef}
        className={styles.hidden}
        autoFocus
        autoComplete="one-time-code"
        aria-hidden
        type="text"
        pattern="\d*"
        maxLength={6}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
