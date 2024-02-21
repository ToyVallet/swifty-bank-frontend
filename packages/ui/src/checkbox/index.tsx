"use client";

import RightIcon from "../icon/RightIcon";
import CheckIcon from "../icon/CheckIcon";
import styles from "./checkbox.css";
import { HTMLAttributes, useState } from "react";
import { createPortal } from "react-dom";
import Detail from "./detail";
import { CheckBoxProp } from "@swifty/hooks";

interface Prop extends HTMLAttributes<HTMLDivElement>, CheckBoxProp {}

const CheckBox = ({
  labelContent,
  isCheck,
  id,
  isDetail = false,
  detailInfoType,
  onChange,
  ...props
}: Prop) => {
  const [isOpened, setIsOpened] = useState(false);

  const onOpen = () => {
    setIsOpened(true);
  };

  const onClose = () => {
    setIsOpened(false);
  };

  return (
    <section className={styles.container}>
      <div className={styles.leftSection} onChange={onChange}>
        <input type="checkbox" id={id} className={styles.inputCheck} />
        <CheckIcon
          isCheck={isCheck}
          className={styles.svg}
          onChange={onChange}
        />
        <label htmlFor={id} className={styles.label}>
          {labelContent}
        </label>
      </div>
      <div className={styles.rightSection}>
        {isDetail && <RightIcon onClick={onOpen} className={styles.svg} />}
      </div>
      {isDetail &&
        isOpened &&
        createPortal(
          <Detail
            onClick={onClose}
            detailInfoType={detailInfoType!}
            isOpened={isOpened}
          />,
          document.body,
        )}
    </section>
  );
};

export default CheckBox;
