"use client";

import { useBottomSheet } from "@swifty/hooks";
import clsx from "clsx";
import { useRef } from "react";

import BottomSheet from "../bottom-sheet";
import Heading from "../heading";
import styles from "./select.css";

type SelectOption<T> = {
  label: string;
  value: T;
};

interface SelectProps {
  label?: string;
  placeholder?: string;
  options: SelectOption<string>[];
  optionLabel?: string;
  className?: string;
  value: string;
  setvalue: (value: string) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSelect?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Select 컴포넌트
 * @param {SelectOption} options - 옵션으로 전달할 배열
 * @param {string} label - 라벨
 */

function Select({
  label,
  options,
  optionLabel,
  value,
  setvalue,
  ...props
}: SelectProps) {
  const { isOpen, open, close } = useBottomSheet();
  const inputRef = useRef<HTMLInputElement>(null);

  const onDismiss = () => {
    close();
    inputRef.current?.blur();
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (inputRef.current) {
      inputRef.current.value = e.currentTarget.textContent || "";
      onDismiss();
      setvalue(inputRef.current.value);
    }
    if (props.onSelect) {
      props.onSelect(e);
    }
  };

  return (
    <div className={clsx(styles.container, props.className)}>
      {label && (
        <label htmlFor="select-input" className={styles.label}>
          {label}
        </label>
      )}
      <input
        id="select-input"
        className={styles.selectInput}
        placeholder={props.placeholder ?? ""}
        onChange={props.onChange}
        value={value}
        onClick={open}
        ref={inputRef}
        readOnly
      />

      <BottomSheet
        open={isOpen}
        onDismiss={onDismiss}
        header={optionLabel ?? ""}
        height="1/3"
      >
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                className={styles.option}
                type="button"
                onClick={handleClick}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </BottomSheet>
    </div>
  );
}

export default Select;
