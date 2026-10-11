import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Varshii ✨",
  description:
    "Social Media Manager, Content Creator, and Brand Strategist with 40M+ impressions across Instagram & Pinterest and 265K+ YouTube community.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme")||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light");document.documentElement.dataset.theme=t;}catch(e){}})()`,
          }}
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Armenian:wght@400&family=Noto+Sans+JP:wght@400&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
