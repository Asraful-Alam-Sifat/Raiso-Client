"use client";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export default function ThemeProvider({ children }) {
  return (
    <NextThemesProvider 
      attribute="data-theme" 
      defaultTheme="system" 
      enableSystem
      scriptProps={{ type: 'text/javascript' }}
    >
      {children}
    </NextThemesProvider>
  );
}