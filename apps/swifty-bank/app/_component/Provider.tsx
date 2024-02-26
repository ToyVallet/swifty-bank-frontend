import { NextThemeProvider } from "@swifty/ui/styles";
import QueryProvider from "./QueryProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </NextThemeProvider>
  );
}
