"use client";
import { useState, MouseEvent } from "react";

const useKeyPad = (length: number) => {
  const [password, setPassword] = useState<string[]>([]);
  const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const button = e.target as HTMLButtonElement;
    if (
      password.length < length &&
      button.value !== "3,1" &&
      button.value !== "3,3"
    ) {
      console.log(button.value);
      setPassword((prev) => [...prev, button.value]);
    }

    // erase
    if (button.value === "3,3") {
      setPassword((prev) => prev.slice(0, prev.length - 1));
    }

    //reset
    if (button.value === "3,1") {
      setPassword([]);
    }
  };
  return { password, setPassword, handleClick };
};

export default useKeyPad;
