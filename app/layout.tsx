import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tomoya's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" style={{ backgroundColor: 'black' }}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
