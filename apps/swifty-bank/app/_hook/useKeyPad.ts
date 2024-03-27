"use client";
import auth from "@/_api/auth";
import {
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
  HTMLAttributes,
  useEffect,
} from "react";

const useKeyPad = (
  length: number,
  callApi: boolean = false,
): [
  string[],
  Dispatch<SetStateAction<string[]>>,
  HTMLAttributes<HTMLButtonElement>["onClick"],
  string[],
] => {
  const [key, setKey] = useState<string[]>([]);
  const [keypads, setKeyPads] = useState<string[]>([]);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget;

    if (target.value === "11") {
      setKey((prev) => prev.slice(0, prev.length - 1));
    } else if (target.value === "10") {
      setKey([]);
    } else if (key.length < length) {
      setKey((prev) => [...prev, target.value]);
    }
  };
  useEffect(() => {
    if (callApi) {
      auth.getKeypad().then((data) => setKeyPads(data.keypad));
    }
  }, []);

  return [key, setKey, handleClick, keypads];
};

export default useKeyPad;
