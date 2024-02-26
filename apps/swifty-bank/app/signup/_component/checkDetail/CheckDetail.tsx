"use client";
import { Check } from "@swifty/ui";
import { useState } from "react";
import RigthtIcon from "@icon/rightIcon.svg";
import { createPortal } from "react-dom";
import Detail from "../detail";
import styles from "./checkDetail.css";
import { UseFormRegisterReturn, UseFormSetValue } from "react-hook-form";

type Prop = {
  labelContent: string;
  inputref: UseFormRegisterReturn<any>;
  detailInfoType: "service" | "personalInfo" | "promotion";
  setValue?: UseFormSetValue<any>;
  uniqueResiter?: string;
};

export default function CheckDetail({
  detailInfoType,
  labelContent,
  inputref,
  setValue,
  uniqueResiter,
}: Prop) {
  const [isOpen, setIsOpen] = useState(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return (
    <div className={styles.container}>
      <Check
        labelContent={labelContent}
        setValue={setValue}
        uniqueResiter={uniqueResiter}
        {...inputref}
      />
      <RigthtIcon onClick={open} />
      {isOpen &&
        createPortal(
          <Detail
            onClick={close}
            detailInfoType={detailInfoType}
            isOpened={isOpen}
          />,
          document.body,
        )}
    </div>
  );
}
