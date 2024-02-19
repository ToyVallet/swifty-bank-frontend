import { clsx } from "clsx";
import { SVG } from "./type";

export default function RightIcon({ onClick, className, ...props }: SVG) {
  return (
    <svg
      className={clsx(className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      data-testid="right-icon"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#B4B4B4"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
