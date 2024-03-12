"use client";
import {
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
  HTMLAttributes,
} from "react";

const useKeyPad = (
  length: number,
): [
  string[],
  Dispatch<SetStateAction<string[]>>,
  HTMLAttributes<HTMLButtonElement>["onClick"],
] => {
  const [key, setKey] = useState<string[]>([]);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    if (target.value === "11") {
      setKey((prev) => prev.slice(0, prev.length - 1));
    } else if (target.value === "9") {
      setKey([]);
    } else if (key.length < length) {
      setKey((prev) => [...prev, target.value]);
    }
  };
  return [key, setKey, handleClick];
};

export default useKeyPad;
