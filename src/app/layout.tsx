import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';

import { Navbar, ThemeProvider, Toaster } from 'components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Almendra',
  description:
    'Mais de 3 anos de experiência como desenvolvedor Front-end, com foco em tecnologias como: React, Next.js, Angular, Node.js, Javascript, TypeScript, Html, Css, Git e Figma.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <Toaster />

          <div
            style={{
              marginTop: 'calc(4.625rem + 3.625rem)',
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
