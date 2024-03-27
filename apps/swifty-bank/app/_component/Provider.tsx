import { NextThemeProvider, ToastProvider } from "@swifty/ui";
import QueryProvider from "./QueryProvider";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider>
      <QueryProvider>
        <ToastProvider>{children}</ToastProvider>
      </QueryProvider>
    </NextThemeProvider>
  );
}
