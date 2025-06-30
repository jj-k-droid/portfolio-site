import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./provider";

export const metadata: Metadata = {
  title: "jj-k-droid's portfolio",
  description: "a portfolio site! wow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-light-content dark:bg-dark-browser">
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
        <body>{children}</body>
      </ThemeProvider>
    </html>
  );
}
