"use client";

import RightIcon from "../icon/RightIcon";
import CheckIcon from "../icon/CheckIcon";
import styles from "./checkbox.css";
import { HTMLAttributes, useState } from "react";
import { createPortal } from "react-dom";
import Detail from "./detail";
import { CheckBoxProp } from "@swifty/hooks";

type Prop = HTMLAttributes<HTMLDivElement> & CheckBoxProp;

const CheckBox = ({
  labelContent,
  isCheck,
  id,
  isDetail = false,
  detailInfoType,
  onChange,
  onClick,
  ...props
}: Prop) => {
  const [isOpened, setIsOpened] = useState(false);

  const open = () => {
    setIsOpened(true);
  };

  const close = () => {
    setIsOpened(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftSection} onChange={onChange}>
        <input
          type="checkbox"
          id={id}
          className={styles.inputCheck}
          checked={isCheck}
        />
        <CheckIcon isCheck={isCheck} className={styles.svg} onClick={onClick} />
        <label htmlFor={id} className={styles.label}>
          {labelContent}
        </label>
      </div>
      <div className={styles.rightSection}>
        {isDetail && <RightIcon onClick={open} className={styles.svg} />}
      </div>
      {isDetail &&
        isOpened &&
        createPortal(
          <Detail
            onClick={close}
            detailInfoType={detailInfoType!}
            isOpened={isOpened}
          />,
          document.body,
        )}
    </section>
  );
};

export default CheckBox;
