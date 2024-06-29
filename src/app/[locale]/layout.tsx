import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

import { Footer, Navbar, ThemeProvider, Toaster } from 'components';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rafael Almendra - Desenvolvedor de Software',
  description:
    'Mais de 4 anos de experiência como desenvolvedor Front-end, com foco em tecnologias como: React, Next.js, Angular, Node.js, Javascript, TypeScript, Html, Css, Git e Figma.',
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
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

            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
