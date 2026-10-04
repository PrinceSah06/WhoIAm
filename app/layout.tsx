import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prince — Full-Stack Developer",
  description:
    "Portfolio of Prince, a full-stack developer building modern web applications and digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}