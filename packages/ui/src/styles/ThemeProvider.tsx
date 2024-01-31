"use client";

import { ThemeProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes/dist/types";

import { darkTheme, lightTheme } from "./vars.css";

export default function NextThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      value={{ light: lightTheme, dark: darkTheme }}
      defaultTheme="system"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ThemeProvider>
  );
}
