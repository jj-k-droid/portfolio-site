import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

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
    <html lang="en" className="bg-light-content dark:bg-dark-browser hyphens-auto">
        <body>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            {children}
            <SpeedInsights/>
            <Analytics/>
          </ThemeProvider>
        </body>
    </html>
  );
}
