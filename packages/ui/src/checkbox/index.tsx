"use client";

import RightIcon from "../icon/RightIcon";
import CheckIcon from "../icon/CheckIcon";
import styles from "./checkbox.css";
import { HTMLAttributes, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Detail from "./detail";
import { CheckBoxProp } from "./type";

interface Prop extends HTMLAttributes<HTMLInputElement>, CheckBoxProp {}

const CheckBox = ({
  labelContent,
  isCheck,
  id,
  isDetail,
  detailInfoType,
  ...props
}: Prop) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpened(false);
  }, []);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.leftSection} onChange={props.onChange}>
          <input type="checkbox" id={id} className={styles.inputCheck} />
          <CheckIcon isCheck={isCheck} className={styles.svg} />
          <label htmlFor={id} className={styles.label}>
            {labelContent}
          </label>
        </div>
        <div className={styles.rightSection}>
          {isDetail && (
            <RightIcon onClick={handleOpen} className={styles.svg} />
          )}
        </div>
        {isDetail &&
          isOpened &&
          createPortal(
            <Detail
              onClick={handleClose}
              detailInfoType={detailInfoType!}
              isOpened={isOpened}
            />,
            document.body,
          )}
      </section>
    </>
  );
};

export default CheckBox;
