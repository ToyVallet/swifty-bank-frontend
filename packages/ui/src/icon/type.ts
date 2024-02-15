import { HTMLAttributes } from "react";

export interface SVG extends HTMLAttributes<HTMLOrSVGElement> {}

export interface CheckIcon extends SVG {
  isCheck: boolean;
}
