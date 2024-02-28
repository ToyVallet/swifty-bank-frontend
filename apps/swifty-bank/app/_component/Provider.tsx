import { NextThemeProvider } from "@swifty/ui";
import QueryProvider from "./QueryProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </NextThemeProvider>
  );
}
