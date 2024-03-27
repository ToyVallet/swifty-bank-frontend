"use client";

import { AnimatePresence } from "framer-motion";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";

import Toast from "./Toast";

interface ToastFn {
  content: string;
  toastType?: "success" | "error";
  timer?: number;
}

export const ToastContext = createContext<{
  showToast: (value: ToastFn) => void;
}>({ showToast() {} });

const ANIMATION_DURATION = 500;

export default function ToastProvider({ children }: { children: ReactNode }) {
  const [isShow, setIsShow] = useState(false);
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"success" | "error">("success");
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = useCallback(
    ({ content, timer = 1, toastType = "success" }: ToastFn) => {
      setMessage(content);
      setIsShow(true);
      setType(toastType);

      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }

      const timerId = setTimeout(
        () => {
          setIsShow(false);
          setMessage("");
        },
        timer * 1000 + ANIMATION_DURATION,
      );

      toastTimer.current = timerId;
    },
    [],
  );

  const obj = useMemo(
    () => ({
      showToast,
    }),
    [showToast],
  );

  return (
    <ToastContext.Provider value={obj}>
      {children}
      <AnimatePresence>
        {isShow && <Toast type={type}>{message}</Toast>}
      </AnimatePresence>
    </ToastContext.Provider>
  );
}
