"use client";

import { useId } from "@swifty/hooks";
import clsx from "clsx";
import { HTMLMotionProps, motion, useAnimationControls } from "framer-motion";
import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";

import styles from "./input.css";

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
  required?: boolean;
  error?: boolean;
}

/**
 * 인풋 컴포넌트
 * @param {ReactNode} props.label - 레이블
 * @param {string} props.bottomText - 하단 텍스트
 */
export default function Input({
  label,
  children,
  bottomText,
  required,
  error,
  ...props
}: InputProps) {
  const child = Children.only(children);
  const generatedId = useId("input-");
  const id = child.props.id ?? generatedId;

  return (
    <div className={clsx(styles.container, props.className)} {...props}>
      <div className={styles.labelContainer}>
        {required && <span className={styles.required}>*</span>}
        {!!label && (
          <label htmlFor={id} className={styles.label}>
            {label}
          </label>
        )}
      </div>
      {cloneElement(child, {
        id,
        error,
        ...child.props,
      })}
      {!!bottomText && <p className={styles.bottomText}>{bottomText}</p>}
    </div>
  );
}

interface TextProps extends HTMLMotionProps<"input"> {
  error?: boolean;
}
// TODO: error prop을 받아서 에러 스타일을 적용.
//       Vanilla Extract에의 variable 활용?
/**
 * 인풋 텍스트 컴포넌트
 * @param {boolean} props.error - 에러 여부
 */
Input.Text = forwardRef<HTMLInputElement, TextProps>(function Text(
  { error, ...props },
  ref,
) {
  const controls = useAnimationControls();
  const initial = { scale: 1, x: 0 };
  const tap = { scale: 0.98, transition: { duration: 0.05 } };

  useEffect(() => {
    if (error) {
      const shake = {
        x: [-24, 24, -16, 16, -8, 8, -4, 4, 0],
        transition: { duration: 0.3 },
      };

      controls.start(shake);
    }
  }, [error, controls]);

  return (
    <motion.input
      ref={ref}
      type="text"
      animate={controls}
      initial={initial}
      whileTap={tap}
      className={clsx(styles.input, error && styles.error, props.className)}
      {...props}
    />
  );
});
