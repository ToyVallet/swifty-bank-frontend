"use client";

import { useId } from "@swifty/hooks";
import { ForwardedRef, forwardRef, HTMLAttributes, useState } from "react";
import { UseFormSetValue } from "react-hook-form";

import Checked from "../icon/checkIcon.svg";
import NonChecked from "../icon/nonCheckIcon.svg";
import styles from "./check.css";

type Prop = HTMLAttributes<HTMLDivElement> & {
  labelContent: string;
  position?: "right" | "left";
  setValue?: UseFormSetValue<any>;
  uniqueResiter?: string;
};

function Check(
  {
    labelContent,
    position = "left",
    defaultChecked,
    id,
    setValue,
    uniqueResiter,
    ...props
  }: Prop,
  ref: ForwardedRef<HTMLInputElement>,
) {
  const uniqueId = useId();
  const [isCheck, setIsCheck] = useState(defaultChecked || false);

  const onChage = () => {
    setIsCheck((prev) => !prev);
  };

  const onClick = () => {
    setIsCheck((prev) => !prev);
    if (setValue && uniqueResiter) {
      setValue(uniqueResiter, !isCheck, { shouldValidate: true });
    }
  };

  return (
    <section className={styles.container} onChange={onChage}>
      <input
        type="checkbox"
        ref={ref}
        className={styles.inputCheck}
        id={id || uniqueId}
        {...props}
      />
      {position === "left" &&
        (isCheck ? (
          <Checked onClick={onClick} />
        ) : (
          <NonChecked onClick={onClick} />
        ))}
      <label htmlFor={id || uniqueId} className={styles.label}>
        {labelContent}
      </label>
      {position === "right" &&
        (isCheck ? (
          <Checked onClickCapture={onClick} />
        ) : (
          <NonChecked onClickCapture={onClick} />
        ))}
    </section>
  );
}

export default forwardRef<HTMLInputElement, Prop>((props, ref) =>
  Check(props, ref),
);
