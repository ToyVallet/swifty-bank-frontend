import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

const global = createGlobalTheme(":root", {
  space: {
    1: "8px",
    2: "16px",
    3: "24px",
    4: "32px",
    5: "40px",
    6: "48px",
    7: "56px",
    8: "64px",
    9: "72px",
    10: "80px",
  },
  font: {
    body: "sans-serif",
  },
});

// CSS 코드 스플리팅을 위한 theme contract
const color = createThemeContract({
  primary: "",
  secondary: "",
  accent: "",
  background: "",
  text: "",
});

/** 라이트 모드 */
export const lightTheme = createTheme(color, {
  primary: "#E5FF70",
  secondary: "#9EFF42",
  accent: "",
  background: "#FFFFFF",
  text: "#2A2A2A",
});

/** 다크 모드 */
export const darkTheme = createTheme(color, {
  primary: "#E5FF70",
  secondary: "#9EFF42",
  accent: "",
  background: "#2A2A2A",
  text: "#FFFFFF",
});

export const vars = { ...global, color };
