"use client";

import store from "@/store/store";
import { Provider } from "react-redux";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute='class'
        defaultTheme='light'
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </Provider>
  );
}
