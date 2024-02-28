import { DeepValueOf } from "@/_utils/type";

declare global {
  interface Window {
    NativeInterface: {
      receivedFromIos: (data: any) => string;
    };
    webkit: {
      messageHandlers: {
        bridge: {
          postMessage: (message: any) => void;
        };
      };
    };
  }
}

interface IOSInterface {
  receivedFromIos: (data: unknown) => unknown;
}

type IOSContextType = "data" | "ui";

const taptic = {
  light: "taptic-light",
  medium: "taptic-medium",
  heavy: "taptic-heavy",
  rigid: "taptic-rigid",
  soft: "taptic-soft",
} as const;

const shadow = {
  enable: "shadow-enable",
  disable: "shadow-disable",
} as const;

export const IOSContextAction = {
  taptic,
  shadow,
} as const;

type Context = {
  type: IOSContextType;
  action: DeepValueOf<typeof IOSContextAction>;
  data?: string;
  callback?: string;
};

export default function useWebview() {
  const send = (context: Context, callback?: () => void) => {
    if (typeof window.webkit === "undefined") {
      throw new Error("window.webkit is undefined.");
    }

    window.webkit.messageHandlers.bridge.postMessage(context);
  };

  return { send };
}
