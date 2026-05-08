import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NimyaTech | AI, Product Engineering, and Digital Growth",
  description:
    "NimyaTech designs premium AI systems, digital products, automation workflows, and growth experiences for ambitious modern businesses.",
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
