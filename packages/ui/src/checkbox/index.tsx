"use client";

import { forwardRef, useRef, useImperativeHandle, useState } from "react";
import RightIcon from "../icon/RightIcon";
import CheckIcon from "../icon/CheckIcon";
import styles from "./checkbox.css";

interface Prop {
  labelContent: string;
  isDetail?: boolean;
}

const CheckBox = forwardRef((props: Prop, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  useImperativeHandle(
    ref,
    () => {
      return {
        isChecked: inputRef.current?.checked,
      };
    },
    [],
  );

  const [isCheck, setIsCheck] = useState(() => {
    return inputRef.current?.checked !== true ? false : true;
  });

  const onClick = () => {
    setIsCheck(inputRef.current?.checked !== true ? false : true);
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftSection}>
        <input
          type="checkbox"
          id="check"
          ref={inputRef}
          className={styles.inputCheck}
        />
        <CheckIcon isCheck={isCheck} onClick={onClick} />
        <label htmlFor="check" onClick={onClick}>
          {props.labelContent}
        </label>
      </div>
      <div className={styles.rightSection}>
        {props.isDetail && <RightIcon />}
      </div>
    </section>
  );
});

export default CheckBox;
