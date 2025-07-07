import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./provider";

export const metadata: Metadata = {
  title: "jj-k-droid_",
  description: "a portfolio site! wow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-light-content dark:bg-dark-browser">
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
          </ThemeProvider>
        </body>
    </html>
  );
}
