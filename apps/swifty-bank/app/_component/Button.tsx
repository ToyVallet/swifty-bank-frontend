"use client";

import {
  Button as GlobalButton,
  type ButtonProps as GlobalButtonProp,
} from "@swifty/ui";
import useWebview, { IOSContextAction } from "@/_hook/useWebview";

type ButtonProps = GlobalButtonProp & {
  vibrateOnPress?: boolean;
};

export default function Button({
  vibrateOnPress,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const { send } = useWebview();
  return (
    <GlobalButton
      onClick={(e) => {
        if (vibrateOnPress) {
          send({
            type: "ui",
            action: IOSContextAction.taptic.light,
            data: "",
            callback: "",
          });
        }
        onClick?.(e);
      }}
      {...props}
    >
      {children}
    </GlobalButton>
  );
}
