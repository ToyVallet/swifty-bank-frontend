"use client";

import { useBottomSheet } from "@swifty/hooks";
import clsx from "clsx";
import { useRef } from "react";

import BottomSheet from "../bottom-sheet";
import Heading from "../heading";
import styles from "./select.css";

interface SelectProps {
  label?: string;
  placeholder: string;
  options: SelectOption[];
  className?: string;
  optionLabel: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SelectOption {
  value: string;
  label: string;
}

/**
 * Select 컴포넌트
 * @param {SelectOption} options - 옵션으로 전달할 배열
 * @param {string} label - 라벨
 */

export default function Select({
  label,
  options,
  optionLabel,
  value,
  ...props
}: SelectProps) {
  const { isOpen, open, close } = useBottomSheet();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDismiss = () => {
    close();
    inputRef.current?.blur();
  };

  const handleClick = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLButtonElement>,
  ) => {
    const target = e.target as HTMLButtonElement;
    props.onChange?.({
      target: {
        value: target.textContent,
      } as unknown as EventTarget,
    } as React.ChangeEvent<HTMLInputElement>);
    handleDismiss();
  };

  return (
    <div className={clsx(styles.container, props.className)}>
      {label && <Heading type="h3">{label}</Heading>}
      <input
        className={styles.selectInput}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={value}
        onClick={open}
        ref={inputRef}
        readOnly
      />

      <BottomSheet
        open={isOpen}
        onDismiss={handleDismiss}
        header={optionLabel}
        height="1/3"
        expandTo="1/3"
      >
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li key={option.value}>
              <button
                className={styles.option}
                type="button"
                onClick={handleClick}
                onKeyDown={handleClick}
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
