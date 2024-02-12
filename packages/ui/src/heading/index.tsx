import clsx from "clsx";

import styles from "./heading.css";

type HeadType = "h1" | "h2" | "h3";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  type?: HeadType;
}

/**
 * 헤딩 컴포넌트
 * @param {HeadType} type - 사용할 헤드 태그
 * @param {string} text - 헤딩 텍스트
 */
export default function Heading({
  type = "h1",
  children,
  className,
  ...props
}: HeadingProps) {
  switch (type) {
    case "h1":
      return (
        <h1 className={clsx(styles.h1, className)} {...props}>
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2 className={clsx(styles.h2, className)} {...props}>
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3 className={clsx(styles.h3, className)} {...props}>
          {children}
        </h3>
      );
    default:
      throw new Error("Invalid heading tag");
  }
}
