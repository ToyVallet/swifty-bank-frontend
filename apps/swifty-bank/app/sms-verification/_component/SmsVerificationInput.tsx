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
        aria-hidden
        type="text"
        pattern="\d*"
        maxLength={6}
        value={value}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
    </div>
  );
}
