'use client';

import {
  Children,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactElement,
  ReactNode,
} from 'react';
import { useId } from '@swifty/hooks';
import styles from './input.css';
import clsx from 'clsx';

interface InputProps extends HTMLAttributes<HTMLDivElement> {
  label?: ReactNode;
  children: ReactElement;
  bottomText?: string;
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
  ...props
}: InputProps) {
  const child = Children.only(children);
  const generatedId = useId('input-');
  const id = child.props.id ?? generatedId;
  // const isError: boolean = child.props.error ?? false;

  return (
    <div className={clsx(styles.container, props.className)} {...props}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {cloneElement(child, {
        id,
        ...child.props,
      })}
      {!!bottomText && <p className={styles.bottomText}>{bottomText}</p>}
    </div>
  );
}

interface TextProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  error?: boolean;
}
// TODO: error prop을 받아서 에러 스타일을 적용.
//       Vanilla Extract에의 variable 활용?
/**
 * 인풋 텍스트 컴포넌트
 * @param {boolean} props.error - 에러 여부
 */
Input.Text = forwardRef<HTMLInputElement, TextProps>(
  // eslint-disable-next-line
  ({ error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type='text'
        className={clsx(styles.input, props.className)}
        {...props}
      />
    );
  }
);
