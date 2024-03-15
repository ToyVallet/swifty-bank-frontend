"use client";

import {
  Button as GlobalButton,
  type ButtonProps as GlobalButtonProp,
} from "@swifty/ui";
import useWebview, { IOSContextAction } from "@/_hook/useWebview";

type ButtonProps = GlobalButtonProp & {
  vibrateOnPress?: boolean;
  isPale?: boolean;
};

export default function Button({
  vibrateOnPress,
  isPale,
  children,
  onClick,
  ...props
}: ButtonProps) {
  const { send } = useWebview();
  return (
    <GlobalButton
      isPale={isPale}
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
