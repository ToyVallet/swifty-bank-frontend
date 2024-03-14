import { PropSVG } from "@/(bottomTap)/_type/type";
export default function HomeIcon({ darkmode, isStroke = false }: PropSVG) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill={darkmode === "light" ? "white" : "black"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.5 10.5L14 2.33337L24.5 10.5V23.3334C24.5 23.9522 24.2542 24.5457 23.8166 24.9833C23.379 25.4209 22.7855 25.6667 22.1667 25.6667H5.83333C5.21449 25.6667 4.621 25.4209 4.18342 24.9833C3.74583 24.5457 3.5 23.9522 3.5 23.3334V10.5Z"
        stroke={isStroke ? "currentColor" : "#898A8D"}
        stroke-width="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 25.6667V14H17.5V25.6667"
        stroke={isStroke ? "currentColor" : "#898A8D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
