"use client";

import { HTMLAttributes, useMemo } from "react";
import styles from "@/_component/keypad/keypad.css";
import Key from "@/_component/keypad/Key";
import Back from "@icon/Icon_Back_Gray.svg";
import Cancel from "@icon/Icon_Cancellation_Gray.svg";

type Props = {
  len: number;
  password: string[];
  keypads: string[];
} & HTMLAttributes<HTMLButtonElement>;

export default function KeyPad({ len, password, onClick, keypads }: Props) {
  const keys = useMemo(
    () => [...keypads.slice(0, keypads.length), <Cancel />, <Back />],
    [keypads],
  );

  return (
    <>
      <div className={styles.passwordContainer}>
        {new Array(len).fill(0).map((_, idx) => (
          <div
            key={idx}
            className={
              password[idx] ? styles.selectPassword : styles.unSelectPassword
            }
          />
        ))}
      </div>

      <div className={styles.container}>
        {keypads.length &&
          keys.map((item, idx) => (
            <Key key={idx} value={idx} onClick={onClick}>
              {idx === 10 || idx === 11 ? (
                item
              ) : (
                <div dangerouslySetInnerHTML={{ __html: item as string }} />
              )}
            </Key>
          ))}
      </div>
    </>
  );
}
