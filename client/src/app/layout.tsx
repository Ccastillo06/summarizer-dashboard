import { ThemeProvider } from '@/components/theme/theme-provider';
import type { Metadata } from 'next';
import { Noto_Sans } from 'next/font/google';

import { Footer } from '@/components/common/footer';
import { Navbar } from '@/components/common/navbar';
import Providers from './providers';
import './globals.css';

const fontFamily = Noto_Sans({
  variable: '--noto-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Summarizer AI Dashboard',
  description: 'Summarize articles text with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body className={`${fontFamily.variable} h-full relative antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <>
            <Providers>
              <Navbar />
              {children}
              <Footer />
            </Providers>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
