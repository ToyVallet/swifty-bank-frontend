"use client";
import { useState, MouseEvent } from "react";

const useKeyPad = (length: number) => {
  const [password, setPassword] = useState<string[]>([]);
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = e.currentTarget as HTMLButtonElement;

    if (
      password.length < length &&
      target.value !== "9" &&
      target.value !== "11"
    ) {
      setPassword((prev) => [...prev, target.value]);
    }

    // erase
    if (target.value === "11") {
      setPassword((prev) => prev.slice(0, prev.length - 1));
    }

    //reset
    if (target.value === "9") {
      setPassword([]);
    }
  };
  return { password, setPassword, handleClick };
};

export default useKeyPad;
