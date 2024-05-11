import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rafael Almendra",
  description:
    "Mais de 3 anos de experiência como desenvolvedor Front-end, com foco em tecnologias como: React, Next.js, Angular, Node.js, Javascript, TypeScript, Html, Css, Git e Figma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
