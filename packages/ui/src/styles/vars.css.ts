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
  pale: "",
  accent: "",
  background: "",
  backgroundDimmer: "",
  text: "",
  gray: {
    100: "#F7FAFC",
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0",
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C",
  },
});

/** 라이트 모드 */
export const lightTheme = createTheme(color, {
  primary: "#6552FE",
  secondary: "#9EFF42",
  pale: "#E8E5FF",
  accent: "",
  background: "#FFFFFF",
  backgroundDimmer: "#F7F7F7",
  text: "#2A2A2A",
  gray: {
    100: "#F7FAFC",
    200: "#EDF2F7",
    300: "#E2E8F0",
    400: "#CBD5E0",
    500: "#A0AEC0",
    600: "#718096",
    700: "#4A5568",
    800: "#2D3748",
    900: "#1A202C",
  },
});

/** 다크 모드 */
export const darkTheme = createTheme(color, {
  primary: "#6552FE",
  secondary: "#9EFF42",
  pale: "#E8E5FF",
  accent: "",
  background: "#2A2A2A",
  backgroundDimmer: "#242424",
  text: "#FFFFFF",
  gray: {
    100: "#1A202C",
    200: "#2D3748",
    300: "#4A5568",
    400: "#718096",
    500: "#A0AEC0",
    600: "#CBD5E0",
    700: "#E2E8F0",
    800: "#EDF2F7",
    900: "#F7FAFC",
  },
});

export const vars = { ...global, color };
