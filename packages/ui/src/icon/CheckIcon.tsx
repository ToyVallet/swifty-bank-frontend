import type { CheckIcon } from "./type";
import { clsx } from "clsx";

export default function CheckIcon({ isCheck, ...props }: CheckIcon) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(props.className)}
    >
      <path
        d="M20 6L9 17L4 12"
        stroke={isCheck ? "#6552FE" : "#D9D9D9"}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
