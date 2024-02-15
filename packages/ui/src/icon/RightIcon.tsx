import { clsx } from "clsx";
import { SVG } from "./type";

export default function RightIcon(prop: SVG) {
  return (
    <svg
      className={clsx(prop.className)}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 18L15 12L9 6"
        stroke="#B4B4B4"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
