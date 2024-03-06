"use client";

import { useState, useEffect, MouseEvent } from "react";
import styles from "@/_component/keypad/keypad.css";

type Props = {
  len: number;
  password: string[];
  handleClick: (e: MouseEvent<HTMLDivElement>) => void;
};

export default function KeyPad({ len, password, handleClick }: Props) {
  const coordinates = [
    [0, 0],
    [0, 1],
    [0, 2],
    [1, 0],
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ];

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

      <div onClick={handleClick} className={styles.container}>
        {coordinates.map((item, idx) => {
          if (idx === 9) {
            return (
              <button
                key={`${item[0]}${item[1]}`}
                value={item.join(",")}
                className={styles.button}
              >
                reset
              </button>
            );
          }
          if (idx === 11) {
            return (
              <button
                key={`${item[0]}${item[1]}`}
                value={item.join(",")}
                className={styles.button}
              >
                erase
              </button>
            );
          }
          return (
            <button
              key={`${item[0]}${item[1]}`}
              value={item.join(",")}
              className={styles.button}
            >
              {idx}
            </button>
          );
        })}
      </div>
    </>
  );
}
