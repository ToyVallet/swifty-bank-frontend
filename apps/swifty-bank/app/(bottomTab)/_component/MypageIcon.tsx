import { PropSVG } from "@/(bottomTab)/_type/type";
export default function MypageIcon({ isStroke = false }: PropSVG) {
  return (
    <svg
      width="29"
      height="29"
      viewBox="0 0 29 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M24.1668 25.375V22.9583C24.1668 21.6765 23.6576 20.4471 22.7512 19.5407C21.8448 18.6342 20.6154 18.125 19.3335 18.125H9.66683C8.38495 18.125 7.15557 18.6342 6.24915 19.5407C5.34272 20.4471 4.8335 21.6765 4.8335 22.9583V25.375"
        stroke={isStroke ? "currentColor" : "#898A8D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4998 13.2917C17.1692 13.2917 19.3332 11.1277 19.3332 8.45833C19.3332 5.78896 17.1692 3.625 14.4998 3.625C11.8305 3.625 9.6665 5.78896 9.6665 8.45833C9.6665 11.1277 11.8305 13.2917 14.4998 13.2917Z"
        stroke={isStroke ? "currentColor" : "#898A8D"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
